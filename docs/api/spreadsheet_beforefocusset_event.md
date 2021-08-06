---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeFocusSet
=====================

@short: 
	fires before focus is set on a cell
    
@params:
- cell		string		the id of a cell

@returns:
- mode		boolean		true to set focus on a cell, false to prevent setting focus

@example:
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  return true;
});


@template:api_event
@descr:
The event is blockable, returning false will prevent setting focus on a cell.


@relatedapi:
	api/spreadsheet_afterfocusset_event.md

