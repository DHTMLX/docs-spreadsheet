---
sidebar_label: isLocked()
title: JavaScript Spreadsheet - isLocked Method
description: changetext
---

# isLocked()

@short: checks whether a cell(s) is(are) locked

@signature: isLocked: (cell: string) => boolean;

@params:
`cell: string` - the id of a cell

@returns:
*True*, if the cell is locked, *false* if it's unlocked.

@example:
// checks whether a cell is locked
var cellLocked = spreadsheet.isLocked("A1");

// checks whether several cells are locked
var rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");

@descr:

1\. If several cells are checked at once, the method will return *true*, if there is at least one locked cell among the specified cells.

2\. Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~js
var cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will check the cell(s) of the active tab.