---
sidebar_label: localization
title: localization 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 localization 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# localization

### 설명 {#description}

@short: 선택 사항. 숫자, 날짜, 시간 및 통화 형식을 정의합니다

### 사용법 {#usage}

~~~jsx
localization?: object;
~~~

### 매개변수 {#parameters}

`localization` 객체는 다음 속성을 포함할 수 있습니다:

- `decimal` - (선택) 소수점 구분자로 사용되는 기호, 기본값은 `"."`입니다.<br>가능한 값: `"." | ","`
- `thousands` - (선택) 천 단위 구분자로 사용되는 기호, 기본값은 `","`입니다.<br>가능한 값: `"." | "," | " " | ""`
- `currency` - (선택) 통화 기호, 기본값은 `"$"`입니다
- `dateFormat` - (선택) 날짜 표시 형식을 문자열로 설정합니다. 기본 형식은 `"%d/%m/%Y"`입니다. [아래](#characters-for-setting-date-format)에서 세부 정보를 확인하세요
- `timeFormat` - (선택) 시간 표시 형식을 `12` 또는 `24`로 설정합니다. 기본 형식은 `12`입니다

### 기본 설정 {#default-config}

~~~jsx
const defaultLocales = {
    decimal: ".", 
    thousands: ",",
    currency: "$",
    dateFormat: "%d/%m/%Y",
    timeFormat: 12,
};
~~~

### 예제 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    localization: {
        decimal: ",", 
        thousands: " ", 
        currency: "¥",  
        dateFormat: "%D/%M/%Y",
        timeFormat: 24
    }
});

spreadsheet.parse(dataset);
~~~

### 날짜 형식 설정 문자 {#characters-for-setting-date-format}

DHTMLX Spreadsheet는 날짜 형식 설정에 다음 문자를 사용합니다:

| 문자 | 정의 |
|-----------|---------------------------------------------------|
| **%d**    | 앞에 0이 붙는 날짜 숫자, 01..31         |
| **%j**    | 날짜 숫자, 1..31                            |
| **%D**    | 요일 약식 이름, Su Mo Tu...                |
| **%l**    | 요일 전체 이름, Sunday Monday Tuesday...    |
| **%m**    | 앞에 0이 붙는 월 숫자, 01..12       |
| **%n**    | 월 숫자, 1..12                          |
| **%M**    | 월 약식 이름, Jan Feb Mar...           |
| **%F**    | 월 전체 이름, January February March... |
| **%y**    | 연도 숫자, 2자리                        |
| **%Y**    | 연도 숫자, 4자리                        |
| **%h**    | 앞에 0이 붙는 12시간 형식 시간, 01..12)        |
| **%g**    | 12시간 형식 시간, 1..12)                   |
| **%H**    | 앞에 0이 붙는 24시간 형식 시간, 00..23         |
| **%G**    | 24시간 형식 시간, 0..23                    |
| **%i**    | 앞에 0이 붙는 분, 01..59                 |
| **%s**    | 앞에 0이 붙는 초, 01..59                 |
| **%a**    | am 또는 pm                                          |
| **%A**    | AM 또는 PM                                          |
| **%u**    | 밀리초                                      |

**변경 로그:** 
- v5.1에서 추가됨

**관련 문서:** [숫자, 날짜, 시간, 통화 현지화](number_formatting.md#number-date-time-currency-localization)
