---
sidebar_label: afterStyleChange
title: JavaScript Spreadsheet - afterStyleChange Event
description: changetext
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
