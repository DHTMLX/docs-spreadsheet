---
sidebar_label: beforeStyleChange
title: beforestylechange event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the beforestylechange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeStyleChange

@short: fires before the style of cells is changed

@signature: {`beforeStyleChange: (cell: string, style: string | string[] | IStylesList | IStylesList[]) => void | boolean;`}

@params:
- `cell: string` - the id(s) of a cell(s)
- `style: string, object, array` - styles set for a cell/cells

@returns:
*True* to change the style of a cell, *false* to prevent changing of style.

@example:
spreadsheet.events.on("beforeStyleChange", function(cell,style){
console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" will change");
	return true;
});

@descr:

The event is blockable, returning false will prevent changing of style.
