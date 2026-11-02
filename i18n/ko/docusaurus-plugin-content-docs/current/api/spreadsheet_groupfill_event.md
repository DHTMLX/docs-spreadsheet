---
sidebar_label: groupFill
title: groupFill 이벤트
description: DHTMLX Spreadsheet에서 groupFill 이벤트로 셀 자동 채우기를 처리합니다. 이 이벤트는 포커스된 셀과 선택된 셀을 콜백에 전달합니다.
---

# groupFill

### 설명 {#description}

@short: 셀 자동 채우기 시 발생합니다

### 사용법 {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### 매개변수 {#parameters}

이벤트의 콜백은 다음 매개변수를 받습니다:

- `focusedCell` - (필수) 포커스된 셀의 id
- `selectedCell` - (필수) 선택된 셀들의 id

### 예제 {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// "groupFill" 이벤트 구독
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
