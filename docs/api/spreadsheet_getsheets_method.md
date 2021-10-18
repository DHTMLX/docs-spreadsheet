---
sidebar_label: getSheets()
title: getsheets method
description: You can learn about the getsheets method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
