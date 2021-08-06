---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

AfterRowDelete
=============

@short: fires after a row is deleted
	
@params:
- cells		string		the id(s) of a cell(s)


@example:
spreadsheet.events.on("afterRowDelete", function(cells){
	console.log("A row is deleted");
});


@template:	api_event
@descr:



@relatedapi:
api/spreadsheet_beforerowdelete_event.md

