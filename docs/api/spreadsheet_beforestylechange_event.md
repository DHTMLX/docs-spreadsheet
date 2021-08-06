---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeStyleChange
=====================

@short: 
	fires before the style of cells is changed
    
@params:
- cell		string				the id(s) of a cell(s)
- style		object,array		styles set for a cell/cells


@returns:
- mode		boolean		true to change the style of a cell(s), false to prevent changing of style

@example:
spreadsheet.events.on("beforeStyleChange", function(cell,style){
console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" will change");
	return true;
});


@template:api_event
@descr:
The event is blockable, returning false will prevent changing of style.



@relatedapi:
	api/spreadsheet_afterstylechange_event.md

