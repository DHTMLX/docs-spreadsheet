---
sidebar_label: afterSheetAdd
title: aftersheetadd event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the aftersheetadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetAdd

@short: fires after a new sheet is added

@signature: {`afterSheetAdd: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of a new sheet

@example:
spreadsheet.events.on("afterSheetAdd", function(sheet) {
    console.log("A new sheet is added:", sheet.name);
});

@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the new sheet
- **id** - (*string*) the id of the new sheet

@changelog: added in v4.1
