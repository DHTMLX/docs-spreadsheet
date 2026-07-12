---
sidebar_label: Spreadsheet 작업
title: Spreadsheet 작업
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 스프레드시트 작업에 대한 내용을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# Spreadsheet 작업 {#work-with-spreadsheet}

사용자가 Spreadsheet 인터페이스를 통해 상호 작용하는 동안, [간단한 API](api/api_overview.md)를 사용하여 컴포넌트를 다룰 수 있습니다.

## 실행 취소/다시 실행 {#undoredo-actions}

[](api/spreadsheet_undo_method.md) API 메서드는 마지막 작업을 되돌립니다:

~~~jsx
spreadsheet.undo();
~~~

되돌린 작업을 다시 적용하려면 [](api/spreadsheet_redo_method.md) 메서드를 사용하세요:

~~~jsx
spreadsheet.redo();
~~~

## 행과 열 추가/제거 {#addingremoving-rows-and-columns}

### 열 {#columns}

열을 추가/삭제하려면 관련 API 메서드를 사용하세요:

- [](api/spreadsheet_addcolumn_method.md)
- [](api/spreadsheet_deletecolumn_method.md)

추가/삭제할 열의 id가 포함된 셀의 id를 메서드에 전달하세요.

~~~jsx
// 빈 "C" 열 추가
spreadsheet.addColumn("C1");
// "C" 열 제거
spreadsheet.deleteColumn("C1");
~~~

새 열이 추가되면 인접한 열들이 오른쪽으로 이동합니다.

:::note
`deleteColumn()` 메서드의 파라미터로 셀 id 범위(예: "A1:C3")를 제공하면 여러 열을 삭제할 수 있습니다.
::: 

### 행 {#rows}

행을 추가/삭제하려면 아래 API 메서드를 사용하세요:

- [](api/spreadsheet_addrow_method.md)
- [](api/spreadsheet_deleterow_method.md)

추가/삭제할 행의 id가 포함된 셀의 id를 메서드에 전달하세요.

~~~jsx
// 빈 두 번째 행 추가
spreadsheet.addRow("A2");
// 두 번째 행 제거
spreadsheet.deleteRow("A2");
~~~

새 행이 추가되면 인접한 행들이 한 셀씩 아래로 이동합니다.

:::note
`deleteRow()` 메서드의 파라미터로 셀 id 범위(예: "A1:C3")를 제공하면 여러 행을 삭제할 수 있습니다.
::: 

## 열 너비 자동 맞춤 {#autofit-column-width}

열의 가장 긴 내용에 자동으로 맞게 열 너비를 변경하려면 [`fitColumn()`](api/spreadsheet_fitcolumn_method.md) 메서드를 적용하세요. 이 메서드는 필요한 열의 이름이 포함된 셀의 id 하나를 파라미터로 받습니다.

~~~jsx
// "G" 열의 너비 조정
spreadsheet.fitColumn("G2");
~~~

## 행과 열 고정/해제 {#freezingunfreezing-rows-and-columns}

페이지를 스크롤할 때 일부 열이나 행을 고정("freeze")하여 정적으로 유지하면서 나머지 열과 행은 이동하도록 할 수 있습니다.

### 열 {#columns-freeze}

열을 고정/해제하려면 관련 API 메서드를 사용하세요:

- [](api/spreadsheet_freezecols_method.md)
- [](api/spreadsheet_unfreezecols_method.md)

열의 id를 정의하기 위해 셀의 id를 메서드에 전달하세요. 셀 id가 전달되지 않으면 현재 선택된 셀이 사용됩니다.

~~~jsx 
// 열 고정
spreadsheet.freezeCols("B2"); // "B" 열까지의 열이 고정됩니다
spreadsheet.freezeCols("sheet2!B2"); // "sheet2"에서 "B" 열까지의 열이 고정됩니다

// 열 고정 해제
spreadsheet.unfreezeCols(); // 현재 시트의 고정된 열이 해제됩니다
spreadsheet.unfreezeCols("sheet2!A1"); // "sheet2"의 고정된 열이 해제됩니다
~~~ 

