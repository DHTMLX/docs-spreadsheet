---
sidebar_label: afterColumnDelete
title: JavaScript Spreadsheet - afterColumnDelete Event
description: changetext
---

# afterColumnDelete

@short: fires after a column is deleted

@signature: afterColumnDelete: (cell: string) => void;

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterColumnDelete", function(cells){
	console.log("A new column is added");
});

@descr:
