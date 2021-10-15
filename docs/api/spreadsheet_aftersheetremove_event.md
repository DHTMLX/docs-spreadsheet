---
sidebar_label: afterSheetRemove
title: aftersheetremove event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the aftersheetremove event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetRemove

@short: fires after a sheet is removed

@signature: {`afterSheetRemove: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of a sheet

@example:
spreadsheet.events.on("afterSheetRemove", function(sheet) {
    console.log("The ", sheet.name, "sheet is removed");
});

@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the sheet
- **id** - (*string*) the id of the sheet

@changelog: added in v4.1
