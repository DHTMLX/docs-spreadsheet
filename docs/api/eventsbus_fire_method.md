---
sidebar_label: fire()
title: fire events bus method
description: Trigger an inner event of DHTMLX Spreadsheet with the events.fire() method, passing the name of the event and an array of the event data.
---

# fire()

### Description

@short: Triggers an inner event

:::info
Normally, events are called automatically and you don't need to use this method.
:::

### Usage

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### Parameters

- `name` -  (required) the event's name, case-insensitive
- `arguments` - (required) an array of the event-related data

### Returns

The method returns `false` if some of the event handlers return `false`. Otherwise, `true`

### Example

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("CustomEvent", function(param1, param2){
    return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

**Related article:** [Event Handling](handling_events.md)
