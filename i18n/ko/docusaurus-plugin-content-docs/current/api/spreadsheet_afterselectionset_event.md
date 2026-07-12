---
sidebar_label: afterSelectionSet
title: afterSelectionSet 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 afterSelectionSet 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하실 수 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "afterSelectionSet" 이벤트 구독
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
