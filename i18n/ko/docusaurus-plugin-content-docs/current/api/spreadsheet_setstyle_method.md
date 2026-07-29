---
sidebar_label: setStyle()
title: setStyle 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 setStyle 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# setStyle()

### 설명 {#description}

@short: 셀에 스타일을 설정합니다

:::info
이 메서드는 지정된 셀에 동일한 스타일을 설정합니다. 스프레드시트 셀에 각기 다른 스타일을 적용하려면 [](api/spreadsheet_parse_method.md) 메서드를 사용하세요.
:::

### 사용법 {#usage}

~~~jsx
setStyle(cell: string, styles: array | object): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 id 또는 셀 범위
- `styles` - (필수) 셀에 적용할 스타일. [셀 스타일 지정에 사용할 수 있는 속성 목록 확인](api/spreadsheet_parse_method.md#list-of-properties) 

### 예제 {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 하나의 셀에 스타일 설정
spreadsheet.setStyle("A1", {background: "red"});

// 셀 범위에 동일한 스타일 설정
spreadsheet.setStyle("A1:D1", {color: "blue"});

// 여러 셀에 동일한 스타일 설정
spreadsheet.setStyle("B6,A1:D1", {color:"blue"});

// 범위 내 셀에 배열의 스타일을 순서대로 설정
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

**관련 샘플**: [Spreadsheet. 스타일이 적용된 데이터](https://snippet.dhtmlx.com/abnh7glb)

:::info
v4.1부터 셀 또는 셀 범위 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
spreadsheet.setStyle("sheet1!A2", {background: "red"}); 
~~~

여기서 `sheet1`은 탭 이름입니다.

탭 이름을 지정하지 않으면 활성 탭의 셀에 스타일이 적용됩니다.
:::
