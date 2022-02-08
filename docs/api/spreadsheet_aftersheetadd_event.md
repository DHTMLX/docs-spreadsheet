---
sidebar_label: afterSheetAdd
title: afterSheetAdd event
description: You can learn about the afterSheetAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetAdd

### Description

@short: Fires after a new sheet is added

### Usage

~~~jsx
afterSheetAdd: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) the object of a new sheet

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the name of the new sheet
- **id** - (*string*) the id of the new sheet
:::

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetAdd" event
spreadsheet.events.on("afterSheetAdd", function(sheet) {
    console.log("A new sheet is added:", sheet.name);
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)