---
sidebar_label: groupFill
title: groupfill event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the groupfill event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# groupFill

@short: fires on auto filling of cells

@signature: {`groupFill: (focusedCell: string, selectedCell: string) => void;`}

@params:
- `focusedCell: string` - the id of a cell in focus
- `selectedCell: string` - the ids of a selected cells

@example:
spreadsheet.events.on("groupFill", function (startCell, range) {
    console.log(startCell, range);
});

@descr:
