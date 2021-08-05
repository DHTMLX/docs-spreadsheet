BeforeSheetRename
=============

@short: fires before a sheet is renamed
	
@params:
- sheet     object  the object of a sheet
- newVal    string  the new name of the sheet    

@returns:
- param     boolean     true to rename a sheet, false to prevent a sheet from being renamed


@example:
spreadsheet.events.on("beforeSheetRename", function(sheet, newVal) {
    console.log("The ", sheet.name, "sheet will be renamed to ", newVal);
    return true;
});


@template:	api_event
@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the old name of the sheet
- **id** - (*string*) the id of the sheet

The event is blockable, returning false will prevent the sheet from being renamed.



@changelog: added in v4.1
