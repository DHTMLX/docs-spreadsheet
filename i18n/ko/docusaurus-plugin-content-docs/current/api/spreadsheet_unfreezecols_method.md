---
sidebar_label: unfreezeCols() 
title: unfreezeCols 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 unfreezeCols 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# unfreezeCols()

### 설명 {#description}

@short: 고정("동결")된 열의 고정을 해제합니다

### 사용법 {#usage}

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 열 ID를 지정하는 데 사용되는 셀의 ID. 셀 ID를 전달하지 않으면 현재 선택된 셀이 사용됩니다

### 예제 {#example}

~~~jsx 
spreadsheet.unfreezeCols(); // 현재 시트의 고정된 열이 해제됩니다
spreadsheet.unfreezeCols("sheet2!A1"); // "sheet2"의 고정된 열이 해제됩니다
~~~

**관련 문서:** [스프레드시트 작업](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**관련 API:** [`freezeCols()`](api/spreadsheet_freezecols_method.md)

**관련 샘플:** [Spreadsheet. API를 통한 열 및 행 고정](https://snippet.dhtmlx.com/a12xd1mn)

**변경 로그:** 
v5.2에서 추가됨
