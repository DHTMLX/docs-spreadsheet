---
sidebar_label: 빠른 시작
title: React Spreadsheet 빠른 시작
description: "DHTMLX React Spreadsheet 컴포넌트를 처음 렌더링하기 위한 단계별 가이드입니다."
---

# React Spreadsheet 빠른 시작 {#quick-start-with-react-spreadsheet}

이 튜토리얼은 DHTMLX Spreadsheet를 사용하여 React 애플리케이션을 처음부터 만드는 방법을 안내합니다.

## 새 프로젝트 만들기 {#create-a-new-project}

~~~bash
npm create vite@latest my-spreadsheet-app -- --template react-ts
cd my-spreadsheet-app
~~~

## React Spreadsheet 설치 {#install-react-spreadsheet}

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

다른 패키지 변형에 대해서는 [설치](react/installation.md)를 참조하십시오.

## 데모 데이터 만들기 {#create-demo-data}

샘플 스프레드시트 데이터가 담긴 `src/data.ts` 파일을 만드십시오.

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

## 컴포넌트 만들기 {#create-the-component}

`src/App.tsx`의 내용을 다음으로 교체하십시오.

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

## 스타일 추가 {#add-styles}

전체 높이 레이아웃을 위해 `src/index.css`를 업데이트하십시오.

~~~css title="src/index.css"
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## 앱 시작 {#start-the-app}

~~~bash
npm run dev
~~~

터미널에 표시된 URL(일반적으로 `http://localhost:5173`)을 열어 스프레드시트를 확인하십시오.

## 관련 API 및 가이드 {#related-api-and-guides}

- [Props 레퍼런스](react/props.md) - 스프레드시트 동작 구성
- [이벤트 레퍼런스](react/events.md) - 사용자 동작에 응답
- [타입 레퍼런스](react/types.md) - TypeScript 인터페이스 및 열거형
- [데이터 & 상태 관리](react/state/state-management-basics.md) - 애플리케이션 상태에서 스프레드시트 데이터 관리

전체 동작 예제는 [GitHub 데모 저장소](https://github.com/DHTMLX/react-spreadsheet-examples)에서도 확인할 수 있습니다.
