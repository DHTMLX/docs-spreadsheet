---
sidebar_label: Redux toolkit
title: React Spreadsheet with Redux Toolkit
description: "Step-by-step integration of DHTMLX React Spreadsheet with Redux Toolkit."
---

# React Spreadsheet with Redux Toolkit

This tutorial shows how to manage spreadsheet data in a Redux Toolkit store.

## Prerequisites

- Familiarity with React, TypeScript, and [Redux Toolkit](https://redux-toolkit.js.org/) basics
- Completed the [State Management Basics](/react/state/state-management-basics) guide

## Setup

Create a Vite project and install dependencies:

~~~bash
npm create vite@latest my-rtk-spreadsheet -- --template react-ts
cd my-rtk-spreadsheet
npm install @dhtmlx/trial-react-spreadsheet @reduxjs/toolkit react-redux
~~~

## Create the slice

~~~ts title="src/store/spreadsheetSlice.ts"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SheetData } from "@dhtmlx/trial-react-spreadsheet";

interface SpreadsheetState {
    sheets: SheetData[];
    activeSheet: string;
}

const initialState: SpreadsheetState = {
    sheets: [
        {
            id: "sheet1",
            name: "Data",
            cells: {
                A1: { value: "Product", css: "bold" },
                B1: { value: "Price", css: "bold", format: "currency" },
                A2: { value: "Widget" },
                B2: { value: 25.99, format: "currency" },
            },
        },
    ],
    activeSheet: "sheet1",
};

const spreadsheetSlice = createSlice({
    name: "spreadsheet",
    initialState,
    reducers: {
        setSheets(state, action: PayloadAction<SheetData[]>) {
            state.sheets = action.payload;
        },
        setActiveSheet(state, action: PayloadAction<string>) {
            state.activeSheet = action.payload;
        },
        updateCell(
            state,
            action: PayloadAction<{ sheetId: string; cell: string; value: string | number }>
        ) {
            const { sheetId, cell, value } = action.payload;
            const sheet = state.sheets.find((s) => s.id === sheetId);
            if (sheet) {
                sheet.cells[cell] = { ...sheet.cells[cell], value };
            }
        },
    },
});

export const { setSheets, setActiveSheet, updateCell } = spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
~~~

## Configure the store

~~~ts title="src/store/index.ts"
import { configureStore } from "@reduxjs/toolkit";
import spreadsheetReducer from "./spreadsheetSlice";

export const store = configureStore({
    reducer: {
        spreadsheet: spreadsheetReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
~~~

Wrap your app with the provider:

~~~tsx title="src/main.tsx"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
~~~

## Create the component

~~~tsx title="src/App.tsx"
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
import type { RootState } from "./store";
import { setSheets } from "./store/spreadsheetSlice";

const styles = {
    bold: { "font-weight": "bold" },
};

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const dispatch = useDispatch();
    const sheets = useSelector((state: RootState) => state.spreadsheet.sheets);
    const activeSheet = useSelector((state: RootState) => state.spreadsheet.activeSheet);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data?.sheets) {
            dispatch(setSheets(data.sheets));
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet
                ref={ref}
                sheets={sheets}
                styles={styles}
                activeSheet={activeSheet}
                onAfterAction={handleAfterAction}
            />
        </div>
    );
}

export default App;
~~~

## Reading data via ref

Use `ref.current.instance` for read-only operations like serialization or getting cell values:

~~~tsx
const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    // Send to API, download, etc.
};

const getCellValue = (cell: string) => {
    return ref.current?.instance?.getValue(cell);
};
~~~

## Related

- [Props Reference](/react/props/) — all component props
- [Events Reference](/react/events/) — event callback props
- [State Management Basics](/react/state/state-management-basics/) — core patterns
