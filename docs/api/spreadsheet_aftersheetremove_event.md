---
sidebar_label: afterSheetRemove
title: JavaScript Spreadsheet - afterSheetRemove Event
description: changetext
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
