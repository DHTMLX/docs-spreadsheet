---
sidebar_label: beforeSheetRename
title: beforeSheetRename event
description: You can learn about the beforeSheetRename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetRename

### Description

@short: fires before a sheet is renamed

### Usage

~~~jsx
beforeSheetRename: (sheet: object, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (mandatory) the object of a sheet
- `value` - (mandatory) the new name of the sheet

### Returns

***True*** to rename a sheet, ***false*** to prevent the sheet from being renamed.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetRename" event
spreadsheet.events.on("beforeSheetRename", function(sheet, value) {
    console.log("The ", sheet.name, "sheet will be renamed to ", value);
    console.log(sheet, value);
    return true;
});
~~~

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the old name of the sheet
- **id** - (*string*) the id of the sheet
:::

:::info
The event is blockable, returning ***false*** will prevent the sheet from being renamed.
:::

**Changelog:** Added in v4.1
