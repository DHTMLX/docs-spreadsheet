---
sidebar_label: freezeCols() 
title: freezeCols 메서드
description: DHTMLX Spreadsheet에서 freezeCols() 메서드로 열을 고정합니다. 이 메서드는 현재 시트 또는 다른 시트에서 지정된 셀이나 선택된 셀까지의 열을 고정합니다.
---

# freezeCols()

### 설명 {#description}

@short: 열을 고정("동결")합니다

### 사용법 {#usage}

~~~jsx
freezeCols(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 열의 id를 정의하는 데 사용할 셀의 id. 셀 id를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx 
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
~~~

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**관련 API:** [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)

**관련 샘플:** [Spreadsheet. API를 통한 열 및 행 고정](https://snippet.dhtmlx.com/a12xd1mn)

**변경 로그:** 
v5.2에서 추가됨
