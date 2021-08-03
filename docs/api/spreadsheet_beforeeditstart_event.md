BeforeEditStart
=====================

@short: 
	fires before editing of a cell has started
    
@params:

@returns:
- mode		boolean		true to edit a cell, false to prevent editing

@example:
spreadsheet.events.on("beforeEditStart", function(){
 	console.log("Editing is about to start");
    return true;
});


@template:api_event
@descr:
The event is blockable, returning false will prevent editing of a cell.


@relatedapi:
	api/spreadsheet_aftereditstart_event.md

