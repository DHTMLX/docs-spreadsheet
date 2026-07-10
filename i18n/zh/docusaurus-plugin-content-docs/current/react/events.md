---
sidebar_label: Events
title: Events 参考
description: "ReactSpreadsheet 的事件回调 props：操作、选区、编辑、工作表及派生状态。"
---

# Events 参考 {#events-reference}

所有事件回调均为可选 props。"Before" 回调可返回 `false` 以取消相应操作。

:::note
React 封装器使用 `onCamelCase` 形式的 prop 名称（例如 `onAfterAction`），而 JS Spreadsheet API 在 event bus 上使用 `camelCase` 形式的事件名称（例如 `afterAction`）。命令式 API 请参见 [JS API Events 参考](api/overview/events_overview.md)。
:::

## 操作事件 {#action-events}

在任何用户操作（如单元格编辑、格式设置或结构性更改）时触发。

| Prop | 可取消 | 描述 |
|------|:-----------:|-------------|
| `onBeforeAction` | 是 | 在任何用户操作执行之前触发。返回 `false` 可取消操作。Handler：[`BeforeActionHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeAction`](api/spreadsheet_beforeaction_event.md)。 |
| `onAfterAction` | 否 | 在任何用户操作完成之后触发。Handler：[`AfterActionHandler`](react/types.md#handler-type-aliases)。JS API：[`afterAction`](api/spreadsheet_afteraction_event.md)。 |

**示例：禁止删除行**

~~~tsx
import { Actions } from "@dhtmlx/trial-react-spreadsheet";

<ReactSpreadsheet
    sheets={sheets}
    onBeforeAction={(action, config) => {
        if (action === Actions.deleteRow) return false;
    }}
/>
~~~

**示例：记录所有用户操作**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterAction={(action, config) => {
        console.log("Action:", action, "Cell:", config.cell);
    }}
/>
~~~

## 选区事件 {#selection-events}

在单元格选区或焦点发生变化时触发。

| Prop | 可取消 | 描述 |
|------|:-----------:|-------------|
| `onBeforeSelectionSet` | 是 | 在单元格被加入选区之前触发。Handler：[`BeforeCellHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md)。 |
| `onAfterSelectionSet` | 否 | 在单元格被加入选区之后触发。Handler：[`AfterCellHandler`](react/types.md#handler-type-aliases)。JS API：[`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md)。 |
| `onBeforeSelectionRemove` | 是 | 在单元格从选区中移除之前触发。Handler：[`BeforeCellHandler`](react/types.md#handler-type-aliases)。 |
| `onAfterSelectionRemove` | 否 | 在单元格从选区中移除之后触发。Handler：[`AfterCellHandler`](react/types.md#handler-type-aliases)。 |
| `onBeforeFocusSet` | 是 | 在焦点单元格发生变化之前触发。Handler：[`BeforeCellHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md)。 |
| `onAfterFocusSet` | 否 | 在焦点单元格发生变化之后触发。Handler：[`AfterCellHandler`](react/types.md#handler-type-aliases)。JS API：[`afterFocusSet`](api/spreadsheet_afterfocusset_event.md)。 |

**示例：跟踪当前选中单元格**

~~~tsx
const [selectedCell, setSelectedCell] = useState<string>("");

<ReactSpreadsheet
    sheets={sheets}
    onAfterFocusSet={(cell) => setSelectedCell(cell)}
/>

<p>Current cell: {selectedCell}</p>
~~~

## 编辑事件 {#edit-events}

在单元格编辑开始或结束时触发。

| Prop | 可取消 | 描述 |
|------|:-----------:|-------------|
| `onBeforeEditStart` | 是 | 在单元格编辑开始之前触发。Handler：[`BeforeEditHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md)。 |
| `onAfterEditStart` | 否 | 在单元格编辑开始之后触发。Handler：[`AfterEditHandler`](react/types.md#handler-type-aliases)。JS API：[`afterEditStart`](api/spreadsheet_aftereditstart_event.md)。 |
| `onBeforeEditEnd` | 是 | 在单元格编辑结束之前触发。返回 `false` 可取消并保持编辑状态。Handler：[`BeforeEditHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeEditEnd`](api/spreadsheet_beforeeditend_event.md)。 |
| `onAfterEditEnd` | 否 | 在单元格编辑结束且值已提交之后触发。Handler：[`AfterEditHandler`](react/types.md#handler-type-aliases)。JS API：[`afterEditEnd`](api/spreadsheet_aftereditend_event.md)。 |

**示例：提交前校验**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onBeforeEditEnd={(cell, value) => {
        if (cell.startsWith("B") && isNaN(Number(value))) {
            return false; // Cancel: column B must be numeric
        }
    }}
/>
~~~

## 工作表事件 {#sheet-events}

在活动工作表标签页发生切换时触发。

| Prop | 可取消 | 描述 |
|------|:-----------:|-------------|
| `onBeforeSheetChange` | 是 | 在活动工作表切换之前触发。Handler：[`BeforeSheetHandler`](react/types.md#handler-type-aliases)。JS API：[`beforeSheetChange`](api/spreadsheet_beforesheetchange_event.md)。 |
| `onAfterSheetChange` | 否 | 在活动工作表切换之后触发。Handler：[`AfterSheetHandler`](react/types.md#handler-type-aliases)。JS API：[`afterSheetChange`](api/spreadsheet_aftersheetchange_event.md)。 |

**示例：跟踪活动工作表**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterSheetChange={(sheet) => {
        console.log("Switched to sheet:", sheet.name);
    }}
/>
~~~

## 数据事件 {#data-events}

在电子表格数据加载完成时触发。

| Prop | 描述 |
|------|-------------|
| `onAfterDataLoaded` | 在数据加载完成后触发（通过 `sheets` 或 `loadUrl`）。JS API：[`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md)。 |

**示例：显示加载状态**

~~~tsx
const [loading, setLoading] = useState(true);

<ReactSpreadsheet
    loadUrl="/api/data"
    onAfterDataLoaded={() => setLoading(false)}
/>
~~~

## 输入事件 {#input-events}

在用户于单元格或公式栏中输入时触发。

| Prop | 描述 |
|------|-------------|
| `onGroupFill` | 在自动填充（拖拽填充）操作过程中触发。Handler：`(focusedCell: string, selectedCell: string) => void`。JS API：[`groupFill`](api/spreadsheet_groupfill_event.md)。 |
| `onEditLineInput` | 在公式栏/编辑栏中有输入时触发。Handler：`(value: string) => void`。 |
| `onCellInput` | 在编辑状态下单元格中有输入时触发。Handler：`(cell: string, value: string) => void`。 |

## 派生状态回调 {#derived-state-callbacks}

这些回调用于通知计算状态的变更，而非直接的用户操作。

| Prop | 描述 |
|------|-------------|
| `onStateChange` | 在撤销/重做可用性发生变化时通知。Handler：`(state: { canUndo: boolean; canRedo: boolean }) => void`。 |
| `onSearchResults` | 当 `search` prop 激活时，将匹配的单元格引用通知给调用方。Handler：`(cells: string[]) => void`。 |
| `onFilterChange` | 在用户通过 UI 更改筛选器时通知。Handler：`(filter: SheetFilter) => void`。 |

**示例：撤销/重做按钮**

~~~tsx
import { useRef, useState } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [history, setHistory] = useState({ canUndo: false, canRedo: false });

    return (
        <>
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
        </>
    );
}
~~~

**示例：受控搜索及结果**

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

**示例：同步筛选器状态**

~~~tsx
const [activeFilter, setActiveFilter] = useState<SheetFilter | null>(null);

<ReactSpreadsheet
    sheets={sheets}
    onFilterChange={(filter) => setActiveFilter(filter)}
/>
~~~
