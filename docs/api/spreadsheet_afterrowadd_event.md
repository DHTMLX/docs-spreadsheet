---
sidebar_label: afterRowAdd
title: afterrowadd event
description: You can learn about the afterrowadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterRowAdd

@short: fires after a new row is added

@signature: {`afterRowAdd: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterRowAdd", function(cells){
	console.log("A new row is added");
});

@descr:
