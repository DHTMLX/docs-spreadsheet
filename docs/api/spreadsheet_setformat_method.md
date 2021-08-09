---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

setFormat
=============

@short: sets a specified format to the value of a cell

@params:

- cell		string			the id of a cell the value of which should be formatted
- format	string			the name of the number format to apply to a cell value

@example:

// applies the currency format to the cell A1
spreadsheet.setFormat("A1","currency");

@template: api_method
@descr:
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~js
spreadsheet.setFormat("sheet1!A2", "number"); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will set the format to the value of a cell of the active tab.

@relatedapi:
api/spreadsheet_getformat_method.md
api/spreadsheet_formats_config.md
api/spreadsheet_beforeformatchange_event.md
api/spreadsheet_afterformatchange_event.md

@related:
number_formatting.md


