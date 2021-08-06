---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

getFormula
==============

@short:
	returns the formula of a cell
    
@params:
- cell		string	the id of a cell				

@returns:
- param     string  the formula of the cell

@example:
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"


@template: api_method
@descr:
The reference to a cell can be specified in the following format:

~~~js
var formula = spreadsheet.getFormula("sheet1!B2"); // -> "ABS(C2)"
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the formula of the cell from the active tab. 

@changelog: added in v4.1