---
sidebar_label: afterColumnDelete
title: aftercolumndelete event
description: You can learn about the aftercolumndelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterColumnDelete

@short: fires after a column is deleted

@signature: {`afterColumnDelete: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterColumnDelete", function(cells){
	console.log("A new column is added");
});

@descr:
