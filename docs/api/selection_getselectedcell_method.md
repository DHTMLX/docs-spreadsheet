---
sidebar_label: getSelectedCell() 
title: JavaScript Spreadsheet - getSelectedCell Selection Method
description: changetext
---

# getSelectedCell()

@short: returns the id(s) of selected cell(s)

@signature:

@params:

@returns:
`cells: string` - the id(s) or a range of selected cell(s)

@example:
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");

var selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"

@descr:

@relatedapi:
api/selection_setselectedcell_method.md

@related:
working_with_ssheet.md#selectingcells

@template: api_method