---
sidebar_label: beforeSheetClear
title: beforeSheetClear event
description: You can learn about the beforeSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetClear

@short: fires before a sheet of the spreadsheet is cleared

@signature: {`beforeSheetClear: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of a sheet

@returns:
Return `false` to prevent clearing a sheet; otherwise, `true`.

@example:
spreadsheet.events.on("beforeSheetClear", function(sheet){
    console.log("The " + sheet.name + " sheet will be cleared");
    return false;
});

@descr:

@changelog: added in v4.2
