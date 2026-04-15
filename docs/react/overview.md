---
sidebar_label: Overview
title: React Spreadsheet Overview
description: "Overview of the official React wrapper: declarative data model, props, theming, events, and ref access."
---

# React Spreadsheet Overview

`ReactSpreadsheet` is a declarative React wrapper for the DHTMLX Spreadsheet widget. It provides a component-based API where props describe the spreadsheet state, and the wrapper handles synchronization with the underlying widget.

:::note
The React Spreadsheet wrapper is available with the DHTMLX Spreadsheet **Commercial** license. For evaluation, use the free 30-day evaluation package.
:::

## Spreadsheet features

The React wrapper provides access to the full feature set of DHTMLX Spreadsheet:

- Multi-sheet spreadsheets with sheet tabs (add, remove, rename)
- Cell values, formulas (85+ built-in functions), and number formatting
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
- **`sheets` is the single source of truth** for all spreadsheet data — cells, merged ranges, frozen panes, filters, sorting.
- **Ref is an escape hatch.** For operations that don't map to declarative props (export, programmatic selection, undo/redo), access the underlying widget instance via ref.
- **All widget events are exposed as typed `onXxx` callback props.** "Before" callbacks can return `false` to cancel the operation.

## Version Requirements

- React 18+
- ESM-only package

## Quick Start

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/dist/spreadsheet.react.css";

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

:::tip Using a commercial license?
Replace `@dhtmlx/trial-react-spreadsheet` with `@dhx/react-spreadsheet` and configure the private registry. See [Installation](./installation.md).
:::

## Import paths

**Evaluation** (public npm, free 30-day evaluation):

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/dist/spreadsheet.react.css";
~~~

**Commercial** (private npm, requires license):

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/dist/spreadsheet.react.css";
~~~

See [Installation](./installation.md) for registry configuration and all available package variants.

## Prop Update Behavior

Props are categorized by how the component handles changes:

| Category | Props | What happens on change |
|----------|-------|----------------------|
| **Init-only** | `menu`, `editLine`, `toolbarBlocks`, `multiSheets`, `formats`, `localization`, `importModulePath`, `exportModulePath`, `spreadsheetLocale` | The widget is destroyed and recreated. Spreadsheet data is preserved, but undo/redo history and UI state (selection, scroll position) are reset. |
| **Runtime** | `readonly`, `rowsCount`, `colsCount` | Applied immediately without data loss or UI state reset. |
| **Data** | `sheets`, `activeSheet` | Applied incrementally — only changed cells, ranges, or settings are updated. |
| **Re-parse** | `styles` | Style changes require a full data reload. Spreadsheet data is preserved, but undo/redo history and UI state are reset. |
| **State** | `search`, `theme`, `loadUrl` | Applied via dedicated widget APIs with no side effects. |
| **Container** | `className`, `style` | Standard React DOM props on the wrapper `<div>`. |

## Examples

### Multi-sheet with formulas

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

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Read-only with locked cells

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

## Imperative Access via Ref

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

## Documentation

| Document | Contents |
|----------|----------|
| [Props Reference](./props.md) | All component props with types, defaults, and examples |
| [Events Reference](./events.md) | Event callback props grouped by category |
| [Types Reference](./types.md) | TypeScript interfaces, enums, and type aliases |
