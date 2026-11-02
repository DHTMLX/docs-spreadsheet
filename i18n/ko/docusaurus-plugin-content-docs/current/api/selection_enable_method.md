---
sidebar_label: enable() 
title: enable selection 메서드
description: DHTMLX Spreadsheet에서 selection.enable() 메서드로 셀 선택 기능을 다시 켤 수 있습니다. 이 메서드는 A1 셀을 활성화하고 선택 관련 이벤트를 발생시킵니다.
---

# enable()

### 설명 {#description}

@short: 셀 선택 기능을 켭니다

### 사용법 {#usage}

~~~jsx
enable(): void;
~~~

### 예제 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.enable();
~~~

### 상세 설명 {#details}

이 메서드는 활성 시트의 A1 셀을 활성 셀로 만듭니다. A1 셀에 대해 [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md), [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md), [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md), [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md) 이벤트가 발생합니다.

선택 기능이 이미 켜져 있으면 이 메서드는 아무 동작도 하지 않습니다.

**변경 로그:** v6.0.4에서 추가됨

**관련 문서:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`disable()`](api/selection_disable_method.md)
- [접근성: 읽기 전용 설정](accessibility.md#read-only-setup)
