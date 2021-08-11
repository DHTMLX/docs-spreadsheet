---
sidebar_label: afterRowAdd
title: JavaScript Spreadsheet - afterRowAdd Event
description: changetext
---

# afterRowAdd

@short: fires after a new row is added

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterRowAdd", function(cells){
	console.log("A new row is added");
});

@descr:

@relatedapi:
api/spreadsheet_beforerowadd_event.md

@template:api_event