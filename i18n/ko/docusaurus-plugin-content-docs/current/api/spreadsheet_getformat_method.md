---
sidebar_label: getFormat()
title: getFormat 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getFormat 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# getFormat()

### 설명 {#description}

@short: 셀 값에 적용된 숫자 형식을 반환합니다

### 사용법 {#usage}

~~~jsx
getFormat(cell: string): string | array;
~~~

### 매개변수 {#parameters}

`cell` - (필수) 셀 또는 셀 범위의 id

### 반환값 {#returns}

이 메서드는 셀 값에 적용된 형식을 반환합니다

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "currency"를 반환합니다
const format = spreadsheet.getFormat("A1");
~~~

:::info
v4.1부터 셀 참조는 다음 형식으로 지정할 수 있습니다:

~~~jsx
// "number"를 반환합니다
const cellFormat = spreadsheet.getFormat("sheet1!A2"); 
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 현재 활성 탭의 셀 값에 적용된 형식이 반환됩니다.
:::

**관련 문서:** [숫자 형식 지정](number_formatting.md)
