---
sidebar_label: 基础
title: 数据绑定与状态管理基础
description: "在 React 中管理电子表格数据的核心模式：受控 props、事件 callbacks 及 ref 逃生舱。"
---

# 数据绑定与状态管理基础 {#data-binding--state-management-basics}

## 声明式模型 {#the-declarative-model}

React Spreadsheet 遵循声明式方法：将 sheet 数据存储在 React 状态中，以 props 的形式传入，wrapper 会自动将您的数据与当前 widget 状态进行差异比对，仅应用发生变化的部分。

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets, setSheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Data",
            cells: {
                A1: { value: "Hello" },
            },
        },
    ]);

    return <ReactSpreadsheet sheets={sheets} activeSheet="sheet1" />;
}
~~~

## 更新单元格 {#updating-cells}

使用函数式 `setState` 更新器进行不可变状态更新：

~~~tsx
const updateCell = (sheetId: string, cell: string, value: string | number) => {
    setSheets((prev) =>
        prev.map((sheet) =>
            sheet.id === sheetId
                ? {
                    ...sheet,
                    cells: {
                        ...sheet.cells,
                        [cell]: { ...sheet.cells[cell], value },
                    },
                }
                : sheet
        )
    );
};
~~~

## 响应用户操作 {#responding-to-user-actions}

使用 `onAfterAction` 响应用户更改。配合 `ref` 读取当前 widget 数据：

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [sheets, setSheets] = useState<SheetData[]>([/* ... */]);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data) {
            // 将 widget 状态同步回 React 状态
            console.log("Spreadsheet data:", data);
        }
    };

    return (
        <ReactSpreadsheet
            ref={ref}
            sheets={sheets}
            onAfterAction={handleAfterAction}
        />
    );
}
~~~

## ref 逃生舱 {#the-ref-escape-hatch}

对于无法映射到声明式 props 的操作，使用 [`SpreadsheetRef`](react/types.md#spreadsheetref) 访问底层 widget 实例：

- **序列化数据：** `ref.current?.instance?.serialize()`
- **撤销/重做：** `ref.current?.instance?.undo()` / `ref.current?.instance?.redo()`
- **获取单元格值：** `ref.current?.instance?.getValue("A1")`
- **程序化选区：** `ref.current?.instance?.selection.setSelectedCell("A1:C5")`

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    console.log(data);
};

<ReactSpreadsheet ref={ref} sheets={sheets} />
~~~

:::warning
避免将命令式写入操作（例如 `instance.setValue()`）与声明式 `sheets` prop 混用。wrapper 可能在下一个渲染周期覆盖命令式更改。ref 仅用于**读取**数据及执行撤销/重做、选区、导出等操作。
:::

## 受控搜索 {#controlled-search}

使用 `search` prop 配合 `onSearchResults` 实现受控搜索：

~~~tsx
const [search, setSearch] = useState<SearchConfig | undefined>();
const [results, setResults] = useState<string[]>([]);

<input
    placeholder="Search..."
    onChange={(e) => setSearch({ query: e.target.value, open: true })}
/>
<p>{results.length} cells found</p>

<ReactSpreadsheet
    sheets={sheets}
    search={search}
    onSearchResults={setResults}
/>
~~~

## 撤销/重做 {#undo--redo}

使用 `onStateChange` 跟踪撤销/重做的可用状态，通过 ref 调用 `undo()`/`redo()`：

~~~tsx
const ref = useRef<SpreadsheetRef>(null);
const [history, setHistory] = useState({ canUndo: false, canRedo: false });

<button
    disabled={!history.canUndo}
    onClick={() => ref.current?.instance?.undo()}
>
    Undo
</button>
<button
    disabled={!history.canRedo}
    onClick={() => ref.current?.instance?.redo()}
>
    Redo
</button>

<ReactSpreadsheet
    ref={ref}
    sheets={sheets}
    onStateChange={setHistory}
/>
~~~

## 性能 {#performance}

- 使用 `useMemo` 缓存派生 sheets，避免不必要的重新计算：

~~~tsx
const filteredSheets = useMemo(
    () => sheets.filter((s) => s.name !== "Hidden"),
    [sheets]
);

<ReactSpreadsheet sheets={filteredSheets} />
~~~

- 避免在每次渲染时重新创建 `styles` 对象。在组件外部定义，或使用 `useMemo` 包裹。
- 使用函数式 `setState` 更新器，避免事件 callbacks 中出现过时闭包问题。
