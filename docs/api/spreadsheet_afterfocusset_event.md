AfterFocusSet
=====================

@short: 
	fires after focus is set on a cell
    
@params:
- cell		string		the id of a cell

@example:
spreadsheet.events.on("afterFocusSet", function(cell){
 	console.log("Focus is set on a cell "+spreadsheet.selection.getSelectedCell());
});


@template:api_event
@descr:



@relatedapi:
	api/spreadsheet_beforefocusset_event.md

