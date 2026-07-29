---
sidebar_label: 타입
title: 타입 레퍼런스
description: "@dhx/react-spreadsheet에서 내보내는 TypeScript 인터페이스, 열거형, 타입 별칭입니다."
---

# 타입 레퍼런스 {#types-reference}

모든 타입은 `@dhx/react-spreadsheet` 또는 `@dhtmlx/trial-react-spreadsheet`에서 내보냅니다.

~~~tsx
import type { SheetData, CellData, SpreadsheetRef /* ... */ } from "@dhtmlx/trial-react-spreadsheet";
~~~

## CellData {#celldata}

단일 셀의 선언적 상태입니다. 모든 속성은 선택 사항이며, 생략된 속성은 업데이트 시 현재 값을 유지합니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `value` | `string \| number` | 셀 값: 텍스트, 숫자, 또는 수식 문자열(`=`로 시작). |
| `css` | `string` | 최상위 `styles` 맵의 키를 참조하는 CSS 클래스 이름. |
| `format` | `string` | 숫자 형식 마스크 또는 별칭(예: `"currency"` 또는 `"#,##0.00"`). |
| `locked` | `boolean` | 셀 잠금 여부(편집 보호). |
| `validation` | `string \| string[]` | 데이터 유효성 검사 드롭다운 옵션. |

## RowConfig {#rowconfig}

행 메타데이터입니다. 기본값이 아닌 행만 항목을 추가하면 됩니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `height` | `number` | 행 높이(픽셀). |
| `hidden` | `boolean` | 행 숨김 여부. |

## ColConfig {#colconfig}

열 메타데이터입니다. 기본값이 아닌 열만 항목을 추가하면 됩니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `width` | `number` | 열 너비(픽셀). |
| `hidden` | `boolean` | 열 숨김 여부. |

## MergedRange {#mergedrange}

0-인덱스 행/열 좌표를 사용하여 병합된 셀 범위를 정의합니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `from` | `{ row: number; column: number }` | 병합의 좌상단 모서리(0-인덱스). |
| `to` | `{ row: number; column: number }` | 병합의 우하단 모서리(0-인덱스). |

**예시:**

~~~ts
// A1:B2 병합
const merge: MergedRange = {
    from: { row: 0, column: 0 },
    to: { row: 1, column: 1 },
};
~~~

## FreezeConfig {#freezeconfig}

시트의 고정 창(freeze pane) 구성입니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `col` | `number` | 이 0-인덱스 열 번호까지 열을 고정합니다. `undefined` = 열 고정 없음. |
| `row` | `number` | 이 0-인덱스 행 번호까지 행을 고정합니다. `undefined` = 행 고정 없음. |

## SheetFilter {#sheetfilter}

시트 내 열의 필터 구성입니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `cell` | `string` | 필터링된 열을 식별하는 셀 참조(예: `"A1"`). |
| `rules` | `IFilterRules[]` | 적용할 필터 규칙. 빈 배열은 필터를 지웁니다. |

## SheetSort {#sheetsort}

시트 내 열의 정렬 구성입니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `cell` | `string` | 정렬 작업을 위한 셀 참조 또는 범위(예: `"B1"` 또는 `"A1:E8"`). 범위를 사용하면 행 무결성을 유지하면서 여러 열을 함께 정렬할 수 있습니다. |
| `dir` | `1 \| -1` | 정렬 방향: `1` = 오름차순, `-1` = 내림차순. |

## SheetData {#sheetdata}

단일 스프레드시트 시트의 완전한 선언적 상태입니다.

| 속성 | 타입 | 필수 여부 | 설명 |
|----------|------|:--------:|-------------|
| `id` | `Id` | 예 | 고유 시트 식별자. 렌더링 간에 안정적이어야 합니다. |
| `name` | `string` | 예 | 시트 탭에 표시되는 이름. |
| `cells` | `Record<string, CellData>` | 예 | 셀 참조를 키로 하는 셀 데이터(예: `"A1"` 또는 `"B2"`). 기본값이 아닌 셀만 항목을 추가하면 됩니다. |
| `rows` | `Record<number, RowConfig>` | 아니요 | 0-인덱스 행 번호를 키로 하는 행 구성. |
| `cols` | `Record<number, ColConfig>` | 아니요 | 0-인덱스 열 번호를 키로 하는 열 구성. |
| `merged` | `MergedRange[]` | 아니요 | 병합된 셀 범위. |
| `freeze` | `FreezeConfig` | 아니요 | 고정 창 구성. |
| `filter` | `SheetFilter` | 아니요 | 열 필터 구성. 지우려면 `undefined`로 설정하십시오. |
| `sort` | `SheetSort` | 아니요 | 정렬 구성. |

