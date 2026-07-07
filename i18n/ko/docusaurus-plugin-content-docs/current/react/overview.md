---
sidebar_label: Overview
title: React Spreadsheet 개요
description: "공식 React 래퍼 개요: 선언형 데이터 모델, props, 테마, 이벤트, ref 접근."
---

# React Spreadsheet 개요 {#react-spreadsheet-overview}

`ReactSpreadsheet`는 DHTMLX Spreadsheet 위젯의 선언형 React 래퍼입니다. props가 스프레드시트 상태를 기술하는 컴포넌트 기반 API를 제공하며, 래퍼가 기본 위젯과의 동기화를 처리합니다.

:::note
React Spreadsheet 래퍼는 DHTMLX Spreadsheet **Commercial**, **Enterprise**, **Ultimate** 라이선스에서 사용할 수 있습니다. 평가를 위해서는 30일 무료 평가판 패키지를 사용하십시오. 설정 지침은 [설치](react/installation.md)를 참조하십시오.
:::

## 스프레드시트 기능 {#spreadsheet-features}

React 래퍼는 DHTMLX Spreadsheet의 전체 기능 세트에 접근할 수 있습니다.

- 시트 탭이 있는 멀티 시트 스프레드시트(추가, 삭제, 이름 변경)
- 셀 값, 수식(90개 이상의 내장 함수), 숫자 형식 지정
- 셀 스타일 지정, 셀 병합, 고정 창, 데이터 유효성 검사
- 정렬, 필터링, 검색
- 행/열 작업(추가, 삭제, 숨기기/표시, 크기 조정, 자동 맞춤)
- WebAssembly 모듈을 통한 Excel(XLSX) 가져오기 및 내보내기
- 사용자 정의 가능한 툴바 및 컨텍스트 메뉴
- 셀 잠금 및 읽기 전용 모드
- CSS 변수 커스터마이징이 가능한 4가지 내장 테마(light, dark, contrast-light, contrast-dark)
- UI 레이블, 수식 이름, 숫자/날짜 형식 로컬라이제이션
- 실행 취소/다시 실행 기록
- 번들된 타입 정의 및 JSDoc 설명이 포함된 TypeScript 지원

## 래퍼 설계 원칙 {#wrapper-design-principles}

- **Props는 액션이 아닌 상태를 기술합니다.** "트리거" props는 없습니다. 데이터를 전달하면 컴포넌트가 위젯을 그에 맞게 업데이트합니다.
- **`sheets`는 모든 스프레드시트 데이터의 단일 정보 소스입니다.** 셀, 병합 범위, 고정 창, 필터, 정렬이 포함됩니다.
- **Ref는 탈출구입니다.** 선언형 props에 매핑되지 않는 작업(내보내기, 프로그래밍 방식 선택, 실행 취소/다시 실행)의 경우 ref를 통해 기본 위젯 인스턴스에 접근하십시오.
- **모든 위젯 이벤트는 타입이 지정된 `onXxx` 콜백 props로 노출됩니다.** "Before" 콜백은 `false`를 반환하여 작업을 취소할 수 있습니다.

## 버전 요구 사항 {#version-requirements}

- React 18+
- ESM 전용 패키지

## 빠른 시작 {#quick-start}

하나의 시트와 서식이 지정된 셀로 스프레드시트를 렌더링하는 최소 동작 예시입니다.

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Sales",
            cells: {
                A1: { value: "Product", css: "bold" },
                B1: { value: "Revenue", css: "bold", format: "currency" },
                A2: { value: "Widget" },
                B2: { value: 15000, format: "currency" },
            },
        },
    ]);

    const styles = {
        bold: { "font-weight": "bold" },
    };

    return <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />;
}
~~~

## 가져오기 경로 {#import-paths}

**평가판** (공개 npm, 30일 무료 평가판):

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

**상용** (비공개 npm, 라이선스 필요):

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

레지스트리 구성 및 사용 가능한 모든 패키지 변형은 [설치](react/installation.md)를 참조하십시오.

## Prop 업데이트 동작 {#prop-update-behavior}

Props는 컴포넌트가 변경 사항을 처리하는 방식에 따라 분류됩니다.

