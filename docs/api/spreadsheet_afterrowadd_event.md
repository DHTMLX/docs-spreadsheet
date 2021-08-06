---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

AfterRowAdd
=============

@short: fires after a new row is added
	
@params:
- cells		string		the id(s) of a cell(s)


@example:
spreadsheet.events.on("afterRowAdd", function(cells){
	console.log("A new row is added");
});


@template:	api_event
@descr:



@relatedapi:
api/spreadsheet_beforerowadd_event.md

