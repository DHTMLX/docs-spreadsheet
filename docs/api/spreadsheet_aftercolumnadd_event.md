---
sidebar_label: afterColumnAdd
title: JavaScript Spreadsheet - afterColumnAdd Event
description: changetext
---

# afterColumnAdd

@short: fires after a new column is added

@signature: afterColumnAdd: (cell: string) => void;

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterColumnAdd", function(cells){
	console.log("A new column is added");
});

@descr:
