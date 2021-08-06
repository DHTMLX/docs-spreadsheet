---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

StyleChange
===============

@short: 
	fires when the style of the cell is changed
@params:
- cell		string		the id of a cell
- style		object		an object with a style for a cell


@example:
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});


@template:	api_event
@descr:



@relatedapi:
	api/spreadsheet_beforestylechange_event.md

