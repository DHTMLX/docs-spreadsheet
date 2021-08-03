BeforeColumnAdd
=============

@short: fires before a new column is added
	
@params:
- cells		string		the id(s) of a cell(s)

@returns:
- mode		boolean		true to add a column, false to prevent adding of a column

@example:
spreadsheet.events.on("beforeColumnAdd", function(cells){
	console.log("A new column will be added");
    return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent adding of a column.

@relatedapi:
api/spreadsheet_aftercolumnadd_event.md	
