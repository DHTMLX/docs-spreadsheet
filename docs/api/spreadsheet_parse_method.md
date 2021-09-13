---
sidebar_label: parse()
title: JavaScript Spreadsheet - parse Method
description: changetext
---

# parse()

@short: loads data into spreadsheet from a local data source

@signature:

@params:
`data: any` - the data to load

@example:

var data = [
	{ cell: "a1", value: "Country" },
	{ cell: "b1", value: "Product" },
	{ cell: "c1", value: "Price" },
	{ cell: "d1", value: "Amount" },
	{ cell: "e1", value: "Total Price" },

	{ cell: "a2", value: "Ecuador" },
	{ cell: "b2", value: "Banana" },
	{ cell: "c2", value: 6.68, css: "someclass" },
	{ cell: "d2", value: 430 },
	{ cell: "e2", value: 2872.4 }
    
    // more data
];

var styledData = {
	data: data,
	styles: {
		someclass: {
			background: "#F2F2F2",
			color: "#F57C00"
		}
	}
};

var spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(styledData);

@relatedsample:
**Related sample**: [Spreadsheet. Initialization](https://snippet.dhtmlx.com/ihtkdcoc)

**Related sample**: [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)

@descr:

Starting from v4.1, you can load several sheets into the spreadsheet by preparing data with the desired number of sheets and their configuration and pass them to the [parse](api/spreadsheet_parse_method.md) method as a parameter. The data should be an *object* with the following attributes:

- **styles** - (*object*) an object with CSS classes applied to particular cells
- **sheets** - (*array*) an array of sheet objects. Each object has the following properties:
    - **name** - (*string*) the sheet name
    - **id** - (*string*) the sheet id
    - **data** - (*array*) an array with data of the sheet

~~~js
var styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    sheets : [
        // create sheets with custom configurations (names and ids)
        { 
            name: "sheet 1", 
            id: "sheet_1", 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        },
        // create a sheet with the default configuration
        { 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        } 
    ]
};

spreadsheet.parse(styledData);
~~~

{{note In case the [multisheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.}}

**Related articles**

[Data loading and export](loading_data.md)
