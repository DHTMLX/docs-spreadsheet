getSelectedCell
==============

@short:
	returns the id(s) of selected cell(s)
    
@params:

@returns:
- cells		string		the id(s) or a range of selected cell(s) 

@example:
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");

var selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"

@template: api_method
@descr:
 

@relatedapi:
api/selection/setselectedcell.md

@related:
working_with_ssheet.md#selectingcells