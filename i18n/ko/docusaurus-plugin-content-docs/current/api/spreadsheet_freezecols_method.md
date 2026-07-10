---
sidebar_label: freezeCols() 
title: freezeCols 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 freezeCols 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
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
