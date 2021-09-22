---
sidebar_label: groupFill
title: JavaScript Spreadsheet - groupFill Event
description: changetext
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
