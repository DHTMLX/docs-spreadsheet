---
sidebar_label: parse()
title: parse method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# parse()

@short: loads data into spreadsheet from a local data source

@signature: {`parse: (data: any) => void;`}

@params:
`data: any` - the data to load

@example:

const data = [
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

const styledData = {
	data: data,
	styles: {
		someclass: {
			background: "#F2F2F2",
			color: "#F57C00"
		}
	}
};

var spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);

@relatedsample:

**Related sample**: [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)

@descr:

### Details

Starting from v4.1, you can load several sheets into the spreadsheet by preparing data with the desired number of sheets and their configuration and pass them to the [parse](api/spreadsheet_parse_method.md) method as a parameter. 

{{note In case the [multisheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.}}

~~~js
const styledData = {
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
            rows: [
                { height: 50 }, // the height of the first row
                { height: 50 }, // the height of the second row
                // the height of the other rows is 32
            ],
            cols: [
                { width: 300 }, // the width of the first column
                { width: 300 }, // the width of the second column
                // the width of the other columns is 120
            ],
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

The data should be an *object* with the following attributes:

- **styles** - (*object*) an object with CSS classes applied to particular cells
- **sheets** - (*array*) an array of sheet objects. Each object has the following properties:
    - **name** - (*string*) the sheet name
    - **id** - (*string*) the sheet id
    - **rows** - (*array*) optional, an array of height objects. If not specified, the rows will have a height of 32px.
    - **cols** - (*array*) optional, an array of width objects. If not specified, the columns will have a width of 120px. 
    - **data** - (*array*) an array of objects with data of the sheet. Each object has the following properties:
        - **cell** - (*string*) the id of a cell that is formed as "id of the column + id of the row", e.g. A1
        - **value** - (string,number) the value of a cell
        - **css** - (*string*) optional, the name of the CSS class
        - **format** - (*string*) optional, the name of the [default number format](number_formatting.md/#default-number-formats) or of a [custom format](number_formatting.md#formats-customization) that you've added to apply to the cell value

**Related sample**: [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

@changelog:
The **rows** and **cols** properties of the sheet object have been added in v4.2

@descr:
#### Related articles

[Data loading and export](loading_data.md)