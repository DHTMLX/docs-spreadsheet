---
sidebar_label: beforeEditEnd
title: beforeEditEnd 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 beforeEditEnd 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하실 수 있습니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "beforeEditEnd" 이벤트 구독
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
