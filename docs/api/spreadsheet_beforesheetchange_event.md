---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

BeforeSheetChange
=============

@short: fires before changing the currently active sheet
	
@params:
- sheet     object  the object of the currently active sheet   

@returns:
- param     boolean     true to change the active sheet, false to prevent the active sheet from being changed


@example:
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed" );
    return true;
});


@template:	api_event
@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the currently active sheet
- **id** - (*string*) the id of the sheet

The event is blockable, returning false will prevent changing of the active sheet.



@changelog: added in v4.1

