---
sidebar_label: Next.js
title: React Spreadsheet in Next.js
description: "So verwenden Sie DHTMLX React Spreadsheet in einer Next.js-Anwendung mit App Router."
---

# React Spreadsheet in Next.js {#react-spreadsheet-in-nextjs}

DHTMLX Spreadsheet ist ein clientseitiges Widget, das Zugriff auf das Browser-DOM benötigt. In Next.js mit dem App Router sind Server-Komponenten der Standard, daher müssen Sie die Tabelle in eine Client-Komponente mit der Direktive `"use client"` einbetten.

:::note
Die JS-Ausgabe des React Spreadsheet-Wrappers enthält bereits ein `"use client"`-Banner, aber Sie benötigen die Direktive trotzdem in Ihrer eigenen Komponentendatei, die ihn importiert.
:::

## Einrichtung {#setup}

Erstellen Sie ein neues Next.js-Projekt und installieren Sie React Spreadsheet:

~~~bash
npx create-next-app@latest my-spreadsheet-app
cd my-spreadsheet-app
npm install @dhtmlx/trial-react-spreadsheet
~~~

## Eine Client-Komponente erstellen {#creating-a-client-component}

Erstellen Sie eine neue Datei für die Tabellenkomponente mit der Direktive `"use client"`:

~~~tsx title="src/components/SpreadsheetView.tsx"
"use client";

import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

const initialSheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Data",
        cells: {
            A1: { value: "Name", css: "bold" },
            B1: { value: "Value", css: "bold" },
            A2: { value: "Item 1" },
            B2: { value: 100 },
        },
    },
];

const styles = {
    bold: { "font-weight": "bold" },
};

export default function SpreadsheetView() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}
~~~

## CSS-Import {#css-import}

Importieren Sie die CSS-Datei direkt in der Client-Komponente (wie oben gezeigt) oder in Ihrem Root-Layout:

~~~tsx title="src/app/layout.tsx"
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

## Container-Dimensionierung {#container-sizing}

Stellen Sie sicher, dass der Container explizite Abmessungen hat. Für eine ganzseitige Tabelle fügen Sie diese Stile zu Ihrer globalen CSS-Datei hinzu:

~~~css title="src/app/globals.css"
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## Vollständiges Beispiel {#complete-example}

Verwenden Sie die Client-Komponente in einer Server-Seite:

~~~tsx title="src/app/page.tsx"
import SpreadsheetView from "@/components/SpreadsheetView";

export default function Home() {
    return <SpreadsheetView />;
}
~~~

## Verwandte API und Anleitungen {#related-api-and-guides}

- [Props-Referenz](react/props.md) - alle Komponenten-Props mit Typen und Standardwerten
- [Events-Referenz](react/events.md) - auf Benutzeraktionen reagieren
- [Grundlagen der Zustandsverwaltung](react/state/state-management-basics.md) - Tabellendaten im React-Zustand verwalten
