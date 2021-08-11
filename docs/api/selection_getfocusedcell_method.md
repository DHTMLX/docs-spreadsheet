---
sidebar_label: getFocusedCell() 
title: JavaScript Spreadsheet - getFocusedCell Selection Method
description: changetext
---

# getFocusedCell()

@short: returns the id of a focused cell

@signature:

@params:

@returns:
`cell: string` - the id of a focused cell

@example:
// setting focus on a cell
spreadsheet.selection.setFocusedCell("D4");

// getting the focused cell
var focused = spreadsheet.selection.getFocusedCell(); // ->"D4"

@descr:

@relatedapi:
api/selection_setfocusedcell_method.md

@related:
working_with_ssheet.md#settingfocusonacell

@template: api_method