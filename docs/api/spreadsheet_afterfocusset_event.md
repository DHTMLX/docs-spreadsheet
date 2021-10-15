---
sidebar_label: afterFocusSet
title: afterfocusset event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the afterfocusset event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
