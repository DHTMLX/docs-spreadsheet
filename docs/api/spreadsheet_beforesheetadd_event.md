---
sidebar_label: beforeSheetAdd
title: beforesheetadd event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the beforesheetadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetAdd

@short: fires before a new sheet is added

@signature: {`beforeSheetAdd: (name: string) => void | boolean;`}

@params:
`name: string` - the name of the new sheet

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
