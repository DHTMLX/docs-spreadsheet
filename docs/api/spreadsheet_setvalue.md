---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

setValue
===========

@short:
	sets a value for a cell(s) 
    
@params:
- cells 	string					the id of a cell or a range of cells
- value		string,number,array		the value(s) to be set for a cell/cells


@example:
// setting value for one cell
spreadsheet.setValue("A1",5);
// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);
// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);
// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);

@template: api_method
@descr:
1\. The method allows setting the same/repeated value(s) for the specified cells. In case you want to add different values into spreadsheet cells, you'd better use the api/spreadsheet_parse.md method.

{{sample 01_init/01_basic.html}}

2\. Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
spreadsheet.setValue("sheet1!A1",5);
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will set the value(s) for the cell(s) of the active tab.

@relatedapi:
api/spreadsheet_getvalue.md
api/spreadsheet_parse.md