**예시:**

~~~ts
const sheet: SheetData = {
    id: "sheet1",
    name: "Inventory",
    cells: {
        A1: { value: "Product", css: "bold" },
        B1: { value: "Quantity", css: "bold" },
        A2: { value: "Laptop" },
        B2: { value: 42 },
    },
    cols: { 0: { width: 200 } },
    freeze: { row: 1 },
};
~~~

## SearchConfig {#searchconfig}

제어 검색 상태입니다. 검색을 트리거/업데이트하려면 객체를 전달하고, 닫으려면 `undefined`를 전달하십시오.

| 속성 | 타입 | 필수 여부 | 설명 |
|----------|------|:--------:|-------------|
| `query` | `string` | 예 | 검색할 텍스트. |
| `open` | `boolean` | 아니요 | 내장 검색 UI 열기 여부. 기본값: `false`. |
| `sheetId` | `Id` | 아니요 | id로 특정 시트에 검색을 제한합니다. |

## SpreadsheetLocale {#spreadsheetlocale}

UI 레이블과 수식 이름의 현지화 구성입니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `locale` | `Record<string, string>` | UI 문자열 재정의. 키는 라이브러리의 로케일 사전과 일치합니다. |
| `formulas` | `Record<string, [string, string?][]>` | 카테고리별로 그룹화된 현지화된 수식 이름. 각 항목은 튜플: `[localizedName, optionalDescription?]`. |

## SpreadsheetTheme {#spreadsheettheme}

~~~ts
type SpreadsheetTheme = "light" | "dark" | "contrast-light" | "contrast-dark" | string;
~~~

내장 색상 테마입니다. 커스텀 테마 이름 문자열도 허용합니다.

## IExecuteConfig {#iexecuteconfig}

