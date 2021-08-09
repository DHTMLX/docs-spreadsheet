---
sidebar_label: addRow()
title: JavaScript Spreadsheet - addRow Method
description: changetext
---

# addRow()

@short: adds a new row into the spreadsheet

@params:
- cell		string			the id of a cell that contains the id of a row that should be added


@example:
// adds an empty second row
spreadsheet.addRow("G2");

@template: api_method
@descr:
The method finds the specified cell, selects it, moves the row where the cell is located one cell below and adds an empty row instead.


@relatedapi:
api/spreadsheet_deleterow_method.md

@related:
working_with_ssheet.md#addingremovingrowsandcolumns