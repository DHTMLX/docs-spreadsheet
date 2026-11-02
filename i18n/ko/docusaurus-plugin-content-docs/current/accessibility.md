---
sidebar_label: 접근성
title: 접근성
description: DHTMLX Spreadsheet를 키보드 및 스크린 리더 사용자가 이용할 수 있도록 만드는 방법을 설명합니다. WCAG 2.2 AA를 목표로 하는 WAI-ARIA 지원, 키보드 탐색, 스크린 리더 안내 및 고대비 테마에 대해 알아보십시오.
---

# DHTMLX Spreadsheet의 접근성

이 가이드는 접근성 요구 사항을 충족해야 하는 애플리케이션에 DHTMLX Spreadsheet를 포함하는 개발자를 위한 문서입니다. 이 가이드를 사용하여 컴포넌트를 체크리스트와 대조하고, 키보드, 스크린 리더 및 고대비 사용자를 위해 컴포넌트를 구성하십시오.

Spreadsheet는 마크업의 일부로 WAI-ARIA 역할과 상태를 렌더링합니다. 키보드 포커스는 활성 셀에 유지되며, 툴바, 메뉴 바 및 시트 탭은 각각 하나의 탭 정지점입니다. 거부된 편집이나 검색 결과처럼 별도의 요소가 없는 변경 사항은 스크린 리더가 소리 내어 읽는 라이브 영역(live region)으로 전달됩니다.

:::info 목표 준수 수준
DHTMLX Spreadsheet는 **WCAG 2.2 Level AA**, 미국 재활법 **Section 508**, 그리고 **EN 301 549**(유럽 접근성법의 기술 기준)를 충족하도록 설계되었습니다.

준수 여부는 DHTMLX Spreadsheet 6.0.4에 대해 기준별로 보고됩니다. 상세한 **Accessibility Conformance Report (VPAT® 2.5)** 는 다음에서 확인할 수 있습니다. [Accessibility Conformance Report](accessibility_conformance_report.md).
:::

## 기능 {#capabilities}

| 영역 | 지원 내용 |
| ---- | ------- |
| 키보드 조작 | 셀에 대한 모든 명령에 키가 있습니다. 툴바, 메뉴 바 및 시트 탭은 화살표 키로 탐색하는 단일 탭 정지점입니다. 열 너비, 행 높이 및 열 필터에는 컨텍스트 메뉴 명령이 있으므로 드래그하거나 아이콘을 클릭할 필요가 없습니다 |
| WAI-ARIA 시맨틱 | 셀은 `columnheader`, `rowheader` 및 `gridcell` 요소가 포함된 `grid`입니다. 역할은 항상 렌더링됩니다 |
| 포커스 모델 | 키보드 포커스는 활성 셀에 있습니다. <kbd>Tab</kbd>은 활성 셀을 통해 시트로 진입하며 마지막 셀과 첫 번째 셀에서 시트를 벗어납니다. <kbd>Ctrl</kbd> + <kbd>F6</kbd>은 메뉴, 툴바, 시트 및 시트 탭 간에 포커스를 이동합니다 |
| 선택 모델 | 활성 셀, 범위 및 여러 범위는 `aria-selected`를 통해 노출되며, 범위의 크기가 안내됩니다. 선택은 [`selection`](api/spreadsheet_selection_config.md) 옵션으로 끌 수 있습니다 |
| 읽기 전용 모드 | 시트에서 탐색, 선택, 복사 및 검색할 수 있습니다. 편집은 거부되고 안내되며, 컨텍스트 메뉴는 사용할 수 없습니다 |
| 스크린 리더 | NVDA, JAWS 및 VoiceOver로 테스트되었습니다 |
| 시각적 접근성 | `contrast-light` 및 `contrast-dark` 테마, 모든 테마에서 보이는 포커스 표시기, 색상에 의존하지 않는 단서 |
| 텍스트 크기 조정 및 확대 | 200% 및 400% 확대와 텍스트 간격 재정의 상태에서도 레이아웃을 조작할 수 있습니다 |
| 사용자 정의 | 사용자 고유의 메시지를 위한 공개 [`announce()`](api/spreadsheet_announce_method.md) 메서드와 모든 기본 제공 이름 및 안내를 위한 번역 가능한 `aria_*` 로캘 문자열 |
| 표준 | WCAG 2.2 AA, Section 508, EN 301 549 |

## 적용 범위 {#covered-areas}

이 가이드는 Spreadsheet 위젯을 다룹니다.

- 셀, 열 및 행 헤더, 병합된 셀, 고정된 행과 열
- 선택: 활성 셀, 범위 및 여러 범위
- 수식 입력줄과 셀 에디터(값 목록이 있는 셀의 에디터 포함)
- 색상 및 테두리 팝업이 있는 툴바, 메뉴 바 및 컨텍스트 메뉴
- 시트 탭
- 정렬, 필터링, 검색, 데이터 유효성 검사, 셀의 링크, 가져오기 및 내보내기
- 테마와 포커스 표시기

