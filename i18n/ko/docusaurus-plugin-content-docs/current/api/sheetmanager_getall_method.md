---
sidebar_label: getAll()
title: getAll 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Sheet Manager의 getAll 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# getAll()

### 설명 {#description}

@short: 스프레드시트에 현재 존재하는 모든 시트 객체의 배열을 반환합니다

:::info
각 시트 객체에는 시트의 id와 name이 포함됩니다.
:::

### 사용법 {#usage}

~~~ts
getAll: () => ISheet[];
~~~

### 반환값 {#returns}

- `ISheet[]` - (`array`) 시트 객체의 배열입니다.

### 예제 {#example}

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

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
