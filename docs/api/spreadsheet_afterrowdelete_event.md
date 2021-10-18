---
sidebar_label: afterRowDelete
title: afterrowdelete event
description: You can learn about the afterrowdelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
