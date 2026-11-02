---
sidebar_label: afterSheetChange
title: afterSheetChange 이벤트
description: DHTMLX Spreadsheet에서 afterSheetChange 이벤트로 시트 전환을 추적합니다. 이 이벤트는 새로 활성화된 시트의 이름과 id를 받습니다.
---

# afterSheetChange

### 설명 {#description}

@short: 현재 활성 시트가 변경된 후 발생합니다

### 사용법 {#usage}

~~~jsx
afterSheetChange: (sheet: object) => void;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `sheet` - (필수) 새로 활성화된 시트의 이름과 id를 포함하는 객체

### 예제 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "afterSheetChange" 이벤트 구독
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**변경 로그:** v4.1에서 추가됨

**관련 문서:** [이벤트 처리](handling_events.md)
