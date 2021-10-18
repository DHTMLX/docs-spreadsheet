---
sidebar_label: beforeSheetChange
title: beforesheetchange event
description: You can learn about the beforesheetchange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetChange

@short: fires before changing the currently active sheet

@signature: {`beforeSheetChange: (sheet: ISheet) => void | boolean;`}

@params:
`sheet: object` - the object of the currently active sheet

@returns:
*True* to change the active sheet, *false* to prevent the active sheet from being changed.

@example:
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed" );
    return true;
});

@descr:

The sheet object contains the following parameters:

- **name** - (*string*) the name of the currently active sheet
- **id** - (*string*) the id of the sheet

The event is blockable, returning false will prevent changing of the active sheet.

@changelog: added in v4.1
