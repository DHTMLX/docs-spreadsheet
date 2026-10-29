---
sidebar_label: selection
title: selection 구성 옵션
description: DHTMLX Spreadsheet에서 selection 속성으로 셀 선택 기능을 끌 수 있습니다. 단독으로 사용하거나 읽기 전용 모드와 함께 사용하여 활성 셀 없이 데이터를 표시할 수 있습니다.
---

# selection

### 설명 {#description}

@short: 선택 사항. 셀 선택 기능을 활성화하거나 비활성화합니다

### 사용법 {#usage}

~~~jsx
selection?: boolean;
~~~

### 기본 구성 {#default-config}

~~~jsx
selection: true
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
~~~

### 상세 설명 {#details}

속성을 `false`로 설정하면 다음과 같이 동작합니다.

- Spreadsheet에 활성 셀이 없습니다
- 마우스, 키보드, API로 셀을 선택할 수 없습니다. [`setSelectedCell()`](api/selection_setselectedcell_method.md) 및 [`setFocusedCell()`](api/selection_setfocusedcell_method.md) 메서드는 무시되고, [`getSelectedCell()`](api/selection_getselectedcell_method.md) 및 [`getFocusedCell()`](api/selection_getfocusedcell_method.md) 메서드는 `undefined`를 반환합니다
- 인터페이스에서 셀을 편집할 수 없습니다. 수식 입력줄이 잠기고, 채우기 핸들이 숨겨지며, [`startEdit()`](api/spreadsheet_startedit_method.md) 메서드는 무시됩니다
- 컨텍스트 메뉴와 열 메뉴 아이콘을 사용할 수 없습니다
- `Tab` 키는 그리드에서 한 번만 멈춘 뒤 포커스를 다음으로 이동하며, `Ctrl + F6`은 그리드를 건너뜁니다

열과 행은 테두리를 드래그하여 크기를 조절할 수 있으며, 데이터는 [`setValue()`](api/spreadsheet_setvalue_method.md) 메서드 같은 API로 여전히 변경할 수 있습니다.

[`readonly`](api/spreadsheet_readonly_config.md) 속성과 함께 사용하면, 읽기 전용 모드에서 제공되는 키보드 탐색과 선택 기능까지 끌 수 있습니다.

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true,
    selection: false,
    // other config parameters
});
~~~

런타임에 선택 기능을 끄고 켜려면 [`selection.disable()`](api/selection_disable_method.md) 및 [`selection.enable()`](api/selection_enable_method.md) 메서드를 사용하세요.

**변경 로그:** v6.0.4에서 추가됨

**관련 문서:**
- [셀 선택](configuration.md#selection-of-cells)
- [읽기 전용 모드](configuration.md#read-only-mode)
- [접근성: 읽기 전용 설정](accessibility.md#read-only-setup)
