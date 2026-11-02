---
sidebar_label: getFormat()
title: getFormat 메서드
description: DHTMLX Spreadsheet에서 getFormat() 메서드로 셀 또는 셀 범위의 값에 적용된 숫자 형식을 가져옵니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
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
