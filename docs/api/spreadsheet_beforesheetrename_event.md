---
sidebar_label: beforeSheetRename
title: beforeSheetRename event
description: You can learn about the beforeSheetRename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetRename

:::caution
The **beforeSheetRename** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "renameSheet") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](../../api/overview/actions_overview/)**. 
:::

### Description

@short: Fires before a sheet is renamed

### Usage

~~~jsx
beforeSheetRename: (sheet: object, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object with the old name of a sheet and its id
- `value` - (required) the new name of the sheet

### Returns

Return `true` to rename a sheet, `false` to prevent the sheet from being renamed

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeSheetRename" event
spreadsheet.events.on("beforeSheetRename", function(sheet, value) {
    console.log("The ", sheet.name, "sheet will be renamed to ", value);
    console.log(sheet, value);
    return true;
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](/handling_events)