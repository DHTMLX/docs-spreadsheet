---
sidebar_label: parse()
title: parse method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# parse()

### Description

@short: Loads data into spreadsheet from a local data source

### Usage

~~~jsx title="Load data into one sheet"
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        },
        locked?: boolean,
        link?: {
            text?: string,
            href: string
        }
    },
    // more cell objects
]): void;
~~~

~~~jsx title="Load data into several sheets"
parse({
    sheets: [
        {
            name?: string,
            id?: string,
            cols?: [
                {
                    width?: number,
                    hidden?: boolean,
                },
                // more column objects
            ],
            rows?: [
                {
                    height?: number,
                    hidden?: boolean,
                },
                // more row objects
            ],
            data: [
                {
                    cell: string,
                    value: string | number | Date,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // more cell objects
            ],
            merged?: [
                { 
                    from: { column: index, row: index }, 
                    to: { column: index, row: index }
                },
                // more objects
            ],
            freeze?: {
               col?: number,
               row?: number,
            }
        },
        // more sheet objects
    ]      
}): void;
~~~

### Parameters

If you need to create a data set *for one sheet* only, specify data as an **array of cell objects**. For each **cell** object you can specify the following parameters:

- `cell` - (required) the id of a cell that is formed as "id of the column + id of the row", e.g. A1
- `value` - (required) the value of a cell
- `css` - (optional) the name of the CSS class
- `format` - (optional) the name of the [default number format](/number_formatting/#default-number-formats) or of a [custom format](/number_formatting/#formats-customization) that you've added to apply to the cell value
- `editor` - (optional) an object with configuration settings for the editor of a cell:
    - `type` - (required) the type of the cell editor: "select"
    - `options` - (required) either a range of cells ("A1:B8") or an array of string values
- `locked` - (optional) defines whether a cell is locked, *false* by default
- `link` - (optional) an object with configuration settings for the link added into a cell:
    - `text` - (optional) the text of a link
    - `href` - (required) the URL that defines the link destination

<br>

If you need to create a data set *for several sheets* at once, specify data as an **object** with the following parameter:

- `sheets` - (required) an array of **sheet** objects. Each object has the following properties:
    - `name` - (optional) the sheet name
    - `id` - (optional) the sheet id
    - `rows` - (optional) an array of objects with rows configurations. Each object may contain the following properties:
        - `height` - (optional) the row height. If not specified, rows will have the height of 32px
        - `hidden` - (optional) defines the visibility of a row
    - `cols` - (optional) an array of objects with columns configurations. Each object may contain the following properties:
        - `width` - (optional) the column width. If not specified, columns will have the width of 120px
        - `hidden` - (optional) defines the visibility of a column
    - `data` - (required) an array of **cell** objects. Each object has the following properties:
        - `cell` - (required) the id of a cell that is formed as "id of the column + id of the row", e.g. A1
        - `value` - (required) the value of a cell
        - `css` - (optional) the name of the CSS class
        - `format` - (optional) the name of the [default number format](/number_formatting/#default-number-formats) or of a [custom format](/number_formatting/#formats-customization) that you've added to apply to the cell value
        - `editor` - (optional) an object with configuration settings for the editor of a cell:
            - `type` - (required) the type of the cell editor: "select"
            - `options` - (required) either a range of cells ("A1:B8") or an array of string values
        - `locked` - (optional) defines whether a cell is locked, *false* by default
        - `link` - (optional) an object with configuration settings for the link added into a cell:
            - `text` - (optional) the text of a link
            - `href` - (required) the URL that defines the link destination
    - `merged` - (optional) an array of objects where each object defines a range of cells which need to be merged. Each object must include the following properties:
        - `from` - an object which defines the position of the first cell from a range:
            - `column` - the index of the column
            - `row` - the index of the row
        - `to` - an object which defines the position of the last cell from a range:
            - `column` - the index of the column
            - `row` - the index of the row
    - `freeze` - (optional) an object that sets and adjusts fixed columns/rows for particular sheets. It may contain the following properties:
        - `col` - (optional) specifies the number of fixed columns (e.g. 2), *0* by default
        - `row` - (optional) specifies the number of fixed rows, (e.g. 2), *0* by default

:::info
In case the [`multisheets`](../../api/spreadsheet_multisheets_config) configuration option is set to *false*, only one sheet will be created.
:::

### Example

~~~jsx {22} title="Example 1. Load data into one sheet"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, css: "someclass" },
    { cell: "D2", value: 430 },
    { cell: "E2", value: 2872.4 },
    
    // add drop-down lists to cells
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // more data
];

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);
~~~

~~~jsx title="Example 2. Load data into several sheets"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            rows: [
                { height: 50, hidden: true }, // config of the first row
                { height: 50 }, // config of the second row
                // the height of other rows is 32
            ],
            cols: [
                { width: 300 }, // config of the first column
                { width: 300, hidden: true }, // config of the second column
                // the width of other columns is 120
            ],
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            merged: [
                // merge cells A1 and B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // merge cells A2, A3, A4, and A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } }
            ],
            freeze: {
                col: 2,
                row: 2
            },
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
            ]
        }
    ]
};

spreadsheet.parse(data);
~~~

## Parsing styled data

You may also add specific styles for cells while preparing a data set. For that, you need to define data as an object which will include two parameters:

- `styles` - (required) an object with CSS classes to be applied to particular cells. [Check the details below](#list-of-properties)
- `data` - (required) the data to load

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "a1", value: "Country" },
        { cell: "b1", value: "Product" },
        { cell: "c1", value: "Price" },
        { cell: "d1", value: "Amount" },
        { cell: "e1", value: "Total Price" },

        { cell: "a2", value: "Ecuador" },
        { cell: "b2", value: "Banana" },
        { cell: "c2", value: 6.68, css: "someclass" },
        { cell: "d2", value: 430, css: "someclass" },
        { cell: "e2", value: 2872.4 }
    ],
};

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

:::info
A CSS class is set for a cell via the **css** property.
:::

### List of properties

The list of properties you can specify in the **styles** object:

- *background*
- *color*
- *textAlign*
- *verticalAlign*
- *textDecoration*
- *fontWeight*
- *fontStyle*
- *multiline: "wrap"* (from v5.0.3)
- *border*, *border-right*, *border-left*, *border-top*, *border-bottom* (from v5.2)

:::note
You may also use the following properties if needed:

- *fontSize*
- *font*
- *fontFamily*
- *textShadow*

but in some cases they may not work in the way you expect (for example, when applying *position:absolute*, *display: box*, etc. )
:::

**Change log:**

- The **freeze** property and the **hidden** parameter for the **rows** and **cols** properties of the **sheets** object were added in v5.2
- The **locked** and **link** properties of the **cell** object were added in v5.1
- The **merged** property of the **sheets** object was added in v5.0
- The **editor** property of the **cell** object was added in v4.3
- The **rows** and **cols** properties of the **sheets** object were added in v4.2
- The ability to prepare data for several sheets was added in v4.1

**Related articles:** [Data loading and export](/loading_data)

**Related samples**:

- [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)
- [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)
- [Spreadsheet. Initialization with merged cells](https://snippet.dhtmlx.com/0vtukep9)
