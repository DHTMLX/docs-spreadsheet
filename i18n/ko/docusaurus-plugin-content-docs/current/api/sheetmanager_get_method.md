---
sidebar_label: get()
title: get 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Sheet Manager의 get 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# get()

### 설명 {#description}

@short: 식별자로 단일 시트 객체를 반환합니다

### 사용법 {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### 매개변수 {#parameters}

- `id` - (`string | number`) 필수, 가져올 시트의 고유 식별자입니다.

### 반환값 {#returns}

- `ISheet` - (`object`) 지정한 id와 일치하는 시트 객체입니다.

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
