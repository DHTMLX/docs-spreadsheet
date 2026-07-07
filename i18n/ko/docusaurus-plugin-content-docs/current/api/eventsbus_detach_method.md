---
sidebar_label: detach()
title: detach events bus 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 detach events bus 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# detach()

### 설명 {#description}

@short: `on()` 메서드로 이전에 연결된 이벤트 핸들러를 분리합니다

### 사용법 {#usage}

~~~jsx
detach(name: string): void;
~~~

### 매개변수 {#parameters}

- `name` - (필수) 분리할 이벤트의 이름

### 예제 {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");
~~~

:::info
기본적으로 `detach()`는 대상 이벤트의 모든 이벤트 핸들러를 제거합니다. 컨텍스트 마커를 사용하면 특정 이벤트 핸들러만 분리할 수 있습니다.
:::

~~~jsx
const marker = "any"; // you can use any string|object value

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// the next command will delete only handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
