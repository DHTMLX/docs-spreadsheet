---
sidebar_label: 숫자 서식
title: 숫자 서식
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 숫자 서식에 대한 개발자 가이드를 확인하세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
---

# 숫자 서식 {#number-formatting}

DHTMLX Spreadsheet는 셀의 숫자 값에 적용할 수 있는 숫자 서식을 지원합니다.

![공통, 숫자, 통화, 퍼센트, 날짜, 시간, 텍스트 옵션이 있는 DHTMLX Spreadsheet 숫자 서식 드롭다운](/img/number_format_options.png)

:::note
[사용자 가이드](number_formatting_guide.md)를 통해 사용자들이 Spreadsheet를 더 쉽게 사용할 수 있습니다.
:::

## 기본 숫자 서식 {#default-number-formats}

숫자 서식은 다음 속성 세트를 포함하는 객체입니다:

- `id` - [`setFormat()`](api/spreadsheet_setformat_method.md) 메서드로 셀에 서식을 설정할 때 사용하는 서식의 id
- `mask` - 숫자 서식의 마스크. [아래](#the-structure-of-a-mask)에서 마스크에 사용할 수 있는 문자 목록을 확인하세요
- `name` - 툴바 및 메뉴 드롭다운 목록에 표시되는 서식의 이름
- `example` - 서식이 적용된 숫자가 어떻게 보이는지 보여주는 예제. 기본적으로 서식 예제에는 2702.31이 사용됩니다

기본 숫자 서식은 다음과 같습니다:

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
           mask: hh:mm:ss am/pm || hh:mm:ss, // localization.timeFormat 구성에 따라 다름
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" },
    { name: "Scientific", id: "scientific", mask: "0.00E+00", example: "1.50E+03" }
];
~~~

다양한 숫자 서식이 적용된 스프레드시트의 모습은 다음과 같습니다:

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 날짜 서식 {#date-format}

[`localization`](api/spreadsheet_localization_config.md) 속성의 `dateFormat` 옵션으로 스프레드시트에 표시되는 날짜 서식을 정의할 수 있습니다. 기본 서식은 "%d/%m/%Y"입니다.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        dateFormat: "%D/%M/%Y",
    }
});

spreadsheet.parse({
    styles: {
        // 스타일 세트
    },
    data: [
        {cell: "B1", value: "03/10/2022", format: "date"},
        {cell: "B2", value: new Date(), format: "date"},
    ]
});
~~~

[날짜 서식 설정에 사용할 수 있는 전체 문자 목록](api/spreadsheet_localization_config.md#characters-for-setting-date-format)을 확인하세요.

## 시간 서식 {#time-format}

스프레드시트 셀에 시간이 표시되는 서식을 정의하려면 [`localization`](api/spreadsheet_localization_config.md) 속성의 `timeFormat` 옵션을 사용하세요:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        timeFormat: 24,
    }
});

spreadsheet.parse({
    styles: {
        // 스타일 세트
    },
    data: [
        { cell: "A1", value: "18:30", format: "time" },
        { cell: "A2", value: 44550.5625, format: "time" },
        { cell: "A3", value: new Date(), format: "time" },
    ]
});
~~~

## 숫자, 날짜, 시간, 통화 로컬라이제이션 {#number-date-time-currency-localization}

Spreadsheet 구성 옵션을 사용하면 시간과 날짜를 현지화하고, 필요한 통화 기호를 지정하며, 원하는 소수점 및 천단위 구분자를 제공할 수 있습니다. 이러한 설정은 모두 [`localization`](api/spreadsheet_localization_config.md) 속성에서 사용할 수 있습니다. 다음 속성을 포함하는 객체입니다:

- `decimal` - (선택) 소수점 구분자로 사용하는 기호, 기본값은 `"."` (마침표)<br>가능한 값: `"." | ","`
- `thousands` - (선택) 천단위 구분자로 사용하는 기호, 기본값은 `","` (쉼표)<br>가능한 값: `"." | "," | " " | ""`
- `currency` - (선택) 통화 기호, 기본값은 `"$"`
- `dateFormat` - (선택) 문자열로 설정된 날짜 표시 서식, 기본값은 `"%d/%m/%Y"`. [`localization`](api/spreadsheet_localization_config.md) API 페이지에서 자세한 내용을 확인하세요
- `timeFormat` - (선택) `12` 또는 `24`로 설정된 시간 표시 서식, 기본값은 `12`

예를 들어, 아래와 같이 기본 로컬라이제이션 설정을 변경할 수 있습니다:

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

Spreadsheet의 `localization` 객체 구성 결과는 다음과 같습니다:

<iframe src="https://snippet.dhtmlx.com/xislsb3c?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 과학적 숫자 서식 {#scientific-number-format}

과학적(지수) 표기법은 기본 서식으로 제공되며 매우 크거나 작은 숫자를 간결하게 표현하는 데 유용합니다. 내장된 `"scientific"` 서식은 마스크 `0.00E+00`을 사용하며, 예를 들어 1500.31을 `1.50E+03`으로 표시합니다.

