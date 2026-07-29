---
sidebar_label: getValue()
title: getValue 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getValue 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# getValue()

### 설명 {#description}

@short: 셀(들)의 값을 반환합니다

### 사용법 {#usage}

~~~jsx
getValue(cell: string): any | array;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 id

### 반환값 {#returns}

이 메서드는 셀들의 값을 반환합니다

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 단일 셀의 값 반환
const cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// 셀 범위의 값 반환
const rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// 여러 셀의 값 반환
const values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

:::info
v4.1부터 셀 또는 셀 범위에 대한 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
const cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 메서드는 활성 탭에 있는 셀의 값을 반환합니다.
:::
