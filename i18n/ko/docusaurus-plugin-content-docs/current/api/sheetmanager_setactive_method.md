---
sidebar_label: setActive()
title: setActive 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Sheet Manager의 setActive 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# setActive()

### 설명 {#description}

@short: 식별자로 지정한 시트로 활성(표시) 시트를 전환합니다

스프레드시트 UI가 다시 렌더링되어 대상 시트의 내용이 표시됩니다.

### 사용법 {#usage}

~~~ts
setActive: (id: Id) => void;
~~~

### 매개변수 {#parameters}

- `id` - (`string | number`) 필수, 활성화할 시트의 고유 식별자입니다.

### 예제 {#example}

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

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
