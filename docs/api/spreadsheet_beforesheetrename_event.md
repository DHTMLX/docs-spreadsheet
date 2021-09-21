---
sidebar_label: beforeSheetRename
title: JavaScript Spreadsheet - beforeSheetRename Event
description: changetext
---

# beforeSheetRename

@short: fires before a sheet is renamed

@signature: {`beforeSheetRename: (sheet: ISheet, value: string) => void | boolean;`}

@params:
- `sheet: object` - the object of a sheet
- `value: string` - the new name of the sheet

@returns:
*True* to rename a sheet, *false* to prevent a sheet from being renamed.

@example:
spreadsheet.events.on("beforeSheetRename", function(sheet, value) {
    console.log("The ", sheet.name, "sheet will be renamed to ", value);
    return true;
});

@descr:

The sheet object contains the following parameters:

- **name** - (*string*) the old name of the sheet
- **id** - (*string*) the id of the sheet

The event is blockable, returning false will prevent the sheet from being renamed.

@changelog: added in v4.1
