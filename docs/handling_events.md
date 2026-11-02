---
sidebar_label: Event handling
title: Event handling
description: Attach and detach event listeners and call events in DHTMLX Spreadsheet with the events.on(), events.detach() and events.fire() methods.
---

# Event handling

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Attaching event listeners

You can attach event listeners with the [`spreadsheet.events.on()`](api/eventsbus_on_method.md) method:

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## Detaching event listeners

To detach events, use [`spreadsheet.events.detach()`](api/eventsbus_detach_method.md):

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Calling events

To call events, use [`spreadsheet.events.fire()`](api/eventsbus_fire_method.md):

~~~jsx
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/api_overview.md#spreadsheet-events).

{{note The names of events are case-insensitive.}}
