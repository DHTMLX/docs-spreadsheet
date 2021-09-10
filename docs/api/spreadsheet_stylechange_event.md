---
sidebar_label: styleChange
title: JavaScript Spreadsheet - styleChange Event
description: changetext
---

# styleChange

@short: fires when the style of the cell is changed

@signature:

@params:
- `cell: string` - the id of a cell
- `style: object` - an object with a style for a cell

@example:
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

@descr:
