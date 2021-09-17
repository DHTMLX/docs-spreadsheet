---
sidebar_label: Event Handling
title: JavaScript Spreadsheet - Event Handling
description: changetext
---

# Event Handling

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Attaching Event Listeners

You can attach event listeners with the [spreadsheet.events.on()](api/eventsbus_on_method.md) method:

~~~js
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## Detaching Event Listeners

To detach events, use [spreadsheet.events.detach()](api/eventsbus_detach_method.md):

~~~js
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Calling Events

To call events, use [spreadsheet.events.fire()](api/eventsbus_fire_method.md):

~~~js
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/api_overview.md#spreadsheet-events).

{{note The names of events are case-insensitive.}}
