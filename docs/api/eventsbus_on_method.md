---
sidebar_label: on()
title: on events bus method
description: You can learn about the on events bus method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# on()

### Description

@short: Attaches a handler to an inner event of Spreadsheet

### Usage

~~~jsx
on(name: string, callback: function): void;
~~~

### Parameters

- `name` - (required) the event's name, case-insensitive
- `callback` - (required) the handler function

### Example

~~~jsx {6-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});
~~~

:::info
See the full list of the Spreadsheet events [here](api/api_overview.md#spreadsheet-events).

You can attach several handlers to the same event and all of them are executed. If some handlers return `false`, the related operations are blocked. Event handlers are processed in the same order that they are attached.
:::

**Related article:** [Event Handling](handling_events.md)

**Related sample:** [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)
