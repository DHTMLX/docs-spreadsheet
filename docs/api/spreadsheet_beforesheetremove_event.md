---
sidebar_label: beforeSheetRemove
title: beforeSheetRemove event
description: You can learn about the beforeSheetRemove event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetRemove

### Description

@short: fires before a sheet is removed

### Usage

~~~jsx
beforeSheetRemove: (sheet: object) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (mandatory) the object of a sheet

### Returns

***True*** to remove the active sheet, ***false*** to prevent the active sheet from being removed.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetRemove" event
spreadsheet.events.on("beforeSheetRemove", function(sheet) {
    console.log("The ", sheet.name, " sheet will be removed");
    console.log(sheet);
    return true;
});
~~~

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the name of the sheet to be deleted
- **id** - (*string*) the id of the sheet to be deleted
:::

:::info
The event is blockable, returning ***false*** will prevent removing of the specified sheet.
:::

**Changelog:** Added in v4.1
