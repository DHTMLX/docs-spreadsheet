---
sidebar_label: 类型
title: 类型参考
description: "从 @dhx/react-spreadsheet 导出的 TypeScript 接口、枚举和类型别名。"
---

# 类型参考 {#types-reference}

所有类型均从 `@dhx/react-spreadsheet` 或 `@dhtmlx/trial-react-spreadsheet` 导出。

~~~tsx
import type { SheetData, CellData, SpreadsheetRef /* ... */ } from "@dhtmlx/trial-react-spreadsheet";
~~~

## CellData {#celldata}

单个单元格的声明式状态。所有属性均为可选；更新时省略的属性将保留其当前值。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `value` | `string \| number` | 单元格值：文本、数字或公式字符串（以 `=` 开头）。 |
| `css` | `string` | CSS 类名，引用顶层 `styles` 映射中的键。 |
| `format` | `string` | 数字格式掩码或别名（例如 `"currency"` 或 `"#,##0.00"`）。 |
| `locked` | `boolean` | 单元格是否锁定（禁止编辑）。 |
| `validation` | `string \| string[]` | 数据验证下拉选项。 |

## RowConfig {#rowconfig}

行元数据。只有具有非默认配置的行才需要条目。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `height` | `number` | 行高（像素）。 |
| `hidden` | `boolean` | 行是否隐藏。 |

## ColConfig {#colconfig}

列元数据。只有具有非默认配置的列才需要条目。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `width` | `number` | 列宽（像素）。 |
| `hidden` | `boolean` | 列是否隐藏。 |

## MergedRange {#mergedrange}

使用从 0 开始的行/列坐标定义合并单元格范围。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `from` | `{ row: number; column: number }` | 合并区域左上角（从 0 开始）。 |
| `to` | `{ row: number; column: number }` | 合并区域右下角（从 0 开始）。 |

**示例：**

~~~ts
// 合并 A1:B2
const merge: MergedRange = {
    from: { row: 0, column: 0 },
    to: { row: 1, column: 1 },
};
~~~

## FreezeConfig {#freezeconfig}

sheet 的冻结窗格配置。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `col` | `number` | 冻结至此从 0 开始的列号之前的所有列。`undefined` 表示不冻结列。 |
| `row` | `number` | 冻结至此从 0 开始的行号之前的所有行。`undefined` 表示不冻结行。 |

## SheetFilter {#sheetfilter}

sheet 中某列的筛选配置。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `cell` | `string` | 标识筛选列的单元格引用（例如 `"A1"`）。 |
| `rules` | `IFilterRules[]` | 要应用的筛选规则。空数组将清除筛选。 |

## SheetSort {#sheetsort}

sheet 中某列的排序配置。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `cell` | `string` | 排序操作的单元格引用或范围（例如 `"B1"` 或 `"A1:E8"`）。使用范围可在保持行完整性的同时对多列排序。 |
| `dir` | `1 \| -1` | 排序方向：`1` = 升序，`-1` = 降序。 |

## SheetData {#sheetdata}

单个电子表格 sheet 的完整声明式状态。

| 属性 | 类型 | 必填 | 描述 |
|----------|------|:--------:|-------------|
| `id` | `Id` | 是 | 唯一的 sheet 标识符。必须在渲染间保持稳定。 |
| `name` | `string` | 是 | 显示在 sheet 标签上的名称。 |
| `cells` | `Record<string, CellData>` | 是 | 以单元格引用为键的单元格数据（例如 `"A1"` 或 `"B2"`）。只有具有非默认数据的单元格才需要条目。 |
| `rows` | `Record<number, RowConfig>` | 否 | 以从 0 开始的行号为键的行配置。 |
| `cols` | `Record<number, ColConfig>` | 否 | 以从 0 开始的列号为键的列配置。 |
| `merged` | `MergedRange[]` | 否 | 合并单元格范围。 |
| `freeze` | `FreezeConfig` | 否 | 冻结窗格配置。 |
| `filter` | `SheetFilter` | 否 | 列筛选配置。设为 `undefined` 可清除筛选。 |
| `sort` | `SheetSort` | 否 | 排序配置。 |

