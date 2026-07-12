---
sidebar_label: Next.js
title: Next.js에서 React Spreadsheet 사용
description: "Next.js 애플리케이션의 App Router에서 DHTMLX React Spreadsheet를 사용하는 방법."
---

# Next.js에서 React Spreadsheet 사용 {#react-spreadsheet-in-nextjs}

DHTMLX Spreadsheet는 브라우저 DOM에 대한 접근이 필요한 클라이언트 사이드 위젯입니다. App Router를 사용하는 Next.js에서는 서버 컴포넌트가 기본값이므로 `"use client"` 지시어를 사용하여 스프레드시트를 클라이언트 컴포넌트로 감싸야 합니다.

:::note
React Spreadsheet 래퍼의 JS 출력에는 이미 `"use client"` 배너가 포함되어 있지만, 이를 가져오는 자체 컴포넌트 파일에도 지시어를 추가해야 합니다.
:::

## 설정 {#setup}

새 Next.js 프로젝트를 생성하고 React Spreadsheet를 설치하십시오.

~~~bash
npx create-next-app@latest my-spreadsheet-app
cd my-spreadsheet-app
npm install @dhtmlx/trial-react-spreadsheet
~~~

## 클라이언트 컴포넌트 생성 {#creating-a-client-component}

`"use client"` 지시어를 포함한 스프레드시트 컴포넌트를 위한 새 파일을 생성하십시오.

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

## CSS 가져오기 {#css-import}

위와 같이 클라이언트 컴포넌트에 직접 CSS 파일을 가져오거나 루트 레이아웃에서 가져오십시오.

~~~tsx title="src/app/layout.tsx"
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

## 컨테이너 크기 지정 {#container-sizing}

컨테이너에 명시적인 크기를 지정해야 합니다. 전체 페이지 스프레드시트를 위해서는 전역 CSS에 다음 스타일을 추가하십시오.

~~~css title="src/app/globals.css"
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## 전체 예시 {#complete-example}

서버 페이지에서 클라이언트 컴포넌트를 사용하십시오.

~~~tsx title="src/app/page.tsx"
import SpreadsheetView from "@/components/SpreadsheetView";

export default function Home() {
    return <SpreadsheetView />;
}
~~~

## 관련 API 및 가이드 {#related-api-and-guides}

- [Props 레퍼런스](react/props.md) - 타입과 기본값이 포함된 모든 컴포넌트 props
- [Events 레퍼런스](react/events.md) - 사용자 액션에 응답하기
- [상태 관리 기초](react/state/state-management-basics.md) - React 상태에서 스프레드시트 데이터 관리
