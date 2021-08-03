BeforeFormatChange
=====================

@short: fires before the format of a cell is changed
	
@params:
- cell		string		the id of a cell 
- format 	string		a new format applied for a cell

@returns:
- result		boolean		<i>true</i> to change the format, <i>false</i> to prevent changing of the format

@example:
spreadsheet.events.on("beforeFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" will change");
});


@template:	api_event
@descr:
The event is blockable. Return *false* to cancel changing of the format.


@relatedapi:
api/spreadsheet_afterformatchange_event.md
api/spreadsheet_setformat.md
api/spreadsheet_getformat.md
	
@related:
number_formatting.md

@relatedsample:
05_events/01_events.html
    
