---
sidebar_label: sortCells()
title: sortCells 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 sortCells 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# sortCells()

### 설명 {#description}

@short: 스프레드시트의 데이터를 정렬합니다

### 사용법 {#usage}

~~~jsx
sortCells(cell: string, dir: number): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 스프레드시트 데이터를 정렬할 기준이 되는 셀 id 또는 셀 범위
- `dir` - (필수) 정렬 방향: 
    - 1 - 오름차순
    - -1 - 내림차순

### 예제 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // configuration parameters
});
spreadsheet.parse(data);

// 첫 번째 시트의 데이터 정렬
spreadsheet.sortCells("B2:B11", -1);

// 여러 시트의 데이터 정렬
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~


**관련 샘플:** [Spreadsheet. 여러 시트로 초기화](https://snippet.dhtmlx.com/ihtkdcoc)

**관련 문서:** [데이터 정렬](working_with_ssheet.md#sorting-data)
