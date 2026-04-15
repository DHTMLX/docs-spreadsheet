---
sidebar_label: Next.js
title: React Spreadsheet in Next.js
description: "How to use DHTMLX React Spreadsheet in a Next.js application with App Router."
---

# React Spreadsheet in Next.js

:::tip Using a commercial license?
Replace `@dhtmlx/trial-react-spreadsheet` with `@dhx/react-spreadsheet` and configure the private registry. See [Installation](./installation.md).
:::

## Overview

DHTMLX Spreadsheet is a client-side widget that requires access to the browser DOM. In Next.js with the App Router, server components are the default — so the spreadsheet must be wrapped in a client component using the `"use client"` directive.

:::note
The React Spreadsheet wrapper's JS output already includes a `"use client"` banner, but you still need the directive in your own component file that imports it.
:::

## Setup

Create a new Next.js project and install React Spreadsheet:

~~~bash
npx create-next-app@latest my-spreadsheet-app
cd my-spreadsheet-app
npm install @dhtmlx/trial-react-spreadsheet
~~~

## Creating a client component

Create a new file for the spreadsheet component with the `"use client"` directive:

~~~tsx title="src/components/SpreadsheetView.tsx"
"use client";

import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/dist/spreadsheet.react.css";

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

## CSS import

Import the CSS file directly in the client component (as shown above) or in your root layout:

~~~tsx title="src/app/layout.tsx"
import "@dhtmlx/trial-react-spreadsheet/dist/spreadsheet.react.css";
~~~

## Container sizing

Ensure the container has explicit dimensions. For a full-page spreadsheet, add these styles to your global CSS:

~~~css title="src/app/globals.css"
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## Complete example

Use the client component in a server page:

~~~tsx title="src/app/page.tsx"
import SpreadsheetView from "@/components/SpreadsheetView";

export default function Home() {
    return <SpreadsheetView />;
}
~~~
