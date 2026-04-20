---
sidebar_label: Types
title: Types Reference
description: "TypeScript interfaces, enums, and type aliases exported from @dhx/react-spreadsheet."
---

# Types reference

All types are exported from `@dhx/react-spreadsheet` | `@dhtmlx/trial-react-spreadsheet`.

~~~tsx
import type { SheetData, CellData, SpreadsheetRef /* ... */ } from "@dhtmlx/trial-react-spreadsheet";
~~~

## CellData

A single cell's declarative state. All properties are optional — omitted properties retain their current value during updates.

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string \| number` | Cell value: text, number, or formula string (prefixed with `=`). |
| `css` | `string` | CSS class name(s) referencing keys in the top-level `styles` map. |
| `format` | `string` | Number format mask or alias (e.g. `"currency"`, `"#,##0.00"`). |
| `locked` | `boolean` | Whether the cell is locked (protected from editing). |
| `validation` | `string \| string[]` | Data validation dropdown options. |

## RowConfig

Row metadata. Only rows with non-default config need entries.

| Property | Type | Description |
|----------|------|-------------|
| `height` | `number` | Row height in pixels. |
| `hidden` | `boolean` | Whether the row is hidden. |

## ColConfig

Column metadata. Only columns with non-default config need entries.

| Property | Type | Description |
|----------|------|-------------|
| `width` | `number` | Column width in pixels. |
| `hidden` | `boolean` | Whether the column is hidden. |

## MergedRange

Defines a merged cell range using 0-indexed row/column coordinates.

| Property | Type | Description |
|----------|------|-------------|
| `from` | `{ row: number; column: number }` | Top-left corner of the merge (0-indexed). |
| `to` | `{ row: number; column: number }` | Bottom-right corner of the merge (0-indexed). |

**Example:**

~~~ts
// Merge A1:B2
const merge: MergedRange = {
    from: { row: 0, column: 0 },
    to: { row: 1, column: 1 },
};
~~~

## FreezeConfig

Freeze pane configuration for a sheet.

| Property | Type | Description |
|----------|------|-------------|
| `col` | `number` | Freeze columns up to this 0-indexed column number. `undefined` = no column freeze. |
| `row` | `number` | Freeze rows up to this 0-indexed row number. `undefined` = no row freeze. |

## SheetFilter

Filter configuration for a column within a sheet.

| Property | Type | Description |
|----------|------|-------------|
| `cell` | `string` | Cell reference identifying the filtered column (e.g. `"A1"`). |
| `rules` | `IFilterRules[]` | Filter rules to apply. Empty array clears the filter. |

## SheetSort

Sort configuration for a column within a sheet.

| Property | Type | Description |
|----------|------|-------------|
| `cell` | `string` | Cell reference or range for the sort operation (e.g. `"B1"` or `"A1:E8"`). Use a range to sort multiple columns together while maintaining row integrity. |
| `dir` | `1 \| -1` | Sort direction: `1` = ascending, `-1` = descending. |

## SheetData

Complete declarative state for a single spreadsheet sheet.

| Property | Type | Required | Description |
|----------|------|:--------:|-------------|
| `id` | `Id` | Yes | Unique sheet identifier. Must be stable across renders. |
| `name` | `string` | Yes | Display name shown on the sheet tab. |
| `cells` | `Record<string, CellData>` | Yes | Cell data keyed by cell reference (e.g. `"A1"`, `"B2"`). Only cells with non-default data need entries. |
| `rows` | `Record<number, RowConfig>` | No | Row configuration keyed by 0-indexed row number. |
| `cols` | `Record<number, ColConfig>` | No | Column configuration keyed by 0-indexed column number. |
| `merged` | `MergedRange[]` | No | Merged cell ranges. |
| `freeze` | `FreezeConfig` | No | Frozen pane configuration. |
| `filter` | `SheetFilter` | No | Column filter configuration. Set to `undefined` to clear. |
| `sort` | `SheetSort` | No | Sort configuration. |

**Example:**

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

## SearchConfig

Controlled search state. Pass an object to trigger/update search, pass `undefined` to dismiss.

| Property | Type | Required | Description |
|----------|------|:--------:|-------------|
| `query` | `string` | Yes | Text to search for. |
| `open` | `boolean` | No | Whether to open the built-in search UI. Default: `false`. |
| `sheetId` | `Id` | No | Restrict search to a specific sheet by id. |

## SpreadsheetLocale

Localization configuration for UI labels and formula names.

| Property | Type | Description |
|----------|------|-------------|
| `locale` | `Record<string, string>` | UI string overrides. Keys match the library's locale dictionary. |
| `formulas` | `Record<string, [string, string?][]>` | Localized formula names grouped by category. Each entry is a tuple: `[localizedName, optionalDescription?]`. |

## SpreadsheetTheme

~~~ts
type SpreadsheetTheme = "light" | "dark" | "contrast-light" | "contrast-dark" | string;
~~~

Built-in color themes. Also accepts custom theme name strings.

## IExecuteConfig

Action execution configuration passed to `onBeforeAction` / `onAfterAction`. Shape varies by action type.

| Property | Type | Description |
|----------|------|-------------|
| `row` | `number` | Target row index. |
| `col` | `number` | Target column index. |
| `target` | `unknown` | Action-specific target. |
| `val` | `unknown` | New value. |
| `prev` | `unknown` | Previous value. |
| `action` | `Actions \| string` | Action identifier. |
| `groupAction` | `Actions \| string` | Parent group action identifier. |
| `cell` | `string` | Cell reference (e.g. `"A1"`). |
| `pageId` | `Id` | Target sheet id. |
| `pageName` | `string` | Target sheet name. |
| `[key: string]` | `unknown` | Additional action-specific properties. |

## SpreadsheetRef

Imperative handle exposed via `React.forwardRef`. Provides direct access to the underlying DHTMLX Spreadsheet instance for operations that don't map to declarative props.

| Property | Type | Description |
|----------|------|-------------|
| `instance` | `ISpreadsheet \| null` | The underlying widget instance. `null` before initialization and after unmount. |

**Example:**

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

// Serialize data
const data = ref.current?.instance?.serialize();

// Programmatic selection
ref.current?.instance?.selection.setSelectedCell("A1:C5");

// Undo/redo
ref.current?.instance?.undo();
ref.current?.instance?.redo();
~~~

## Actions enum

Known spreadsheet action identifiers. Used in `onBeforeAction` / `onAfterAction` for type-safe action matching. The `| string` union on handler params allows forward-compatibility with future actions.

| Value | Description |
|-------|-------------|
| `setCellStyle` | Apply CSS style to cell(s). |
| `setCellValue` | Set cell value. |
| `setCellFormat` | Set number format on cell(s). |
| `removeCellStyles` | Remove CSS styles from cell(s). |
| `lockCell` | Lock or unlock cell(s). |
| `deleteRow` | Delete row(s). |
| `addRow` | Insert row(s). |
| `deleteColumn` | Delete column(s). |
| `addColumn` | Insert column(s). |
| `groupAction` | Batch action (multiple sub-actions). |
| `groupRowAction` | Batch row action. |
| `groupColAction` | Batch column action. |
| `addSheet` | Add a new sheet. |
| `deleteSheet` | Delete a sheet. |
| `renameSheet` | Rename a sheet. |
| `clearSheet` | Clear all data in a sheet. |
| `clear` | Clear selected cells. |
| `resizeCol` | Resize column width. |
| `resizeRow` | Resize row height. |
| `setValidation` | Set data validation on cell(s). |
| `sortCells` | Sort cells. |
| `insertLink` | Insert a hyperlink. |
| `fitColumn` | Auto-fit column width to content. |
| `filter` | Apply or change column filter. |
| `merge` | Merge cells. |
| `unmerge` | Unmerge cells. |
| `toggleFreeze` | Toggle freeze panes. |
| `toggleVisibility` | Toggle row/column visibility. |

## Handler type aliases

| Type | Signature | Used by |
|------|-----------|---------|
| `BeforeActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => boolean \| void` | `onBeforeAction` |
| `AfterActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => void` | `onAfterAction` |
| `BeforeCellHandler` | `(cell: string) => boolean \| void` | `onBeforeSelectionSet`, `onBeforeSelectionRemove`, `onBeforeFocusSet` |
| `AfterCellHandler` | `(cell: string) => void` | `onAfterSelectionSet`, `onAfterSelectionRemove`, `onAfterFocusSet` |
| `BeforeEditHandler` | `(cell: string, value: string) => boolean \| void` | `onBeforeEditStart`, `onBeforeEditEnd` |
| `AfterEditHandler` | `(cell: string, value: string) => void` | `onAfterEditStart`, `onAfterEditEnd` |
| `BeforeSheetHandler` | `(sheet: ISheet) => boolean \| void` | `onBeforeSheetChange` |
| `AfterSheetHandler` | `(sheet: ISheet) => void` | `onAfterSheetChange` |

## SpreadsheetConfigProps

~~~ts
type SpreadsheetConfigProps = Omit<
    ISpreadsheetConfig,
    "leftSplit" | "topSplit" | "dateFormat" | "timeFormat"
>;
~~~

Base type for component props. Exposes all `ISpreadsheetConfig` constructor options as flat props.

## Re-exported upstream types

These types are re-exported from `@dhx/ts-spreadsheet` for convenience:

| Type | Description |
|------|-------------|
| `ISpreadsheet` | Main spreadsheet widget instance interface. |
| `ISpreadsheetConfig` | Constructor configuration interface. |
| `ISheet` | Sheet instance interface (used in sheet event callbacks). |
| `IFormats` | Custom number format definition. |
| `IFilterRules` | Filter rule configuration. |
| `IFilter` | Filter instance interface. |
| `IStylesList` | Style definitions map. |
| `IDataWithStyles` | Data structure with embedded styles (used by `serialize()`/`parse()`). |
| `ICellInfo` | Cell information returned by widget methods. |
| `FileFormat` | File format for data loading (e.g. `"json"`, `"xlsx"`). |
| `ToolbarBlocks` | Toolbar block identifiers (e.g. `"default"`, `"undo"`, `"font"`). |
| `FilterConditions` | Enum of available filter condition types. |
| `Id` | Generic identifier type (`string \| number`). |
