AfterSelectionSet
=====================

@short: 
	fires after cells are selected
    
@params:
- cells		string		the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterSelectionSet", function(cells){
 	console.log("The cells "+spreadsheet.selection.getSelectedCell()+" are selected");
});


@template:api_event
@descr:



@relatedapi:
	api/spreadsheet_beforeselectionset_event.md
