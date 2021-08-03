getFocusedCell
==============

@short:
	returns the id of a focused cell
    
@params:

@returns:
- cell		string		the id of a focused cell

@example:
// setting focus on a cell
spreadsheet.selection.setFocusedCell("D4");

// getting the focused cell 
var focused = spreadsheet.selection.getFocusedCell(); // ->"D4"

@template: api_method
@descr:
 



@relatedapi:
api/selection/setfocusedcell.md

@related:
working_with_ssheet.md#settingfocusonacell