---
sidebar_label: setFilter()
title: setFilter method
description: You can learn about the setFilter method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setFilter()

### Description

@short: Filters data in the spreadsheet by the specified criteria

### Usage

~~~js   
setFilter( 
    cell?: string,
    rules?:  [
        {
            condition?: {
                factor: "string", 
                value: date | number |string | [number, number]
            },
            exclude?: any[]
        },
        // more rule objects
    ]
): void;
~~~

### Parameters

- `cell` - (optional) the id of a cell (or a range of cells) that contains the id of a column the values of which will be filtered (e.g., "A1", "A1:C10", "sheet2!A1" )
- `rules` - (optional) an array of objects with rules for filtering. Each object can include the following parameters:
    - `condition` - (optional) an object with parameters for conditional filtering of a sheet:
        - `factor` - (required) a string value which defines a comparison expression for filtering. See the list of available values [below](#list-of-factors)
        - `value` - (required) the value(s) to be used for filtering by the specified factor
    - `exclude` - (optional) an array of data points which must be excluded from the sheet

:::note
To reset filtering, call the method without parameters or pass only the `cell` parameter to the method.
:::

### Example

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// filter data by condition specified for column A
spreadsheet.setFilter("A2", [{condition: {factor: "te", value:"r" }}]);

// filter data by criteria specified for column A of Date sheet
spreadsheet.setFilter("Date!A1", [{condition: {factor: "db", value:"18/10/2022" }, exclude: ["25/06/2022"]}]);

// filter data by condition specified for column C
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}}]);

// filter data by conditions specified for columns A and C
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);


// reset filtering
spreadsheet.setFilter();
~~~

### List of factors

| Factor | Meaning               |
| ------ | --------------------- |
| "e"    | empty                 |
| "ne"   | not empty             |
| "tc"   | text contains         |
| "tdc"  | text doesn't contain  |
| "ts"   | text starts with      |
| "te"   | text ends with        |
| "tex"  | text exactly          |
| "d"    | date is               |
| "db"   | date before           |
| "da"   | date after            |
| "gt"   | greater than          |
| "geq"  | greater than or equal |
| "lt"   | less than             |
| "leq"  | less than or equal    |
| "eq"   | equal                 |
| "neq"  | not equal             |
| "ib"   | is between            |
| "inb"  | is not between        |

**Change log:** Added in v5.0

**Related article:** [Filtering data](working_with_ssheet.md#filtering-data)