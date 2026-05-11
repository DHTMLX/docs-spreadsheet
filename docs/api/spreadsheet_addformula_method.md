---
sidebar_label: addFormula()
title: addFormula method
description: You can learn about the addFormula method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# addFormula()

### Description

@short: Registers a custom formula function that can be used in cell formulas

Once registered, the formula is available in any cell by its uppercase name (e.g. =MYFUNC(A1, B2)).

### Usage

~~~jsx
addFormula(name: string, handler: (...args: any[]) => any): void;
~~~

### Parameters

- `name` - (*string*) required, the formula name (case-insensitive, stored as uppercase)
- `handler` - (*(...args: any[]) => any*) required, the function that computes the formula result. Receives the resolved cell values as arguments

:::note
The `handler` callback function must be synchronous. Using `Promise` or `fetch` inside the function is not allowed.
:::

### Example

~~~jsx {4-6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

// Adds a custom formula that doubles a value
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});

// Now use in cells: =DOUBLE(A1)
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

**Change log:** Added in v6.0

**Related sample:** [Spreadsheet. Custom formula](https://snippet.dhtmlx.com/wvxdlahp)

**Related articles:** [Formulas and functions](/functions/#custom-formulas)
