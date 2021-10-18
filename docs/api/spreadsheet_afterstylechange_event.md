---
sidebar_label: afterStyleChange
title: afterstylechange event
description: You can learn about the afterstylechange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterStyleChange

@short: fires after the style of a cell is changed

@signature: {`afterStyleChange: (cell: string, style: string | string[] | IStylesList | IStylesList[]) => void;`}

@params:
- `cell: string` - the id of a cell
- `style: object, array` - styles set for a cell

@example:
spreadsheet.events.on("afterStyleChange", function(cells,style){
 console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" is changed");
});

@descr:
