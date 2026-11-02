---
sidebar_label: getAll()
title: getAll 메서드
description: DHTMLX Spreadsheet에서 sheets.getAll() 메서드로 모든 시트를 가져옵니다. 이 메서드는 시트의 id와 이름이 담긴 객체 배열을 반환합니다.
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

- `ISheet[]` - (*array*) 시트 객체의 배열입니다.

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
