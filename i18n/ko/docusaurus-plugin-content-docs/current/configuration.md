---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript Spreadsheet 라이브러리의 구성에 대해 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX Spreadsheet의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 구성 {#configuration}

DHTMLX Spreadsheet의 원하는 설정을 필요에 맞게 조정할 수 있습니다. 사용 가능한 구성 옵션을 통해 행과 열의 수를 제한하고, 툴바 모양을 변경하며, 메뉴와 편집 바의 가시성을 제어할 수 있습니다. 필요한 경우 Spreadsheet를 읽기 전용 모드로 초기화할 수도 있습니다.

## 툴바 {#toolbar}

Spreadsheet의 툴바는 필요에 따라 변경할 수 있는 여러 컨트롤 블록으로 구성됩니다. 기본적으로 툴바에는 `"undo"`, `"colors"`, `"font"`, `"decoration"`, `"align"`, `"cell"`, `"format"`, `"actions"` 블록이 포함되어 있습니다. `"lock"`, `"clear"`, `"rows"`, `"columns"`, `"file"`, `"help"` 블록을 추가할 수도 있습니다.

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

툴바 구조는 컴포넌트의 [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 구성 옵션을 통해 조정할 수 있으며, 이 옵션은 컨트롤 이름 문자열로 구성된 배열입니다.

원하는 순서로 `toolbarBlocks` 배열에 필요한 요소를 나열하여 고유한 툴바 구조를 지정할 수도 있습니다. 예: `"colors"`, `"align"`, `"cell"`, `"decoration"`, `"lock"`, `"clear"`.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

툴바는 [높은 수준의 커스터마이징](customization.md)이 가능합니다. 새 컨트롤을 추가하고, 컨트롤의 아이콘을 변경하며, 원하는 아이콘 팩을 적용할 수 있습니다.

## 편집 바 {#editing-bar}

Spreadsheet의 구조가 유연하기 때문에 원하는 컴포넌트 모양을 구현하기 위해 편집 바를 켜거나 끌 수 있습니다. [`editLine`](api/spreadsheet_editline_config.md) 구성 옵션을 사용하여 편집 바를 숨기거나 표시합니다.

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 행과 열의 수 {#number-of-rows-and-columns}

Spreadsheet가 초기화되면 26개의 열과 1000개의 행으로 구성된 그리드로 시작합니다. 그러나 이 한도에 도달하면 추가 행과 열이 자동으로 렌더링되므로 직접 추가할 필요가 없습니다. 그럼에도 불구하고 행과 열을 제한하려는 경우 그리드의 정확한 행 수와 열 수를 지정할 수 있습니다. 이를 위해 [`colsCount`](api/spreadsheet_colscount_config.md) 및 [`rowsCount`](api/spreadsheet_rowscount_config.md) 옵션을 사용합니다.

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 메뉴 {#menu}

Spreadsheet의 메뉴는 기본적으로 숨겨져 있습니다. 해당 구성 옵션 [`menu`](api/spreadsheet_menu_config.md)를 통해 켜거나 끌 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 읽기 전용 모드 {#read-only-mode}

[`readonly`](api/spreadsheet_readonly_config.md) 구성 옵션을 통해 Spreadsheet 셀 편집을 방지하는 읽기 전용 모드를 활성화할 수도 있습니다.

[Spreadsheet의 읽기 전용 동작을 커스터마이징](customization.md#custom-read-only-mode)할 수도 있습니다.

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 셀에 대한 사용자 정의 숫자 형식 {#custom-number-formats-for-cells}

셀 값에 7가지 기본 형식을 적용할 수 있습니다: "Common", "Number", "Percent", "Currency", "Date", "Time", "Text".

[`formats`](api/spreadsheet_formats_config.md) 구성 옵션을 통해 기본 형식의 구성을 재정의하거나 사용자 정의 숫자 형식을 지정할 수 있습니다. 자세한 내용은 [숫자 형식 지정](number_formatting.md) 문서를 확인하세요.

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## 내보내기/가져오기 모듈 경로 {#path-to-exportimport-modules}

DHTMLX Spreadsheet는 Excel 형식으로 데이터를 가져오고 내보낼 수 있습니다. 컴포넌트는 데이터 가져오기/내보내기를 위해 WebAssembly 기반 라이브러리인 [Excel2Json](https://github.com/dhtmlx/excel2json)과 [JSON2Excel](https://github.com/dhtmlx/json2excel)을 사용합니다.

필요한 라이브러리를 설치한 후, 해당 구성 옵션 [`importModulePath`](api/spreadsheet_importmodulepath_config.md) 또는 [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md)를 통해 *worker.js* 파일(로컬 또는 CDN)의 경로를 설정해야 합니다.

자세한 내용은 [데이터 로드 및 내보내기](loading_data.md) 문서에서 확인할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
