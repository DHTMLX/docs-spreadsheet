---
sidebar_label: beforeAction
title: beforeAction event
description: You can learn about the beforeAction event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeAction

### Description

@short: Fires before an action is executed

### Usage

~~~jsx
beforeAction: (action: string, config: object) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `action` - (required) the name of the action. Check the full list of available actions [here](api/overview/actions_overview.md#list-of-actions)
- `config` - (required) an object with parameters of the action

### Returns

Return `false` to prevent an action from being executed; otherwise, return `true`

### Example

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(dataset);

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return false;
    }
});
~~~

**Changelog:** Added in v4.3

**Related articles:** 
- [Spreadsheet actions](api/overview/actions_overview.md) 
- [Event handling](handling_events.md) 