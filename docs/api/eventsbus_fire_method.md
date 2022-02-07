---
sidebar_label: fire()
title: fire events bus method
description: You can learn about the fire events bus method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# fire()

### Description

@short: Triggers an inner event

### Usage

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### Parameters

- `name` -  (required) the event's name, case-insensitive
- `arguments` - (required) an array of the event-related data

### Returns

The method returns `false`, if some of the event handlers return `false`. Otherwise, `true`

### Example

~~~jsx {9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.events.on("CustomEvent", function(param1, param2){
	return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

:::info
Normally, events are called automatically and you don't need to use this method.
:::

**Related articles:** [Event Handling](handling_events.md)
