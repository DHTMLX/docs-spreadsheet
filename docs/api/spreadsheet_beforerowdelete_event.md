---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeRowDelete
=============

@short: fires before a row is deleted
	
@params:
- cells		string		the id(s) of a cell(s)

@returns:
- mode		boolean		true to delete a row, false to prevent deleting of a row

@example:
spreadsheet.events.on("beforeRowDelete", function(cells){
	console.log("A row will be deleted");
    return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent deleting of a row.


@relatedapi:
api/spreadsheet_afterrowdelete_event.md

