---
sidebar_label: beforeSheetRename
title: beforesheetrename event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the beforesheetrename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
