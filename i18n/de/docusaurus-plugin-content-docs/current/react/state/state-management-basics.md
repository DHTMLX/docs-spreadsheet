---
sidebar_label: Basics
title: Grundlagen der Datenbindung und Zustandsverwaltung
description: "Kernmuster zur Verwaltung von Tabellendaten in React: kontrollierte Props, Event-Callbacks und der Ref-Escape-Hatch."
---

# Grundlagen der Datenbindung und Zustandsverwaltung {#data-binding--state-management-basics}

## Das deklarative Modell {#the-declarative-model}

React Spreadsheet folgt einem deklarativen Ansatz: Sie speichern Blattdaten im React-Status, ubergeben sie als Props, und der Wrapper vergleicht Ihre Daten automatisch mit dem aktuellen Widget-Status und wendet nur die Anderungen an.

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

## Zellen aktualisieren {#updating-cells}

Verwenden Sie unveranderliche Statusaktualisierungen mit dem funktionalen `setState`-Updater:

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

## Auf Benutzeraktionen reagieren {#responding-to-user-actions}

Verwenden Sie `onAfterAction`, um auf Benutzeranderungen zu reagieren. Kombinieren Sie es mit `ref`, um die aktuellen Widget-Daten zu lesen:

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [sheets, setSheets] = useState<SheetData[]>([/* ... */]);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data) {
            // Widget-Status zuruck in den React-Status synchronisieren
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

## Der Ref-Escape-Hatch {#the-ref-escape-hatch}

Fur Operationen, die sich nicht auf deklarative Props abbilden lassen, verwenden Sie [`SpreadsheetRef`](react/types.md#spreadsheetref), um auf die zugrunde liegende Widget-Instanz zuzugreifen:

- **Daten serialisieren:** `ref.current?.instance?.serialize()`
- **Ruckgangig/Wiederholen:** `ref.current?.instance?.undo()` / `ref.current?.instance?.redo()`
- **Zellenwert abrufen:** `ref.current?.instance?.getValue("A1")`
- **Programmgesteuerte Auswahl:** `ref.current?.instance?.selection.setSelectedCell("A1:C5")`

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    console.log(data);
};

<ReactSpreadsheet ref={ref} sheets={sheets} />
~~~

:::warning
Vermeiden Sie es, imperative Schreibvorgange (z. B. `instance.setValue()`) mit der deklarativen `sheets`-Prop zu vermischen. Der Wrapper kann imperative Anderungen beim nachsten Render-Zyklus uberschreiben. Verwenden Sie das Ref nur zum **Lesen** von Daten und fur Operationen wie Ruckgangig/Wiederholen, Auswahl und Export.
:::

## Kontrollierte Suche {#controlled-search}

Verwenden Sie die `search`-Prop zusammen mit `onSearchResults` fur eine kontrollierte Suche:

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

## Ruckgangig / Wiederholen {#undo--redo}

Verwenden Sie `onStateChange`, um die Verfugbarkeit von Ruckgangig/Wiederholen zu verfolgen, und rufen Sie `undo()`/`redo()` uber das Ref auf:

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

## Performance {#performance}

- Verwenden Sie `useMemo` fur abgeleitete Blatter, um unnnotige Neuberechnungen zu vermeiden:

~~~tsx
const filteredSheets = useMemo(
    () => sheets.filter((s) => s.name !== "Hidden"),
    [sheets]
);

<ReactSpreadsheet sheets={filteredSheets} />
~~~

- Vermeiden Sie es, das `styles`-Objekt bei jedem Render neu zu erstellen. Definieren Sie es ausserhalb der Komponente oder umschliessen Sie es mit `useMemo`.
- Verwenden Sie den funktionalen `setState`-Updater, um veraltete Closure-Probleme in Event-Callbacks zu vermeiden.
