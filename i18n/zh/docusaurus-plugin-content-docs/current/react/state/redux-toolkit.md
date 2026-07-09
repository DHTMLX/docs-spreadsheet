---
sidebar_label: Redux toolkit
title: 结合 Redux Toolkit 使用 React Spreadsheet
description: "DHTMLX React Spreadsheet 与 Redux Toolkit 的逐步集成指南。"
---

# 结合 Redux Toolkit 使用 React Spreadsheet {#react-spreadsheet-with-redux-toolkit}

本教程演示如何在 Redux Toolkit store 中管理电子表格数据。

## 前提条件 {#prerequisites}

- 熟悉 React、TypeScript 及 [Redux Toolkit](https://redux-toolkit.js.org/) 基础知识
- 已完成[状态管理基础](react/state/state-management-basics.md)指南

## 初始化设置 {#setup}

创建 Vite 项目并安装依赖：

~~~bash
npm create vite@latest my-rtk-spreadsheet -- --template react-ts
cd my-rtk-spreadsheet
npm install @dhtmlx/trial-react-spreadsheet @reduxjs/toolkit react-redux
~~~

## 创建 slice {#create-the-slice}

在 Redux Toolkit slice 中定义电子表格的状态结构、初始数据和 reducers。

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

## 配置 store {#configure-the-store}

在 Redux store 中注册 slice，并导出类型化的 `RootState` 和 `AppDispatch` 辅助类型。

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

使用 provider 包裹您的应用：

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

## 创建组件 {#create-the-component}

使用 `useSelector` 读取状态，使用 `useDispatch` 在每次用户操作后将变更同步回 store，从而将 `ReactSpreadsheet` 连接到 Redux store。

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

## 通过 ref 读取数据 {#reading-data-via-ref}

使用 `ref.current.instance` 执行只读操作，例如序列化或获取单元格值：

~~~tsx
const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    // 发送到 API、下载等
};

const getCellValue = (cell: string) => {
    return ref.current?.instance?.getValue(cell);
};
~~~

## 相关 API 和指南 {#related-api-and-guides}

- [Props 参考](react/props.md) - 所有组件 props
- [Events 参考](react/events.md) - 事件 callback props
- [状态管理基础](react/state/state-management-basics.md) - 核心模式
