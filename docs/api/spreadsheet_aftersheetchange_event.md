---
sidebar_label: afterSheetChange
title: JavaScript Spreadsheet - afterSheetChange Event
description: changetext
---

# afterSheetChange

@short: fires after the currently active sheet is changed

@signature: afterSheetChange: (sheet: ISheet) => void;

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
