---
sidebar_label: Event Handling
title: JavaScript Spreadsheet - Event Handling
description: changetext
---

# Event Handling


## Attaching Event Listeners

You can attach event listeners with the [spreadsheet.events.on()](api/events/on.md) method:

~~~js
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

{{sample 05_events/01_events.html}}

{{note The names of events are case-insensitive.}}

## Detaching Event Listeners

To detach events, use [spreadsheet.events.detach()](api/events/detach.md):

~~~js
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Calling Events

To call events, use [spreadsheet.events.fire()](api/events/fire.md):

~~~js
spreadsheet.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/refs/spreadsheet_events.md).

