startEdit
=============

@short:
	starts editing in the selected cell

@params:
* cell		string		 optional, the id of a cell
* value		string		 optional, the cell value


@example:
spreadsheet.startEdit();

@template: api_method
@descr:
If the id of a cell isn't passed, editing will start in the currently selected cell.

@relatedapi:
api/spreadsheet_endedit.md

@related:
working_with_ssheet.md#editingcell