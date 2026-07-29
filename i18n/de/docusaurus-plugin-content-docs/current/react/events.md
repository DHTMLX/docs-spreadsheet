---
sidebar_label: Events
title: Events-Referenz
description: "Event-Callback-Props für ReactSpreadsheet: Aktionen, Auswahl, Bearbeitung, Tabellenblätter und abgeleiteter Zustand."
---

# Events-Referenz {#events-reference}

Alle Event-Callbacks sind optionale Props. "Before"-Callbacks können `false` zurückgeben, um die Operation abzubrechen.

:::note
Der React-Wrapper verwendet `onCamelCase`-Prop-Namen (z. B. `onAfterAction`), während die JS Spreadsheet-API `camelCase`-Eventnamen auf dem Event-Bus verwendet (z. B. `afterAction`). Weitere Informationen zur imperativen API finden Sie in der [JS-API Events-Referenz](api/overview/events_overview.md).
:::

## Aktions-Events {#action-events}

Werden bei jeder Benutzeraktion ausgelöst, z. B. bei Zellenbearbeitung, Formatierung oder strukturellen Änderungen.

| Prop | Abbrechbar | Beschreibung |
|------|:-----------:|-------------|
| `onBeforeAction` | Ja | Wird ausgelöst, bevor eine Benutzeraktion ausgeführt wird. Gibt `false` zurück, um abzubrechen. Handler: [`BeforeActionHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeAction`](api/spreadsheet_beforeaction_event.md). |
| `onAfterAction` | Nein | Wird ausgelöst, nachdem eine Benutzeraktion abgeschlossen ist. Handler: [`AfterActionHandler`](react/types.md#handler-type-aliases). JS-API: [`afterAction`](api/spreadsheet_afteraction_event.md). |

**Beispiel: Zeilenlöschung blockieren**

~~~tsx
import { Actions } from "@dhtmlx/trial-react-spreadsheet";

<ReactSpreadsheet
    sheets={sheets}
    onBeforeAction={(action, config) => {
        if (action === Actions.deleteRow) return false;
    }}
/>
~~~

**Beispiel: Alle Benutzeraktionen protokollieren**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterAction={(action, config) => {
        console.log("Action:", action, "Cell:", config.cell);
    }}
/>
~~~

## Auswahl-Events {#selection-events}

Werden ausgelöst, wenn sich die Zellenauswahl oder der Fokus ändert.

| Prop | Abbrechbar | Beschreibung |
|------|:-----------:|-------------|
| `onBeforeSelectionSet` | Ja | Wird ausgelöst, bevor eine Zelle zur Auswahl hinzugefügt wird. Handler: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md). |
| `onAfterSelectionSet` | Nein | Wird ausgelöst, nachdem eine Zelle zur Auswahl hinzugefügt wurde. Handler: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS-API: [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md). |
| `onBeforeSelectionRemove` | Ja | Wird ausgelöst, bevor eine Zelle aus der Auswahl entfernt wird. Handler: [`BeforeCellHandler`](react/types.md#handler-type-aliases). |
| `onAfterSelectionRemove` | Nein | Wird ausgelöst, nachdem eine Zelle aus der Auswahl entfernt wurde. Handler: [`AfterCellHandler`](react/types.md#handler-type-aliases). |
| `onBeforeFocusSet` | Ja | Wird ausgelöst, bevor sich die fokussierte Zelle ändert. Handler: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md). |
| `onAfterFocusSet` | Nein | Wird ausgelöst, nachdem sich die fokussierte Zelle geändert hat. Handler: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS-API: [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md). |

**Beispiel: Ausgewählte Zelle verfolgen**

~~~tsx
const [selectedCell, setSelectedCell] = useState<string>("");

<ReactSpreadsheet
    sheets={sheets}
    onAfterFocusSet={(cell) => setSelectedCell(cell)}
/>

<p>Current cell: {selectedCell}</p>
~~~

## Bearbeitungs-Events {#edit-events}

Werden ausgelöst, wenn die Zellenbearbeitung beginnt oder endet.

| Prop | Abbrechbar | Beschreibung |
|------|:-----------:|-------------|
| `onBeforeEditStart` | Ja | Wird ausgelöst, bevor die Zellenbearbeitung beginnt. Handler: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md). |
| `onAfterEditStart` | Nein | Wird ausgelöst, nachdem die Zellenbearbeitung begonnen hat. Handler: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS-API: [`afterEditStart`](api/spreadsheet_aftereditstart_event.md). |
| `onBeforeEditEnd` | Ja | Wird ausgelöst, bevor die Zellenbearbeitung endet. Gibt `false` zurück, um abzubrechen und die Bearbeitung fortzusetzen. Handler: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeEditEnd`](api/spreadsheet_beforeeditend_event.md). |
| `onAfterEditEnd` | Nein | Wird ausgelöst, nachdem die Zellenbearbeitung beendet und der Wert gespeichert wurde. Handler: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS-API: [`afterEditEnd`](api/spreadsheet_aftereditend_event.md). |

**Beispiel: Vor dem Speichern validieren**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onBeforeEditEnd={(cell, value) => {
        if (cell.startsWith("B") && isNaN(Number(value))) {
            return false; // Abbrechen: Spalte B muss numerisch sein
        }
    }}
/>
~~~

## Tabellenblatt-Events {#sheet-events}

Werden ausgelöst, wenn das aktive Tabellenblatt wechselt.

| Prop | Abbrechbar | Beschreibung |
|------|:-----------:|-------------|
| `onBeforeSheetChange` | Ja | Wird ausgelöst, bevor das aktive Tabellenblatt wechselt. Handler: [`BeforeSheetHandler`](react/types.md#handler-type-aliases). JS-API: [`beforeSheetChange`](api/spreadsheet_beforesheetchange_event.md). |
| `onAfterSheetChange` | Nein | Wird ausgelöst, nachdem das aktive Tabellenblatt gewechselt hat. Handler: [`AfterSheetHandler`](react/types.md#handler-type-aliases). JS-API: [`afterSheetChange`](api/spreadsheet_aftersheetchange_event.md). |

**Beispiel: Aktives Tabellenblatt verfolgen**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterSheetChange={(sheet) => {
        console.log("Switched to sheet:", sheet.name);
    }}
/>
~~~

## Daten-Events {#data-events}

Werden ausgelöst, wenn Tabellendaten geladen werden.

| Prop | Beschreibung |
|------|-------------|
| `onAfterDataLoaded` | Wird ausgelöst, nachdem das Laden der Daten abgeschlossen ist (über `sheets` oder `loadUrl`). JS-API: [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md). |

**Beispiel: Ladezustand anzeigen**

~~~tsx
const [loading, setLoading] = useState(true);

<ReactSpreadsheet
    loadUrl="/api/data"
    onAfterDataLoaded={() => setLoading(false)}
/>
~~~

## Eingabe-Events {#input-events}

Werden während der Benutzereingabe in Zellen oder der Formelleiste ausgelöst.

| Prop | Beschreibung |
|------|-------------|
| `onGroupFill` | Wird während Auto-Fill-Operationen (Zieh-Füllung) ausgelöst. Handler: `(focusedCell: string, selectedCell: string) => void`. JS-API: [`groupFill`](api/spreadsheet_groupfill_event.md). |
| `onEditLineInput` | Wird bei Eingabe in der Formel-/Bearbeitungsleiste ausgelöst. Handler: `(value: string) => void`. |
| `onCellInput` | Wird bei Eingabe in einer Zelle während der Bearbeitung ausgelöst. Handler: `(cell: string, value: string) => void`. |

## Callbacks für abgeleiteten Zustand {#derived-state-callbacks}

Diese Callbacks benachrichtigen über Änderungen des berechneten Zustands und nicht über direkte Benutzeraktionen.

| Prop | Beschreibung |
|------|-------------|
| `onStateChange` | Benachrichtigt, wenn sich die Verfügbarkeit von Rückgängig/Wiederherstellen ändert. Handler: `(state: { canUndo: boolean; canRedo: boolean }) => void`. |
| `onSearchResults` | Benachrichtigt mit passenden Zellreferenzen, wenn die `search`-Prop aktiv ist. Handler: `(cells: string[]) => void`. |
| `onFilterChange` | Benachrichtigt, wenn der Benutzer Filter über die Benutzeroberfläche ändert. Handler: `(filter: SheetFilter) => void`. |

**Beispiel: Rückgängig/Wiederherstellen-Schaltflächen**

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

**Beispiel: Kontrollierte Suche mit Ergebnissen**

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

**Beispiel: Filterzustand synchronisieren**

~~~tsx
const [activeFilter, setActiveFilter] = useState<SheetFilter | null>(null);

<ReactSpreadsheet
    sheets={sheets}
    onFilterChange={(filter) => setActiveFilter(filter)}
/>
~~~
