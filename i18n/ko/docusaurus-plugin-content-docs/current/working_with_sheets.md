---
sidebar_label: 시트 작업
title: 시트 작업
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 시트 작업에 대한 내용을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 시트 작업 {#work-with-sheets}

v4.1부터 스프레드시트에서 [여러 시트](api/spreadsheet_multisheets_config.md)로 작업할 수 있습니다.

이 문서에서는 API 메서드를 사용하여 새 시트를 추가하고, 불필요한 시트를 제거하고, 모든 시트를 가져오고, 현재 활성 시트를 가져오는 방법을 설명합니다. 또한 스프레드시트에 여러 시트를 한 번에 로드하는 방법도 설명합니다.

{{note 사용자 인터페이스를 통해 여러 시트와 상호 작용하는 방법을 알아보려면 [사용자 가이드](work_with_sheets.md)를 확인하세요. }}

v6.0부터 **Sheet Manager** 모듈이 `spreadsheet.sheets` 속성을 통해 시트 관리를 처리합니다. 전용 [Sheet Manager API](api/overview/sheetmanager_overview.md)는 이전에 Spreadsheet 인스턴스에서 직접 사용할 수 있었던 시트 관련 메서드를 대체합니다.

## 여러 시트 로드 {#loading-multiple-sheets}

스프레드시트에 여러 시트를 로드하려면 원하는 수의 시트와 구성으로 데이터를 준비하고 [`parse()`](api/spreadsheet_parse_method.md) 메서드에 파라미터로 전달하세요. 데이터는 `object`여야 합니다. [객체에 포함할 수 있는 속성 목록 확인](api/spreadsheet_parse_method.md).

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note [`multiSheets`](api/spreadsheet_multisheets_config.md) 구성 옵션이 `false`로 설정된 경우 시트가 하나만 생성됩니다.}}

## 새 시트 추가 {#adding-a-new-sheet}

스프레드시트에 새 시트를 추가하려면 [`sheets.add()`](api/sheetmanager_add_method.md) 메서드를 사용하고 새 시트의 이름을 파라미터로 전달하세요:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 사용자 정의 이름으로 시트 추가
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // 예: "sheet_2"

// 자동 생성된 이름으로 시트 추가
const anotherId = spreadsheet.sheets.add();
~~~

이 메서드는 생성된 시트의 id를 반환합니다.

## 시트 제거 {#removing-a-sheet}

[`sheets.remove()`](api/sheetmanager_remove_method.md) 메서드를 통해 시트 id로 스프레드시트에서 시트를 제거할 수 있습니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// id로 시트 제거
spreadsheet.sheets.remove("sheet_2");
~~~

스프레드시트에 시트가 2개 미만인 경우 시트는 제거되지 않습니다.

## 활성 시트 설정 {#setting-active-sheet}

스프레드시트 초기화 후 활성 시트를 동적으로 변경하려면 [`sheets.setActive()`](api/sheetmanager_setactive_method.md) 메서드를 사용하세요. 시트의 id를 파라미터로 받습니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 두 번째 시트로 전환
spreadsheet.sheets.setActive("sheet_2");

// 전환 확인
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**관련 샘플:** [Spreadsheet. 활성 시트 설정](https://snippet.dhtmlx.com/iowl449t)

## 활성 시트 가져오기 {#getting-active-sheet}

[`sheets.getActive()`](api/sheetmanager_getactive_method.md) 메서드를 적용하여 현재 활성 시트를 가져올 수 있습니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

이 메서드는 현재 활성 시트의 name 및 id 속성을 가진 객체를 반환합니다.

## 모든 시트 가져오기 {#getting-all-sheets}

[`sheets.getAll()`](api/sheetmanager_getall_method.md) 메서드는 스프레드시트의 모든 시트를 시트 객체 배열로 반환합니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

## id로 시트 가져오기 {#getting-a-sheet-by-id}

id로 단일 시트 객체를 검색하려면 [`sheets.get()`](api/sheetmanager_get_method.md) 메서드를 사용하세요:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

## 시트 지우기 {#clearing-sheets}

[`sheets.clear()`](api/sheetmanager_clear_method.md) 메서드를 사용하여 id로 지정된 시트의 데이터를 지울 수 있습니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// id로 특정 시트 지우기
spreadsheet.sheets.clear("sheet_1");

// 현재 활성 시트 지우기
spreadsheet.sheets.clear();
~~~

**관련 샘플:** [Spreadsheet. 지우기](https://snippet.dhtmlx.com/szmtjn72)

전체 스프레드시트를 한 번에 지워야 하는 경우 [`clear()`](api/spreadsheet_clear_method.md) 메서드를 사용하세요.
