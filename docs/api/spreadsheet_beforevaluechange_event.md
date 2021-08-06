---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeValueChange
===================

@short: 
	fires before the values of cells change
@params:
- cells		string					the id(s) of a cell(s)
- value		string,number,array		the value(s) of a cell(s)

@returns:
- mode		boolean		true to change the value(s) of a cell(s), false to prevent changing of value(s)

@example:
spreadsheet.events.on("beforeValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" will change");
 return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent changing of value(s).

@relatedapi:
	api/spreadsheet_aftervaluechange_event.md