최종 페이지의 접근성은 호스트 애플리케이션에도 좌우됩니다. [Host-page responsibilities](#host-page-responsibilities)를 참조하십시오.

## WAI-ARIA 지원 {#wai-aria-support}

Spreadsheet는 마크업에 WAI-ARIA 역할과 속성을 자동으로 추가하며, 이를 끌 수 없습니다. 위젯의 각 부분에는 고유한 역할과 이름이 있으며, 이름은 [로캘](#localization)에서 가져옵니다.

### Spreadsheet 컨테이너 {#spreadsheet-container}

Spreadsheet의 각 부분은 이름이 지정된 별도의 컨트롤입니다.

| 부분 | 역할 / 속성 | 접근 가능한 이름 |
| ---- | ---------------- | --------------- |
| 메뉴 바 | `role="menubar"` + `aria-label` | "Main" |
| 툴바 | `role="toolbar"` + `aria-label` | "Formatting" |
| 수식 입력줄 | 입력란의 `aria-label` | "Formula bar, B7", 활성 셀의 주소 포함 |
| 셀 | `role="grid"` + `aria-label` | "Spreadsheet" |
| 시트 탭 | `role="toolbar"` + `aria-label` | "Sheets" |
| 라이브 영역 | `role="status"`, `aria-live="polite"`, `aria-atomic="true"` | 시각적으로 숨겨져 있으며, `role="grid"` 바깥의 그리드 옆에 배치됩니다 |

Spreadsheet의 루트 요소에는 랜드마크 역할이 없으므로 페이지에 맞는 랜드마크 안에 배치할 수 있습니다.

### 셀 영역 {#cell-surface}

다음 속성은 셀 전체를 설명합니다. `.dhx_grid-content` 요소가 이 속성들을 가집니다.

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| `.dhx_grid-content` | `role="grid"` | 셀의 대화형 그리드 |
| `.dhx_grid-content` | `aria-label` | "Spreadsheet", `aria_grid` 로캘 키에서 가져옴 |
| `.dhx_grid-content` | `aria-rowcount` | 시트의 행 수에 헤더 행을 더한 값 |
| `.dhx_grid-content` | `aria-colcount` | 표시되는 열 수에 행 번호 열을 더한 값 |
| `.dhx_grid-content` | `aria-readonly` | [읽기 전용 모드](api/spreadsheet_readonly_config.md)이거나 [선택](api/spreadsheet_selection_config.md)이 꺼져 있는 동안 `"true"` |
| `.dhx_grid-content` | `aria-multiselectable` | `"true"`. 선택이 꺼져 있는 동안에는 `"false"` |

### 행과 셀 {#rows-and-cells}

다음 표는 행과 셀의 역할, 위치 및 상태 속성을 나열합니다.

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| 행 | `role="row"` + `aria-rowindex` | 시트의 행. 열 헤더가 첫 번째 행이므로 시트의 1행은 `aria-rowindex="2"`를 가집니다 |
| 셀 | `role="gridcell"` + `aria-colindex` | 셀. 행 번호가 첫 번째 열이므로 A열은 `aria-colindex="2"`를 가집니다 |
| 행 번호 | `role="rowheader"` | 행의 헤더 |
| 셀 | `aria-selected` | 활성 셀과 선택된 범위의 모든 셀에서 `"true"` |
| 셀 | `aria-readonly` | 읽기 전용 모드, [선택](api/spreadsheet_selection_config.md)이 꺼져 있는 동안, 그리고 [잠긴 셀](work_with_cells.md#locking-cells)에서 `"true"` |
| 셀 | `tabindex` | 활성 셀에서 `"0"`, 다른 셀에서 `"-1"`이므로 셀은 하나의 탭 정지점입니다 |
| 활성 셀 | DOM 포커스 | 키보드 포커스는 별도의 입력란이 아니라 활성 셀 자체에 있습니다. 셀을 편집하는 동안에는 포커스가 셀 에디터에 있습니다 |
| 병합된 셀 | `aria-colspan` / `aria-rowspan` | 병합된 셀이 걸쳐 있는 열 또는 행의 수. 병합된 셀에 가려진 셀은 `aria-hidden="true"`로 숨겨집니다 |
| 셀의 링크 | `target="_blank"` 및 `rel="noopener noreferrer"`가 있는 `<a href>` | `http`, `https`, `mailto`, `ftp` 또는 `tel` 스킴을 사용하는 링크 |

셀에는 값과 함께 스크린 리더가 읽는 시각적으로 숨겨진 텍스트도 포함됩니다.

| 숨겨진 텍스트 | 시점 |
| ----------- | ---- |
| 셀 주소(예: "B7") | 활성 셀과 선택된 범위의 모든 셀. 스크린 리더는 값보다 먼저 주소를 읽습니다 |
| "link" | 링크가 있는 선택된 셀. <kbd>Alt</kbd> + <kbd>Enter</kbd>로 링크를 엽니다 |
| "locked" | 선택된 잠긴 셀 |
| 수식 오류에 대한 설명(예: "Reference error. Check the cell references") | 수식 오류가 있는 셀 |
| "Invalid value. Choose a value from the list" | 값이 [값 목록](work_with_cells.md#using-drop-down-lists-in-cells)에 없는 셀 |
| "Filter" / "Filter applied" | 필터 아이콘이 있는 셀 |

### 열 및 행 헤더 {#column-and-row-headers}

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| 열 문자 | `role="columnheader"` + `aria-colindex` | 열의 헤더 |
| 모두 선택 모서리 | `role="columnheader"` | "Select all"로 명명됨 |
| 행 번호 | `role="rowheader"` | 행의 헤더 |
| 열 메뉴 아이콘, 숨겨진 행과 열의 아이콘 | `aria-hidden="true"` | 장식용. 명령은 컨텍스트 메뉴에 있습니다 |

헤더는 탭 정지점이 아닙니다. 열 문자, 행 번호 또는 모서리를 클릭하면 행이나 열이 선택되고 포커스가 활성 셀로 돌아갑니다.

### 수식 입력줄과 에디터 {#formula-bar-and-editors}

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| 수식 입력줄 입력란 | `aria-label` | "Formula bar, B7", 활성 셀의 주소 포함. 잠긴 셀에서는 입력란이 `readonly`이므로 값을 읽을 수 있습니다. 선택이 꺼져 있는 동안 수식 입력줄은 비어 있고 잠깁니다 |
| 셀 에디터 입력란 | `aria-label` | "Cell editor, B7" |
| 값 목록이 있는 셀의 에디터 | `role="combobox"`, `aria-controls`, `aria-expanded`, `aria-activedescendant` | 값 목록은 `option` 요소로 구성된 `listbox`이며, 강조 표시된 옵션은 `aria-selected`입니다 |
| 잘못된 값이 있는 에디터 | `aria-invalid="true"` | 셀의 저장된 값이 값 목록에 없습니다. 이 속성은 사용자가 입력하는 동안이 아니라 값이 저장된 후에 업데이트됩니다 |
| 수식 도움말의 닫기 아이콘 | `role="button"` + `aria-label` | "Close formula help" |

### 툴바와 메뉴 {#toolbar-and-menus}

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| 툴바 | `role="toolbar"` + `aria-label` | "Formatting". 테두리 팝업, 검색 바 및 링크 팝업의 툴바는 "Borders", "Search" 및 "Link"로 명명됩니다 |
| 툴바 버튼 | `aria-label` | 버튼의 값. 아이콘 버튼은 툴팁으로 명명됩니다(예: "Bold (ctrl+b)"). 아이콘은 `aria-hidden="true"`로 숨겨집니다 |
| Bold, Italic, Underline, Strikethrough, Lock, Filter | `aria-pressed` | 서식 또는 필터가 켜져 있는지 여부 |
| 드롭다운을 여는 버튼 | `aria-haspopup="menu"`, `aria-expanded` | 드롭다운은 해당 버튼의 이름을 따른 `menu`입니다 |
| 정렬, 텍스트 줄 바꿈, 숫자 형식 | `role="menuitemradio"` + `aria-checked` | 배타적 집합의 한 옵션 |
| Text color, Background color, Border color | `aria-label` | 컨트롤과 현재 색상의 이름(예: "Text color: dark gray") |
| 색상 팔레트 | `gridcell` 요소로 구성된 `role="grid"` | 그리드는 "Color palette"로 명명됩니다. 각 색상 셀은 해당 색상의 이름을 가지며, 선택된 셀은 `aria-selected="true"`를 가집니다 |
| 테두리 스타일 목록 | `option` 요소로 구성된 `role="listbox"` | 옵션은 "Thin line", "Medium line", "Thick line", "Dashed line", "Dotted line", "Double line"으로 명명됩니다 |
| 메뉴 바 | `role="menubar"` + `aria-label` | "Main". 항목은 `role="menu"`가 있는 팝업을 엽니다. 팝업에서 서식 항목은 `role="menuitemcheckbox"`를, 정렬, 텍스트 줄 바꿈 및 숫자 형식 항목은 `role="menuitemradio"`를 가집니다. 둘 다 `aria-checked`로 상태를 보고합니다 |
| 컨텍스트 메뉴 | `role="menu"` + `aria-label` | 셀용은 "Cell", 시트 탭용은 "Sheet" |

### 시트 탭 {#sheet-tabs}

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| 시트 탭 바 | `role="toolbar"` + `aria-label` | "Sheets" |
| 시트 탭 | `button` + `aria-pressed` | 탭은 해당 시트의 이름을 따릅니다. 활성 시트의 탭은 `aria-pressed="true"`를 가집니다 |
| 시트 추가 버튼 | `aria-label` | "Add sheet" |

### 대화 상자 {#dialogs}

| 선택자 | 역할 / 속성 | 용도 |
| -------- | ---------------- | ------- |
| Column width 및 Row height 대화 상자 | `role="dialog"`, `aria-modal="true"`, `aria-label` | 대화 상자 제목으로 명명됩니다. 입력란의 레이블은 "Width in pixels" / "Height in pixels"입니다 |
| 검색 바 | `role="dialog"` + `aria-label` | "Search"로 명명됩니다. 검색 입력란의 레이블은 "Search"이며, 버튼은 "Previous match", "Next match" 및 "Close search"로 명명됩니다 |
| Insert link, Data validation | `role="dialog"` + `aria-label` | 대화 상자 제목으로 명명됩니다 |
| 알림 | `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby` | 알림 헤더로 명명되고 알림 텍스트로 설명됩니다 |

### 숨겨진 요소와 장식 요소 {#hidden-and-decorative-elements}

Spreadsheet는 `aria-hidden="true"`를 사용하여 보조 기술에서 장식 부분을 숨깁니다. 여기에는 잠금, 필터 및 열 메뉴 아이콘, 숨겨진 행과 열의 아이콘, 모두 선택 아이콘이 포함됩니다. 선택 영역, 복사 및 검색 강조 표시, 채우기 핸들을 그리는 레이어도 숨겨집니다. 수식 입력줄에 있는 수식의 색상 복사본과 병합된 셀에 가려진 셀도 마찬가지입니다. 레이아웃 래퍼에는 `role="presentation"`이 있습니다. 그리드 앞뒤의 포커스 센티널은 포커스를 활성 셀로 전달하는 역할만 합니다.

## 선택 및 편집 모델 {#selection-and-editing-model}

DOM 포커스는 활성 셀 자체에 있으므로 스크린 리더는 별도의 입력란이 아니라 셀을 읽습니다. 활성 셀이 이동하면 스크린 리더는 새 셀의 주소를 먼저 읽고, 그다음 값과 숨겨진 설명을 읽습니다. 사용자가 키보드나 마우스로 범위를 선택하면 선택 변경이 멈춘 후 스크린 리더가 범위의 크기를 한 번 안내합니다. 여러 범위에 공유된 셀은 한 번만 계산되며, 숨겨진 행과 열의 셀도 계산됩니다. 셀을 편집하는 동안에는 아무것도 안내되지 않습니다. 범위가 활성 셀 하나로 줄어들면 해당 셀의 주소가 안내됩니다.

| 상황 | 스크린 리더가 받는 내용 |
| --------- | --------------------------- |
| 활성 셀이 이동함 | 주소, 값 및 설명이 포함된 셀(예: "B7, 120, locked") |
| 범위가 선택됨 | "B2 to D7, 18 cells" |
| <kbd>Ctrl</kbd>로 여러 범위가 선택됨 | "B2 to B4, D2 to D4, 6 cells" |
| <kbd>Enter</kbd>, <kbd>F2</kbd> 또는 입력으로 에디터가 열림 | "Cell editor, B7"로 명명된 에디터 입력란 |
| 값 목록이 있는 셀의 에디터가 열림 | 확장된 콤보박스. <kbd>↑</kbd> 또는 <kbd>↓</kbd>를 누르면 목록에서 강조 표시된 옵션을 읽습니다 |
| 편집이 저장됨 | 편집된 셀과 그 셀에 의존하는 셀의 새 수식 오류, 그리고 편집된 셀의 잘못된 값이 안내됩니다 |
| 잠긴 셀의 편집이 거부됨 | "The cell is locked" |
| 읽기 전용 모드에서 편집 키를 누름 | "The sheet is read-only" |

<kbd>Enter</kbd>, <kbd>F2</kbd> 또는 입력으로 에디터가 열립니다. <kbd>Enter</kbd>는 값을 저장하고 아래로 이동하며, <kbd>Tab</kbd>은 값을 저장하고 오른쪽으로 이동하고, <kbd>Esc</kbd>는 편집을 취소합니다. 

## 키보드 탐색 {#keyboard-navigation}

키보드는 Spreadsheet가 페이지에 표시되는 즉시 작동하며 별도의 구성이 필요하지 않습니다. 아래 표는 키보드 모델을 요약합니다. 전체 단축키는 [Hot keys list](hotkeys.md)를 참조하십시오.

![툴바의 Horizontal align 드롭다운을 아래쪽 화살표 키로 열었으며 첫 번째 항목에 포커스가 있는 모습](/img/accessibility/toolbar_dropdown_focus.png)

### 셀 {#cells}

| 키 | 동작 |
| ---- | ------ |
| 화살표 키 | 활성 셀을 이동합니다. 활성 셀은 표시되는 첫 번째와 마지막 행 및 열에서 멈춥니다 |
| <kbd>Shift</kbd> + 화살표 키 | 선택된 범위를 확장합니다 |
| <kbd>Home</kbd> / <kbd>End</kbd> | 행에서 표시되는 첫 번째 또는 마지막 셀로 이동합니다 |
| <kbd>Ctrl</kbd> + 화살표 키, <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | 시트의 가장자리로 이동합니다 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 행 안에서 오른쪽 또는 왼쪽으로 이동합니다. 시트의 마지막 또는 첫 번째 셀에서는 포커스를 셀 밖의 다음 또는 이전 페이지 부분(예: 시트 탭 또는 수식 입력줄)으로 이동합니다 |
| <kbd>Enter</kbd>, <kbd>F2</kbd> | 에디터를 엽니다 |
| <kbd>Esc</kbd> | 저장하지 않고 에디터를 닫습니다 |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> / <kbd>Shift</kbd> + <kbd>Space</kbd> | 열 또는 행을 선택합니다 |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd> | 선택된 범위 안의 숨겨진 행 또는 열을 표시합니다 |
| <kbd>Alt</kbd> + <kbd>Enter</kbd> | 활성 셀의 링크를 엽니다 |
| <kbd>Shift</kbd> + <kbd>F10</kbd> 또는 Menu 키 | 셀에 대한 명령이 있는 컨텍스트 메뉴를 엽니다. <kbd>Ctrl</kbd> + <kbd>Space</kbd> 이후에는 열에 대한 컨텍스트 메뉴를 엽니다 |
| <kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | 다음 또는 이전 시트로 전환합니다 |

### 부분 간 이동 {#moving-between-the-parts}

| 키 | 동작 |
| ---- | ------ |
| <kbd>Ctrl</kbd> + <kbd>F6</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd> | 포커스를 다음 또는 이전 부분(메뉴, 툴바, 시트, 시트 탭)으로 이동합니다. 수식 입력줄과 숨겨진 부분은 건너뜁니다. 열려 있는 편집은 먼저 저장됩니다 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 페이지 탭 순서에서 포커스를 다음 또는 이전 부분으로 이동합니다. 각 바는 하나의 탭 정지점이며, 포커스는 마지막으로 사용한 컨트롤에 놓입니다 |

### 툴바, 메뉴 바 및 시트 탭 {#toolbar-menu-bar-and-sheet-tabs}

| 키 | 동작 |
| ---- | ------ |
| <kbd>←</kbd> / <kbd>→</kbd>, <kbd>Home</kbd> / <kbd>End</kbd> | 바의 컨트롤 간에 이동합니다 |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | 컨트롤을 누릅니다. 명령을 실행하거나, 드롭다운을 열거나, 시트로 전환합니다 |
| <kbd>↓</kbd> | 드롭다운을 열고 포커스를 첫 번째 항목으로 이동합니다 |
| <kbd>↑</kbd> / <kbd>↓</kbd> | 열려 있는 드롭다운 또는 메뉴의 항목 간에 이동합니다 |
| <kbd>→</kbd> / <kbd>←</kbd> | 하위 메뉴를 열거나 닫습니다 |
| <kbd>Esc</kbd> | 드롭다운 또는 메뉴를 닫고 포커스를 해당 컨트롤로 되돌립니다 |

### 팝업 및 대화 상자 {#popups-and-dialogs}

| 키 | 동작 |
| ---- | ------ |
| 화살표 키, <kbd>Home</kbd> / <kbd>End</kbd> | 색상 팔레트의 색상 간에 이동합니다 |
| <kbd>Enter</kbd> | 색상, 테두리 또는 Column width 및 Row height 대화 상자의 크기를 적용합니다 |
| <kbd>Esc</kbd> | 팝업, 대화 상자 또는 검색 바를 닫고 포커스를 이를 연 컨트롤 또는 셀로 되돌립니다. 사용자 지정 색상 모드에서는 팔레트로 돌아갑니다. 테두리 팝업에서 연 색상 또는 스타일 팝업에서는 팝업을 닫고 포커스를 테두리 팝업의 해당 버튼으로 되돌립니다 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 대화 상자 또는 사용자 지정 색상 모드의 컨트롤 간에 이동합니다. 색상 팝업 또는 테두리 팝업에서는 팝업을 닫고 포커스를 해당 툴바 버튼으로 되돌립니다 |
| <kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Enter</kbd> | 셀의 값 목록을 탐색하고 값을 선택합니다 |

:::note
포인터 전용 동작에는 키보드 대안이 있습니다. 컨텍스트 메뉴의 *Column width* 및 *Row height* 명령은 드래그하지 않고도 정확한 크기를 설정하며, *Open filter* 명령은 아이콘을 클릭하지 않고도 필터를 엽니다.
:::

## 보조 기술 {#assistive-technology}

DHTMLX 팀은 다음 스크린 리더로 Spreadsheet를 테스트합니다.

| 스크린 리더 | 브라우저 | 플랫폼 |
| ------------- | ------- | -------- |
| NVDA | Firefox | Windows |
| JAWS | Chrome | Windows |
| VoiceOver | Safari | macOS |

스크린 리더는 각 상태를 해당 상태가 속한 요소에서 가져옵니다.

| 상태 | 노출 방식 | 읽는 대상 |
| ----- | --------------- | ------- |
| 위치 | `aria-rowindex`, `aria-colindex` 및 셀 텍스트의 셀 주소 | 각 셀. 주소는 활성 셀과 선택된 범위의 셀 텍스트에 있습니다 |
| 선택 | `aria-selected` | 활성 셀과 선택된 범위의 셀 |
| 편집 가능 여부 | `aria-readonly` | 읽기 전용 모드와 선택이 꺼져 있는 동안의 그리드 및 셀, 그리고 잠긴 셀 |
| 병합된 셀 | `aria-colspan`, `aria-rowspan` | 병합된 셀 |
| 행 헤더 | `role="rowheader"` | 행 번호 |
| 토글 상태 | `aria-pressed` | Bold, Italic, Underline, Strikethrough, Lock 및 Filter 버튼과 시트 탭 |
| 선택 상태 | `aria-checked` | 메뉴 바의 서식 항목, 그리고 정렬, 텍스트 줄 바꿈 및 숫자 형식 항목 |
| 오류 및 잘못된 값 | 셀의 숨겨진 텍스트, `aria-invalid` | 셀과 해당 에디터 |
| 링크 | `<a href>` 및 숨겨진 텍스트 "link" | 링크가 있는 셀 |

## 고대비 및 포커스 {#high-contrast-and-focus}

### 테마 {#themes}

Spreadsheet에는 `light`(기본값), `dark`, `contrast-light` 및 `contrast-dark`의 네 가지 기본 제공 테마가 있습니다. `contrast-light` 및 `contrast-dark` 테마는 텍스트에 대한 WCAG AA 대비 요구 사항을 충족합니다. `dhx.setTheme()` 메서드 또는 `data-dhx-theme` 속성으로 테마를 전환하십시오.

~~~jsx
dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

자세한 내용은 [Built-in themes](/themes/) 문서를 참조하십시오.

밝은 테마에서 수식의 셀 참조를 표시하는 색상은 최소 4.5:1의 대비를 가집니다.

`contrast-light` 테마는 흰색 배경에 어두운 텍스트와 테두리를 그립니다. 아래 Spreadsheet에서는 필터 아이콘이 있는 셀의 컨텍스트 메뉴를 키보드로 열었습니다. 포커스가 있는 명령인 [*Open filter*](filtering_data.md#opening-a-filter-with-the-keyboard)는 점선 윤곽선으로 표시되고, 활성 셀은 테마의 기본 색상으로 된 실선 테두리로 표시됩니다.

![contrast-light 테마의 Spreadsheet](/img/accessibility/spreadsheet_contrast_light.png)

`contrast-dark` 테마는 어두운 배경에 밝은 텍스트와 테두리를 그립니다. 포커스가 툴바 컨트롤에 있으면 해당 컨트롤은 `--dhx-spreadsheet-focus-color` 색상의 포커스 링으로 표시되며, 이 색상은 어두운 테마에서 활성 셀 테두리의 기본 색상보다 밝습니다.

![contrast-dark 테마의 Spreadsheet](/img/accessibility/spreadsheet_contrast_dark.png)

### 포커스 표시기 {#focus-indicator}

키보드 포커스는 모든 테마에서 표시됩니다.

- 활성 셀에는 테마의 기본 색상으로 된 2px 실선 테두리가 있습니다
- 키보드 포커스가 있는 셀과 셀 에디터에는 테마의 기본 색상으로 된 2px 윤곽선이 적용됩니다
- 수식 입력줄과 툴바, 메뉴 바, 시트 탭, 테두리 팝업, 링크 팝업 및 검색 바의 컨트롤에는 `--dhx-spreadsheet-focus-color` 변수 색상으로 된 2px 윤곽선이 적용됩니다
- 색상 팔레트, 테두리 스타일 목록, 툴바와 메뉴 바의 드롭다운 및 컨텍스트 메뉴에서는 포커스가 있는 항목에 `--dhx-color-focused` 색상으로 된 1px 점선 윤곽선이 적용됩니다
- 셀의 목록 에디터에서는 포커스가 에디터에 유지되며, 목록의 현재 항목은 배경색으로 강조 표시됩니다

`--dhx-spreadsheet-focus-color` 변수는 어두운 테마에서 기본 색상보다 밝으며 [사용자 지정 테마](themes/custom_theme.md)에서 다시 정의할 수 있습니다. 각 테마에서 각 표시기의 대비는 [Accessibility Conformance Report](accessibility_conformance_report.md)에 나와 있습니다.

### 색상 및 확대 {#color-and-zoom}

- **색상이 유일한 신호가 아닙니다.** 활성 셀과 선택 영역에는 테두리와 채우기가 있고, 잘못된 값에는 표시기와 숨겨진 설명이 있으며, 서식 버튼은 `aria-pressed`를 통해 상태를 보고합니다. 색상 버튼의 접근 가능한 이름에는 색상 이름이 포함됩니다.
- **확대 및 리플로.** Spreadsheet는 200% 및 400% 확대에서도 조작할 수 있습니다. 셀은 두 방향으로 스크롤되며, 툴바, 메뉴 바 및 시트 탭은 320 CSS px 너비에 맞습니다.
- **텍스트 간격.** WCAG 텍스트 간격 재정의를 적용해도 컨트롤 레이블이 잘리지 않으며, 탭이 늘어나면 시트 탭 바가 스크롤됩니다.
- **보이는 위치로 스크롤.** 활성 셀은 고정된 행과 열 옆에서 보이는 위치로 스크롤됩니다.

## 상태 안내 {#status-announcements}

Spreadsheet는 별도의 요소가 없는 변경 사항을 polite 라이브 영역을 통해 안내하므로 스크린 리더는 현재 문장을 먼저 끝까지 읽습니다.

| 이벤트 | 안내 텍스트 | 로캘 키 |
| ----- | -------------- | ---------- |
| 범위가 선택됨 | "B2 to D7, 18 cells" | `aria_selectedRange`, `aria_rangeExtent`, `aria_rangeSeparator` |
| 편집으로 수식 오류 또는 잘못된 값이 발생함 | "B7: Reference error. Check the cell references" | `aria_cellMessage` |
| 편집으로 여러 오류 / 잘못된 값이 발생함 | "3 new errors. B7: ..." / "3 invalid values. B7: ..." | `aria_newErrors`, `aria_invalidValues` |
| 잠긴 셀 / 범위의 편집이 거부됨 | "The cell is locked" / "Locked cells were not changed" | `aria_lockedCell`, `aria_lockedCells` |
| 읽기 전용 모드에서 편집 키를 누름 | "The sheet is read-only" | `aria_readonlySheet` |
| 검색 텍스트를 입력함 | "Results: 5. 1 of 5, B2" 또는 "No results" | `aria_searchResults`, `aria_searchMatch`, `aria_searchNoResults` |
| 다음 또는 이전 일치 항목이 표시됨 | "2 of 5, B7" | `aria_searchMatch` |
| Excel 파일을 내보냄 | "Exporting the file", "The file is exported" | `aria_exportStarted`, `aria_exportDone` |
| 파일 대화 상자에서 선택한 파일을 가져옴 | "Importing the file", "The file is imported" | `aria_importStarted`, `aria_importDone` |
| Column width / Row height 명령이 적용됨 | "Column width set to 120 pixels" | `aria_columnWidthSet`, `aria_rowHeightSet` |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd>으로 표시할 항목을 찾지 못함 | "No hidden rows in the selection" | `aria_noHiddenRows`, `aria_noHiddenCols` |

사용자 고유의 명령 결과를 안내하려면 [`announce()`](api/spreadsheet_announce_method.md) 메서드를 호출하십시오.

~~~jsx
spreadsheet.announce("The report is saved");
~~~

## 현지화 {#localization}

접근 가능한 이름, 셀 설명 및 안내는 인터페이스 레이블 옆에 `aria_` 접두사가 있는 키로 `spreadsheet` 로캘에 저장됩니다. Spreadsheet를 초기화하기 전에 `dhx.i18n.setLocale()` 메서드로 번역하십시오.

~~~jsx
dhx.i18n.setLocale("spreadsheet", {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_cellEditor: "Zelleneditor, {cell}",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt",
    aria_selectedRange: "{range}, {count} Zellen",
    aria_rangeExtent: "{start} bis {end}"
});

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

`{cell}` 또는 `{count}`와 같이 중괄호로 묶인 부분은 값으로 대체되므로 번역된 문자열에서도 유지해야 합니다. 색상 이름과 알림 버튼의 이름은 `colorpicker` 및 `message` 로캘에서 가져옵니다. 전체 키 목록은 [Localization](localization.md#default-locale)을, 다른 로캘은 [Localizing built-in widgets](localization.md#localizing-built-in-widgets)를 참조하십시오.

## 구성 예시 {#configuration-recipes}

### 접근성을 고려한 기본 설정 {#accessible-default-setup}

Spreadsheet는 키보드와 WAI-ARIA 출력을 위해 별도의 구성이 필요하지 않습니다. 텍스트에 대한 WCAG AA 대비 요구 사항을 충족하려면 고대비 테마를 선택하십시오. 테마를 설정하는 다른 방법은 [Built-in themes](/themes/)를 참조하십시오.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // the keyboard navigation and the WAI-ARIA output need no configuration
});
spreadsheet.parse(data);

dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

### 읽기 전용 설정 {#read-only-setup}

사용자가 읽고 복사할 수 있지만 변경할 수 없는 데이터를 표시하려면 [`readonly`](api/spreadsheet_readonly_config.md) 옵션을 사용하십시오. 키보드 및 스크린 리더 사용자는 여전히 셀 사이를 이동할 수 있습니다.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true
});
spreadsheet.parse(data);
~~~

활성 셀과 선택 없이 데이터를 표시하려면 [`selection: false`](api/spreadsheet_selection_config.md)를 추가하십시오. 그러면 그리드는 키보드가 통과하는 하나의 탭 정지점이 됩니다.

### 번역된 접근성 문자열 {#translated-accessibility-strings}

스크린 리더는 네 개의 로캘에서 접근성 문자열을 읽습니다. `spreadsheet`에는 이름, 셀 설명 및 안내가, `colorpicker`에는 색상 이름이, `message`에는 알림 버튼의 이름이, `grid`에는 로드된 행 수 안내가 포함됩니다. Spreadsheet를 생성하기 전에 네 가지 모두 설정하십시오. 키는 [Localizing built-in widgets](localization.md#localizing-built-in-widgets)를 참조하십시오.

~~~jsx
const deSpreadsheet = {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt"
};
const deColorpicker = {
    aria_palette: "Farbpalette",
    aria_colorRed: "rot"
};
const deMessage = {
    aria_confirm: "Bestätigen"
};
const deGrid = {
    aria_rowsLoaded: "{count} Zeilen geladen"
};

dhx.i18n.setLocale("spreadsheet", deSpreadsheet);
dhx.i18n.setLocale("colorpicker", deColorpicker);
dhx.i18n.setLocale("message", deMessage);
dhx.i18n.setLocale("grid", deGrid);

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

### 사용자 지정 명령 안내 {#announcing-a-custom-command}

사용자 고유의 명령이 데이터를 변경하는 경우 [`announce()`](api/spreadsheet_announce_method.md) 메서드로 스크린 리더 사용자에게 결과를 알려 주십시오. 이 예제는 활성 시트를 지우는 [메뉴](customization.md#menu) 명령을 추가합니다.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");

spreadsheet.menu.data.add({ id: "clear-sheet", value: "Clear sheet" });

spreadsheet.menu.events.on("click", function (id) {
    if (id === "clear-sheet") {
        spreadsheet.sheets.clear();
        spreadsheet.announce("The sheet is cleared");
    }
});
~~~

## 호스트 페이지의 책임 {#host-page-responsibilities}

일부 요구 사항은 컴포넌트 내부가 아니라 페이지 수준에 있습니다. 호스트 페이지가 다음을 충족하는지 확인하십시오.

- 문서 언어(예: `<html lang="en">`)와 페이지 제목을 설정합니다
- Spreadsheet 위에 제목을 두고 랜드마크(예: `<main>`) 안에 배치합니다
- Spreadsheet 앞에 긴 탐색 영역이 있는 경우 건너뛰기 링크를 제공합니다
- 셀 색상으로 표시하는 모든 상태에 텍스트나 아이콘과 같은 두 번째 신호를 제공합니다. 셀 스타일의 색상은 사용자 데이터의 일부이기 때문입니다
- 셀 스타일과 사용자 지정 테마에서 설정한 색상의 대비를 확인합니다

## 테스트 및 방법론 {#testing-and-methodology}

DHTMLX 팀은 컴포넌트 소스와 브라우저에서 Spreadsheet 6.0.4의 접근성을 검증합니다.

1. **자동화 테스트**: 검색 바, 목록 에디터, 대화 상자 및 알림이 열린 상태에서 `light`, `dark`, `contrast-light` 및 `contrast-dark` 테마에 대해 [axe-core](https://github.com/dequelabs/axe-core)로 수행합니다.
2. **수동 검토**: 소스를 대상으로 각 부분의 역할, 상태 및 이름, 키보드 핸들러와 포커스 영역, 그리고 대비율이 포함된 테마 토큰을 검토합니다.
3. **수동 테스트**: 셀, 바, 메뉴 및 대화 상자에 대한 키보드 전용 워크스루, NVDA, JAWS 및 VoiceOver를 사용한 스크린 리더 테스트, 200% 및 400% 확대, 320 CSS px에서의 리플로, WCAG 텍스트 간격 재정의를 수행합니다.
4. **준수 보고**: Spreadsheet가 부분적으로 지원하는 기준을 포함하여 결과를 [Accessibility Conformance Report](accessibility_conformance_report.md)에 기준별로 게시합니다.

## 리소스 {#resources}

- [Accessibility Conformance Report (VPAT 2.5)](accessibility_conformance_report.md)
- [단축키 목록](hotkeys.md)
- [`readonly`](api/spreadsheet_readonly_config.md)
- [`selection`](api/spreadsheet_selection_config.md)
- [`announce()`](api/spreadsheet_announce_method.md)
- [현지화](localization.md)
- [기본 제공 테마](/themes/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Authoring Practices: Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WAI-ARIA Authoring Practices: Toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
