---
sidebar_label: serialize()
title: serialize method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# serialize()

### Description

@short: Serializes the spreadsheet data into a JSON object

### Usage

~~~jsx
serialize(): {
    sheets: [
        {
            name: string,
            id: string,
            data: [
                {
                    cell: string,
                    value?: string | number,
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
            ],
            cols: [
                {
                    width: number,
                    hidden: boolean
                },
                // more column objects
            ],
            rows: [
                {
                    height: number,
                    hidden: boolean
                },
                // more row objects
            ],
            merged: [
                {
                    from: { column: number, row: number },
                    to: { column: number, row: number }
                },
                // more objects
            ],
            freeze: {
                col: number,
                row: number
            }
        },
        // more sheet objects
    ],
    styles: object,
    formats: array
};
~~~

### Returns

The method returns a serialized JSON object with the following attributes:

- `formats` - an array of objects with number formats
- `styles` - an object with the applied CSS classes, where a key is the name of a class and a value is an object with its style properties
- `sheets` - an array of sheet objects. Each object contains the following attributes:
    - `name` - the sheet name
    - `id` - the sheet id
    - `data` - an array of cell objects. Each object contains the `cell` attribute with the cell id and the attributes that were set for the cell: `value`, `css`, `format`, `editor`, `locked`, `link`
    - `cols` - an array of objects with columns configurations. Each object contains the `width` and `hidden` attributes
    - `rows` - an array of objects with rows configurations. Each object contains the `height` and `hidden` attributes
    - `merged` - an array of objects where each object defines a range of merged cells via the `from` and `to` attributes
    - `freeze` - an object with the number of fixed columns and rows, `{ col: 0, row: 0 }` if nothing is frozen

Note that:

- the `merged` and `freeze` attributes are always present in a sheet object, as well as the `hidden` attribute in a column or row object, which is `false` when the column or row is visible
- the `cols` and `rows` arrays cover the data range of a sheet and are extended further if a column width, a row height, or a `hidden` state was changed beyond that range. Thus custom sizes of empty columns and rows are kept as well
- a cell gets into the `data` array if it has a value, a CSS class, an editor, or the `locked` state. Thus locked empty cells are kept as well
- the returned object can be passed to the [](api/spreadsheet_parse_method.md) method as is

### Example

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const state = spreadsheet.serialize();
~~~

**Related article:** [Data loading and export](loading_data.md#saving-and-restoring-state)
