AfterFormatChange
=====================

@short: fires after the format of a cell is changed
	
@params:
- cell		string		the id of a cell 
- format 	string		a new format applied for a cell


@example:
spreadsheet.events.on("afterFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" has changed");
});


@template:	api_event
@descr:


@relatedapi:
api/spreadsheet_beforeformatchange_event.md
api/spreadsheet_setformat.md
api/spreadsheet_getformat.md

@related:
number_formatting.md

@relatedsample:
05_events/01_events.html

