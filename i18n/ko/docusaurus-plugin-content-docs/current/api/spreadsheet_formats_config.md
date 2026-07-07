---
sidebar_label: formats
title: formats 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 formats 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# formats

### 설명 {#description}

@short: 선택 사항. 숫자 형식 목록을 정의합니다  

### 사용법 {#usage}

~~~jsx
formats?: array;
~~~

### 매개변수 {#parameters}

`formats` 속성은 숫자 형식 객체의 배열이며, 각 객체는 다음 속성들을 포함합니다:

- `id` - [](api/spreadsheet_setformat_method.md) 메서드로 셀에 형식을 설정할 때 사용하는 형식의 id
- `mask` - 숫자 형식의 마스크
- `name` - 도구 모음 및 메뉴 드롭다운 목록에 표시되는 형식의 이름
- `example` - 형식이 적용된 숫자가 어떻게 보이는지 보여주는 예제. 형식 예제의 기본값으로 숫자 2702.31이 사용됩니다

### 기본 설정 {#default-config}

기본 숫자 형식은 다음과 같습니다:

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // depending on the timeFormat config
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" }
];
~~~


### 예제 {#example}

~~~jsx {2-19}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    formats: [
        {
            name: "U.S. Dollar",
            id: "currency",
            mask: "$#,##0.00"
        },
        {
            name: "Euro",
            id: "euro",
            mask: "[$€]#.##0,00",
            example: "1000.50"
        },
        {
            name: "Swiss franc",
            id: "franc",
            mask: "[$CHF ]#.##0,00"
        }
    ],
    // other config parameters
});
~~~

**변경 로그:**
- "Time" 형식이 v4.3에서 추가됨
- "Date" 형식이 v4.2에서 추가됨
- "Text" 형식이 v4.0에서 추가됨

**관련 문서:** 
- [숫자 형식 지정](number_formatting.md)
- [형식 사용자 정의](number_formatting.md#formats-customization)
