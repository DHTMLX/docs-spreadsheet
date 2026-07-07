---
sidebar_label: hideCols()
title: hideCols 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 hideCols 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# hideCols()

### 설명 {#description}

@short: 열을 숨깁니다

### 사용법 {#usage}

~~~jsx
hideCols(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택) 열의 id를 정의하는 데 사용되는 셀의 id. 셀 id를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx 
spreadsheet.hideCols("B2"); // "B" 열이 숨겨집니다
spreadsheet.hideCols("sheet2!B2"); // "sheet2"의 "B" 열이 숨겨집니다
spreadsheet.hideCols("B2:C2"); // "B"와 "C" 열이 숨겨집니다
~~~


**관련 문서:** [Spreadsheet 다루기](working_with_ssheet.md#hidingshowing-rows-and-columns)

**관련 API:** [`showCols()`](api/spreadsheet_showcols_method.md)

**관련 예제:** [Spreadsheet. API를 통한 열 및 행 숨기기](https://snippet.dhtmlx.com/zere1ote)

**변경 이력:** v5.2에서 추가됨
