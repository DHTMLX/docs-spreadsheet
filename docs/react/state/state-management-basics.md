---
sidebar_label: Basics
title: Data Binding & State Management Basics
description: "Core patterns for managing spreadsheet data in React: controlled props, event callbacks, and the ref escape hatch."
---

# Data binding & state management basics

## The declarative model

React Spreadsheet follows a declarative approach: you store sheet data in React state, pass it as props, and the wrapper automatically diffs your data against the current widget state — applying only the changes.

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

## Updating cells

Use immutable state updates with the functional `setState` updater:

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

## Responding to user actions

Use `onAfterAction` to react to user changes. Combine it with `ref` to read the current widget data:

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [sheets, setSheets] = useState<SheetData[]>([/* ... */]);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data) {
            // Sync widget state back to React state
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

## The ref escape hatch

For operations that don't map to declarative props, use the [`SpreadsheetRef`](/react/types#spreadsheetref) to access the underlying widget instance:

- **Serialize data:** `ref.current?.instance?.serialize()`
- **Undo/redo:** `ref.current?.instance?.undo()` / `ref.current?.instance?.redo()`
- **Get cell value:** `ref.current?.instance?.getValue("A1")`
- **Programmatic selection:** `ref.current?.instance?.selection.setSelectedCell("A1:C5")`

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    console.log(data);
};

<ReactSpreadsheet ref={ref} sheets={sheets} />
~~~

:::warning
Avoid mixing imperative writes (e.g. `instance.setValue()`) with the declarative `sheets` prop. The wrapper may overwrite imperative changes on the next render cycle. Use the ref only for **reading** data and for operations like undo/redo, selection, and export.
:::

## Controlled search

Use the `search` prop with `onSearchResults` for controlled search:

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

## Undo / redo

Use `onStateChange` to track undo/redo availability, and call `undo()`/`redo()` via ref:

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

## Performance

- Use `useMemo` for derived sheets to avoid unnecessary recalculations:

~~~tsx
const filteredSheets = useMemo(
    () => sheets.filter((s) => s.name !== "Hidden"),
    [sheets]
);

<ReactSpreadsheet sheets={filteredSheets} />
~~~

- Avoid recreating the `styles` object on every render — define it outside the component or wrap it in `useMemo`.
- Use the functional `setState` updater to avoid stale closure issues in event callbacks.
