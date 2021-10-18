---
sidebar_label: afterSheetChange
title: aftersheetchange event
description: You can learn about the aftersheetchange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetChange

@short: fires after the currently active sheet is changed

@signature: {`afterSheetChange: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of the newly active sheet

@example:
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is ", sheet.name);
});

@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the newly active sheet
- **id** - (*string*) the id of the newly active sheet

@changelog: added in v4.1
