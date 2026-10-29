---
sidebar_label: unfreezeRows() 
title: unfreezeRows 메서드
description: DHTMLX Spreadsheet에서 unfreezeRows() 메서드로 고정된 행을 해제하여 나머지 그리드와 함께 스크롤되도록 합니다.
---

# unfreezeRows()

### 설명 {#description}

@short: 고정("동결")된 행의 고정을 해제합니다

### 사용법 {#usage}

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 행 ID를 지정하는 데 사용되는 셀의 ID. 셀 ID를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx 
spreadsheet.unfreezeRows(); // 현재 시트의 고정된 행이 해제됩니다
spreadsheet.unfreezeRows("sheet2!A1"); // "sheet2"의 고정된 행이 해제됩니다
~~~

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**관련 API:** [`freezeRows()`](api/spreadsheet_freezerows_method.md)

**관련 샘플:** [Spreadsheet. API를 통한 열 및 행 고정](https://snippet.dhtmlx.com/a12xd1mn)

**변경 로그:** 
v5.2에서 추가됨
