---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeRowAdd
=============

@short: fires before a new row is added
	
@params:
- cells		string		the id(s) of a cell(s)

@returns:
- mode		boolean		true to add a row, false to prevent adding of a row

@example:
spreadsheet.events.on("beforeRowAdd", function(cells){
	console.log("A new row will be added");
    return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent adding of a row.


@relatedapi:
api/spreadsheet_afterrowadd_event.md

