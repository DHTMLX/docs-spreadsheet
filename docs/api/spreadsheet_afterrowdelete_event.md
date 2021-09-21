---
sidebar_label: afterRowDelete
title: JavaScript Spreadsheet - afterRowDelete Event
description: changetext
---

# afterRowDelete

@short: fires after a row is deleted

@signature: {`afterRowDelete: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterRowDelete", function(cells){
	console.log("A row is deleted");
});

@descr:
