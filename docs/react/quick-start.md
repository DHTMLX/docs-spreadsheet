---
sidebar_label: Quick start
title: Quick Start with React Spreadsheet
description: "Step-by-step guide to rendering your first DHTMLX React Spreadsheet component."
---

# Quick Start with React Spreadsheet

This tutorial walks you through creating a React application with DHTMLX Spreadsheet from scratch.

## Create a new project

~~~bash
npm create vite@latest my-spreadsheet-app -- --template react-ts
cd my-spreadsheet-app
~~~

## Install React Spreadsheet

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

For other package variants, see [Installation](/react/installation/).

## Create demo data

Create a file `src/data.ts` with sample spreadsheet data:

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

## Create the component

Replace the contents of `src/App.tsx`:

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

## Add styles

Update `src/index.css` to ensure full-height layout:

~~~css title="src/index.css"
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## Start the app

~~~bash
npm run dev
~~~

Open the URL shown in your terminal (typically `http://localhost:5173`) to see the spreadsheet.

## Next steps

- [Props Reference](/react/props/) — configure the spreadsheet behavior
- [Events Reference](/react/events/) — respond to user actions
- [Types Reference](/react/types/) — TypeScript interfaces and enums
- [Data & State Management](/react/state/index/) — manage spreadsheet data in application state

You can also explore the [GitHub demo repository](https://github.com/DHTMLX/react-spreadsheet-demo) for a complete working example.
