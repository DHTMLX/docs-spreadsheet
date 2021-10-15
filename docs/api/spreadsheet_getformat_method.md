---
sidebar_label: getFormat()
title: getformat method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the getformat method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFormat()

@short: returns the number format applied to the value of a cell

@signature: {`getFormat: (cell: string) => string | string[];`}

@params:
`cell: string` - the id(s) of a cell(s) or a range of cells

@returns:
The format(s) applied to the value of the cell(s).

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
