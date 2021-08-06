---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

AfterSheetAdd
=============

@short: fires after a new sheet is added
	
@params:
- sheet     object  the object of a new sheet


@example:
spreadsheet.events.on("afterSheetAdd", function(sheet) {
    console.log("A new sheet is added:", sheet.name);
});


@template:	api_event
@descr:
The sheet object contains the following parameters:

- **name** - (*string*) the name of the new sheet
- **id** - (*string*) the id of the new sheet


@changelog: added in v4.1

