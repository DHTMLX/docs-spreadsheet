---
sidebar_label: afterAction
title: afterAction event
description: You can learn about the afterAction event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterAction

### Description

@short: Fires after an action is executed

### Usage

~~~jsx
afterAction: (action: string, config: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `action` - (required) the name of the action. Check the full list of available actions [here](api/overview/actions_overview.md#list-of-actions)
- `config` - (required) an object with parameters of the action

### Example

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**Changelog:** Added in v4.3

**Related articles:** 
- [Spreadsheet actions](api/overview/actions_overview.md)
- [Event handling](handling_events.md) 