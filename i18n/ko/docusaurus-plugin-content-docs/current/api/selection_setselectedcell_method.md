---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection 메서드
description: DHTMLX Spreadsheet에서 selection.setSelectedCell() 메서드로 하나 또는 여러 셀이나 셀 범위를 선택하고, 필요하면 해당 위치로 스크롤합니다.
---

# setSelectedCell()

### 설명 {#description}

@short: 지정된 셀을 선택합니다

### 사용법 {#usage}

~~~jsx
setSelectedCell(cell: string, scroll?: boolean): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 선택할 셀의 id 또는 범위
- `scroll` - (선택 사항) Spreadsheet를 해당 셀로 스크롤할지 여부이며, 기본값은 `true`입니다

### 예제 {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// 단일 셀 선택
spreadsheet.selection.setSelectedCell("B5");

// 셀 범위 선택
spreadsheet.selection.setSelectedCell("B1:B5");

// 분산된 셀 선택
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)
