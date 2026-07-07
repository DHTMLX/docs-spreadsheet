---
sidebar_label: Quick start
title: Schnellstart mit React Spreadsheet
description: "Schritt-fur-Schritt-Anleitung zum Rendern Ihrer ersten DHTMLX React Spreadsheet-Komponente."
---

# Schnellstart mit React Spreadsheet {#quick-start-with-react-spreadsheet}

Dieses Tutorial fuhrt Sie durch die Erstellung einer React-Anwendung mit DHTMLX Spreadsheet von Grund auf.

## Neues Projekt erstellen {#create-a-new-project}

~~~bash
npm create vite@latest my-spreadsheet-app -- --template react-ts
cd my-spreadsheet-app
~~~

## React Spreadsheet installieren {#install-react-spreadsheet}

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

Informationen zu anderen Paketvarianten finden Sie unter [Installation](react/installation.md).

## Demodaten erstellen {#create-demo-data}

Erstellen Sie eine Datei `src/data.ts` mit Beispieldaten fur die Tabellenkalkulation:

~~~ts title="src/data.ts"
import type { SheetData } from "@dhtmlx/trial-react-spreadsheet";

export const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Sales",
        cells: {
            A1: { value: "Product", css: "bold" },
            B1: { value: "Revenue", css: "bold", format: "currency" },
            A2: { value: "Widget" },
            B2: { value: 15000, format: "currency" },
            A3: { value: "Gadget" },
            B3: { value: 22000, format: "currency" },
            A4: { value: "Total" },
            B4: { value: "=SUM(B2:B3)", format: "currency" },
        },
    },
];

export const styles = {
    bold: { "font-weight": "bold" },
};
~~~

## Komponente erstellen {#create-the-component}

Ersetzen Sie den Inhalt von `src/App.tsx`:

~~~tsx title="src/App.tsx"
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
import { sheets as initialSheets, styles } from "./data";

function App() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}

export default App;
~~~

## Stile hinzufugen {#add-styles}

Aktualisieren Sie `src/index.css`, um ein Layout mit voller Hohe sicherzustellen:

~~~css title="src/index.css"
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## App starten {#start-the-app}

~~~bash
npm run dev
~~~

Offnen Sie die in Ihrem Terminal angezeigte URL (in der Regel `http://localhost:5173`), um die Tabellenkalkulation anzuzeigen.

## Verwandte API-Referenzen und Anleitungen {#related-api-and-guides}

- [Props-Referenz](react/props.md) - Konfigurieren Sie das Verhalten der Tabellenkalkulation
- [Events-Referenz](react/events.md) - Reagieren Sie auf Benutzeraktionen
- [Typen-Referenz](react/types.md) - TypeScript-Interfaces und Enums
- [Daten- und Zustandsverwaltung](react/state/state-management-basics.md) - Tabellendaten im Anwendungsstatus verwalten

Sie konnen auch das [GitHub-Demo-Repository](https://github.com/DHTMLX/react-spreadsheet-examples) fur ein vollstandiges funktionierendes Beispiel erkunden.
