AfterValueChange
===================

@short: 
	fires after the value of a cell changes
@params:
- cells		string					the id(s) of a cell(s)
- value		string,number,array		the value(s) of a cell(s)


@example:
spreadsheet.events.on("afterValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
});


@template:	api_event
@descr:


@relatedapi:
	api/spreadsheet_beforevaluechange_event.md