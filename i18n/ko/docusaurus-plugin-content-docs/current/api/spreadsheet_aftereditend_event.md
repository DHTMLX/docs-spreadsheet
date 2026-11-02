---
sidebar_label: afterEditEnd
title: afterEditEnd 이벤트
description: DHTMLX Spreadsheet에서 afterEditEnd 이벤트로 셀 편집 종료를 처리합니다. 이 이벤트는 셀 id와 새 값을 받습니다.
---

# afterEditEnd

### 설명 {#description}

@short: 셀 편집이 완료된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterEditEnd: (cell: string, value: string) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id
- `value` - (필수) 셀의 값

### 예제 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "afterEditEnd" 이벤트 구독
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
