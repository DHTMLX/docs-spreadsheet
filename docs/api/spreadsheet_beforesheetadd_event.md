---
sidebar_label: beforeSheetAdd
title: JavaScript Spreadsheet - beforeSheetAdd Event
description: changetext
---

# beforeSheetAdd

@short: fires before a new sheet is added

@signature:

@returns:
*True* to add a sheet, *false* to prevent adding of a sheet.

@example:
spreadsheet.events.on("beforeSheetAdd", function() {
    console.log("A new sheet will be added");
    return true;
});

@descr:

The event is blockable, returning false will prevent adding of a sheet.

@changelog: added in v4.1

@template:api_event