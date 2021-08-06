---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

deleteRow
==============

@short:
	removes a row from the spreadsheet
@params:
- cell		string			the id of a cell that contains the id of a row that should be deleted


@example:
// removes the second row
spreadsheet.deleteRow("G2");

@template: api_method
@descr:
The method finds the specified cell, selects it, removes the row where the cell is located and moves the row below to its position.


@relatedapi:
api/spreadsheet_addrow.md

@related:
working_with_ssheet.md#addingremovingrowsandcolumns