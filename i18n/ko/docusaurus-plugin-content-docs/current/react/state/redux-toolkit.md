---
sidebar_label: Redux toolkit
title: Redux Toolkit을 사용한 React Spreadsheet
description: "DHTMLX React Spreadsheet와 Redux Toolkit의 단계별 연동 방법입니다."
---

# Redux Toolkit을 사용한 React Spreadsheet {#react-spreadsheet-with-redux-toolkit}

이 튜토리얼은 Redux Toolkit 스토어에서 스프레드시트 데이터를 관리하는 방법을 설명합니다.

## 사전 요구 사항 {#prerequisites}

- React, TypeScript, 그리고 [Redux Toolkit](https://redux-toolkit.js.org/) 기초에 대한 이해
- [상태 관리 기초](react/state/state-management-basics.md) 가이드 완료

## 설정 {#setup}

Vite 프로젝트를 만들고 의존성을 설치하십시오.

~~~bash
npm create vite@latest my-rtk-spreadsheet -- --template react-ts
cd my-rtk-spreadsheet
npm install @dhtmlx/trial-react-spreadsheet @reduxjs/toolkit react-redux
~~~

## slice 만들기 {#create-the-slice}

Redux Toolkit slice에서 스프레드시트 상태 형태, 초기 데이터, 그리고 reducer를 정의하십시오.

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

## 스토어 구성 {#configure-the-store}

Redux 스토어에 slice를 등록하고 타입이 지정된 `RootState` 및 `AppDispatch` 헬퍼를 내보내십시오.

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

앱을 provider로 감싸십시오.

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

## 컴포넌트 만들기 {#create-the-component}

상태를 읽기 위해 `useSelector`를, 각 사용자 동작 후 변경 사항을 동기화하기 위해 `useDispatch`를 사용하여 `ReactSpreadsheet`를 Redux 스토어에 연결하십시오.

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

## ref를 통한 데이터 읽기 {#reading-data-via-ref}

직렬화(serialization)나 셀 값 가져오기와 같은 읽기 전용 작업에는 `ref.current.instance`를 사용하십시오.

~~~tsx
const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    // API 전송, 다운로드 등
};

const getCellValue = (cell: string) => {
    return ref.current?.instance?.getValue(cell);
};
~~~

## 관련 API 및 가이드 {#related-api-and-guides}

- [Props 레퍼런스](react/props.md) - 모든 컴포넌트 props
- [이벤트 레퍼런스](react/events.md) - 이벤트 콜백 props
- [상태 관리 기초](react/state/state-management-basics.md) - 핵심 패턴
