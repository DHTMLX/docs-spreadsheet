---
sidebar_label: beforeEditStart
title: beforeEditStart 이벤트
description: DHTMLX JavaScript Spreadsheet 라이브러리의 문서에서 beforeEditStart 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드하세요.
---

# beforeEditStart

### 설명 {#description}

@short: 셀 편집이 시작되기 전에 발생합니다

### 사용법 {#usage}

~~~jsx
beforeEditStart: (cell: string, value: string) => void | boolean;
~~~

### 매개변수 {#parameters}

이벤트의 callback은 다음 매개변수를 받습니다:

- `cell` - (필수) 셀의 id
- `value` - (필수) 셀의 값

### 반환값 {#returns}

셀을 편집하려면 `true`를 반환하고, 편집을 방지하려면 `false`를 반환합니다

### 예제 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// "beforeEditStart" 이벤트를 구독합니다
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
