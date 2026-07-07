---
sidebar_label: setFilter()
title: setFilter 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리의 setFilter 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# setFilter()

### 설명 {#description}

@short: 지정된 기준으로 스프레드시트의 데이터를 필터링합니다

### 사용법 {#usage}

~~~jsx   
setFilter( 
    cell?: string,
    rules?:  [
        {
            condition?: {
                factor: "string", 
                value: date | number |string | [number, number]
            },
            exclude?: any[]
        },
        // 추가 규칙 객체
    ]
): void;
~~~

### 매개변수 {#parameters}

- `cell` - (선택 사항) 값이 필터링될 열의 id를 포함하는 셀 id(또는 셀 범위) (예: "A1", "A1:C10", "sheet2!A1")
- `rules` - (선택 사항) 필터링 규칙이 담긴 객체 배열. 각 객체에는 다음 매개변수가 포함될 수 있습니다:
    - `condition` - (선택 사항) 시트의 조건부 필터링을 위한 매개변수 객체:
        - `factor` - (필수) 필터링에 사용할 비교 표현식을 정의하는 문자열 값. 사용 가능한 값 목록은 [아래](#list-of-factors)를 참고하세요
        - `value` - (필수) 지정된 factor로 필터링할 때 사용할 값
    - `exclude` - (선택 사항) 시트에서 제외할 데이터 포인트 배열

:::note
필터링을 초기화하려면 매개변수 없이 메서드를 호출하거나 `cell` 매개변수만 전달하세요.
:::

### 예제 {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// A열에 지정된 조건으로 데이터 필터링
spreadsheet.setFilter("A2", [{condition: {factor: "te", value:"r" }}]);

// Date 시트의 A열에 지정된 기준으로 데이터 필터링
spreadsheet.setFilter("Date!A1", [{condition: {factor: "db", value:"18/10/2022" }, exclude: ["25/06/2022"]}]);

// C열에 지정된 조건으로 데이터 필터링
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}}]);

// A열과 C열에 지정된 조건으로 데이터 필터링
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);


// 필터링 초기화
spreadsheet.setFilter();
~~~

### 인수(factor) 목록 {#list-of-factors}

| Factor | 의미                  |
| ------ | --------------------- |
| "e"    | 비어 있음             |
| "ne"   | 비어 있지 않음        |
| "tc"   | 텍스트 포함           |
| "tdc"  | 텍스트 포함하지 않음  |
| "ts"   | 텍스트 시작           |
| "te"   | 텍스트 끝             |
| "tex"  | 텍스트 일치           |
| "d"    | 날짜 일치             |
| "db"   | 날짜 이전             |
| "da"   | 날짜 이후             |
| "gt"   | 초과                  |
| "geq"  | 이상                  |
| "lt"   | 미만                  |
| "leq"  | 이하                  |
| "eq"   | 같음                  |
| "neq"  | 같지 않음             |
| "ib"   | 사이                  |
| "inb"  | 사이가 아님           |

**변경 이력:** v5.0에서 추가됨

**관련 문서:** [데이터 필터링](working_with_ssheet.md#filtering-data)

**관련 예제:** [Spreadsheet. API를 통한 필터링](https://snippet.dhtmlx.com/effrcsg6)
