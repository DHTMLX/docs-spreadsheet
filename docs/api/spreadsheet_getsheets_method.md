---
sidebar_label: getSheets()
title: JavaScript Spreadsheet - getSheets Method
description: changetext
---

# getSheets()

@short: gets all sheets of the spreadsheet

@signature: {`getSheets: () => ISheet[];`}

@returns:
The array of sheets objects.

@example:
spreadsheet.getSheets();
// ->  [{name: "sheet1", id: "u1614669331194"}, …]

@descr:

Each sheet object includes the **name** and **id** attributes of the sheet.

@changelog: added in v4.1
