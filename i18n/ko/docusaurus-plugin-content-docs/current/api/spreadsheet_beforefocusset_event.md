---
sidebar_label: beforeFocusSet
title: beforeFocusSet 이벤트
description: DHTMLX Spreadsheet에서 beforeFocusSet 이벤트로 포커스를 제어합니다. 이 이벤트는 셀이 포커스를 받기 전에 발생하며, 핸들러가 false를 반환하면 포커스 설정을 막습니다.
---

# beforeFocusSet

### 설명 {#description}

@short: 셀에 포커스가 설정되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeFocusSet: (cell: string) => void | boolean;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id

### 반환값 {#returns}

셀에 포커스를 설정하려면 `true`를 반환하고, 포커스 설정을 방지하려면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "beforeFocusSet" 이벤트를 구독합니다
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
