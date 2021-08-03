deleteColumn
==============

@short:
	removes a column from the spreadsheet
    
@params:
- cell		string			the id of a cell that contains the name of the column that should be deleted


@example:
// removes the "G" column
spreadsheet.deleteColumn("G2");

@template: api_method
@descr:
The method finds the specified cell, selects it, removes the column where the cell is located and moves the column on the left to its position.


@relatedapi:
api/spreadsheet_addcolumn.md

@related:
working_with_ssheet.md#addingremovingrowsandcolumns