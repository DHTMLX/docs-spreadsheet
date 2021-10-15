---
sidebar_label: fire()
title: fire events bus method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the fire events bus method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# fire()

@short: triggers an inner event

@signature: {`fire(name: string, arguments: any[]): boolean;`}

@params:
- `name: string` - the event's name, case-insensitive
- `arguments: array` - an array of the event-related data

@returns:
*False*, if some of the event handlers return *false*. Otherwise, *true*.

@example:
spreadsheet.events.on("CustomEvent", function(param1, param2){
 	return true;
});

var res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);

@descr:

Normally, events are called automatically and you don't need to use this method.

**Related articles**

[Event Handling](handling_events.md)
