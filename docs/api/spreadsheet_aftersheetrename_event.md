---
sidebar_label: afterSheetRename
title: afterSheetRename event
description: You can learn about the afterSheetRename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetRename

### Description

@short: fires after a sheet is renamed

### Usage

~~~jsx
afterSheetRename: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (mandatory) the object of a sheet

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetRename" event
spreadsheet.events.on("afterSheetRename", function(sheet) {
    console.log("The sheet is renamed to", sheet.name );
    console.log(sheet);
});
~~~

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the new name of the sheet
- **id** - (*string*) the id of the sheet
:::

**Changelog:** Added in v4.1
