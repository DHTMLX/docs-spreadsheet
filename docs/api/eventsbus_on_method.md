---
sidebar_label: on()
title: on events bus method
description: You can learn about the on events bus method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# on()

@short: attaches a handler to an inner event of Spreadsheet

@signature: {`on(name: string, callback: Function): void;`}

@params:
- `name: string` - the event's name, case-insensitive
- `callback: function` - the handler function

@example:
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

@relatedsample:
**Related sample**: [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)

@descr:

[See the list of Spreadsheet events](api/api_overview.md/#spreadsheet-events).

You can attach several handlers to the same event and all of them will be executed. If some of handlers return *false*, the related operations will be blocked. Event handlers are processed in the same order that they are attached.

**Related articles**

[Event Handling](handling_events.md)
