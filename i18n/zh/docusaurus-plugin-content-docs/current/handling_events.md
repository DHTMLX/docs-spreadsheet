---
sidebar_label: 事件处理
title: 事件处理
description: 使用 events.on()、events.detach() 和 events.fire() 方法在 DHTMLX Spreadsheet 中添加和移除事件监听器并调用事件。
---

# 事件处理 {#event-handling}

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 添加事件监听器 {#attaching-event-listeners}

您可以使用 [`spreadsheet.events.on()`](api/eventsbus_on_method.md) 方法添加事件监听器：

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## 移除事件监听器 {#detaching-event-listeners}

要移除事件，请使用 [`spreadsheet.events.detach()`](api/eventsbus_detach_method.md)：

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## 触发事件 {#calling-events}

要触发事件，请使用 [`spreadsheet.events.fire()`](api/eventsbus_fire_method.md)：

~~~jsx
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

事件列表可在 [API 部分](api/api_overview.md#spreadsheet-events)查阅。

{{note 事件名称不区分大小写。}}
