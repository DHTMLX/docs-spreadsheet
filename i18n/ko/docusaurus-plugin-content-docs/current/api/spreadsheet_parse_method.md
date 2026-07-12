---
sidebar_label: parse()
title: parse 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 parse 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# parse()

### 설명 {#description}

@short: 로컬 데이터 소스에서 스프레드시트로 데이터를 로드합니다

### 사용법 {#usage}

~~~jsx title="한 시트에 데이터 로드"
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        },
        locked?: boolean,
        link?: {
            text?: string,
            href: string
        }
    },
    // 추가 셀 객체
]): void;
~~~

~~~jsx title="여러 시트에 데이터 로드"
parse({
    sheets: [
        {
            name?: string,
            id?: string,
            cols?: [
                {
                    width?: number,
                    hidden?: boolean,
                },
                // 추가 열 객체
            ],
            rows?: [
                {
                    height?: number,
                    hidden?: boolean,
                },
                // 추가 행 객체
            ],
            data: [
                {
                    cell: string,
                    value: string | number | Date,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // 추가 셀 객체
            ],
            merged?: [
                { 
                    from: { column: index, row: index }, 
                    to: { column: index, row: index }
                },
                // 추가 객체
            ],
            freeze?: {
               col?: number,
               row?: number,
            }
        },
        // 추가 시트 객체
    ]      
}): void;
~~~

### 매개변수 {#parameters}

*하나의 시트*에 대한 데이터 셋을 생성하려면 데이터를 **셀 객체 배열**로 지정합니다. 각 **셀** 객체에는 다음 매개변수를 지정할 수 있습니다:

- `cell` - (필수) "열 id + 행 id" 형식으로 구성된 셀 id (예: A1)
- `value` - (필수) 셀의 값
- `css` - (선택) CSS 클래스 이름
- `format` - (선택) 셀 값에 적용할 [기본 숫자 형식](number_formatting.md#default-number-formats) 또는 [사용자 정의 형식](number_formatting.md#formats-customization)의 이름
- `editor` - (선택) 셀 편집기 구성 설정 객체:
    - `type` - (필수) 셀 편집기 유형: "select"
    - `options` - (필수) 셀 범위("A1:B8") 또는 문자열 값 배열
- `locked` - (선택) 셀 잠금 여부를 정의합니다. 기본값은 `false`
- `link` - (선택) 셀에 추가된 링크 구성 설정 객체:
    - `text` - (선택) 링크 텍스트
    - `href` - (필수) 링크 대상을 정의하는 URL

<br>

*여러 시트*에 대한 데이터 셋을 한 번에 생성하려면 데이터를 다음 매개변수를 가진 **객체**로 지정합니다:

- `sheets` - (필수) **시트** 객체 배열. 각 객체는 다음 속성을 가집니다:
    - `name` - (선택) 시트 이름
    - `id` - (선택) 시트 id
    - `rows` - (선택) 행 구성 객체 배열. 각 객체는 다음 속성을 포함할 수 있습니다:
        - `height` - (선택) 행 높이. 지정하지 않으면 행 높이는 32px
        - `hidden` - (선택) 행의 가시성을 정의합니다
    - `cols` - (선택) 열 구성 객체 배열. 각 객체는 다음 속성을 포함할 수 있습니다:
        - `width` - (선택) 열 너비. 지정하지 않으면 열 너비는 120px
        - `hidden` - (선택) 열의 가시성을 정의합니다
    - `data` - (필수) **셀** 객체 배열. 각 객체는 다음 속성을 가집니다:
        - `cell` - (필수) "열 id + 행 id" 형식으로 구성된 셀 id (예: A1)
        - `value` - (필수) 셀의 값
        - `css` - (선택) CSS 클래스 이름
        - `format` - (선택) 셀 값에 적용할 [기본 숫자 형식](number_formatting.md#default-number-formats) 또는 [사용자 정의 형식](number_formatting.md#formats-customization)의 이름
        - `editor` - (선택) 셀 편집기 구성 설정 객체:
            - `type` - (필수) 셀 편집기 유형: "select"
            - `options` - (필수) 셀 범위("A1:B8") 또는 문자열 값 배열
        - `locked` - (선택) 셀 잠금 여부를 정의합니다. 기본값은 `false`
        - `link` - (선택) 셀에 추가된 링크 구성 설정 객체:
            - `text` - (선택) 링크 텍스트
            - `href` - (필수) 링크 대상을 정의하는 URL
    - `merged` - (선택) 병합할 셀 범위를 정의하는 객체 배열. 각 객체는 다음 속성을 포함해야 합니다:
        - `from` - 범위의 첫 번째 셀 위치를 정의하는 객체:
            - `column` - 열의 인덱스
            - `row` - 행의 인덱스
        - `to` - 범위의 마지막 셀 위치를 정의하는 객체:
            - `column` - 열의 인덱스
            - `row` - 행의 인덱스
    - `freeze` - (선택) 특정 시트에 고정 열/행을 설정하고 조정하는 객체. 다음 속성을 포함할 수 있습니다:
        - `col` - (선택) 고정할 열 수를 지정합니다 (예: 2). 기본값은 `0`
        - `row` - (선택) 고정할 행 수를 지정합니다 (예: 2). 기본값은 `0`

:::info
[`multisheets`](api/spreadsheet_multisheets_config.md) 구성 옵션이 `false`로 설정되면 시트가 하나만 생성됩니다.
:::

### 예제 {#example}

~~~jsx {22} title="예제 1. 한 시트에 데이터 로드"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, css: "someclass" },
    { cell: "D2", value: 430 },
    { cell: "E2", value: 2872.4 },
    
    // 셀에 드롭다운 목록 추가
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // 추가 데이터
];

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);
~~~