셀에 적용하려면 [`setFormat()`](api/spreadsheet_setformat_method.md) 메서드를 사용하세요:

~~~jsx
spreadsheet.setFormat("A1", "scientific");
~~~

[`formats`](api/spreadsheet_formats_config.md) 구성 옵션을 통해 다른 마스크로 사용자 정의 과학적 서식을 정의할 수도 있습니다. 예를 들어 `0.###E+0`은 더 간결한 출력을 생성합니다:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    formats: [
        { id: "scientific_compact", mask: "0.###E+0", name: "Scientific (compact)", example: "1.5E+3" }
    ]
});
~~~

## 서식 사용자 정의 {#formats-customization}

[기본 숫자 서식](#default-number-formats)에만 국한되지 않습니다. 두 가지 방법으로 서식을 사용자 정의할 수 있습니다:

- 기본 숫자 서식의 설정 변경
- 스프레드시트에 사용자 정의 숫자 서식 추가

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

이러한 모든 수정은 [`formats`](api/spreadsheet_formats_config.md) 구성 옵션으로 할 수 있습니다. 서식 객체 배열이며, 각 객체는 다음 속성 세트를 포함합니다:

- `id` - (`string`) 필수, [`setFormat()`](api/spreadsheet_setformat_method.md) 메서드로 셀에 서식을 설정할 때 사용하는 서식의 id
- `mask` - (`string`) 필수, 숫자 서식의 마스크. [아래](#the-structure-of-a-mask)에서 마스크에 사용할 수 있는 문자 목록을 확인하세요
- `name` - (`string`) 선택, 툴바 및 메뉴 드롭다운 목록에 표시되는 서식의 이름
- `example` - (`string`) 선택, 서식이 적용된 숫자가 어떻게 보이는지 보여주는 예제

### 마스크의 구조 {#the-structure-of-a-mask}

마스크에는 숫자 자리 표시자, 구분자, 퍼센트 및 통화 기호, 유효 문자를 포함하는 공통 구문 문자 세트가 포함될 수 있습니다:

- **0** - 숫자의 한 자리. 숫자가 서식의 0 수보다 적은 경우 의미 없는 0을 표시하는 데 사용됩니다. 예를 들어 2를 2.0으로 표시하려면 서식 0.0을 사용하세요.
- **#** - 숫자의 한 자리. 유효한 숫자만 표시하는 데 사용됩니다(숫자가 서식의 # 기호 수보다 적은 경우 의미 없는 0은 생략됩니다).
- **$** - 숫자를 달러 값으로 서식 지정합니다. 다른 통화 기호를 사용하려면 마스크에서 **[$ your_currency_sign]**#,##0.00으로 정의해야 합니다. 예를 들어 [$ €]#,##0.00.
{{note [$와 ] 사이의 모든 문자는 통화 기호로 해석됩니다.}}
- **.(마침표)** - 숫자에 소수점을 적용합니다.
- **,(쉼표)** - 숫자에 천단위 구분자를 적용합니다.
- **[날짜 서식 설정 문자](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)** - 날짜 및 시간 마스크를 만드는 데 사용됩니다. 예를 들어 27.09.2023을 27, Sep 2023으로 표시하려면 서식 "%d, %M %Y"를 사용하세요.
- **E+ / E-** - 숫자를 과학적(지수) 표기법으로 서식 지정합니다. `E` 뒤의 자릿수는 지수 자릿수의 최솟값을 정의합니다. `E+`는 항상 지수 부호를 표시하고, `E-`는 음수 지수에 대해서만 표시합니다. 예를 들어 마스크 `0.00E+00`은 1500.31을 `1.50E+03`으로 표시합니다.

## 서식 설정 {#setting-format}

숫자 값에 필요한 서식을 적용하려면 [`setFormat()`](api/spreadsheet_setformat_method.md) 메서드를 사용하세요. 두 개의 매개변수를 받습니다:

- `cell` - (`string`) 값의 서식을 지정할 셀의 id
- `format` - (`string`) 셀 값에 적용할 [기본 숫자 서식](#default-number-formats)의 이름

예를 들어:

~~~jsx
// A1 셀에 퍼센트 서식을 적용합니다
spreadsheet.setFormat("A1","percent");
~~~

## 서식 가져오기 {#getting-format}

[`getFormat()`](api/spreadsheet_getformat_method.md) 메서드로 셀 값에 적용된 숫자 서식을 검색할 수 있습니다. 이 메서드는 셀의 id를 매개변수로 받습니다.

~~~jsx
var format = spreadsheet.getFormat("A1"); 
// ->"percent"
~~~

## 이벤트 {#events}

이벤트 쌍을 사용하여 셀 서식 변경을 제어할 수 있습니다:

- [`beforeAction`](api/spreadsheet_beforeaction_event.md) - `setCellFormat` 액션이 실행되기 전에 발생합니다
- [`afterAction`](api/spreadsheet_afteraction_event.md) - `setCellFormat` 액션이 실행된 후에 발생합니다
