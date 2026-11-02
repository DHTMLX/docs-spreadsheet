---
sidebar_label: getSelectedCell() 
title: getSelectedCell selection 메서드
description: DHTMLX Spreadsheet에서 selection.getSelectedCell() 메서드로 선택된 셀의 id 또는 범위를 가져옵니다.
---

# getSelectedCell()

### 설명 {#description}

@short: 선택된 셀의 id를 반환합니다

### 사용법 {#usage}

~~~jsx
getSelectedCell(): string;
~~~

### 반환값 {#returns}

이 메서드는 선택된 셀의 id 또는 범위를 반환합니다

### 예제 {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// 선택된 셀 가져오기
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)
