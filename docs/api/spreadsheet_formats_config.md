---
sidebar_label: formats
title: formats config
description: You can learn about the formats config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# formats

### Description

@short: Optional. Defines the list of number formats  

### Usage

~~~jsx
formats?: array;
~~~

### Default config

The default number formats are the following:

~~~jsx
defaultFormats = [
	{ name: "Common", id: "common", mask: "", example: "1500.31" },
	{ name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
	{ name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
	{ name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
	{ name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" }
];
~~~

Each number format is an object that includes a set of properties:

- **id** - the id of a format that is used to set format to a cell via the [](api/spreadsheet_setformat_method.md) method
- **mask** - a mask for a number format
- **name** - the name of a format displayed in the toolbar and menu drop-down lists
- **example** - an example that shows how a formatted number looks like. The number 2702.31 is used as a default value for format examples

**Related articles:** [Number formatting](number_formatting.md)

### Example

~~~jsx {2-19}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
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
    ],
	// other config parameters
});
~~~

**Change log:**
- The "Date" format has been added in v4.2.
- The "Text" format has been added in v4.0.

**Related articles:** [Formats customization](number_formatting.md#formats-customization)
