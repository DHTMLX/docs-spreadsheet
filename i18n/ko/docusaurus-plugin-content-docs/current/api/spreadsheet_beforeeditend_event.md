---
sidebar_label: beforeEditEnd
title: beforeEditEnd 이벤트
description: DHTMLX Spreadsheet에서 beforeEditEnd 이벤트로 편집이 끝나기 전에 셀 값을 확인하고, false를 반환하여 에디터를 열린 상태로 유지합니다.
---

# beforeEditEnd

### 설명 {#description}

@short: 셀 편집이 완료되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id
- `value` - (필수) 셀의 값

### 반환값 {#returns}

셀 편집을 완료하려면 `true`를 반환하고, 편집기를 닫지 않으려면 `false`를 반환하세요

### 예제 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "beforeEditEnd" 이벤트 구독
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
