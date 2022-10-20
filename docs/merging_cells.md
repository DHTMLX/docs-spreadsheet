---
sidebar_label: Merging cells
title: Merging cells
description: You can learn about merging cells in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Merging cells

## Merging cells

You can merge two or more cells into one by passing a range of cells you want to merge to the [mergeCells()](api/spreadsheet_mergecells_method.md) method:

~~~js
//merge cells A6, A7, and A8
spreadsheet.mergeCells("A6:A8");

//merge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2");
~~~

## Splitting cells

You may also split the merged cells via the [mergeCells()](api/spreadsheet_mergecells_method.md) method. In addition to the range of cells, pass `true` as a value of the second parameter which will define that the specified cells must be unmerged:

~~~js
//unmerge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2", true);
~~~


