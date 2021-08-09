---
sidebar_label: beforeSheetRemove
title: JavaScript Spreadsheet - beforeSheetRemove Event
description: changetext
---

# beforeSheetRemove

@short: fires before a sheet is removed

@signature:

@params:
`sheet: object` - the object of a sheet

@returns:
*True* to remove a sheet, *false* to prevent removing of a sheet.

@example:
spreadsheet.events.on("beforeSheetRemove", function(sheet) {
    console.log("The ", sheet.name, " sheet will be removed");
    return true;
});

@descr:

The sheet object contains the following parameters:

- **name** - (*string*) the name of the sheet to be deleted
- **id** - (*string*) the id of the sheet to be deleted

The event is blockable, returning false will prevent removing of a sheet.

@changelog: added in v4.1

@template:api_event