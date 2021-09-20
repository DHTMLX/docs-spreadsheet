---
sidebar_label: lock()
title: JavaScript Spreadsheet - lock Method
description: changetext
---

# lock()

@short: locks the specified cell

@signature: lock: (cell: string) => void;

@params:
`cell: string` - the id of a cell

@example:
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");

@relatedsample:
**Related sample**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)

@descr:
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~js
spreadsheet.lock("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will lock the cell(s) of the active tab.