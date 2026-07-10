---
sidebar_label: fire()
title: fire events bus 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 fire events bus 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX Spreadsheet의 무료 30일 평가판도 다운로드하실 수 있습니다.
---

# fire()

### 설명 {#description}

@short: 내부 이벤트를 트리거합니다

:::info
일반적으로 이벤트는 자동으로 호출되므로 이 메서드를 사용할 필요가 없습니다.
:::

### 사용법 {#usage}

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### 매개변수 {#parameters}

- `name` - (필수) 이벤트 이름 (대소문자 구분 없음)
- `arguments` - (필수) 이벤트 관련 데이터 배열

### 반환값 {#returns}

일부 이벤트 핸들러가 `false`를 반환하면 이 메서드는 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.

### 예제 {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("CustomEvent", function(param1, param2){
    return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

**관련 문서:** [이벤트 처리](handling_events.md)
