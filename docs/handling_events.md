---
sidebar_label: Event handling
title: Event handling
description: You can learn about event handling in the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Event handling

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Attaching event listeners

You can attach event listeners with the [spreadsheet.events.on()](../api/eventsbus_on_method) method:

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## Detaching event listeners

To detach events, use [spreadsheet.events.detach()](../api/eventsbus_detach_method):

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Calling events

To call events, use [spreadsheet.events.fire()](../api/eventsbus_fire_method):

~~~jsx
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](../api/api_overview/#spreadsheet-events).

{{note The names of events are case-insensitive.}}
