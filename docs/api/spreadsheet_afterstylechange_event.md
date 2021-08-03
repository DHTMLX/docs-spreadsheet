AfterStyleChange
=====================

@short: 
	fires after the style of a cell is changed
    
@params:
- cells		string				the id(s) of a cell(s)
- style		object,array		styles set for a cell/cells


@example:
spreadsheet.events.on("afterStyleChange", function(cells,style){
 console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" is changed");
});


@template:api_event
@descr:



@relatedapi:
	api/spreadsheet_beforestylechange_event.md
