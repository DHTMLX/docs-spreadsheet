---
sidebar_label: showRows()
title: showRows 메서드
description: DHTMLX Spreadsheet에서 showRows() 메서드로 숨겨진 행을 표시합니다. 행은 전달된 셀 또는 선택된 셀로 결정됩니다.
---

# showRows()

### 설명 {#description}

@short: 숨겨진 행을 표시합니다

### 사용법 {#usage}

~~~jsx
showRows(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 행 id를 정의하는 데 사용할 셀 id. 셀 id를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx 
spreadsheet.showRows("B2"); // "2" 행이 다시 표시됩니다
spreadsheet.showRows("sheet2!B2"); // "sheet2"의 "2" 행이 다시 표시됩니다
spreadsheet.showRows("B2:C2"); // "2"부터 "4"까지의 행이 다시 표시됩니다
~~~

**관련 문서:** [Spreadsheet 사용](working_with_ssheet.md#hidingshowing-rows-and-columns)

**관련 API:** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**관련 샘플:** [Spreadsheet. API를 통한 열 및 행 숨기기](https://snippet.dhtmlx.com/zere1ote)

**변경 로그:** v5.2에서 추가됨
