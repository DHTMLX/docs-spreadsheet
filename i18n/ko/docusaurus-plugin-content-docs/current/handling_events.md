---
sidebar_label: 이벤트 처리
title: 이벤트 처리
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 이벤트 처리에 대해 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Spreadsheet 무료 30일 평가판을 다운로드하십시오.
---

# 이벤트 처리 {#event-handling}

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 이벤트 리스너 연결하기 {#attaching-event-listeners}

[`spreadsheet.events.on()`](api/eventsbus_on_method.md) 메서드를 사용하여 이벤트 리스너를 연결할 수 있습니다.

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## 이벤트 리스너 해제하기 {#detaching-event-listeners}

이벤트를 해제하려면 [`spreadsheet.events.detach()`](api/eventsbus_detach_method.md)를 사용하십시오.

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## 이벤트 호출하기 {#calling-events}

이벤트를 호출하려면 [`spreadsheet.events.fire()`](api/eventsbus_fire_method.md)를 사용하십시오.

~~~jsx
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

이벤트 목록은 [API 섹션](api/api_overview.md#spreadsheet-events)에서 확인할 수 있습니다.

{{note 이벤트 이름은 대소문자를 구분하지 않습니다.}}
