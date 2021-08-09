---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

lock
========

@short:
	locks the specified cell(s)
    
@params:
- cell		string		the id of a cell(s) or a range of cells


@example:
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");

@template: api_method
@descr:
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~js
spreadsheet.lock("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will lock the cell(s) of the active tab.

@relatedapi:
api/spreadsheet_islocked_method.md
api/spreadsheet_unlock_method.md

@relatedsample:
02_usage/01_locked_cells.html