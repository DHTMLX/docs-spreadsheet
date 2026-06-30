---
sidebar_label: Overview
title: React Spreadsheet overview
description: "Overview of the official React wrapper: declarative data model, props, theming, events, and ref access."
---

# React Spreadsheet overview

`ReactSpreadsheet` is a declarative React wrapper for the DHTMLX Spreadsheet widget. It provides a component-based API where props describe the spreadsheet state, and the wrapper handles synchronization with the underlying widget.

:::note
The React Spreadsheet wrapper is available under DHTMLX Spreadsheet **Commercial**, **Enterprise** and **Ultimate** licenses. For evaluation, use the free 30-day evaluation package. See [Installation](react/installation.md) for setup instructions.
:::

## Spreadsheet features

The React wrapper provides access to the full feature set of DHTMLX Spreadsheet:

- Multi-sheet spreadsheets with sheet tabs (add, remove, rename)
- Cell values, formulas (90+ built-in functions), and number formatting
- Cell styling, merged cells, frozen panes, data validation
- Sorting, filtering, and search
- Row/column operations (add, delete, hide/show, resize, auto-fit)
- Excel (XLSX) import and export via WebAssembly modules
- Customizable toolbar and context menu
- Cell locking and read-only mode
- 4 built-in themes (light, dark, contrast-light, contrast-dark) with CSS variable customization
- Localization of UI labels, formula names, and number/date formatting
- Undo/redo history
- TypeScript support with bundled type definitions and JSDoc descriptions

## Wrapper design principles

- **Props describe state, not actions.** There are no "trigger" props. Pass data, and the component updates the widget accordingly.
- **`sheets` is the single source of truth** for all spreadsheet data: cells, merged ranges, frozen panes, filters, sorting.
- **Ref is an escape hatch.** For operations that don't map to declarative props (export, programmatic selection, undo/redo), access the underlying widget instance via ref.
- **All widget events are exposed as typed `onXxx` callback props.** "Before" callbacks can return `false` to cancel the operation.

## Version requirements

- React 18+
- ESM-only package

## Quick start

A minimal working example showing how to render a spreadsheet with one sheet and formatted cells.

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

## Import paths

**Evaluation** (public npm, free 30-day evaluation):

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

**Commercial** (private npm, requires license):

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

See [Installation](react/installation.md) for registry configuration and all available package variants.

## Prop update behavior

Props are categorized by how the component handles changes:

| Category | Props | What happens on change |
|----------|-------|----------------------|
| **Init-only** | `menu`, `editLine`, `toolbarBlocks`, `multiSheets`, `formats`, `localization`, `importModulePath`, `exportModulePath`, `spreadsheetLocale` | The widget is destroyed and recreated. Spreadsheet data is preserved, but undo/redo history and UI state (selection, scroll position) are reset. |
| **Runtime** | `readonly`, `rowsCount`, `colsCount` | Applied immediately without data loss or UI state reset. |
| **Data** | `sheets`, `activeSheet` | Applied incrementally; only changed cells, ranges, or settings are updated. |
| **Re-parse** | `styles` | Style changes require a full data reload. Spreadsheet data is preserved, but undo/redo history and UI state are reset. |
| **State** | `search`, `theme`, `loadUrl` | Applied via dedicated widget APIs with no side effects. |
| **Container** | `className`, `style` | Standard React DOM props on the wrapper `<div>`. |

## Examples

### Multi-sheet with formulas

Two sheets with cell values and a `SUM` formula, rendered with sheet tabs enabled.

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

### Custom toolbar

Pass an array of block identifiers to `toolbarBlocks` to show only the toolbar sections you need.

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Read-only with locked cells

Set `readonly={true}` to disable all editing at the widget level. Adding `locked: true` on cells protects them individually when the spreadsheet is not in read-only mode.

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

## Imperative access via ref

Use a `SpreadsheetRef` to access the underlying widget instance for operations that don't map to declarative props, such as serializing data, triggering undo/redo, or setting the selection programmatically.

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

The `instance` property is `null` before the widget initializes and after unmount.

## API reference

| Document | Contents |
|----------|----------|
| [Props reference](react/props.md) | All component props with types, defaults, and examples |
| [Events reference](react/events.md) | Event callback props grouped by category |
| [Types reference](react/types.md) | TypeScript interfaces, enums, and type aliases |
