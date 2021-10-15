---
sidebar_label: getSelectedCell() 
title: getselectedcell selection method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the getselectedcell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getSelectedCell()

@short: returns the id(s) of selected cell(s)

@signature: {`getSelectedCell(): string;`}

@returns:
The id(s) or a range of selected cell(s).

@example:
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");

var selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"

@descr:

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#selecting-cells)
