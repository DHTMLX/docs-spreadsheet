---
sidebar_label: Events
title: Events Reference
description: "Event callback props for ReactSpreadsheet: actions, selection, editing, sheets, and derived state."
---

# Events Reference

All event callbacks are optional props. "Before" callbacks can return `false` to cancel the operation.

:::note
The React wrapper uses `onCamelCase` prop names (e.g. `onAfterAction`) while the JS Spreadsheet API uses `camelCase` event names on the event bus (e.g. `afterAction`). See the [JS API Events Reference](/api/overview/events_overview/) for the imperative API.
:::

## Action Events

Fired for any user action (cell edits, formatting, structural changes, etc.).

| Prop | Cancellable | Description |
|------|:-----------:|-------------|
| `onBeforeAction` | Yes | Fires before any user action executes. Return `false` to cancel. Handler: [`BeforeActionHandler`](/react/types#handler-type-aliases). JS API: [`beforeAction`](/api/spreadsheet_beforeaction_event/). |
| `onAfterAction` | No | Fires after any user action completes. Handler: [`AfterActionHandler`](/react/types#handler-type-aliases). JS API: [`afterAction`](/api/spreadsheet_afteraction_event/). |

**Example — Block row deletion:**

~~~tsx
import { Actions } from "@dhtmlx/trial-react-spreadsheet";

<ReactSpreadsheet
    sheets={sheets}
    onBeforeAction={(action, config) => {
        if (action === Actions.deleteRow) return false;
    }}
/>
~~~

**Example — Log all user actions:**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterAction={(action, config) => {
        console.log("Action:", action, "Cell:", config.cell);
    }}
/>
~~~

## Selection Events

Fired when the cell selection or focus changes.

| Prop | Cancellable | Description |
|------|:-----------:|-------------|
| `onBeforeSelectionSet` | Yes | Fires before a cell is added to the selection. Handler: [`BeforeCellHandler`](/react/types#handler-type-aliases). JS API: [`beforeSelectionSet`](/api/spreadsheet_beforeselectionset_event/). |
| `onAfterSelectionSet` | No | Fires after a cell is added to the selection. Handler: [`AfterCellHandler`](/react/types#handler-type-aliases). JS API: [`afterSelectionSet`](/api/spreadsheet_afterselectionset_event/). |
| `onBeforeSelectionRemove` | Yes | Fires before a cell is removed from the selection. Handler: [`BeforeCellHandler`](/react/types#handler-type-aliases). |
| `onAfterSelectionRemove` | No | Fires after a cell is removed from the selection. Handler: [`AfterCellHandler`](/react/types#handler-type-aliases). |
| `onBeforeFocusSet` | Yes | Fires before the focused cell changes. Handler: [`BeforeCellHandler`](/react/types#handler-type-aliases). JS API: [`beforeFocusSet`](/api/spreadsheet_beforefocusset_event/). |
| `onAfterFocusSet` | No | Fires after the focused cell changes. Handler: [`AfterCellHandler`](/react/types#handler-type-aliases). JS API: [`afterFocusSet`](/api/spreadsheet_afterfocusset_event/). |

**Example — Track selected cell:**

~~~tsx
const [selectedCell, setSelectedCell] = useState<string>("");

<ReactSpreadsheet
    sheets={sheets}
    onAfterFocusSet={(cell) => setSelectedCell(cell)}
/>

<p>Current cell: {selectedCell}</p>
~~~

## Edit Events

Fired when cell editing begins or ends.

| Prop | Cancellable | Description |
|------|:-----------:|-------------|
| `onBeforeEditStart` | Yes | Fires before cell editing begins. Handler: [`BeforeEditHandler`](/react/types#handler-type-aliases). JS API: [`beforeEditStart`](/api/spreadsheet_beforeeditstart_event/). |
| `onAfterEditStart` | No | Fires after cell editing begins. Handler: [`AfterEditHandler`](/react/types#handler-type-aliases). JS API: [`afterEditStart`](/api/spreadsheet_aftereditstart_event/). |
| `onBeforeEditEnd` | Yes | Fires before cell editing ends. Return `false` to cancel and keep editing. Handler: [`BeforeEditHandler`](/react/types#handler-type-aliases). JS API: [`beforeEditEnd`](/api/spreadsheet_beforeeditend_event/). |
| `onAfterEditEnd` | No | Fires after cell editing ends and the value is committed. Handler: [`AfterEditHandler`](/react/types#handler-type-aliases). JS API: [`afterEditEnd`](/api/spreadsheet_aftereditend_event/). |

**Example — Validate before committing:**

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

## Sheet Events

Fired when the active sheet tab changes.

| Prop | Cancellable | Description |
|------|:-----------:|-------------|
| `onBeforeSheetChange` | Yes | Fires before the active sheet changes. Handler: [`BeforeSheetHandler`](/react/types#handler-type-aliases). JS API: [`beforeSheetChange`](/api/spreadsheet_beforesheetchange_event/). |
| `onAfterSheetChange` | No | Fires after the active sheet changes. Handler: [`AfterSheetHandler`](/react/types#handler-type-aliases). JS API: [`afterSheetChange`](/api/spreadsheet_aftersheetchange_event/). |

**Example — Track active sheet:**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterSheetChange={(sheet) => {
        console.log("Switched to sheet:", sheet.name);
    }}
/>
~~~

## Data Events

| Prop | Description |
|------|-------------|
| `onAfterDataLoaded` | Fires after data loading completes (via `sheets` or `loadUrl`). JS API: [`afterDataLoaded`](/api/spreadsheet_afterdataloaded_event/). |

**Example — Show loading state:**

~~~tsx
const [loading, setLoading] = useState(true);

<ReactSpreadsheet
    loadUrl="/api/data"
    onAfterDataLoaded={() => setLoading(false)}
/>
~~~

## Input Events

Fired during user input in cells or the formula bar.

| Prop | Description |
|------|-------------|
| `onGroupFill` | Fires during auto-fill (drag-fill) operations. Handler: `(focusedCell: string, selectedCell: string) => void`. JS API: [`groupFill`](/api/spreadsheet_groupfill_event/). |
| `onEditLineInput` | Fires on input in the formula/edit line. Handler: `(value: string) => void`. |
| `onCellInput` | Fires on input in a cell during editing. Handler: `(cell: string, value: string) => void`. |

## Derived State Callbacks

These callbacks notify about computed state changes rather than direct user actions.

| Prop | Description |
|------|-------------|
| `onStateChange` | Notifies when undo/redo availability changes. Handler: `(state: { canUndo: boolean; canRedo: boolean }) => void`. |
| `onSearchResults` | Notifies with matching cell references when the `search` prop is active. Handler: `(cells: string[]) => void`. |
| `onFilterChange` | Notifies when the user changes filters via the UI. Handler: `(filter: SheetFilter) => void`. |

**Example — Undo/redo buttons:**

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

**Example — Controlled search with results:**

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

**Example — Sync filter state:**

~~~tsx
const [activeFilter, setActiveFilter] = useState<SheetFilter | null>(null);

<ReactSpreadsheet
    sheets={sheets}
    onFilterChange={(filter) => setActiveFilter(filter)}
/>
~~~
