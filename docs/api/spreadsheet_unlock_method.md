---
sidebar_label: unlock()
title: unlock method
description: You can learn about the unlock method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# unlock()

@short: unlocks a locked cell(s)

@signature: {`unlock: (cell: string) => void;`}

@params:
`cell: string` - the id(s) of a cell(s) or a range of cells

@example:
// unlocks a cell
spreadsheet.unlock("A1");

// unlocks a range of cells
spreadsheet.unlock("A1:C1");

// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");

@descr:

Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~js
spreadsheet.unlock("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will unlock the cell(s) of the active tab.
