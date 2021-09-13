---
sidebar_label: setFormat()
title: JavaScript Spreadsheet - setFormat Method
description: changetext
---

# setFormat()

@short: sets a specified format to the value of a cell

@signature:

@params:

- `cell: string` - the id of a cell the value of which should be formatted
- `format: string` - the name of the number format to apply to a cell value

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
