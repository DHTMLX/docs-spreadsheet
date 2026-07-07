---
sidebar_label: Spreadsheet 개요
title: DHTMLX Spreadsheet 개요
slug: /
description: DHTMLX 문서에서 JavaScript Spreadsheet 라이브러리의 개요를 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하십시오.
---

# DHTMLX Spreadsheet 개요 {#dhtmlx-spreadsheet-overview}

DHTMLX Spreadsheet는 온라인에서 스프레드시트 데이터를 편집하고 서식 지정하기 위한 클라이언트 측 JavaScript 컴포넌트입니다. 구성 가능한 툴바, 편리한 메뉴 및 컨텍스트 메뉴, 조정 가능한 그리드를 포함하며, 단축키 탐색을 지원하고, 외부 및 로컬 소스에서 데이터를 로드하며, 인터페이스를 원하는 언어로 현지화할 수 있습니다.

:::tip
[사용자 가이드](guides.md#user-guides)를 통해 사용자가 Spreadsheet를 쉽게 활용할 수 있습니다.
:::

## Spreadsheet 구조 {#spreadsheet-structure}

### 툴바 {#toolbar}

**툴바** 섹션은 매우 유연합니다. "undo", "colors", "decoration", "align", "cell", "format", "actions" 등 여러 기본 컨트롤 블록이 포함되어 있습니다. [툴바 구조를 변경하여](configuration.md#toolbar) 블록을 추가하거나 블록의 순서를 직접 설정할 수 있습니다.

![undo, 색상, 데코레이션, 정렬, 셀, 형식, 작업 컨트롤이 있는 DHTMLX Spreadsheet 툴바](/img/overview_toolbar.png)

자체 컨트롤을 추가하고 컨트롤 구성을 업데이트하여 [툴바를 커스터마이징할](customization.md#toolbar) 수도 있습니다.

### 편집 표시줄 {#editing-line}

**편집 표시줄**은 두 가지 목적으로 사용됩니다.

- 선택된 셀의 내용을 편집합니다
- 현재 편집 중인 셀의 변경 사항을 제어합니다

![선택된 셀 내용 편집 및 변경 사항 추적을 위한 DHTMLX Spreadsheet 편집 표시줄](/img/overview_editline.png)

필요한 경우 해당 [구성 옵션](configuration.md#editing-bar)을 통해 편집 표시줄을 끌 수 있습니다.

### 그리드 {#grid}

**그리드**는 열이 문자로 정의되고 행이 숫자로 정의된 테이블입니다. 따라서 그리드의 셀은 열의 문자와 행의 번호로 정의됩니다. 예를 들어 C3와 같이 표현됩니다.

![문자로 레이블된 열과 번호가 매겨진 행이 있는 DHTMLX Spreadsheet 그리드](/img/spreadsheet_init.png)

### 컨텍스트 메뉴 {#context-menu}

**컨텍스트 메뉴** 섹션에는 하위 항목이 있는 **잠금**, **지우기**, **열**, **행**, **정렬**, **링크 삽입** 등 6개의 항목이 포함되어 있습니다.

![잠금, 지우기, 열, 행, 정렬, 링크 삽입 옵션이 있는 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/overview_contextmenu.png)

[컨텍스트 메뉴 구조도 커스터마이징 가능합니다](customization.md#context-menu). 사용자 정의 컨트롤을 추가하고, 컨트롤 구성을 업데이트하며, 불필요한 컨트롤을 제거할 수 있습니다.

### 메뉴 {#menu}

**메뉴** 섹션에는 빠른 접근을 위해 툴바와 컨텍스트 메뉴에서 가장 자주 사용되는 옵션들을 결합한 여러 블록이 포함되어 있습니다.

기본적으로 **메뉴** 섹션은 숨겨져 있지만 관련 [구성 옵션](configuration.md#menu)을 통해 활성화할 수 있습니다.

![자주 사용하는 툴바 및 컨텍스트 메뉴 옵션을 결합한 DHTMLX Spreadsheet 메뉴 섹션](/img/overview_menu.png)

사용자 정의 컨트롤을 사용하고, 컨트롤 구성을 업데이트하며, 불필요한 컨트롤을 제거하여 [메뉴 구조를 수정할](customization.md#menu) 수 있습니다.

## 다음 단계 {#whats-next}

이제 애플리케이션에서 DHTMLX Spreadsheet를 사용하기 시작할 수 있습니다. 지침을 따르려면 [시작하는 방법](how_to_start.md) 튜토리얼을 참고하십시오.

DHTMLX Spreadsheet에 대해 더 알아보려면 다음 가이드를 참고하십시오.

- [API 개요](api/api_overview.md)
- [가이드](guides.md)
