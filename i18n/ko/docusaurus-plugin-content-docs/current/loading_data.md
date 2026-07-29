---
sidebar_label: 데이터 로드 및 내보내기
title: 데이터 로드하기
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 데이터 로드에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하십시오.
---

# 데이터 로드 및 내보내기 {#data-loading-and-export}

셀 데이터와 스타일을 모두 포함할 수 있는 준비된 데이터 세트로 DHTMLX Spreadsheet를 채울 수 있습니다. 컴포넌트는 두 가지 데이터 로드 방법을 지원합니다.

- 외부 파일에서 로드
- 로컬 소스에서 로드

컴포넌트는 또한 [Excel 파일로 데이터 내보내기](#exporting-data)를 지원합니다.

## 데이터 준비하기 {#preparing-data}

DHTMLX Spreadsheet는 JSON 형식의 데이터를 받습니다.

셀 객체의 단순 배열일 수 있습니다. 하나의 시트에 대한 데이터 세트만 만들어야 하는 경우 이 방법을 사용하십시오.

~~~jsx  title="하나의 시트를 위한 데이터 준비"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, format:"currency" },
    { cell: "D2", value: 430, format:"percent" },
    // "myFormat" is the id of a custom format
    { cell: "E2", value: 2872.4, format:"myFormat" },
    
    // add drop-down lists to cells
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // more cell objects
];
~~~

또는 여러 시트에 한 번에 로드할 데이터를 가진 객체일 수 있습니다. 예를 들어:

~~~jsx title="여러 시트를 위한 데이터 준비"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ],
            merged: [
                // merge cells A1 and B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // merge cells A2, A3, A4, and A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ]
        },
        // more sheet objects
    ]
};
~~~

두 가지 방법에 사용 가능한 속성의 전체 목록은 [API 레퍼런스](api/spreadsheet_parse_method.md)에서 확인하십시오.

:::tip
병합된 셀을 로드하는 기능은 시트 객체 형태로 데이터를 준비한 경우에만 사용 가능합니다.
:::

### 셀 스타일 설정하기 {#setting-styles-for-cells}

데이터 세트에서 셀 스타일을 정의해야 할 수도 있습니다. 이 경우 데이터는 데이터 객체와 특정 셀에 적용되는 CSS 클래스를 별도의 속성으로 설명하는 객체여야 합니다.

`css` 속성으로 셀에 CSS 클래스를 설정하십시오.

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "A1", value: "Country" },
        { cell: "B1", value: "Product" },
        { cell: "C1", value: "Price" },
        { cell: "D1", value: "Amount" },
        { cell: "E1", value: "Total Price" },

        { cell: "A2", value: "Ecuador" },
        { cell: "B2", value: "Banana" },
        { cell: "C2", value: 6.68, css: "someclass" },
        { cell: "D2", value: 430, css: "someclass" },
        { cell: "E2", value: 2872.4 }
    ],
}
~~~

