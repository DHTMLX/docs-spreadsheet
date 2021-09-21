---
sidebar_label: afterEditStart
title: JavaScript Spreadsheet - afterEditStart Event
description: changetext
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
