---
sidebar_label: showCols()
title: showCols 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 showCols 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# showCols()

### 설명 {#description}

@short: 숨겨진 열을 표시합니다

### 사용법 {#usage}

~~~jsx
showCols(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 열 id를 정의하는 데 사용할 셀 id. 셀 id를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx
spreadsheet.showCols("B2"); // "B" 열이 다시 표시됩니다
spreadsheet.showCols("sheet2!B2"); // "sheet2"의 "B" 열이 다시 표시됩니다
spreadsheet.showCols("B2:C2"); // "B"와 "C" 열이 다시 표시됩니다
~~~

**관련 문서:** [Spreadsheet 사용](working_with_ssheet.md#hidingshowing-rows-and-columns)

**관련 API:** [`hideCols()`](api/spreadsheet_hidecols_method.md)

**관련 예제:** [Spreadsheet. API를 통한 열 및 행 숨기기](https://snippet.dhtmlx.com/zere1ote)

**변경 이력:** v5.2에서 추가됨