:::info
[셀 스타일 지정에 사용할 수 있는 속성 목록 확인하기](api/spreadsheet_parse_method.md#list-of-properties)
:::

### 셀 잠금 상태 설정하기 {#setting-the-locked-state-for-a-cell}

데이터 세트에 잠긴 셀을 지정하려면 셀의 `locked` 속성을 사용하여 `true`로 설정하십시오.

~~~jsx
const dataset = [
    { cell: "a1", value: "Country", locked: true }, //locks a cell
    { cell: "b1", value: "Product", locked: true },   

    { cell: "a2", value: "Ecuador" },
    { cell: "b2", value: "Banana" },

    { cell: "a3", value: "Belarus" },
    { cell: "b3", value: "Apple" },
    // more cells
];
~~~

사용 가능한 셀 속성의 전체 목록은 [API 레퍼런스](api/spreadsheet_parse_method.md#parameters)에서 확인하십시오.

**관련 샘플**: [Spreadsheet. 잠긴 셀](https://snippet.dhtmlx.com/czeyiuf8?tag=spreadsheet)

### 셀에 링크 추가하기 {#adding-a-link-into-a-cell}

데이터 세트에서 직접 셀에 대한 링크를 지정할 수 있습니다. 이를 위해 `link` 속성을 객체로 설정하고 필요한 설정을 제공하십시오.

- `text` - (선택 사항) 링크의 텍스트
- `href` - (필수) 링크 대상을 정의하는 URL

데이터 세트에서의 모습은 다음과 같습니다.

~~~jsx
const dataset = [
    { cell: "a1", value: "Country"}, //locks a cell
    { cell: "b1", value: "Product"},   

    { cell: "a2", value: "Ecuador"},
    { 
        cell: "b2", 
        value: "Banana", 
        link:{
            href:"http://localhost:8080/"
        } 
    },
    // more cells
];
~~~

:::note
`cell` 객체의 `value` 속성과 `link` 객체의 `text` 속성은 상호 배타적이므로 동시에 사용하지 마십시오.
:::

**관련 샘플**: [Spreadsheet. JSON 가져오기 및 내보내기](https://snippet.dhtmlx.com/e3xct53l?tag=spreadsheet)

## 외부 데이터 로드 {#external-data-loading}

### JSON 데이터 로드하기 {#loading-json-data}

기본적으로 Spreadsheet는 JSON 형식의 데이터를 받습니다. 외부 소스에서 데이터를 로드하려면 [](api/spreadsheet_load_method.md) 메서드를 사용하십시오. 이 메서드는 데이터 파일의 URL을 매개변수로 받습니다.

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.json");
~~~

**관련 샘플**: [Spreadsheet. 데이터 로드](https://snippet.dhtmlx.com/ih9zmc3e?tag=spreadsheet)


:::info
사용자가 파일 탐색기를 통해 JSON 파일을 스프레드시트로 가져올 수 있게 하려면 [JSON 파일 로드하기](api/spreadsheet_load_method.md#loading-json-files)를 참고하십시오.
:::

### CSV 데이터 로드하기 {#loading-csv-data}

CSV 형식의 데이터도 로드할 수 있습니다. 이를 위해 [](api/spreadsheet_load_method.md) 메서드를 호출하고 두 번째 매개변수로 형식 이름("csv")을 전달하십시오.

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.csv", "csv");
~~~

**관련 샘플**: [Spreadsheet. CSV 로드](https://snippet.dhtmlx.com/1f87y71v?tag=spreadsheet)

### Excel 파일(.xlsx) 로드하기 {#loading-excel-file-xlsx}

`.xlsx` 확장자의 Excel 형식 파일을 스프레드시트로 로드할 수 있습니다. 사용자 인터페이스의 툴바와 메뉴에 해당 컨트롤이 있습니다.

- 메뉴: 파일 -> 다음으로 가져오기.. -> Microsoft Excel(.xlsx)

![Microsoft Excel XLSX 파일을 위한 가져오기 옵션이 있는 DHTMLX Spreadsheet 파일 메뉴](/img/file_import.png)

- 툴바: 가져오기 -> Microsoft Excel(.xlsx)

![Microsoft Excel XLSX 파일을 위한 가져오기 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/import_xlsx.png)

#### 데이터를 가져오는 방법 {#how-to-import-data}

{{note 가져오기 기능은 Internet Explorer에서 작동하지 않습니다.}}

DHTMLX Spreadsheet는 WebAssembly 기반 라이브러리인 [Excel2Json](https://github.com/dhtmlx/excel2json)을 사용하여 Excel에서 데이터를 가져옵니다. Excel 데이터를 Spreadsheet로 로드하려면 다음을 수행해야 합니다.

- **Excel2Json** 라이브러리를 설치합니다
- Spreadsheet 구성에 [](api/spreadsheet_importmodulepath_config.md) 옵션을 지정하고 다음 두 가지 방법 중 하나로 *worker.js* 파일 경로를 설정합니다.
  - 컴퓨터의 파일에 대한 로컬 경로 제공: `"../libs/excel2json/1.0/worker.js"`
  - CDN의 파일에 대한 링크 제공: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    importModulePath: "../libs/excel2json/1.0/worker.js"
});
~~~

**관련 샘플**: [Spreadsheet. 사용자 정의 가져오기 내보내기 경로](https://snippet.dhtmlx.com/wykwzfhm)

Excel 파일에서 데이터를 로드하려면 [](api/spreadsheet_load_method.md) 메서드의 두 번째 매개변수로 확장자 유형 문자열("xlsx")을 전달하십시오.

~~~jsx
// .xlsx only
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

{{note 컴포넌트는 `.xlsx` 확장자를 가진 Excel 파일에서만 가져오기를 지원합니다.}}

**관련 샘플**: [Spreadsheet. Xlsx 가져오기](https://snippet.dhtmlx.com/cqlpy828?tag=spreadsheet)

필요한 경우 [스프레드시트 데이터를 Excel 파일로 내보낼](#exporting-data) 수도 있습니다.

### 로드 후 코드 처리하기 {#processing-after-loading-code}

컴포넌트는 AJAX 호출을 수행하며 원격 URL이 유효한 데이터를 제공할 것으로 기대합니다. 데이터 로드는 비동기적으로 이루어지므로 로드 후 코드는 promise로 래핑해야 합니다.

~~~jsx
spreadsheet.load("/some/data").then(function(){
   // do something
});
~~~

## 로컬 소스에서 로드하기 {#loading-from-local-source}

로컬 소스에서 데이터를 로드하려면 [](api/spreadsheet_parse_method.md) 메서드를 사용하십시오. 이 메서드의 매개변수로 [미리 정의된 데이터 세트](#preparing-data)를 전달하십시오.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.parse(data);
~~~

**관련 샘플**: [Spreadsheet. 사용자 정의 셀 수](https://snippet.dhtmlx.com/vc3mstsw)

여러 시트를 스프레드시트로 로드하는 방법에 대한 자세한 내용은 [시트 작업](working_with_sheets.md#loading-multiple-sheets) 문서를 참고하십시오.

## 상태 저장 및 복원 {#saving-and-restoring-state}

스프레드시트의 현재 상태를 저장하려면 [](api/spreadsheet_serialize_method.md) 메서드를 사용하십시오. 이 메서드는 데이터를 JSON 객체 배열로 변환합니다. 각 JSON 객체에는 셀의 구성이 포함됩니다.

~~~jsx
// saving state of the spreadsheet1
var state = spreadsheet1.serialize();
~~~

그런 다음 저장된 상태 배열에 저장된 데이터를 다른 스프레드시트로 파싱할 수 있습니다. 예를 들어:

~~~jsx
// creating a new spreadsheet
var spreadsheet2 = new dhx.Spreadsheet(document.body);
// parsing the state of the spreadsheet1 into spreadsheet2
spreadsheet2.parse(state);
~~~

## 데이터 내보내기 {#exporting-data}

### Excel로 내보내기 {#export-into-excel}

DHTMLX Spreadsheet는 스프레드시트 데이터를 Excel 파일로 내보낼 수 있습니다. 사용자 인터페이스의 툴바와 메뉴에 해당 컨트롤이 있습니다.

- 메뉴: 파일 -> 다음으로 다운로드.. -> Microsoft Excel(.xlsx)

![Microsoft Excel XLSX 내보내기를 위한 다른 이름으로 다운로드 옵션이 있는 DHTMLX Spreadsheet 파일 메뉴](/img/file_export.png)

- 툴바: 내보내기 -> Microsoft Excel(.xlsx)

![Microsoft Excel XLSX로 저장하기 위한 내보내기 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/export_xlsx.png)

#### 데이터를 내보내는 방법 {#how-to-export-data}

:::note 
내보내기 기능은 Internet Explorer에서 작동하지 않습니다.
:::

라이브러리는 WebAssembly 기반 라이브러리인 [Json2Excel](https://github.com/dhtmlx/json2excel)을 사용하여 데이터를 Excel로 내보냅니다. 내보내기는 **Json2Excel** 라이브러리의 *worker.js* 파일에서 처리됩니다(기본 링크: `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`). 공개 내보내기 서버 또는 로컬 내보내기 서버를 사용할 수 있습니다. 파일을 내보내려면 다음을 수행해야 합니다.

- Spreadsheet 구성에 [](api/spreadsheet_exportmodulepath_config.md) 옵션을 지정하고 *worker.js* 파일 경로를 설정합니다.
    - 공개 내보내기 서버를 사용하는 경우 기본값으로 사용되므로 링크를 지정할 필요가 없습니다
    - 자체 내보내기 서버를 사용하는 경우:
        - [**Json2Excel**](https://github.com/dhtmlx/json2excel) 라이브러리를 설치합니다
        - 특정 버전에 대해 `"../libs/json2excel/x.x/worker.js?vx"`를 사용합니다(`x.x`를 서버에 배포된 버전으로 교체하십시오)

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx" // the path to the export module, if a local export server is used
});
~~~

**관련 샘플**: [Spreadsheet. 사용자 정의 가져오기 내보내기 경로](https://snippet.dhtmlx.com/wykwzfhm)

필요한 소스를 조정했으면 Export 객체의 관련 [](api/export_xlsx_method.md) API 메서드를 사용하여 컴포넌트 데이터를 내보낼 수 있습니다.

~~~jsx
spreadsheet.export.xlsx();
~~~

**관련 샘플**: [Spreadsheet. Xlsx 내보내기](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

:::note 
컴포넌트는 `.xlsx` 확장자를 가진 Excel 파일로만 내보내기를 지원합니다.
:::

#### 내보낸 파일의 사용자 정의 이름 설정하기 {#how-to-set-a-custom-name-for-an-exported-file}

기본적으로 내보낸 파일의 이름은 "data"입니다. 내보낸 파일에 사용자 정의 이름을 지정할 수 있습니다. 이를 위해 [](api/export_xlsx_method.md) 메서드의 매개변수로 사용자 정의 이름을 전달하십시오.

~~~jsx
spreadsheet.export.xlsx("MyData");
~~~

**관련 샘플**: [Spreadsheet. Xlsx 내보내기](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

[Excel 파일에서 Spreadsheet로 데이터를 가져오는 단계](#loading-excel-file-xlsx)를 확인하십시오.

### JSON으로 내보내기 {#export-into-json}

v4.3부터 라이브러리는 스프레드시트 데이터를 JSON 파일로도 내보낼 수 있습니다. Export 객체의 [json()](api/export_json_method.md) 메서드를 사용하십시오.

~~~jsx
spreadsheet.export.json();
~~~

**관련 샘플**: [Spreadsheet. JSON 내보내기/가져오기](https://snippet.dhtmlx.com/e3xct53l)
