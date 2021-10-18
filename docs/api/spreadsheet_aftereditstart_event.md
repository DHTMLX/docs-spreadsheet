---
sidebar_label: afterEditStart
title: aftereditstart event
description: You can learn about the aftereditstart event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterEditStart

@short: fires after editing of a cell has started

@signature: {`afterEditStart: (cell: string, value: string) => void;`}

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@example:
spreadsheet.events.on("afterEditStart", function(){
 	console.log("Editing has started");
});

@descr:
