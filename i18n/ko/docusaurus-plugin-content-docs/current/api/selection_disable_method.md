---
sidebar_label: disable() 
title: disable selection 메서드
description: DHTMLX Spreadsheet에서 selection.disable() 메서드로 런타임에 셀 선택 기능을 끌 수 있습니다. 이 메서드는 활성 셀을 제거하고 마우스, 키보드, API를 통한 선택을 무시합니다.
---

# disable()

### 설명 {#description}

@short: 셀 선택 기능을 끕니다

### 사용법 {#usage}

~~~jsx
disable(): void;
~~~

### 예제 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.disable();
~~~

### 상세 설명 {#details}

이 메서드는 다음과 같이 동작합니다.

- 셀 편집을 종료하고 입력된 값을 저장합니다
- 모든 시트에서 선택된 셀과 활성 셀을 제거합니다
- [`enable()`](api/selection_enable_method.md) 메서드가 호출될 때까지 마우스, 키보드, API를 통한 선택을 무시합니다

선택 기능이 꺼져 있는 동안 [`getSelectedCell()`](api/selection_getselectedcell_method.md) 및 [`getFocusedCell()`](api/selection_getfocusedcell_method.md) 메서드는 `undefined`를 반환합니다. 그 밖의 동작은 [`selection: false`](api/spreadsheet_selection_config.md#details) 구성 옵션을 사용할 때와 동일합니다.

선택 기능이 이미 꺼져 있으면 이 메서드는 아무 동작도 하지 않습니다.

**변경 로그:** v6.0.4에서 추가됨

**관련 문서:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [접근성: 읽기 전용 설정](accessibility.md#read-only-setup)
