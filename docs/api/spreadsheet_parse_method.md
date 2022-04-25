---
sidebar_label: parse()
title: parse method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# parse()

### Description

@short: Loads data into spreadsheet from a local data source

### Usage

~~~jsx
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        }
    },
    // more cell objects
]): void;

// or
parse({
    styles: object,
    sheets: [
        {
            name: string,
            id: string,
            rows?: array,
            cols?: array,
            data: [
                {
                    cell: string,
                    value: string | number,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    }
                },
                // more cell objects
            ]
        },
        // more sheet objects
    ]      
}): void;
~~~

### Parameters

:::info Info 1
Specify **data** as an **array** of objects if you need to create a data set for one sheet only
:::

For each object you can specify the following parameters:

- `cell` - (mandatory) the id of a cell that is formed as "id of the column + id of the row", e.g. A1
- `value` - (mandatory) the value of a cell
- `css` - (optional) the name of the CSS class
- `format` - (optional) the name of the [default number format](number_formatting.md/#default-number-formats) or of a [custom format](number_formatting.md#formats-customization) that you've added to apply to the cell value
- `editor` - (optional) an object with configuration settings for the editor of a cell:
    - `type` - (mandatory) the type of the cell editor: "select"
    - `options` - (mandatory) either a range of cells ("A1:B8") or an array of string values

<br>

:::info Info 2
*Starting from v4.1*, you can specify **data** as an **object** if you need to create a data set for several sheets at once 
:::

The **data** object takes the following parameters:

- `styles` - (mandatory) an object with CSS classes applied to particular cells
- `sheets` - (mandatory) an array of sheet objects. Each object has the following properties:
    - `name` - (mandatory) the sheet name
    - `id` - (mandatory) the sheet id
    - `rows` - (optional) an array of height objects. If not specified, the rows will have a height of 32px.
    - `cols` - (optional) an array of width objects. If not specified, the columns will have a width of 120px. 
    - `data` - (mandatory) an array of objects with data of the sheet. Each object has the following properties:
        - `cell` - (mandatory) the id of a cell that is formed as "id of the column + id of the row", e.g. A1
        - `value` - (mandatory) the value of a cell
        - `css` - (optional) the name of the CSS class
        - `format` - (optional) the name of the [default number format](number_formatting.md/#default-number-formats) or of a [custom format](number_formatting.md#formats-customization) that you've added to apply to the cell value
        - `editor` - (optional) an object with configuration settings for the editor of a cell:
            - `type` - (mandatory) the type of the cell editor: "select"
            - `options` - (mandatory) either a range of cells ("A1:B8") or an array of string values

:::note 
In case the [multisheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.
:::

### Example

Prepare a data set for one sheet only:

~~~jsx {32}
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
	{ cell: "e2", value: 2872.4 },
    
    // add drop-down lists to cells
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey", "India", "USA", "Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

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

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

**Related sample**: [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)

Or prepare a data set for several sheets at once:

~~~js {46}
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

**Change log:**

- The **editor** property of the **data** array was added in v4.3
- The **rows** and **cols** properties of the sheet object were added in v4.2

**Related articles:** [Data loading and export](loading_data.md)

**Related sample**: [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

