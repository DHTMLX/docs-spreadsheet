---
sidebar_label: toolbarBlocks
title: toolbarBlocks 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리의 toolbarBlocks 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# toolbarBlocks

### 설명 {#description}

@short: 선택 사항. 스프레드시트 툴바에 표시할 버튼 블록을 지정합니다

### 사용법 {#usage}

~~~jsx
toolbarBlocks?: array;
~~~

### 기본 설정 {#default-config}

~~~jsx
toolbarBlocks: ["undo", "colors", "font", "decoration", "align", "cell", "format", "actions"]
~~~

### 예제 {#example}

~~~jsx {3-17}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 전체 툴바
    toolbarBlocks: [
        "undo",
        "colors",
        "font",
        "decoration",
        "align",
        "cell",
        "format",
        "actions", 
        "lock",
        "clear",
        "columns",
        "rows",
        "file",
        "help"
    ]
});
~~~

### 상세 설명 {#details}

`toolbarBlocks` 배열에 필요한 요소를 원하는 순서로 나열하여 툴바의 구조를 직접 지정할 수 있습니다. 예를 들면:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

[툴바 커스터마이즈](customization.md#toolbar) 방법을 확인하세요.

**변경 로그:**

- `"font"` 블록이 v6.0에서 추가됨
- `"cell"` 블록이 v5.2에서 추가됨
- `"actions"` 블록이 v5.0에서 추가됨

**관련 문서:**
- [구성](configuration.md#toolbar)
- [커스터마이즈](customization.md)

**관련 샘플:** [Spreadsheet. 전체 툴바](https://snippet.dhtmlx.com/kpm017nx)
