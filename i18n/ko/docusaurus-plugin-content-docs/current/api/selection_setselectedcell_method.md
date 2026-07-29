---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 setSelectedCell selection 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setSelectedCell()

### 설명 {#description}

@short: 지정된 셀을 선택합니다

### 사용법 {#usage}

~~~jsx
setSelectedCell(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 선택할 셀의 id 또는 범위

### 예제 {#example}

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
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
