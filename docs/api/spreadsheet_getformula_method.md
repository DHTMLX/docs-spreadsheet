---
sidebar_label: getFormula()
title: getformula method
description: You can learn about the getformula method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFormula()

@short: returns the formula of a cell

@signature: {`getFormula: (cell: string) => string | string[];`}

@params:
`cell: string` - the id of a cell

@returns:
The formula of the cell.

@example:
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"

@descr:

The reference to a cell can be specified in the following format:

~~~js
var formula = spreadsheet.getFormula("sheet1!B2"); // -> "ABS(C2)"
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the formula of the cell from the active tab.

@changelog: added in v4.1
