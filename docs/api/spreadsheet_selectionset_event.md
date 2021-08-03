SelectionSet
=================

@short: 
	fires when a cell is selected
@params:
- cell		string		the id of a selected cell


@example:
spreadsheet.events.on("SelectionSet", function(cell){
	console.log("The cell "+spreadsheet.selection.get()+" is selected");
});


@template:	api_event
@descr:


@relatedapi:
api/spreadsheet_selectionchange_event.md

