---
sidebar_label: beforeStyleChange
title: JavaScript Spreadsheet - beforeStyleChange Event
description: changetext
---

# beforeStyleChange

@short: fires before the style of cells is changed

@signature:

@params:
- `cell: string` - the id(s) of a cell(s)
- `style: object,array` - styles set for a cell/cells

@returns:
*True* to change the style of a cell(s), *false* to prevent changing of style.

@example:
spreadsheet.events.on("beforeStyleChange", function(cell,style){
console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" will change");
	return true;
});

@descr:

The event is blockable, returning false will prevent changing of style.

@relatedapi:api/spreadsheet_afterstylechange_event.md
