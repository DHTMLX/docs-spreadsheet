---
sidebar_label: get()
title: get 메서드
description: DHTMLX Spreadsheet에서 sheets.get() 메서드로 id를 기준으로 시트 객체를 가져옵니다.
---

# get()

### 설명 {#description}

@short: 식별자로 단일 시트 객체를 반환합니다

### 사용법 {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### 매개변수 {#parameters}

- `id` - (*string | number*) 필수, 가져올 시트의 고유 식별자입니다.

### 반환값 {#returns}

- `ISheet` - (*object*) 지정한 id와 일치하는 시트 객체입니다.

### 예제 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