### 행 {#rows-freeze}

행을 고정/해제하려면 관련 API 메서드를 사용하세요:

- [](api/spreadsheet_freezerows_method.md)
- [](api/spreadsheet_unfreezerows_method.md)

행의 id를 정의하기 위해 셀의 id를 메서드에 전달하세요. 셀 id가 전달되지 않으면 현재 선택된 셀이 사용됩니다.

~~~jsx
// 행 고정
spreadsheet.freezeRows("B2"); // "2" 행까지의 행이 고정됩니다
spreadsheet.freezeRows("sheet2!B2"); // "sheet2"에서 "2" 행까지의 행이 고정됩니다

// 행 고정 해제
spreadsheet.unfreezeRows(); // 현재 시트의 고정된 행이 해제됩니다
spreadsheet.unfreezeRows("sheet2!A1"); // "sheet2"의 고정된 행이 해제됩니다
~~~

### 데이터 세트에서 행/열 고정 {#freezing-rowscolumns-in-the-dataset}

Spreadsheet에 데이터를 파싱하는 동안 특정 시트의 행과 열을 고정할 수도 있습니다.
이를 위해 [`parse()`](api/spreadsheet_parse_method.md) 메서드의 `sheets` 객체에서 `freeze` 속성을 사용하세요:

~~~jsx {10-13}
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // "sheet_1"의 추가 설정
        }, 
        // 추가 시트 구성 객체
    ]
};

spreadsheet.parse(data);
~~~ 

## 행과 열 숨기기/표시 {#hidingshowing-rows-and-columns}

해당 API 메서드를 통해 특정 행과 열을 숨기거나 표시할 수 있습니다.

### 열 {#columns-hide}

열을 숨기거나 표시하려면 다음 메서드를 사용하세요:

- [](api/spreadsheet_hidecols_method.md)
- [](api/spreadsheet_showcols_method.md)

열의 id를 정의하기 위해 셀의 id를 메서드에 전달하세요. 셀 id가 전달되지 않으면 현재 선택된 셀이 사용됩니다.

~~~jsx
// 열 숨기기
spreadsheet.hideCols("B2"); // "B" 열이 숨겨집니다
spreadsheet.hideCols("sheet2!B2"); // "sheet2"의 "B" 열이 숨겨집니다
spreadsheet.hideCols("B2:C2"); // "B"와 "C" 열이 숨겨집니다

// 열 표시
spreadsheet.showCols("B2"); // "B" 열이 다시 표시됩니다
spreadsheet.showCols("sheet2!B2"); // "sheet2"의 "B" 열이 다시 표시됩니다
spreadsheet.showCols("B2:C2"); // "B"와 "C" 열이 다시 표시됩니다
~~~

### 행 {#rows-hide}

행을 숨기거나 표시하려면 아래 API 메서드를 사용하세요:

- [](api/spreadsheet_hiderows_method.md)
- [](api/spreadsheet_showrows_method.md)

행의 id를 정의하기 위해 셀의 id를 메서드에 전달하세요. 셀 id가 전달되지 않으면 현재 선택된 셀이 사용됩니다.

~~~jsx
// 행 숨기기
spreadsheet.hideRows("B2"); // "2" 행이 숨겨집니다
spreadsheet.hideRows("sheet2!B2"); // "sheet2"의 "2" 행이 숨겨집니다
spreadsheet.hideRows("B2:C4"); // "2"부터 "4"까지의 행이 숨겨집니다

// 행 표시
spreadsheet.showRows("B2"); // "2" 행이 다시 표시됩니다
spreadsheet.showRows("sheet2!B2"); // "sheet2"의 "2" 행이 다시 표시됩니다
spreadsheet.showRows("B2:C2"); // "2"부터 "4"까지의 행이 다시 표시됩니다
~~~

## 데이터 필터링 {#filtering-data}

### 필터 설정 {#set-filter}

스프레드시트에서 데이터를 필터링하고 지정된 기준을 충족하는 레코드만 렌더링할 수 있습니다. 이를 위해 [`setFilter()`](api/spreadsheet_setfilter_method.md) 메서드를 사용하고 필요한 열에 대한 필터링 규칙을 지정하세요.

