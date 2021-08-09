---
sidebar_label: afterRowDelete
title: JavaScript Spreadsheet - afterRowDelete Event
description: changetext
---

# afterRowDelete

@short: fires after a row is deleted

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterRowDelete", function(cells){
	console.log("A row is deleted");
});

@descr:

@relatedapi:
api/spreadsheet_beforerowdelete_event.md

@template:api_event