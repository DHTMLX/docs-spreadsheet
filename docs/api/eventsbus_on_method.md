---
sidebar_label: on()
title: JavaScript Spreadsheet - on() Events Bus Method
description: changetext
---

# on()

@short: attaches a handler to an inner event of Spreadsheet

@signature:

@params:
- `name: string` - the event's name, case-insensitive
- `handler: function` - the handler function
- `context: any` - the value will be accessible as "this" inside of the event handler

@example:
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

@relatedsample:
05_events/01_events.html

@descr:

[See the list of Spreadsheet events](api/api_overview.md/#spreadsheet-events).

You can attach several handlers to the same event and all of them will be executed. If some of handlers return *false*, the related operations will be blocked. Event handlers are processed in the same order that they are attached.

**Related articles**

[Event Handling](handling_events.md)