~~~jsx title="예제 2. 여러 시트에 데이터 로드"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            rows: [
                { height: 50, hidden: true }, // 첫 번째 행 구성
                { height: 50 }, // 두 번째 행 구성
                // 다른 행의 높이는 32
            ],
            cols: [
                { width: 300 }, // 첫 번째 열 구성
                { width: 300, hidden: true }, // 두 번째 열 구성
                // 다른 열의 너비는 120
            ],
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            merged: [
                // A1과 B1 셀을 병합
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // A2, A3, A4, A5 셀을 병합
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } }
            ],
            freeze: {
                col: 2,
                row: 2
            },
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
            ]
        }
    ]
};

spreadsheet.parse(data);
~~~

## 스타일이 적용된 데이터 파싱 {#parsing-styled-data}

데이터 셋을 준비할 때 셀에 특정 스타일을 추가할 수도 있습니다. 이렇게 하려면 데이터를 두 매개변수를 가진 객체로 정의합니다:

- `styles` - (필수) 특정 셀에 적용할 CSS 클래스를 담은 객체. [아래의 속성 목록을 참조하세요](#list-of-properties)
- `data` - (필수) 로드할 데이터

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "a1", value: "Country" },
        { cell: "b1", value: "Product" },
        { cell: "c1", value: "Price" },
        { cell: "d1", value: "Amount" },
        { cell: "e1", value: "Total Price" },

        { cell: "a2", value: "Ecuador" },
        { cell: "b2", value: "Banana" },
        { cell: "c2", value: 6.68, css: "someclass" },
        { cell: "d2", value: 430, css: "someclass" },
        { cell: "e2", value: 2872.4 }
    ],
};

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

:::info
`css` 속성을 사용하여 셀에 CSS 클래스를 설정합니다.
:::

### 속성 목록 {#list-of-properties}

`styles` 객체에 지정할 수 있는 속성 목록:

- `background`
- `color`
- `textAlign`
- `verticalAlign`
- `textDecoration`
- `fontWeight`
- `fontStyle`
- `multiline: "wrap"` (v5.0.3부터)
- `border`, `border-right`, `border-left`, `border-top`, `border-bottom` (v5.2부터)

:::note
필요한 경우 다음 속성도 사용할 수 있습니다:

- `fontSize`
- `font`
- `fontFamily`
- `textShadow`

단, 경우에 따라 예상대로 동작하지 않을 수 있습니다 (예: `position: absolute` 또는 `display: box` 적용 시)
:::

**변경 로그:**

- `sheets` 객체의 `rows` 및 `cols` 속성에 대한 `freeze` 속성과 `hidden` 매개변수는 v5.2에서 추가됨
- `cell` 객체의 `locked` 및 `link` 속성은 v5.1에서 추가됨
- `sheets` 객체의 `merged` 속성은 v5.0에서 추가됨
- `cell` 객체의 `editor` 속성은 v4.3에서 추가됨
- `sheets` 객체의 `rows` 및 `cols` 속성은 v4.2에서 추가됨
- 여러 시트에 대한 데이터 준비 기능은 v4.1에서 추가됨

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md)

**관련 예제**:

- [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)
- [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)
- [Spreadsheet. Initialization with merged cells](https://snippet.dhtmlx.com/0vtukep9)
