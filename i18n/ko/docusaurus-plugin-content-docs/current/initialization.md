---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript Spreadsheet 라이브러리의 초기화에 대해 문서에서 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하십시오.
---

# 초기화 {#initialization}

이 가이드는 페이지에서 DHTMLX Spreadsheet를 생성하고 애플리케이션에 완전한 기능을 갖춘 워크시트를 추가하는 방법을 설명합니다. 사용 가능한 컴포넌트를 얻으려면 다음 단계를 따르십시오.

1. [페이지에 DHTMLX Spreadsheet 소스 파일 포함하기](#including-source-files).
2. [DHTMLX Spreadsheet용 컨테이너 만들기](#creating-container).
3. [객체 생성자로 DHTMLX Spreadsheet 초기화하기](#initializing-dhtmlx-spreadsheet).

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 소스 파일 포함하기 {#including-source-files}

[패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml)하여 프로젝트 폴더에 압축을 해제하십시오.

DHTMLX Spreadsheet를 생성하려면 페이지에 2개의 소스 파일을 포함해야 합니다.

- spreadsheet.js
- spreadsheet.css

이 파일들에 올바른 상대 경로를 설정했는지 확인하십시오.

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

Spreadsheet 패키지의 구조는 다음과 같습니다.

- *sources* - 라이브러리의 소스 코드 파일로, 읽기 쉽고 주로 디버깅 목적으로 사용됩니다.
- *codebase* - 라이브러리의 난독화된 코드 파일로, 훨씬 작고 프로덕션 환경에서 사용하기 위한 것입니다. **앱이 준비되면 이 파일들을 포함하십시오.**
- *samples* - 코드 샘플.
- *docs* - 컴포넌트의 전체 문서.

## 컨테이너 만들기 {#creating-container}

Spreadsheet용 컨테이너를 추가하고 예를 들어 "spreadsheet"와 같은 id를 지정하십시오.

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## DHTMLX Spreadsheet 초기화하기 {#initializing-dhtmlx-spreadsheet}

`dhx.Spreadsheet` 객체 생성자로 DHTMLX Spreadsheet를 초기화하십시오. 생성자는 두 가지 매개변수를 받습니다.

- Spreadsheet를 위한 HTML 컨테이너,
- 구성 속성을 가진 객체. [아래에서 전체 목록을 확인하십시오](#configuration-properties).

~~~jsx title="index.js"
// creating DHTMLX Spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config options
});
~~~

### 구성 속성 {#configuration-properties}

Spreadsheet 구성 객체에 지정할 수 있는 [속성](api/api_overview.md#spreadsheet-properties)의 전체 목록을 확인하십시오.

초기화 시 생성자의 두 번째 매개변수로 구성 옵션을 설정할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
