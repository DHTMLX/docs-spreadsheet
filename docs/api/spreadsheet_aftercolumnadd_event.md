---
sidebar_label: afterColumnAdd
title: JavaScript Spreadsheet - afterColumnAdd Event
description: changetext
---

# afterColumnAdd

@short: fires after a new column is added

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterColumnAdd", function(cells){
	console.log("A new column is added");
});

@descr:

@relatedapi:
api/spreadsheet_beforecolumnadd_event.md
