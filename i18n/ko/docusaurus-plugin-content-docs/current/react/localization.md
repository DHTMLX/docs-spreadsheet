---
sidebar_label: Localization
title: React Spreadsheet 로컬라이제이션
description: "React Spreadsheet에서 UI 레이블, 수식 이름, 숫자/날짜 형식을 로컬라이즈하는 방법."
---

# React Spreadsheet 로컬라이제이션 {#react-spreadsheet-localization}

React Spreadsheet는 UI의 서로 다른 측면을 위한 두 가지 별개의 로컬라이제이션 메커니즘을 제공합니다.

## 두 가지 로컬라이제이션 메커니즘 {#two-localization-mechanisms}

| 메커니즘 | Prop | 제어 대상 |
|-----------|------|-----------------|
| UI 로컬라이제이션 | `spreadsheetLocale` | 메뉴 레이블, 툴바 툴팁, 대화 상자 텍스트, 로컬라이즈된 수식 이름 |
| 숫자/날짜 형식 지정 | `localization` | 소수점 구분 기호, 통화 기호, 날짜/시간 표시 형식 |

이 props는 독립적입니다. 하나 또는 둘 다 사용할 수 있습니다.

## UI 로컬라이제이션 (spreadsheetLocale) {#ui-localization-spreadsheetlocale}

`spreadsheetLocale` prop은 두 가지 속성을 가진 [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) 객체를 받습니다.

- `locale` - UI 문자열 재정의의 `Record<string, string>`
- `formulas` - 카테고리별로 그룹화된 로컬라이즈된 수식 이름의 `Record<string, [string, string?][]>`

~~~tsx
const locale: SpreadsheetLocale = {
    locale: {
        "File": "Datei",
        "Edit": "Bearbeiten",
        "Insert": "Einfügen",
        "Undo": "Rückgängig",
        "Redo": "Wiederherstellen",
        // ... 더 많은 UI 문자열
    },
    formulas: {
        "MATCH": [
            ["Suchwert", "Erforderlich. Der Wert, der im Sucharray abgeglichen werden soll."],
            ["Sucharray", "Erforderlich. Ein Zellbereich oder ein Array-Bezug."],
        ],
        // ... 더 많은 수식 카테고리
    },
};

<ReactSpreadsheet sheets={sheets} spreadsheetLocale={locale} />
~~~

:::warning
`spreadsheetLocale`은 초기화 전용 prop입니다. 초기 렌더링 후 이 값을 변경하면 위젯이 소멸되고 재생성됩니다. 실행 취소/다시 실행 기록과 UI 상태(선택 영역, 스크롤 위치)가 초기화됩니다.
:::

## 숫자/날짜 형식 지정 (localization) {#numberdate-formatting-localization}

`localization` prop은 숫자와 날짜의 표시 방식을 제어합니다. 소수점 구분 기호, 통화 기호, 날짜 패턴을 설정합니다. DHTMLX Spreadsheet [`localization`](api/spreadsheet_localization_config.md) 구성 속성과 동일한 형식을 사용합니다.

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    localization={{
        decimal: ",",
        thousands: " ",
        currency: "€",
    }}
/>
~~~

:::warning
`localization`도 초기화 전용 prop입니다. 값을 변경하면 전체 소멸/재생성 주기가 실행됩니다.
:::

## 관련 API 및 가이드 {#related-api-and-guides}

- [로컬라이제이션](localization.md) - DHTMLX Spreadsheet 로컬라이제이션 가이드
- [SpreadsheetLocale 타입](react/types.md#spreadsheetlocale) - TypeScript 인터페이스 레퍼런스
