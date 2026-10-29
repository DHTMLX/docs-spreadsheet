---
sidebar_label: afterSelectionSet
title: afterSelectionSet 이벤트
description: DHTMLX Spreadsheet에서 afterSelectionSet 이벤트로 셀 선택에 대응합니다. 이 이벤트는 셀이 선택된 후 발생하며 셀 id를 받습니다.
---

# afterSelectionSet

### 설명 {#description}

@short: 셀이 선택된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id(들)

### 예제 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "afterSelectionSet" 이벤트 구독
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
