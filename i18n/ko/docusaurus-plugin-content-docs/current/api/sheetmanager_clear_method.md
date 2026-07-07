---
sidebar_label: clear()
title: clear 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Sheet Manager의 clear 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# clear()

### 설명 {#description}

@short: 특정 시트의 내용을 지웁니다(시트 자체는 삭제하지 않고 모든 셀 값, 스타일, 서식을 제거합니다)

id를 제공하지 않으면 현재 활성 시트가 지워집니다.

### 사용법 {#usage}

~~~ts
clear: (id?: Id) => void;
~~~

### 매개변수 {#parameters}

- `id` - (`string | number`) 선택사항, 지울 시트의 고유 식별자입니다. 생략하면 현재 활성 시트가 지워집니다.

### 예제 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 특정 시트를 id로 지우기
spreadsheet.sheets.clear("sheet_1");

// 현재 활성 시트 지우기
spreadsheet.sheets.clear();
~~~

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
