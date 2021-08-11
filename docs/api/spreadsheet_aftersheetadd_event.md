---
sidebar_label: afterSheetAdd
title: JavaScript Spreadsheet - afterSheetAdd Event
description: changetext
---

# afterSheetAdd

@short: fires after a new sheet is added

@signature:

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

@template:api_event