---
sidebar_label: Overview
title: React Spreadsheet 概述
description: "官方 React 封装器概述：声明式数据模型、props、主题、事件及 ref 访问。"
---

# React Spreadsheet 概述 {#react-spreadsheet-overview}

`ReactSpreadsheet` 是 DHTMLX Spreadsheet widget 的声明式 React 封装器。它提供基于组件的 API，以 props 描述电子表格状态，封装器负责与底层 widget 的同步。

:::note
React Spreadsheet 封装器适用于 DHTMLX Spreadsheet 的 **Commercial**、**Enterprise** 和 **Ultimate** 授权版本。如需评估，请使用免费的 30 天评估包。安装说明请参见 [安装](react/installation.md)。
:::

## 电子表格功能 {#spreadsheet-features}

React 封装器提供对 DHTMLX Spreadsheet 完整功能集的访问：

- 多工作表电子表格，支持工作表标签页（添加、删除、重命名）
- 单元格值、公式（90 余个内置函数）及数字格式化
- 单元格样式、合并单元格、冻结窗格、数据校验
- 排序、筛选和搜索
- 行/列操作（添加、删除、隐藏/显示、调整大小、自动适应）
- 通过 WebAssembly 模块实现 Excel（XLSX）导入和导出
- 可自定义的工具栏和右键菜单
- 单元格锁定和只读模式
- 4 种内置主题（light、dark、contrast-light、contrast-dark），支持 CSS 变量自定义
- UI 标签、公式名称及数字/日期格式的本地化
- 撤销/重做历史记录
- TypeScript 支持，内置类型定义和 JSDoc 注释

## 封装器设计原则 {#wrapper-design-principles}

- **Props 描述状态，而非操作。** 没有"触发"类 props。传入数据，组件将相应地更新 widget。
- **`sheets` 是唯一数据源**，涵盖所有电子表格数据：单元格、合并区域、冻结窗格、筛选器、排序。
- **Ref 是逃生舱。** 对于无法映射到声明式 props 的操作（导出、程序化选区、撤销/重做），可通过 ref 访问底层 widget 实例。
- **所有 widget 事件均以类型化的 `onXxx` 回调 props 形式暴露。** "Before" 回调可返回 `false` 以取消操作。

## 版本要求 {#version-requirements}

- React 18+
- 仅支持 ESM 包

## 快速开始 {#quick-start}

以下是一个最简可运行示例，展示如何渲染包含一个工作表和格式化单元格的电子表格。

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Sales",
            cells: {
                A1: { value: "Product", css: "bold" },
                B1: { value: "Revenue", css: "bold", format: "currency" },
                A2: { value: "Widget" },
                B2: { value: 15000, format: "currency" },
            },
        },
    ]);

    const styles = {
        bold: { "font-weight": "bold" },
    };

    return <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />;
}
~~~

## 导入路径 {#import-paths}

**评估版**（公开 npm，30 天免费试用）：

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

**商业版**（私有 npm，需要授权）：

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

注册表配置及所有可用版本说明，请参见 [安装](react/installation.md)。

## Prop 更新行为 {#prop-update-behavior}

Props 按组件处理变更的方式分为以下几类：

| 类别 | Props | 变更时的行为 |
|----------|-------|----------------------|
| **仅初始化** | `menu`、`editLine`、`toolbarBlocks`、`multiSheets`、`formats`、`localization`、`importModulePath`、`exportModulePath`、`spreadsheetLocale` | widget 被销毁并重新创建。电子表格数据会被保留，但撤销/重做历史记录及 UI 状态（选区、滚动位置）将被重置。 |
| **运行时** | `readonly`、`rowsCount`、`colsCount` | 立即生效，不会造成数据丢失或 UI 状态重置。 |
| **数据** | `sheets`、`activeSheet` | 增量应用；仅更新已变更的单元格、区域或设置。 |
| **重新解析** | `styles` | 样式变更需要完整的数据重新加载。电子表格数据会被保留，但撤销/重做历史记录及 UI 状态将被重置。 |
| **状态** | `search`、`theme`、`loadUrl` | 通过专用 widget API 应用，无副作用。 |
| **容器** | `className`、`style` | 作用于封装器 `<div>` 的标准 React DOM props。 |

## 示例 {#examples}

### 包含公式的多工作表 {#multi-sheet-with-formulas}

两个工作表，包含单元格值和 `SUM` 公式，启用工作表标签页渲染。

~~~tsx
const [sheets] = useState<SheetData[]>([
    {
        id: "revenue",
        name: "Revenue",
        cells: {
            A1: { value: "Q1" }, B1: { value: "Q2" }, C1: { value: "Q3" }, D1: { value: "Q4" },
            A2: { value: 12000 }, B2: { value: 15000 }, C2: { value: 18000 }, D2: { value: 21000 },
            A3: { value: "Total" }, B3: { value: "=SUM(A2:D2)", format: "currency" },
        },
    },
    {
        id: "expenses",
        name: "Expenses",
        cells: {
            A1: { value: "Category" }, B1: { value: "Amount", format: "currency" },
            A2: { value: "Marketing" }, B2: { value: 5000, format: "currency" },
            A3: { value: "Operations" }, B3: { value: 8000, format: "currency" },
        },
    },
]);

<ReactSpreadsheet sheets={sheets} multiSheets={true} activeSheet="revenue" />
~~~

### 自定义工具栏 {#custom-toolbar}

向 `toolbarBlocks` 传入块标识符数组，仅显示所需的工具栏区域。

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### 只读模式与锁定单元格 {#read-only-with-locked-cells}

设置 `readonly={true}` 可在 widget 层级禁用所有编辑。在单元格上添加 `locked: true` 可在非只读模式下单独保护特定单元格。

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Report",
        cells: {
            A1: { value: "Metric", locked: true },
            B1: { value: "Value", locked: true },
            A2: { value: "Revenue", locked: true },
            B2: { value: 50000, format: "currency", locked: true },
        },
    },
];

<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

## 通过 ref 进行命令式访问 {#imperative-access-via-ref}

使用 `SpreadsheetRef` 可访问底层 widget 实例，用于无法映射到声明式 props 的操作，例如序列化数据、触发撤销/重做或以编程方式设置选区。

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);

    const handleExport = () => {
        const data = ref.current?.instance?.serialize();
        console.log(data);
    };

    const handleUndo = () => {
        ref.current?.instance?.undo();
    };

    return (
        <>
            <button onClick={handleExport}>Export</button>
            <button onClick={handleUndo}>Undo</button>
            <ReactSpreadsheet ref={ref} sheets={[]} />
        </>
    );
}
~~~

`instance` 属性在 widget 初始化之前及卸载之后均为 `null`。

## API 参考 {#api-reference}

| 文档 | 内容 |
|----------|----------|
| [Props 参考](react/props.md) | 所有组件 props 及其类型、默认值和示例 |
| [Events 参考](react/events.md) | 按类别分组的事件回调 props |
| [Types 参考](react/types.md) | TypeScript 接口、枚举及类型别名 |
