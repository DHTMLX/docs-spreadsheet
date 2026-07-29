---
sidebar_label: exportModulePath
title: exportModulePath 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 exportModulePath 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하세요.
---

# exportModulePath

### 설명 {#description}

@short: 선택 사항. 내보내기 모듈의 경로를 설정합니다

### 사용법 {#usage}

~~~jsx
exportModulePath?: string;
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx", // 내보내기 모듈의 `worker.js` 파일에 대한 로컬 경로
    // other config parameters
});
~~~

### 상세 설명 {#details}

:::note 
DHTMLX Spreadsheet는 데이터를 Excel로 내보내기 위해 WebAssembly 기반 라이브러리 [JSON2Excel](https://github.com/dhtmlx/json2excel)을 사용합니다.
:::

파일을 내보내려면 `exportModulePath` 옵션으로 [Json2Excel](https://github.com/dhtmlx/json2excel) 라이브러리의 *worker.js* 파일 경로(내보내기가 처리되는 위치)를 설정해야 합니다. 기본적으로 `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`가 사용됩니다.
- 공개 내보내기 서버를 사용하는 경우, 기본값으로 사용되므로 링크를 별도로 지정할 필요가 없습니다
- 자체 내보내기 서버를 사용하는 경우 다음을 수행해야 합니다:
  - [**Json2Excel**](https://github.com/dhtmlx/json2excel) 라이브러리를 설치합니다
  - 특정 버전의 경우 `"../libs/json2excel/x.x/worker.js?vx"`를 사용합니다(`x.x`를 서버에 배포된 버전으로 교체하세요)


**관련 문서:** [데이터 로딩 및 내보내기](loading_data.md#exporting-data)

**관련 샘플:** [Spreadsheet. 사용자 정의 가져오기 내보내기 경로](https://snippet.dhtmlx.com/wykwzfhm)
