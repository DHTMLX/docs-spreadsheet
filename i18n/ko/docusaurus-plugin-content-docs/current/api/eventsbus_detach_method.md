---
sidebar_label: detach()
title: detach events bus 메서드
description: DHTMLX Spreadsheet에서 events.detach() 메서드로 on() 메서드를 통해 연결된 이벤트 핸들러를 이벤트 이름으로 분리합니다.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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
