---
sidebar_label: add()
title: add 메서드
description: DHTMLX Spreadsheet에서 sheets.add() 메서드로 새 빈 시트를 추가하고 새 시트의 id를 반환받습니다(multiSheets 옵션 필요).
---

# add()

### 설명 {#description}

@short: 스프레드시트에 새로운 빈 시트를 추가하고, 새로 생성된 시트의 고유 식별자를 반환합니다

이름을 지정하지 않으면 기본 이름이 자동으로 생성됩니다(예: "Sheet 2" 또는 "Sheet 3").

:::info
이 메서드를 사용하려면 [`multiSheets`](api/spreadsheet_multisheets_config.md) 설정 옵션을 활성화해야 합니다.
:::

### 사용법 {#usage}

~~~ts
add: (name?: string) => Id;
~~~

### 매개변수 {#parameters}

- `name` - (*string*) 선택 사항, 새 시트 탭에 표시될 이름. 생략하면 기본 이름이 할당됩니다.

### 반환값 {#returns}

- `Id` - (*string | number*) 새로 생성된 시트의 고유 식별자.

### 예제 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 사용자 지정 이름으로 시트 추가
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // 예: "sheet_2"

// 자동 생성된 이름으로 시트 추가
const anotherSheetId = spreadsheet.sheets.add();
~~~

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업하기](working_with_sheets.md)
