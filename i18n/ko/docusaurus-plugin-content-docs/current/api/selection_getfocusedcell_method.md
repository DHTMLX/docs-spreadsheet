---
sidebar_label: getFocusedCell() 
title: getFocusedCell selection 메서드
description: DHTMLX Spreadsheet에서 selection.getFocusedCell() 메서드로 포커스가 있는(활성) 셀의 id를 가져옵니다.
---

# getFocusedCell()

### 설명 {#description}

@short: 포커스가 있는 셀의 id를 반환합니다

### 사용법 {#usage}

~~~jsx
getFocusedCell(): string;
~~~

### 반환값 {#returns}

이 메서드는 포커스가 있는 셀의 id를 반환합니다

### 예제 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// 셀에 포커스 설정
spreadsheet.selection.setFocusedCell("D4");

// 포커스가 있는 셀 가져오기
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)
