---
sidebar_label: getActive()
title: getActive 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Sheet Manager의 getActive 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# getActive()

### 설명 {#description}

@short: 스프레드시트에서 현재 활성(표시) 상태인 시트 객체를 반환합니다

### 사용법 {#usage}

~~~ts
getActive: () => ISheet;
~~~

### 반환값 {#returns}

- `ISheet` - (*object*) `id`와 `name` 속성을 포함한 현재 활성 시트 객체입니다.

### 예제 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
