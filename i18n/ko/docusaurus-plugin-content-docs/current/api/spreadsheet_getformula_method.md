---
sidebar_label: getFormula()
title: getFormula 메서드
description: DHTMLX Spreadsheet에서 getFormula() 메서드로 셀의 수식을 가져옵니다. 다른 시트에 있는 셀의 수식도 가져올 수 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
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
