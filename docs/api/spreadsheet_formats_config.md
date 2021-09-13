---
sidebar_label: formats
title: JavaScript Spreadsheet - formats Config
description: changetext
---

# formats

@short: defines the list of number formats  

@signature:

@type: array

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
    formats: [
    	{
    		name: "U.S. Dollar",
    		id: "currency",
    		mask: "$#,##0.00"
    	},
    	{
    		name: "Euro",
    		id: "euro",
    		mask: "[$€]#.##0,00",
    		example: "1000.50"
    	},
    	{
    		name: "Swiss franc",
    		id: "franc",
    		mask: "[$CHF ]#.##0,00"
    	}
    ]
});

@descr:

The default number formats are the following:

~~~js
defaultFormats = [
	{ name: "Common", id: "common", mask: "", example: "2702.31" },
	{ name: "Number", id: "number", mask: "#,##0.00", example: "2702.31" },
	{ name: "Percent", id: "percent", mask: "#,##0.00%", example: "27.0231%" },
	{ name: "Currency", id: "currency", mask: "$#,##0.00", example: "$2702.31" },
    { name: "Text", id: "text", mask: "abc", example: "'2702.31'" }
];
~~~

Each number format is an object that includes a set of properties:

- **id** - the id of a format that is used to set format to a cell via the [](api/spreadsheet_setformat_method.md) method
- **mask** - a mask for a number format
- **name** - the name of a format displayed in the toolbar and menu drop-down lists
- **example** - an example that shows how a formatted number looks like. The number 2702.31 is used as a default value for format examples

Read detailed information about number formatting in DHTMLX Spreadsheet in the article [Number formatting](number_formatting.md).

**Related articles**

[Number formatting](number_formatting.md#formats-customization)

@changelog: The "Text" format has been appeared in v4.0.
