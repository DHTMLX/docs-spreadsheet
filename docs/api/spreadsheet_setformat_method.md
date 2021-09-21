---
sidebar_label: setFormat()
title: JavaScript Spreadsheet - setFormat Method
description: changetext
---

# setFormat()

@short: sets a specified format to the value of a cell

@signature: {`setFormat: (cell: string, format: string | string[]) => void;`}

@params:

- `cell: string` - the id(s) of a cell(s) or a range of cells
- `format: string | array` - the name(s) of the number format to apply to cells value

@example:

// applies the currency format to the cell A1
spreadsheet.setFormat("A1","currency");

@descr:

Starting with v4.1, the reference to a cell can be specified in the following format:

~~~js
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will set the format to the value of a cell of the active tab.

**Related articles**

[Number formatting](number_formatting.md)
