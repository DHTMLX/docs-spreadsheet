---
sidebar_label: afterSheetRename
title: aftersheetrename event
description: You can learn about the aftersheetrename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetRename

@short: fires after a sheet is renamed

@signature: {`afterSheetRename: (sheet: ISheet) => void;`}

@params:
`sheet: object` - the object of a sheet

@example:
spreadsheet.events.on("afterSheetRename", function(sheet) {
    console.log("The sheet is renamed to", sheet.name );
});

@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the new name of the sheet
- **id** - (*string*) the id of the sheet

@changelog: added in v4.1