| 카테고리 | Props | 변경 시 동작 |
|----------|-------|----------------------|
| **초기화 전용** | `menu`, `editLine`, `toolbarBlocks`, `multiSheets`, `formats`, `localization`, `importModulePath`, `exportModulePath`, `spreadsheetLocale` | 위젯이 소멸되고 재생성됩니다. 스프레드시트 데이터는 보존되지만 실행 취소/다시 실행 기록과 UI 상태(선택 영역, 스크롤 위치)는 초기화됩니다. |
| **런타임** | `readonly`, `rowsCount`, `colsCount` | 데이터 손실이나 UI 상태 초기화 없이 즉시 적용됩니다. |
| **데이터** | `sheets`, `activeSheet` | 증분 방식으로 적용됩니다. 변경된 셀, 범위 또는 설정만 업데이트됩니다. |
| **재파싱** | `styles` | 스타일 변경 시 전체 데이터 재로드가 필요합니다. 스프레드시트 데이터는 보존되지만 실행 취소/다시 실행 기록과 UI 상태는 초기화됩니다. |
| **상태** | `search`, `theme`, `loadUrl` | 전용 위젯 API를 통해 부작용 없이 적용됩니다. |
| **컨테이너** | `className`, `style` | 래퍼 `<div>`에 적용되는 표준 React DOM props입니다. |

## 예시 {#examples}

### 수식이 있는 멀티 시트 {#multi-sheet-with-formulas}

시트 탭이 활성화된 상태에서 셀 값과 `SUM` 수식이 있는 두 개의 시트입니다.

~~~tsx
const [sheets] = useState<SheetData[]>([
    {
        id: "revenue",
        name: "Revenue",
        cells: {
            A1: { value: "Q1" }, B1: { value: "Q2" }, C1: { value: "Q3" }, D1: { value: "Q4" },
            A2: { value: 12000 }, B2: { value: 15000 }, C2: { value: 18000 }, D2: { value: 21000 },
            A3: { value: "Total" }, B3: { value: "=SUM(A2:D2)", format: "currency" },
        },
    },
    {
        id: "expenses",
        name: "Expenses",
        cells: {
            A1: { value: "Category" }, B1: { value: "Amount", format: "currency" },
            A2: { value: "Marketing" }, B2: { value: 5000, format: "currency" },
            A3: { value: "Operations" }, B3: { value: 8000, format: "currency" },
        },
    },
]);

<ReactSpreadsheet sheets={sheets} multiSheets={true} activeSheet="revenue" />
~~~

### 사용자 정의 툴바 {#custom-toolbar}

`toolbarBlocks`에 블록 식별자 배열을 전달하여 필요한 툴바 섹션만 표시하십시오.

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### 잠긴 셀이 있는 읽기 전용 {#read-only-with-locked-cells}

`readonly={true}`를 설정하면 위젯 수준에서 모든 편집이 비활성화됩니다. 셀에 `locked: true`를 추가하면 스프레드시트가 읽기 전용 모드가 아닐 때 개별 셀을 보호합니다.

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Report",
        cells: {
            A1: { value: "Metric", locked: true },
            B1: { value: "Value", locked: true },
            A2: { value: "Revenue", locked: true },
            B2: { value: 50000, format: "currency", locked: true },
        },
    },
];

<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

## ref를 통한 명령형 접근 {#imperative-access-via-ref}

`SpreadsheetRef`를 사용하여 데이터 직렬화, 실행 취소/다시 실행 트리거, 프로그래밍 방식의 선택 설정과 같이 선언형 props에 매핑되지 않는 작업에 기본 위젯 인스턴스에 접근하십시오.

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);

    const handleExport = () => {
        const data = ref.current?.instance?.serialize();
        console.log(data);
    };

    const handleUndo = () => {
        ref.current?.instance?.undo();
    };

    return (
        <>
            <button onClick={handleExport}>Export</button>
            <button onClick={handleUndo}>Undo</button>
            <ReactSpreadsheet ref={ref} sheets={[]} />
        </>
    );
}
~~~

`instance` 속성은 위젯이 초기화되기 전과 언마운트 후에는 `null`입니다.

## API 레퍼런스 {#api-reference}

| 문서 | 내용 |
|----------|----------|
| [Props 레퍼런스](react/props.md) | 타입, 기본값, 예시가 포함된 모든 컴포넌트 props |
| [Events 레퍼런스](react/events.md) | 카테고리별로 분류된 이벤트 콜백 props |
| [Types 레퍼런스](react/types.md) | TypeScript 인터페이스, 열거형, 타입 별칭 |