**示例：**

~~~ts
const sheet: SheetData = {
    id: "sheet1",
    name: "Inventory",
    cells: {
        A1: { value: "Product", css: "bold" },
        B1: { value: "Quantity", css: "bold" },
        A2: { value: "Laptop" },
        B2: { value: 42 },
    },
    cols: { 0: { width: 200 } },
    freeze: { row: 1 },
};
~~~

## SearchConfig {#searchconfig}

受控搜索状态。传入对象可触发/更新搜索，传入 `undefined` 可关闭搜索。

| 属性 | 类型 | 必填 | 描述 |
|----------|------|:--------:|-------------|
| `query` | `string` | 是 | 要搜索的文本。 |
| `open` | `boolean` | 否 | 是否打开内置搜索 UI。默认值：`false`。 |
| `sheetId` | `Id` | 否 | 按 id 将搜索限定在特定 sheet 中。 |

## SpreadsheetLocale {#spreadsheetlocale}

UI 标签和公式名称的本地化配置。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `locale` | `Record<string, string>` | UI 字符串覆盖。键与库的语言字典匹配。 |
| `formulas` | `Record<string, [string, string?][]>` | 按分类分组的本地化公式名称。每个条目为元组：`[localizedName, optionalDescription?]`。 |

## SpreadsheetTheme {#spreadsheettheme}

~~~ts
type SpreadsheetTheme = "light" | "dark" | "contrast-light" | "contrast-dark" | string;
~~~

内置颜色主题。也接受自定义主题名称字符串。

## IExecuteConfig {#iexecuteconfig}

传递给 [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events) 的操作执行配置。形状因操作类型而异。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `row` | `number` | 目标行索引。 |
| `col` | `number` | 目标列索引。 |
| `target` | `unknown` | 特定操作的目标。 |
| `val` | `unknown` | 新值。 |
| `prev` | `unknown` | 原值。 |
| `action` | `Actions \| string` | 操作标识符。 |
| `groupAction` | `Actions \| string` | 父组操作标识符。 |
| `cell` | `string` | 单元格引用（例如 `"A1"`）。 |
| `pageId` | `Id` | 目标 sheet id。 |
| `pageName` | `string` | 目标 sheet 名称。 |
| `[key: string]` | `unknown` | 其他特定操作属性。 |

## SpreadsheetRef {#spreadsheetref}

通过 `React.forwardRef` 暴露的命令式句柄。提供对底层 DHTMLX Spreadsheet 实例的直接访问，用于无法映射到声明式 props 的操作。

| 属性 | 类型 | 描述 |
|----------|------|-------------|
| `instance` | `ISpreadsheet \| null` | 底层 widget 实例。初始化前和卸载后为 `null`。 |

**示例：**

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

// 序列化数据
const data = ref.current?.instance?.serialize();

// 程序化选区
ref.current?.instance?.selection.setSelectedCell("A1:C5");

// 撤销/重做
ref.current?.instance?.undo();
ref.current?.instance?.redo();
~~~

## Actions 枚举 {#actions-enum}

已知的电子表格操作标识符。在 [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events) 中用于类型安全的操作匹配。处理器参数上的 `| string` 联合类型可向前兼容未来新增的操作。

