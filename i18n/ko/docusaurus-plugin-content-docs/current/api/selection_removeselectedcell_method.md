---
sidebar_label: removeSelectedCell() 
title: removeSelectedCell selection 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 Selection의 removeSelectedCell 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# removeSelectedCell()

### 설명 {#description}

@short: 지정된 셀에서 선택을 해제합니다

### 사용법 {#usage}

~~~jsx
removeSelectedCell(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 선택된 셀의 id 또는 범위

### 예제 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// 분산된 셀 선택
spreadsheet.selection.setSelectedCell("A1:A9,C2,B4,D6");

// 지정된 셀의 선택 해제
spreadsheet.selection.removeSelectedCell("A3:A6,C2");
~~~

**변경 이력:** v4.2에서 추가됨

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)

**관련 샘플:** [Spreadsheet. 선택 해제](https://snippet.dhtmlx.com/u4j76cuh)
