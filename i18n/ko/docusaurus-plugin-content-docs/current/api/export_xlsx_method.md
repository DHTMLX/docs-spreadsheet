---
sidebar_label: xlsx()
title: xlsx 내보내기 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 xlsx 내보내기 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# xlsx()

### 설명 {#description}

@short: 스프레드시트의 데이터를 Excel(.xlsx) 파일로 내보냅니다

### 사용법 {#usage}

~~~jsx
xlsx(name:string): void;
~~~

### 매개변수 {#parameters}

- `name` - (선택 사항) 내보낼 .xlsx 파일의 이름

### 예제 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into an Excel file
spreadsheet.export.xlsx();

// exports data from a spreadsheet into an Excel file with a custom name
spreadsheet.export.xlsx("MyData");
~~~

:::note 
컴포넌트는 `.xlsx` 확장자를 가진 Excel 파일로의 내보내기만 지원합니다.
:::

:::info
DHTMLX Spreadsheet는 WebAssembly 기반 라이브러리 [Json2Excel](https://github.com/dhtmlx/json2excel)을 사용하여 Excel로 데이터를 내보냅니다. [자세한 내용을 확인하세요](loading_data.md#exporting-data).
:::

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md)

**관련 샘플:** [Spreadsheet. Xlsx 내보내기](https://snippet.dhtmlx.com/btyo3j8s)
