---
sidebar_label: getStyle()
title: getStyle 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getStyle 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# getStyle()

### 설명 {#description}

@short: 셀에 적용된 스타일을 반환합니다

### 사용법 {#usage}

~~~jsx
getStyle(cell: string): any;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 id

### 반환값 {#returns}

이 메서드는 셀에 설정된 스타일을 반환합니다

### 예제 {#example}

~~~jsx {5,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 단일 셀의 스타일 가져오기
const style = spreadsheet.getStyle("A1");
// -> {background: "#8DE9E1", color: "#03A9F4"}

// 셀 범위의 스타일 가져오기
const rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details

// 여러 셀의 스타일 가져오기
const values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

:::info
여러 셀의 경우, 이 메서드는 각 셀에 적용된 스타일이 담긴 객체 배열을 반환합니다:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~
:::

:::info
v4.1부터 셀 또는 셀 범위의 참조는 다음 형식으로 지정할 수 있습니다:

~~~jsx
const style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 활성 탭의 셀 스타일이 반환됩니다.
:::
