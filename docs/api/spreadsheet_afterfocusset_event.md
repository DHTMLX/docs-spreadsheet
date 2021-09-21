---
sidebar_label: afterFocusSet
title: JavaScript Spreadsheet - afterFocusSet Event
description: changetext
---

# afterFocusSet

@short: fires after focus is set on a cell

@signature: {`afterFocusSet: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterFocusSet", function(cell){
 	console.log("Focus is set on a cell "+spreadsheet.selection.getSelectedCell());
});

@descr:
