---
sidebar_label: Redux toolkit
title: React Spreadsheet mit Redux Toolkit
description: "Schritt-fur-Schritt-Integration von DHTMLX React Spreadsheet mit Redux Toolkit."
---

# React Spreadsheet mit Redux Toolkit {#react-spreadsheet-with-redux-toolkit}

Dieses Tutorial zeigt, wie Sie Tabellendaten in einem Redux-Toolkit-Store verwalten.

## Voraussetzungen {#prerequisites}

- Kenntnisse in React, TypeScript und den Grundlagen von [Redux Toolkit](https://redux-toolkit.js.org/)
- Abgeschlossene Anleitung [Grundlagen der Zustandsverwaltung](react/state/state-management-basics.md)

## Einrichtung {#setup}

Erstellen Sie ein Vite-Projekt und installieren Sie die Abhangigkeiten:

~~~bash
npm create vite@latest my-rtk-spreadsheet -- --template react-ts
cd my-rtk-spreadsheet
npm install @dhtmlx/trial-react-spreadsheet @reduxjs/toolkit react-redux
~~~

## Slice erstellen {#create-the-slice}

Definieren Sie die Statusstruktur der Tabellenkalkulation, die Anfangsdaten und die Reducer in einem Redux-Toolkit-Slice.

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

## Store konfigurieren {#configure-the-store}

Registrieren Sie den Slice im Redux-Store und exportieren Sie die typisierten Hilfsfunktionen `RootState` und `AppDispatch`.

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

Umschliessen Sie Ihre App mit dem Provider:

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

## Komponente erstellen {#create-the-component}

Verbinden Sie `ReactSpreadsheet` mit dem Redux-Store mithilfe von `useSelector` zum Lesen des Status und `useDispatch`, um Anderungen nach jeder Benutzeraktion zuruckzusynchronisieren.

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

## Daten per Ref lesen {#reading-data-via-ref}

Verwenden Sie `ref.current.instance` fur schreibgeschutzte Operationen wie Serialisierung oder das Abrufen von Zellenwerten:

~~~tsx
const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    // An API senden, herunterladen usw.
};

const getCellValue = (cell: string) => {
    return ref.current?.instance?.getValue(cell);
};
~~~

## Verwandte API-Referenzen und Anleitungen {#related-api-and-guides}

- [Props-Referenz](react/props.md) - alle Komponenten-Props
- [Events-Referenz](react/events.md) - Event-Callback-Props
- [Grundlagen der Zustandsverwaltung](react/state/state-management-basics.md) - Kernmuster
