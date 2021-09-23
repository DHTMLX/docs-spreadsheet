---
sidebar_label: fire()
title: JavaScript Spreadsheet - fire() Events Bus Method
description: changetext
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
