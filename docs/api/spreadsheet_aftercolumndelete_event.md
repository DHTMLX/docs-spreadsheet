---
sidebar_label: afterColumnDelete
title: JavaScript Spreadsheet - afterColumnDelete Event
description: changetext
---

# afterColumnDelete

@short: fires after a column is deleted

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterColumnDelete", function(cells){
	console.log("A new column is added");
});

@descr:
