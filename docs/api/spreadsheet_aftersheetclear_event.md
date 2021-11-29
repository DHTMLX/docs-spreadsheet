---
sidebar_label: afterSheetClear
title: afterSheetClear event
description: You can learn about the afterSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetClear

@short: fires after a sheet of the spreadsheet is cleared

@signature: {`afterSheetClear: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of a sheet

@example:
spreadsheet.events.on("afterSheetClear", function(sheet){
    console.log("The " + sheet.name + " is cleared");
});

@descr:

@changelog: added in v4.2