| 值 | 描述 |
|-------|-------------|
| `setCellStyle` | 为单元格应用 CSS 样式。 |
| `setCellValue` | 设置单元格值。 |
| `setCellFormat` | 为单元格设置数字格式。 |
| `removeCellStyles` | 移除单元格的 CSS 样式。 |
| `lockCell` | 锁定或解锁单元格。 |
| `deleteRow` | 删除行。 |
| `addRow` | 插入行。 |
| `deleteColumn` | 删除列。 |
| `addColumn` | 插入列。 |
| `groupAction` | 批量操作（多个子操作）。 |
| `groupRowAction` | 批量行操作。 |
| `groupColAction` | 批量列操作。 |
| `addSheet` | 添加新 sheet。 |
| `deleteSheet` | 删除 sheet。 |
| `renameSheet` | 重命名 sheet。 |
| `clearSheet` | 清除 sheet 中的所有数据。 |
| `clear` | 清除选中的单元格。 |
| `resizeCol` | 调整列宽。 |
| `resizeRow` | 调整行高。 |
| `setValidation` | 为单元格设置数据验证。 |
| `sortCells` | 对单元格排序。 |
| `insertLink` | 插入超链接。 |
| `fitColumn` | 自动调整列宽以适应内容。 |
| `filter` | 应用或更改列筛选。 |
| `merge` | 合并单元格。 |
| `unmerge` | 取消合并单元格。 |
| `toggleFreeze` | 切换冻结窗格。 |
| `toggleVisibility` | 切换行/列可见性。 |

## 处理器类型别名 {#handler-type-aliases}

事件 callback props 所用函数签名的便捷别名。导入这些别名可对处理器函数进行显式类型标注。

<div className="overflow-table">

| 类型 | 签名 | 用于 |
|------|-----------|---------|
| `BeforeActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => boolean \| void` | `onBeforeAction` |
| `AfterActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => void` | `onAfterAction` |
| `BeforeCellHandler` | `(cell: string) => boolean \| void` | `onBeforeSelectionSet`、`onBeforeSelectionRemove`、`onBeforeFocusSet` |
| `AfterCellHandler` | `(cell: string) => void` | `onAfterSelectionSet`、`onAfterSelectionRemove`、`onAfterFocusSet` |
| `BeforeEditHandler` | `(cell: string, value: string) => boolean \| void` | `onBeforeEditStart`、`onBeforeEditEnd` |
| `AfterEditHandler` | `(cell: string, value: string) => void` | `onAfterEditStart`、`onAfterEditEnd` |
| `BeforeSheetHandler` | `(sheet: ISheet) => boolean \| void` | `onBeforeSheetChange` |
| `AfterSheetHandler` | `(sheet: ISheet) => void` | `onAfterSheetChange` |

</div>

## SpreadsheetConfigProps {#spreadsheetconfigprops}

~~~ts
type SpreadsheetConfigProps = Omit<
    ISpreadsheetConfig,
    "leftSplit" | "topSplit" | "dateFormat" | "timeFormat"
>;
~~~

组件 props 的基础类型。将所有 `ISpreadsheetConfig` 构造函数选项作为扁平 props 暴露。

## 重新导出的上游类型 {#re-exported-upstream-types}

以下类型从 `@dhx/ts-spreadsheet` 重新导出，以便使用：

| 类型 | 描述 |
|------|-------------|
| `ISpreadsheet` | 主电子表格 widget 实例接口。 |
| `ISpreadsheetConfig` | 构造函数配置接口。 |
| `ISheet` | Sheet 实例接口（在 sheet 事件 callbacks 中使用）。 |
| `IFormats` | 自定义数字格式定义。 |
| `IFilterRules` | 筛选规则配置。 |
| `IFilter` | 筛选实例接口。 |
| `IStylesList` | 样式定义映射。 |
| `IDataWithStyles` | 含内嵌样式的数据结构（由 `serialize()`/`parse()` 使用）。 |
| `ICellInfo` | widget 方法返回的单元格信息。 |
| `FileFormat` | 数据加载的文件格式（例如 `"json"` 或 `"xlsx"`）。 |
| `ToolbarBlocks` | 工具栏块标识符（例如 `"default"`、`"undo"` 或 `"font"`）。 |
| `FilterConditions` | 可用筛选条件类型的枚举。 |
| `Id` | 通用标识符类型（`string \| number`）。 |
