---
sidebar_label: on()
title: on events bus 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 on events bus 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# on()

### 설명 {#description}

@short: Spreadsheet의 내부 이벤트에 핸들러를 연결합니다

### 사용법 {#usage}

~~~jsx
on(name: string, callback: function): void;
~~~

### 매개변수 {#parameters}

- `name` - (필수) 이벤트 이름 (대소문자 구분 없음)
- `callback` - (필수) 핸들러 함수

### 예제 {#example}

~~~jsx {6-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});
~~~

:::info
Spreadsheet 이벤트의 전체 목록은 [여기](api/api_overview.md#spreadsheet-events)에서 확인하실 수 있습니다.

동일한 이벤트에 여러 핸들러를 연결할 수 있으며, 모든 핸들러가 실행됩니다. 일부 핸들러가 `false`를 반환하면 관련 작업이 차단됩니다. 이벤트 핸들러는 연결된 순서대로 처리됩니다.
:::

**관련 문서:** [이벤트 처리](handling_events.md)

**관련 샘플:** [Spreadsheet. 이벤트](https://snippet.dhtmlx.com/2vkjyvsi)
