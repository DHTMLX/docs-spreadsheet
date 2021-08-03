AfterColumnDelete
=============

@short: fires after a column is deleted
	
@params:
- cells		string		the id(s) of a cell(s)


@example:
spreadsheet.events.on("afterColumnDelete", function(cells){
	console.log("A new column is added");
});


@template:	api_event
@descr:



@relatedapi:
api/spreadsheet_beforecolumndelete_event.md	
