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
        // more objects
    ]
): void;
~~~

### Parameters

- `cell` - (optional) the id of a cell that contains the name of the necessary column (e.g., "A1", "sheet2!A1" )
- `rules` - (optional) an array of objects with rules for filtering. Each object can include the following parameters:
    - `condition` - (optional) an object with parameters for conditional filtering of a sheet:
        - `factor` - (required) a string value which defines a comparison expression for filtering. See the list of available values [below](#list-of-factors)
        - `value` - (required) the value(s) to be used for filtering by the specified factor
    - `exclude` - (optional) an array of data points which should be excluded from the sheet after filtering

```todo check
:::tip
Do not use the `condition` and `exclude` parameters together for text filtering.
:::
```

:::note
To reset filtering, call the method without parameters or pass only the `cell` parameter to the method.
:::

### Example

~~~jsx {6,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

// filter data by "condition" parameter
spreadsheet.setFilter("A2", [{ condition: { factor: "tc", value: "c" } }]);

// filter data by "exclude" parameter
spreadsheet.setFilter("A2", [{ exclude: ["Touch Projector"] }]);

// reset filtering
spreadsheet.setFilter("A2");
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