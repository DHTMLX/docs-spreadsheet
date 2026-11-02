---
sidebar_label: isDisabled() 
title: isDisabled selection 메서드
description: DHTMLX Spreadsheet에서 selection.isDisabled() 메서드로 셀 선택 기능이 꺼져 있는지 확인할 수 있습니다.
---

# isDisabled()

### 설명 {#description}

@short: 셀 선택 기능이 꺼져 있는지 확인합니다

### 사용법 {#usage}

~~~jsx
isDisabled(): boolean;
~~~

### 반환값 {#returns}

선택 기능이 꺼져 있으면 `true`를, 그렇지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

const disabled = spreadsheet.selection.isDisabled(); // -> true
~~~

**변경 로그:** v6.0.4에서 추가됨

**관련 문서:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [`disable()`](api/selection_disable_method.md)
- [접근성: 읽기 전용 설정](accessibility.md#read-only-setup)
