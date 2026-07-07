---
sidebar_label: load()
title: load 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 load 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# load()

### 설명 {#description}

@short: 외부 파일에서 데이터를 로드합니다

### 사용법 {#usage}

~~~jsx
load(url: string, type?: string): promise;
~~~

### 매개변수 {#parameters}

- `url` - (필수) 외부 파일의 URL
- `type` - (선택) 로드할 데이터 타입: "json" (기본값), "csv", "xlsx"

### 반환값 {#returns}

이 메서드는 데이터 로딩의 promise를 반환합니다

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// JSON 형식으로 데이터 로드 (기본값)
spreadsheet.load("../common/data.json");

// CSV 형식으로 데이터 로드
spreadsheet.load("../common/data.csv", "csv");

// Excel 형식으로 데이터 로드 (.xlsx만 지원)
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

**관련 예제:**
- [Spreadsheet. 데이터 로드](https://snippet.dhtmlx.com/ih9zmc3e)

- [Spreadsheet. CSV 로드](https://snippet.dhtmlx.com/1f87y71v)

- [Spreadsheet. Xlsx 가져오기](https://snippet.dhtmlx.com/cqlpy828)

:::info
컴포넌트는 AJAX 호출을 수행하며 원격 URL이 유효한 데이터를 제공해야 합니다.

데이터 로딩은 비동기로 처리되므로, 로딩 완료 후 실행할 코드는 promise로 감싸야 합니다:

~~~jsx
spreadsheet.load("../some/data.json").then(function(){
    spreadsheet.selection.add(123);
});
~~~
:::

### Excel 데이터 로드 {#loading-excel-data}

:::note
컴포넌트는 `.xlsx` 확장자의 Excel 파일 가져오기만 지원합니다.
:::

DHTMLX Spreadsheet는 WebAssembly 기반 라이브러리 [Excel2Json](https://github.com/dhtmlx/excel2json)을 사용하여 Excel에서 데이터를 가져옵니다. [세부 정보 확인](loading_data.md#loading-excel-file-xlsx).

### JSON 파일 로드 {#loading-json-files}

사용자가 파일 탐색기를 통해 JSON 파일을 스프레드시트에 로드할 수 있습니다. 이를 위해:

- ".json" 파일을 선택할 수 있는 파일 탐색기를 여는 버튼을 지정합니다:

~~~html
<section class="dhx_sample-controls">
    <button class="dhx_sample-btn dhx_sample-btn--flat" onclick="json()">Import json</button>
</section>
~~~


- `load()` 메서드를 두 개의 매개변수와 함께 호출합니다: URL로 빈 문자열, 로드할 데이터 타입("json"):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
});

spreadsheet.parse(dataset);

function json() {
    spreadsheet.load("", "json"); // .json 파일에서 데이터를 로드합니다
}
~~~

[예제](https://snippet.dhtmlx.com/e3xct53l)를 확인하세요.

**변경 이력:** 파일 탐색기를 통한 JSON 파일 로드 기능이 v4.3에서 추가됨

**관련 문서:** [데이터 로딩 및 내보내기](loading_data.md)