[`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events)에 전달되는 액션 실행 구성입니다. 형태는 액션 타입에 따라 다릅니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `row` | `number` | 대상 행 인덱스. |
| `col` | `number` | 대상 열 인덱스. |
| `target` | `unknown` | 액션별 대상. |
| `val` | `unknown` | 새 값. |
| `prev` | `unknown` | 이전 값. |
| `action` | `Actions \| string` | 액션 식별자. |
| `groupAction` | `Actions \| string` | 상위 그룹 액션 식별자. |
| `cell` | `string` | 셀 참조(예: `"A1"`). |
| `pageId` | `Id` | 대상 시트 id. |
| `pageName` | `string` | 대상 시트 이름. |
| `[key: string]` | `unknown` | 추가적인 액션별 속성. |

## SpreadsheetRef {#spreadsheetref}

`React.forwardRef`를 통해 노출되는 명령형 핸들입니다. 선언적 props에 매핑되지 않는 작업을 위해 기본 DHTMLX Spreadsheet 인스턴스에 직접 접근할 수 있습니다.

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `instance` | `ISpreadsheet \| null` | 기본 위젯 인스턴스. 초기화 전과 언마운트 후에는 `null`. |

**예시:**

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

// 데이터 직렬화
const data = ref.current?.instance?.serialize();

// 프로그래밍 방식 선택
ref.current?.instance?.selection.setSelectedCell("A1:C5");

// 실행 취소/다시 실행
ref.current?.instance?.undo();
ref.current?.instance?.redo();
~~~

## Actions 열거형 {#actions-enum}

알려진 스프레드시트 액션 식별자입니다. 타입 안전 액션 매칭을 위해 [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events)에서 사용합니다. 핸들러 파라미터의 `| string` 유니온은 향후 추가될 액션과의 하위 호환성을 보장합니다.

| 값 | 설명 |
|-------|-------------|
| `setCellStyle` | 셀에 CSS 스타일 적용. |
| `setCellValue` | 셀 값 설정. |
| `setCellFormat` | 셀에 숫자 형식 설정. |
| `removeCellStyles` | 셀에서 CSS 스타일 제거. |
| `lockCell` | 셀 잠금 또는 잠금 해제. |
| `deleteRow` | 행 삭제. |
| `addRow` | 행 삽입. |
| `deleteColumn` | 열 삭제. |
| `addColumn` | 열 삽입. |
| `groupAction` | 일괄 액션(여러 하위 액션). |
| `groupRowAction` | 일괄 행 액션. |
| `groupColAction` | 일괄 열 액션. |
| `addSheet` | 새 시트 추가. |
| `deleteSheet` | 시트 삭제. |
| `renameSheet` | 시트 이름 변경. |
| `clearSheet` | 시트의 모든 데이터 지우기. |
| `clear` | 선택한 셀 지우기. |
| `resizeCol` | 열 너비 조정. |
| `resizeRow` | 행 높이 조정. |
| `setValidation` | 셀에 데이터 유효성 검사 설정. |
| `sortCells` | 셀 정렬. |
| `insertLink` | 하이퍼링크 삽입. |
| `fitColumn` | 내용에 맞게 열 너비 자동 조정. |
| `filter` | 열 필터 적용 또는 변경. |
| `merge` | 셀 병합. |
| `unmerge` | 셀 병합 해제. |
| `toggleFreeze` | 고정 창 전환. |
| `toggleVisibility` | 행/열 표시 여부 전환. |

## 핸들러 타입 별칭 {#handler-type-aliases}

이벤트 콜백 props에서 사용하는 함수 시그니처의 편의 별칭입니다. 핸들러 함수에 명시적으로 주석을 달기 위해 가져와서 사용하십시오.

<div className="overflow-table">

| 타입 | 시그니처 | 사용 위치 |
|------|-----------|---------|
| `BeforeActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => boolean \| void` | `onBeforeAction` |
| `AfterActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => void` | `onAfterAction` |
| `BeforeCellHandler` | `(cell: string) => boolean \| void` | `onBeforeSelectionSet`, `onBeforeSelectionRemove`, `onBeforeFocusSet` |
| `AfterCellHandler` | `(cell: string) => void` | `onAfterSelectionSet`, `onAfterSelectionRemove`, `onAfterFocusSet` |
| `BeforeEditHandler` | `(cell: string, value: string) => boolean \| void` | `onBeforeEditStart`, `onBeforeEditEnd` |
| `AfterEditHandler` | `(cell: string, value: string) => void` | `onAfterEditStart`, `onAfterEditEnd` |
| `BeforeSheetHandler` | `(sheet: ISheet) => boolean \| void` | `onBeforeSheetChange` |
| `AfterSheetHandler` | `(sheet: ISheet) => void` | `onAfterSheetChange` |

</div>

## SpreadsheetConfigProps {#spreadsheetconfigprops}

~~~ts
type SpreadsheetConfigProps = Omit<
    ISpreadsheetConfig,
    "leftSplit" | "topSplit" | "dateFormat" | "timeFormat"
>;
~~~

컴포넌트 props의 기본 타입입니다. 모든 `ISpreadsheetConfig` 생성자 옵션을 플랫 props로 노출합니다.

## 재내보내기된 상위 타입 {#re-exported-upstream-types}

편의를 위해 `@dhx/ts-spreadsheet`에서 재내보내기된 타입들입니다.

| 타입 | 설명 |
|------|-------------|
| `ISpreadsheet` | 메인 스프레드시트 위젯 인스턴스 인터페이스. |
| `ISpreadsheetConfig` | 생성자 구성 인터페이스. |
| `ISheet` | 시트 인스턴스 인터페이스(시트 이벤트 콜백에서 사용). |
| `IFormats` | 커스텀 숫자 형식 정의. |
| `IFilterRules` | 필터 규칙 구성. |
| `IFilter` | 필터 인스턴스 인터페이스. |
| `IStylesList` | 스타일 정의 맵. |
| `IDataWithStyles` | 스타일이 포함된 데이터 구조(`serialize()`/`parse()`에서 사용). |
| `ICellInfo` | 위젯 메서드가 반환하는 셀 정보. |
| `FileFormat` | 데이터 로딩을 위한 파일 형식(예: `"json"` 또는 `"xlsx"`). |
| `ToolbarBlocks` | 툴바 블록 식별자(예: `"default"`, `"undo"`, 또는 `"font"`). |
| `FilterConditions` | 사용 가능한 필터 조건 타입 열거형. |
| `Id` | 일반 식별자 타입(*string \| number*). |
