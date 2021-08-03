AfterColumnAdd
=============

@short: fires after a new column is added
	
@params:
- cells		string		the id(s) of a cell(s)


@example:
spreadsheet.events.on("afterColumnAdd", function(cells){
	console.log("A new column is added");
});


@template:	api_event
@descr:



@relatedapi:
api/spreadsheet_beforecolumnadd_event.md

