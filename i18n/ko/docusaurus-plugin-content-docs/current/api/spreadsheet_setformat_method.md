---
sidebar_label: setFormat()
title: setFormat 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 setFormat 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# setFormat()

### 설명 {#description}

@short: 셀 값에 지정된 형식을 설정합니다

### 사용법 {#usage}

~~~jsx
setFormat(cell: string, format: string | array): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 id 또는 셀 범위
- `format` - (필수) 셀 값에 적용할 숫자 형식 이름

### 예제 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// A1 셀에 통화 형식 적용
spreadsheet.setFormat("A1","currency");
~~~

:::info
v4.1부터 셀 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

여기서 `sheet1`은 탭 이름입니다.

탭 이름을 지정하지 않으면 활성 탭의 셀 값에 형식이 설정됩니다.
:::

**관련 문서:** [숫자 형식 지정](number_formatting.md)
