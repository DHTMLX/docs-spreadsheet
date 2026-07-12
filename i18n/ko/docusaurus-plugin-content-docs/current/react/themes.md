---
sidebar_label: 테마
title: React Spreadsheet 테마
description: "DHTMLX React Spreadsheet에 내장 테마 또는 커스텀 테마를 적용합니다."
---

# React Spreadsheet 테마 {#react-spreadsheet-themes}

React Spreadsheet는 네 가지 내장 테마를 제공하며 CSS 변수를 통한 커스텀 테마를 지원합니다. `theme` prop을 사용하여 내장 테마를 선택하거나 직접 정의한 테마를 적용하십시오.

## 내장 테마 {#built-in-themes}

[`SpreadsheetTheme`](react/types.md#spreadsheettheme) 타입은 네 가지 내장 테마를 정의합니다.

- `"light"` (기본값)
- `"dark"`
- `"contrast-light"`
- `"contrast-dark"`

커스텀 테마 이름을 문자열로 전달할 수도 있습니다.

## 테마 적용 {#applying-a-theme}

`ReactSpreadsheet`에 `theme` prop으로 사용하려는 테마 이름을 전달하십시오.

~~~tsx
<ReactSpreadsheet sheets={sheets} theme="dark" />
~~~

## 런타임 전환 {#switching-at-runtime}

React 상태를 사용하여 테마를 동적으로 전환하십시오.

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData, type SpreadsheetTheme } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([/* ... */]);
    const [theme, setTheme] = useState<SpreadsheetTheme>("light");

    return (
        <>
            <select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="contrast-light">Contrast Light</option>
                <option value="contrast-dark">Contrast Dark</option>
            </select>

            <ReactSpreadsheet sheets={sheets} theme={theme} />
        </>
    );
}
~~~

## 커스텀 CSS 변수 {#custom-css-variables}

DHTMLX Spreadsheet는 레이어드 CSS 변수 시스템을 사용합니다. 이 변수를 재정의하여 내장 테마 이상으로 외관을 커스터마이즈할 수 있습니다.

### 커스텀 테마 만들기 {#creating-a-custom-theme}

커스텀 `data-dhx-theme` 선택자를 정의하고, 필요한 변수를 재정의한 뒤 테마 이름을 prop으로 전달하십시오.

~~~css title="src/custom-theme.css"
[data-dhx-theme='corporate'] {
    /* 색상 체계 */
    --dhx-h-primary: 220;
    --dhx-s-primary: 60%;
    --dhx-l-primary: 45%;

    /* 툴바 및 그리드 */
    --dhx-s-toolbar-background: #f0f4f8;
    --dhx-s-grid-header-background: #e2e8f0;

    /* 스프레드시트 범위 색상 */
    --dhx-spreadsheet-range-background-1: #bee3f8;
    --dhx-spreadsheet-range-color-1: #2b6cb0;
}
~~~

~~~tsx
import "./custom-theme.css";

<ReactSpreadsheet sheets={sheets} theme="corporate" />
~~~

## 관련 가이드 {#related-guides}

- [테마](/themes/) - DHTMLX Spreadsheet의 내장 테마 개요
- [기본 테마 구성](themes/base_themes_configuration.md) - 기본 테마 구성
- [커스텀 테마](themes/custom_theme.md) - 커스텀 테마 만들기
