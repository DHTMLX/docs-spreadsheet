---
sidebar_label: afterColumnAdd
title: aftercolumnadd event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the aftercolumnadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterColumnAdd

@short: fires after a new column is added

@signature: {`afterColumnAdd: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterColumnAdd", function(cells){
	console.log("A new column is added");
});

@descr:
