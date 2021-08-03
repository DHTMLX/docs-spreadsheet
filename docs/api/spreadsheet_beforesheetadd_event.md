BeforeSheetAdd
=============

@short: fires before a new sheet is added
	
@returns:
- param     boolean     true to add a sheet, false to prevent adding of a sheet


@example:
spreadsheet.events.on("beforeSheetAdd", function() {
    console.log("A new sheet will be added");
    return true;
});


@template:	api_event
@descr:
The event is blockable, returning false will prevent adding of a sheet.


@changelog: added in v4.1

