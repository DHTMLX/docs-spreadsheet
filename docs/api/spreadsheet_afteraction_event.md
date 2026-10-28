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
afterAction: (
    action: string,
    config: {
        action?: string,
        cell?: string,
        row?: number,
        col?: number,
        val?: any,
        prev?: any,
        groupAction?: string,
        pageId?: string | number,
        pageName?: string,
        // other properties of the action
    } | object[]
) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `action` - (required) the name of the action. Check the full list of available actions [here](api/overview/actions_overview.md#list-of-actions)
- `config` - (required) an object with parameters of the action. The set of properties depends on the action. The object can include:
    - `action` - (optional) the name of the action
    - `cell` - (optional) the id of the cell or the range of cells the action is applied to, for example, `"A1"` or `"B2:D5"`
    - `row` - (optional) the zero-based index of the row of the cell
    - `col` - (optional) the zero-based index of the column of the cell
    - `val` - (optional) the new value that the action applies, for example, a cell value, a style or a size
    - `prev` - (optional) the previous value
    - `groupAction` - (optional) the name of the group action, if the action is applied to a range of cells
    - `pageId` - (optional) the id of the sheet
    - `pageName` - (optional) the name of the sheet

    When several actions are executed together, for example, on paste, the `action` parameter is `"groupAction"`, and `config` is an array of such objects.

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