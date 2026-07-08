---
sidebar_label: addFormula()
title: addFormula 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 addFormula 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# addFormula()

### 설명 {#description}

@short: 셀 수식에서 사용할 수 있는 사용자 정의 수식 함수를 등록합니다

등록 후 해당 수식은 대문자 이름으로 모든 셀에서 사용할 수 있습니다(예: `=MYFUNC(A1, B2)`).

### 사용법 {#usage}

~~~ts
type cellValue = string | number | boolean
type mathArgument = cellValue | cellValue[];
type mathFunction = (...x: mathArgument[]) => cellValue;

addFormula: (name: string, handler: mathFunction) => void;
~~~

### 매개변수 {#parameters}

- `name` - (*string*) 필수, 수식 이름(대소문자 구분 없이 대문자로 저장됩니다)
- `handler` - (*function*) 필수, 입력 인수(문자열, 숫자, 불리언 또는 이들의 배열)를 처리하고 단일 값을 반환하는 callback 함수

:::note
`handler` callback 함수는 동기 함수여야 합니다. 함수 내부에서 `Promise` 또는 `fetch`를 사용하는 것은 허용되지 않습니다.
:::

### 예제 {#example}

~~~jsx {4-6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

// 값을 두 배로 만드는 사용자 정의 수식 추가
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});

// 셀에서 사용: =DOUBLE(A1)
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

**변경 로그:** v6.0에서 추가됨

**관련 샘플:** [Spreadsheet. 사용자 정의 수식 추가](https://snippet.dhtmlx.com/wvxdlahp)

**관련 문서:** [수식 및 함수](functions.md#custom-formulas)
