---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

AfterSheetRemove
=============

@short: fires after a sheet is removed
	
@params:
- sheet     object  the object of a sheet


@example:
spreadsheet.events.on("afterSheetRemove", function(sheet) {
    console.log("The ", sheet.name, "sheet is removed");
});


@template:	api_event
@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the sheet
- **id** - (*string*) the id of the sheet


@changelog: added in v4.1

