---
sidebar_label: Overview
title: React Spreadsheet Übersicht
description: "Übersicht des offiziellen React-Wrappers: deklaratives Datenmodell, Props, Theming, Events und Ref-Zugriff."
---

# React Spreadsheet Übersicht {#react-spreadsheet-overview}

`ReactSpreadsheet` ist ein deklarativer React-Wrapper für das DHTMLX Spreadsheet-Widget. Er bietet eine komponentenbasierte API, bei der Props den Tabellenzustand beschreiben und der Wrapper die Synchronisierung mit dem zugrundeliegenden Widget übernimmt.

:::note
Der React Spreadsheet-Wrapper ist unter den DHTMLX Spreadsheet-Lizenzen **Commercial**, **Enterprise** und **Ultimate** verfügbar. Zur Evaluierung verwenden Sie das kostenlose 30-Tage-Evaluierungspaket. Anweisungen zur Einrichtung finden Sie unter [Installation](react/installation.md).
:::

## Spreadsheet-Funktionen {#spreadsheet-features}

Der React-Wrapper bietet Zugriff auf den vollständigen Funktionsumfang von DHTMLX Spreadsheet:

- Mehrseitige Tabellen mit Tabellenblatt-Reitern (hinzufügen, entfernen, umbenennen)
- Zellenwerte, Formeln (90+ integrierte Funktionen) und Zahlenformatierung
- Zellenstile, verbundene Zellen, fixierte Fenster, Datenvalidierung
- Sortierung, Filterung und Suche
- Zeilen-/Spaltenoperationen (hinzufügen, löschen, ein-/ausblenden, Größe ändern, automatisch anpassen)
- Excel (XLSX) Import und Export über WebAssembly-Module
- Anpassbare Toolbar und Kontextmenü
- Zellensperrung und Schreibschutz-Modus
- 4 integrierte Themes (light, dark, contrast-light, contrast-dark) mit CSS-Variable-Anpassung
- Lokalisierung von UI-Bezeichnungen, Formelnamen und Zahlen-/Datumsformatierung
- Rückgängig/Wiederherstellen-Verlauf
- TypeScript-Unterstützung mit gebündelten Typdefinitionen und JSDoc-Beschreibungen

## Design-Prinzipien des Wrappers {#wrapper-design-principles}

- **Props beschreiben den Zustand, keine Aktionen.** Es gibt keine "Auslöser"-Props. Übergeben Sie Daten, und die Komponente aktualisiert das Widget entsprechend.
- **`sheets` ist die einzige Datenquelle** für alle Tabellendaten: Zellen, verbundene Bereiche, fixierte Fenster, Filter, Sortierung.
- **Ref ist ein Notausgang.** Für Operationen, die sich nicht auf deklarative Props abbilden lassen (Export, programmatische Auswahl, Rückgängig/Wiederherstellen), greifen Sie über eine Ref auf die zugrundeliegende Widget-Instanz zu.
- **Alle Widget-Events sind als typisierte `onXxx`-Callback-Props verfügbar.** "Before"-Callbacks können `false` zurückgeben, um die Operation abzubrechen.

## Versionsanforderungen {#version-requirements}

- React 18+
- Nur ESM-Paket

## Schnellstart {#quick-start}

Ein minimales funktionsfähiges Beispiel, das zeigt, wie eine Tabelle mit einem Tabellenblatt und formatierten Zellen gerendert wird.

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

## Import-Pfade {#import-paths}

**Evaluierung** (öffentliches npm, kostenlose 30-Tage-Evaluierung):

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

**Kommerziell** (privates npm, Lizenz erforderlich):

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

Informationen zur Registry-Konfiguration und allen verfügbaren Paketvarianten finden Sie unter [Installation](react/installation.md).

## Prop-Aktualisierungsverhalten {#prop-update-behavior}

Props werden danach kategorisiert, wie die Komponente mit Änderungen umgeht:

| Kategorie | Props | Was passiert bei Änderung |
|----------|-------|----------------------|
| **Init-Only** | `menu`, `editLine`, `toolbarBlocks`, `multiSheets`, `formats`, `localization`, `importModulePath`, `exportModulePath`, `spreadsheetLocale` | Das Widget wird zerstört und neu erstellt. Tabellendaten bleiben erhalten, aber Rückgängig/Wiederherstellen-Verlauf und UI-Zustand (Auswahl, Scrollposition) werden zurückgesetzt. |
| **Laufzeit** | `readonly`, `rowsCount`, `colsCount` | Wird sofort ohne Datenverlust oder UI-Zustandsreset angewendet. |
| **Daten** | `sheets`, `activeSheet` | Wird inkrementell angewendet; nur geänderte Zellen, Bereiche oder Einstellungen werden aktualisiert. |
| **Neu-Parsen** | `styles` | Stiländerungen erfordern einen vollständigen Datenneulade. Tabellendaten bleiben erhalten, aber Rückgängig/Wiederherstellen-Verlauf und UI-Zustand werden zurückgesetzt. |
| **Zustand** | `search`, `theme`, `loadUrl` | Wird über dedizierte Widget-APIs ohne Nebeneffekte angewendet. |
| **Container** | `className`, `style` | Standard-React-DOM-Props auf dem Wrapper-`<div>`. |

## Beispiele {#examples}

### Mehrere Tabellenblätter mit Formeln {#multi-sheet-with-formulas}

Zwei Tabellenblätter mit Zellenwerten und einer `SUM`-Formel, gerendert mit aktivierten Tabellenblatt-Reitern.

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

### Benutzerdefinierte Toolbar {#custom-toolbar}

Übergeben Sie ein Array von Block-Identifikatoren an `toolbarBlocks`, um nur die benötigten Toolbar-Abschnitte anzuzeigen.

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Schreibschutz mit gesperrten Zellen {#read-only-with-locked-cells}

Setzen Sie `readonly={true}`, um alle Bearbeitungen auf Widget-Ebene zu deaktivieren. Das Hinzufügen von `locked: true` bei Zellen schützt diese einzeln, wenn die Tabelle nicht im Schreibschutz-Modus ist.

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

## Imperativer Zugriff über Ref {#imperative-access-via-ref}

Verwenden Sie eine `SpreadsheetRef`, um auf die zugrundeliegende Widget-Instanz für Operationen zuzugreifen, die sich nicht auf deklarative Props abbilden lassen, z. B. Daten serialisieren, Rückgängig/Wiederherstellen auslösen oder die Auswahl programmatisch setzen.

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

Die `instance`-Eigenschaft ist `null`, bevor das Widget initialisiert wird und nach dem Unmount.

## API-Referenz {#api-reference}

| Dokument | Inhalt |
|----------|----------|
| [Props-Referenz](react/props.md) | Alle Komponenten-Props mit Typen, Standardwerten und Beispielen |
| [Events-Referenz](react/events.md) | Event-Callback-Props nach Kategorie gruppiert |
| [Typen-Referenz](react/types.md) | TypeScript-Interfaces, Enums und Typ-Aliase |
