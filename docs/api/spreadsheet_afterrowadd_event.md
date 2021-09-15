---
sidebar_label: afterRowAdd
title: JavaScript Spreadsheet - afterRowAdd Event
description: changetext
---

# afterRowAdd

@short: fires after a new row is added

@signature: afterRowAdd: (cell: string) => void;

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterRowAdd", function(cells){
	console.log("A new row is added");
});

@descr:
