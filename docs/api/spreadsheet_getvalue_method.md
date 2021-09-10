---
sidebar_label: getValue()
title: JavaScript Spreadsheet - getValue Method
description: changetext
---

# getValue()

@short: returns the value(s) of a cell(s)

@signature:

@params:

`cells: string` - the id(s) of a cell(s) or a range of cells

@returns:
The values of cells.

@example:
// returning the value of one cell
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// returning the values of the range of cells
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// returning the values of different cells
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]

@descr:

Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
var cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the value(s) of the cell(s) from the active tab.
