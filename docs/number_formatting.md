---
sidebar_label: Number Formatting
title: JavaScript Spreadsheet - Number Formatting
description: changetext
---

# Number Formatting


DHTMLX SpreadSheet supports number formatting that you can apply for numeric values in cells. 

<img style="margin: 20px auto 20px auto; display: block;" src="number_format_options.png">

{{note There is a [User Guide](number_formatting_guide.md) provided to make work with SpreadSheet easy for your end users.}}

## Default number formats

A number format is an object that includes a set of properties:

- **id** - the id of a format that is used to set format to a cell via the api/spreadsheet_setformat.md method
- **mask** - a mask for a number format. Check the list of characters available in a mask [below](#structure)
- **name** - the name of a format displayed in the toolbar and menu drop-down lists
- **example** - an example that shows how a formatted number looks like. The number 2702.31 is used as a default value for format examples

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

This is how a spreadsheet with data in various number formats looks like:
```
![Number format](number_format.png)
```

{{sample 01_init/01_basic.html}}

## Formats customization

You are not limited by [default number formats](#defaultnumberformats) only. There are two options of formats customization available:

- changing the settings of default number formats
- adding custom number formats into spreadsheet
```
![Custom number formats](custom_number_formats.png)
```
All such modifications can be implemented via the api/spreadsheet_formats_config.md configuration option. It represents an array of format objects each of which contains a set of properties: 

- **id** - (*string*) mandatory, the id of a format that is used to set format to a cell via the api/spreadsheet_setformat.md method
- **mask** - (*string*) mandatory, a mask for a number format. Check the list of characters available in a mask [below](#structure)
- **name** - (*string*) optional, the name of a format that will be displayed in the toolbar and menu drop-down lists
- **example** - (*string*) optional, an example that shows how a formatted number will look like

For example:

~~~js
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
~~~

{{sample 03_configuration/06_custom_formats.html}}

### The structure of a mask {#structure}

A mask may contain a set of common syntax characters that include digit placeholders, separators, percent and currency signs:

- **0** - a digit in the number. Used to display insignificant zeros, if a number has fewer digits than there are zeros in the format. For example, to display 2 as 2.0, use the format 0.0.
- **#** - a digit in the number. Used to display only significant numbers (insignificant zeros will be ommitted, if a number has fewer digits than there are # symbols in the format).
- **$** - formats numbers as a dollar value. To use a different currency sign, you need to define it in a mask as **[$ your_currency_sign]**#,##0.00 ,e.g. [$ €]#,##0.00.
{{note Note that all characters between [$ and ] will be interpreted as a currency sign.}}
- **.(period)**	- applies a decimal point to numbers.
- **,(comma)** - applies a thousands separator to numbers.


## Setting format

In order to apply the necessary format to a numeric value, make use of the api/spreadsheet_setformat.md method. It takes two parameters:

- **cell** - (*string*) the id of a cell the value of which should be formatted
- **format** - (*string*) the name of the [default number format](#defaultnumberformats) to apply to the cell value

For example:

~~~js
// applies the currency format to the cell A1
spreadsheet.setFormat("A1","percent");
~~~


## Getting format

You can get the number format applied to the value of a cell with the help of the api/spreadsheet_getformat.md method. The method takes the id of a cell as a parameter. 

~~~js
var format = spreadsheet.getFormat("A1"); 
// ->"percent"
~~~

## Events

There is a pair of events you can use to control the process of cell's format changing. They are:

- api/spreadsheet_beforeformatchange_event.md - fires before the format of a cell is changed
- api/spreadsheet_afterformatchange_event.md - fires after the format of a cell is changed


