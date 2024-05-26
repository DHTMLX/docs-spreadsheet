---
sidebar_label: beforeSheetRemove
title: beforeSheetRemove event
description: You can learn about the beforeSheetRemove event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetRemove

:::caution
The **beforeSheetRemove** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "deleteSheet") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires before a sheet is removed

### Usage

~~~jsx
beforeSheetRemove: (sheet: object) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object  with the name and id of a sheet

### Returns

Return `true` to remove the active sheet, `false` to prevent the active sheet from being removed

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeSheetRemove" event
spreadsheet.events.on("beforeSheetRemove", function(sheet) {
    console.log("The ", sheet.name, " sheet will be removed");
    console.log(sheet);
    return true;
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)