---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection 메서드
description: DHTMLX Spreadsheet에서 selection.setFocusedCell() 메서드로 셀을 활성화하고 키보드 포커스를 해당 셀로 이동합니다.
---

# setFocusedCell()

### 설명 {#description}

@short: 지정된 셀에 포커스를 설정합니다

### 사용법 {#usage}

~~~jsx
setFocusedCell(cell: string, scroll?: boolean): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 포커스를 설정할 셀의 id
- `scroll` - (선택 사항) Spreadsheet를 해당 셀로 스크롤할지 여부이며, 기본값은 `true`입니다

### 예제 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

### 상세 정보 {#details}

이 메서드는 지정된 셀을 활성 셀로 만들고, 다시 그려진 후 키보드 포커스를 해당 셀로 이동합니다. 키보드 포커스가 다음 위치에 있는 경우에는 이동하지 않습니다:

- Spreadsheet 외부의 요소
- 키보드로 이동한 툴바, 메뉴 또는 시트 탭
- 열려 있는 셀 에디터

키보드 포커스가 페이지 body에 있는 경우(예: 페이지를 로드한 직후) 이 메서드는 포커스를 셀로 이동합니다.

다른 API 메서드 등으로 활성 셀을 변경하는 경우에도 동일한 규칙이 적용됩니다.

[`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md) 이벤트 핸들러가 `false`를 반환하면 활성 셀이 변경되지 않으며 키보드 포커스도 이동하지 않습니다.

[`selection: false`](api/spreadsheet_selection_config.md) 구성 옵션 또는 [`selection.disable()`](api/selection_disable_method.md) 메서드로 선택이 비활성화된 동안에는 이 메서드가 아무 작업도 하지 않습니다.

**변경 로그:** 셀로 키보드 포커스를 이동하는 기능이 v6.0.4에서 추가됨

**관련 문서:**
- [Spreadsheet 작업하기](working_with_ssheet.md)
- [접근성: 키보드 탐색](accessibility.md#keyboard-navigation)
