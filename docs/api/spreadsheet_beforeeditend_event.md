---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeEditEnd
=====================

@short: 
	fires before editing of a cell is finished
    
@params:

@returns:
- mode		boolean		true to finish editing a cell, false to prevent closing of an editor

@example:
spreadsheet.events.on("beforeEditEnd", function(){
 	console.log("Editing has started");
    return true;
});


@template:api_event
@descr:
The event is blockable, returning false will prevent closing of an editor.


@relatedapi:
	api/spreadsheet_aftereditend_event.md
