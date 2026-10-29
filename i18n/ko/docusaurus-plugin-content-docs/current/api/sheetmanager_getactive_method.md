---
sidebar_label: getActive()
title: getActive 메서드
description: DHTMLX Spreadsheet에서 sheets.getActive() 메서드로 활성(표시된) 시트를 가져옵니다. 이 메서드는 시트의 id와 이름을 반환합니다.
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
