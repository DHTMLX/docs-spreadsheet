---
sidebar_label: beforeSheetAdd
title: beforeSheetAdd event
description: You can learn about the beforeSheetAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetAdd

### Description

@short: fires before a new sheet is added

### Usage

~~~jsx
beforeSheetAdd: (name: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `name` - (mandatory) the name of the new sheet

### Returns

***True*** to add a sheet, ***false*** to prevent adding of a sheet.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetAdd" event
spreadsheet.events.on("beforeSheetAdd", function(name) {
    console.log("A new sheet will be added");
    console.log(name);
    return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent adding of a sheet.
:::

**Changelog:** Added in v4.1
