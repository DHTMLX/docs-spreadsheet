---
sidebar_label: groupFill
title: groupFill 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 groupFill 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수도 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "groupFill" 이벤트 구독
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
