---
sidebar_label: getFormula()
title: getFormula 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 getFormula 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# getFormula()

### 설명 {#description}

@short: 셀의 수식을 반환합니다

### 사용법 {#usage}

~~~jsx 
getFormula(cell: string): string | array;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀의 id

### 반환값 {#returns}

이 메서드는 셀의 수식을 반환합니다

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "ABS(C2)"를 반환합니다
const formula = spreadsheet.getFormula("B2");
~~~

:::info
셀 참조는 다음 형식으로 지정할 수 있습니다:

~~~jsx
// "ABS(C2)"를 반환합니다
const formula = spreadsheet.getFormula("sheet1!B2"); 
~~~

여기서 `sheet1`은 탭의 이름입니다.

탭 이름을 지정하지 않으면 활성 탭의 셀 수식이 반환됩니다.
:::

**변경 로그:** v4.1에서 추가됨
