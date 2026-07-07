---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 setFocusedCell selection 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setFocusedCell()

### 설명 {#description}

@short: 지정된 셀에 포커스를 설정합니다

### 사용법 {#usage}

~~~jsx
setFocusedCell(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 포커스를 설정할 셀의 id

### 예제 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)
