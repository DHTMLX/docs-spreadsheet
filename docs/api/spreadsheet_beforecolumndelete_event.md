---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeColumnDelete
=============

@short: fires before a column is deleted
	
@params:
- cells		string		the id(s) of a cell(s)

@returns:
- mode		boolean		true to delete a column, false to prevent deleting of a column

@example:
spreadsheet.events.on("beforeColumnDelete", function(cells){
	console.log("A column will be deleted");
    return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent deleting of a column.


@relatedapi:
api/spreadsheet_aftercolumndelete_event.md