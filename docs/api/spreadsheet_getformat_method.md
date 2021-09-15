---
sidebar_label: getFormat()
title: JavaScript Spreadsheet - getFormat Method
description: changetext
---

# getFormat()

@short: returns the number format applied to the value of a cell

@signature: getFormat: (cell: string) => string | string[];

@params:
`cell: string` - the id of a cell

@returns:
The format applied to the value of a cell.

@example:
var format = spreadsheet.getFormat("A1");
// ->"currency"

@relatedsample:
**Related sample**: [Spreadsheet. Initialization](https://snippet.dhtmlx.com/ihtkdcoc)

@descr:
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~js
var cellFormat = spreadsheet.getFormat("sheet1!A2"); //-> "number"
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the format applied to the value of a cell from the tab that is currently active.

**Related articles**

[Number formatting](number_formatting.md)
