---
sidebar_label: getSelectedCell() 
title: getSelectedCell selection 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getSelectedCell selection 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드할 수 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// 선택된 셀 가져오기
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**관련 문서:** [Spreadsheet 작업하기](working_with_ssheet.md)
