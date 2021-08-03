ValueChange
===========

@short: 
	fires when the value of a cell is changed
@params:
- cell 			string				the id of a cell
- value			string,number		the value of a cell		


@example:
spreadsheet.events.on("ValueChange", function(cell,value){
  console.log("The value of the cell " + spreadsheet.selection.get() +" is changed");
});


@template:	api_event
@descr:

@relatedapi:
	api/spreadsheet_beforevaluechange_event.md

