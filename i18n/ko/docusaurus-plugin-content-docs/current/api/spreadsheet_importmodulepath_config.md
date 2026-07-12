---
sidebar_label: importModulePath
title: importModulePath 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 importModulePath 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# importModulePath

### 설명 {#description}

@short: 선택 사항. import 모듈의 경로를 설정합니다

### 사용법 {#usage}

~~~jsx
importModulePath?: string;
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    importModulePath: "../libs/excel2json/1.0/worker.js",
    // 기타 설정 매개변수
});
~~~

### 세부 정보 {#details}

:::note 
DHTMLX Spreadsheet는 WebAssembly 기반 라이브러리 [Excel2json](https://github.com/DHTMLX/excel2json)을 사용하여 Excel에서 데이터를 가져옵니다.
:::

파일을 가져오려면 다음 작업이 필요합니다:

- **Excel2json** 라이브러리를 설치합니다
- 다음 두 가지 방법 중 하나로 `importModulePath` 옵션에 *worker.js* 파일의 경로를 설정합니다:
  - 컴퓨터의 로컬 경로를 제공하는 방법: `"../libs/excel2json/1.0/worker.js"`
  - CDN의 파일 링크를 제공하는 방법: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

기본값으로 CDN 링크가 사용됩니다.

**관련 문서:** [데이터 로딩 및 내보내기](loading_data.md#loading-excel-file-xlsx)

**관련 샘플:** [Spreadsheet. 사용자 정의 Import Export 경로](https://snippet.dhtmlx.com/wykwzfhm)
