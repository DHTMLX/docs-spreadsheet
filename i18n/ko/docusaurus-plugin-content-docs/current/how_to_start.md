---
sidebar_label: 시작하는 방법
title: DHTMLX Spreadsheet 시작하는 방법
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 시작 방법을 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하십시오.
---

# 시작하는 방법 {#how-to-start}

이 튜토리얼은 페이지에서 완전한 기능을 갖춘 DHTMLX Spreadsheet를 구현하는 단계를 안내합니다. 이 컴포넌트는 계산 결과를 저장하고 재현해야 할 때 대량의 데이터를 관리하는 데 특히 효과적입니다.

![브라우저 창에서 샘플 데이터 테이블로 초기화된 DHTMLX Spreadsheet](/img/how_to_start.png)

## 1단계. 소스 파일 포함하기 {#step-1-including-source-files}

*index.html*이라는 HTML 파일을 만드는 것부터 시작하십시오. 그런 다음 Spreadsheet 소스 파일을 포함하십시오. [DHTMLX Spreadsheet 패키지에 대한 자세한 설명은 여기에 있습니다](initialization.md#including-source-files).

필요한 파일은 두 가지입니다.

- DHTMLX Spreadsheet의 *JS* 파일
- DHTMLX Spreadsheet의 *CSS* 파일

그리고

- 올바른 글꼴 렌더링을 위한 Google Fonts 소스 파일 링크.

~~~html {5-8} title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   

    <link href="codebase/spreadsheet.css" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <script>
    // your code will be here
    </script>
</body>
</html>
~~~

### npm 또는 yarn을 통해 Spreadsheet 설치하기 {#installing-spreadsheet-via-npm-or-yarn}

`yarn` 또는 `npm` 패키지 매니저를 사용하여 JavaScript Spreadsheet를 프로젝트에 가져올 수 있습니다.

#### npm 또는 yarn을 통해 평가판 Spreadsheet 설치하기 {#installing-trial-spreadsheet-via-npm-or-yarn}

:::info
평가판 Spreadsheet를 사용하려면 [**평가판 Spreadsheet 패키지**](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml)를 다운로드하고 *README* 파일의 단계를 따르십시오. 평가판 Spreadsheet는 30일 동안만 사용 가능합니다.
:::

#### npm 또는 yarn을 통해 PRO Spreadsheet 설치하기 {#installing-pro-spreadsheet-via-npm-or-yarn}

:::info
[고객 영역](https://dhtmlx.com/clients/)에서 **npm** 로그인 및 비밀번호를 생성하여 DHTMLX 비공개 **npm**에 직접 접근할 수 있습니다. 자세한 설치 가이드도 그곳에서 확인할 수 있습니다. 비공개 **npm** 접근은 독점 Spreadsheet 라이선스가 활성화된 동안에만 가능합니다.
:::

## 2단계. Spreadsheet 생성하기 {#step-2-creating-spreadsheet}

이제 페이지에 Spreadsheet를 추가할 준비가 되었습니다. 먼저 DIV 컨테이너를 만들고 DHTMLX Spreadsheet를 그 안에 배치합니다. 단계는 다음과 같습니다.

- *index.html* 파일에 DIV 컨테이너를 지정합니다
- `dhx.Spreadsheet` 생성자를 사용하여 DHTMLX Spreadsheet를 초기화합니다

생성자 함수는 Spreadsheet를 배치할 HTML 컨테이너와 Spreadsheet 구성 객체를 매개변수로 받습니다.

~~~html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>How to Start with DHTMLX Spreadsheet</title>
    <script src="codebase/spreadsheet.js"></script>   
   
    <link href="codebase/spreadsheet.css" rel="stylesheet">  
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
</head>
<body>
    <div id="spreadsheet_container"></div>
    <script>
        const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
            //config options
        });
    </script>
</body>
</html>
~~~

## 3단계. Spreadsheet 구성 설정하기 {#step-3-setting-spreadsheet-configuration}

다음으로 초기화 시 기본값 외에 Spreadsheet 컴포넌트에 적용할 추가 구성 옵션을 지정할 수 있습니다.

예를 들어 `toolbarBlocks`, `rowsCount`, `colsCount` 등 여러 옵션으로 Spreadsheet의 외관을 조정할 수 있습니다. [자세한 내용 확인하기](configuration.md).

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    toolbarBlocks: ["columns", "rows", "clear"],
    rowsCount: 10,
    colsCount: 10
});
~~~

DHTMLX Spreadsheet의 구성은 매우 유연하므로 언제든지 변경할 수 있습니다. Spreadsheet 구성의 기본 사항을 알아보려면 [관련 가이드를 읽어보십시오](configuration.md).

## 4단계. Spreadsheet에 데이터 로드하기 {#step-4-loading-data-into-spreadsheet}

마지막 단계는 Spreadsheet에 데이터를 채우는 것입니다. DHTMLX Spreadsheet는 JSON 형식의 데이터를 받습니다. 데이터 외에도 데이터 세트에 필요한 스타일을 전달할 수 있습니다. 인라인 데이터를 로드할 때는 `parse()` 메서드를 사용하고 아래 예제와 같이 데이터 객체를 전달해야 합니다.

~~~jsx title="data.json"
const data = [
    { "cell": "a1", "value": "Country" },
    { "cell": "b1", "value": "Product" },
    { "cell": "c1", "value": "Price" },
    { "cell": "d1", "value": "Amount" },
    { "cell": "e1", "value": "Total Price" },

    { "cell": "a2", "value": "Ecuador" },
    { "cell": "b2", "value": "Banana" },
    { "cell": "c2", "value": 6.68 },
    { "cell": "d2", "value": 430 },
    { "cell": "e2", "value": 2872.4 },

    { "cell": "a3", "value": "Belarus" },
    { "cell": "b3", "value": "Apple" },
    { "cell": "c3", "value": 3.75 },
    { "cell": "d3", "value": 600 },
    { "cell": "e3", "value": 2250 }
]

// initializing spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    //config
});
// loading data into spreadsheet
spreadsheet.parse(data);
~~~

**관련 샘플**: [Spreadsheet. 사용자 정의 셀 수](https://snippet.dhtmlx.com/vc3mstsw)

## 다음 단계 {#whats-next}

이것으로 완료됩니다. 네 단계만으로 표 형식 데이터 작업에 유용한 도구를 얻을 수 있습니다. 이제 데이터 작업을 시작하거나 DHTMLX Spreadsheet를 계속 탐색할 수 있습니다.

- [Spreadsheet 개요](/)
- [](guides.md)
- [](api/api_overview.md)