예를 들어 별도의 열에 대한 필터링 기준을 지정할 수 있습니다:

~~~jsx
// A열에 지정된 기준으로 데이터 필터링
spreadsheet.setFilter("A2", [{condition: { factor: "tc", value: "e" }, exclude: ["Peru"]}]);

// C열에 지정된 기준으로 데이터 필터링
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);
~~~

이 경우 데이터 범위의 각 열에 필터 아이콘이 나타납니다.

또한 셀 범위에 대한 필터링 기준을 지정할 수도 있습니다:

~~~jsx
// C열에 지정된 기준으로 데이터 필터링
spreadsheet.setFilter("C1:C9", [{condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);

// A열과 C열에 지정된 기준으로 데이터 필터링
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);
~~~

이 경우 지정된 범위 내의 열에만 필터 아이콘이 나타납니다.

**관련 샘플:** [Spreadsheet. API를 통한 필터링](https://snippet.dhtmlx.com/effrcsg6)

### 필터 초기화 {#reset-filter}

필터링을 초기화하려면 파라미터 없이 [`setFilter()`](api/spreadsheet_setfilter_method.md) 메서드를 적용하거나 첫 번째 파라미터만 전달하세요:

~~~jsx
spreadsheet.setFilter("A2");
~~~

### 필터 가져오기 {#get-filter}

시트에서 현재 데이터가 필터링되는 기준을 가져오려면 [`getFilter()`](api/spreadsheet_getfilter_method.md) 메서드를 적용하세요. 필요한 시트의 ID를 파라미터로 전달하세요.

~~~jsx
const filter = spreadsheet.getFilter("Income");
~~~

현재 활성 시트에 적용된 필터 기준을 가져오려면 시트 ID를 전달할 필요가 없습니다:

~~~jsx
const filter = spreadsheet.getFilter();
~~~

## 데이터 검색 {#searching-for-data}

특정 레코드가 포함된 셀을 찾으려면 [`search()`](api/spreadsheet_search_method.md) 메서드에 검색할 값을 전달하세요.

~~~jsx
spreadsheet.search("min"); // -> ['D1']
~~~

두 번째 파라미터로 `true`를 전달하여 검색 표시줄을 열고 스프레드시트에서 찾은 셀을 강조 표시할 수도 있습니다:

~~~jsx
spreadsheet.search("min", true); 
~~~

기본적으로 스프레드시트는 현재 활성 시트의 셀을 검색합니다. 다른 시트에서 레코드를 검색하려면 해당 ID를 메서드의 세 번째 파라미터로 전달하세요:

~~~jsx
spreadsheet.search("min", false, "Income");
~~~

### 검색 표시줄 닫기 {#close-search-bar}

검색 표시줄을 숨기려면 [`hideSearch()`](api/spreadsheet_hidesearch_method.md) 메서드를 사용하세요:

~~~jsx
spreadsheet.hideSearch();
~~~

## 데이터 정렬 {#sorting-data}

v4.3부터 [`sortCells()`](api/spreadsheet_sortcells_method.md) 메서드를 사용하여 스프레드시트에서 데이터를 정렬할 수 있습니다. 메서드에 두 개의 파라미터를 전달하세요:
- `cell` - 스프레드시트 데이터를 정렬할 기준이 되는 셀 또는 셀 범위의 id
- `dir` - 정렬 방향: 1 - 오름차순, -1 - 내림차순

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 구성 파라미터
});

spreadsheet.sortCells("B2:B11", -1);
~~~

## 스프레드시트 지우기 {#clearing-spreadsheet}

[`clear()`](api/spreadsheet_clear_method.md) 메서드를 사용하여 전체 스프레드시트를 한 번에 지울 수 있습니다:

~~~jsx
spreadsheet.clear();
~~~

**관련 샘플:** [Spreadsheet. 지우기](https://snippet.dhtmlx.com/szmtjn72)

특정 시트를 지워야 하는 경우 [`sheets.clear()`](api/sheetmanager_clear_method.md) 메서드를 사용하세요.
