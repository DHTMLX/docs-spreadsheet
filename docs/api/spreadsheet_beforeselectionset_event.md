BeforeSelectionSet
=====================

@short: 
	fires before cells are selected
    
@params:
- cells		string		the id(s) of a cell(s)

@returns:
- mode		boolean		true to select cells, false to prevent selection of cells

@example:
spreadsheet.events.on("beforeSelectionSet", function(cells){
 	console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    return true;
});


@template:api_event
@descr:
The event is blockable, returning false will prevent selection of cells.


@relatedapi:
	api/spreadsheet_afterselectionset_event.md
