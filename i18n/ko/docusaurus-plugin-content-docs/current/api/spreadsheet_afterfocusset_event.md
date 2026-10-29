---
sidebar_label: afterFocusSet
title: afterFocusSet 이벤트
description: DHTMLX Spreadsheet에서 afterFocusSet 이벤트로 포커스된 셀을 추적합니다. 이 이벤트는 셀에 포커스가 설정된 후 발생하며 셀 id를 받습니다.
---

# afterFocusSet

### 설명 {#description}

@short: 셀에 포커스가 설정된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterFocusSet: (cell: string) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id

### 예제 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "afterFocusSet" 이벤트 구독
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
