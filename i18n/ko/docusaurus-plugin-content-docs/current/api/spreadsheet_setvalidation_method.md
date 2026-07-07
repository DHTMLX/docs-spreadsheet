---
sidebar_label: setValidation()
title: setValidation 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 setValidation 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# setValidation()

### 설명 {#description}

@short: 셀에 드롭다운 목록을 추가하여 유효성 검사를 설정합니다

이 메서드는 셀에서 데이터 유효성 검사를 제거할 수도 있습니다.

### 사용법 {#usage}

~~~jsx
setValidation(
    cell: string,
    options: string | string[]
): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 id 또는 셀 범위
- `options` - (필수) 셀 범위를 나타내는 문자열("C1:C3") 또는 문자열 값 배열

### 예제 {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.parse(dataset);

// B10 셀에 3개 항목이 있는 드롭다운 목록으로 유효성 검사를 설정합니다
spreadsheet.setValidation("B10", ["Apple", "Mango", "Avocado"]);
~~~

### 상세 설명 {#details}

셀에서 유효성 검사를 제거하려면 옵션 목록 대신 메서드의 두 번째 매개변수로 `null`, `0`, `false`, 또는 `undefined`를 전달하세요:

~~~jsx
spreadsheet.setValidation("B15");

//또는
spreadsheet.setValidation("B15", null);

//또는
spreadsheet.setValidation("B15", false);
~~~

**변경 이력:** v4.3에서 추가됨

**관련 문서:** [셀 유효성 검사](working_with_cells.md#validating-cells)
