---
sidebar_label: setValidation()
title: setValidation method
description: Add a drop-down list of values to cells in DHTMLX Spreadsheet with the setValidation() method, taking the options from a range of cells or an array, or remove the validation.
---

# setValidation()

### Description

@short: Sets validation for cells by adding drop-down lists to the cells

The method can also remove data validation from a cell(s).

### Usage

~~~jsx
setValidation(
    cell: string,
    options: string | string[]
): void;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells
- `options` - (required) either a string with a range of cells ("C1:C3") or an array of string values

### Example

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});

spreadsheet.parse(dataset);

// sets validation and creates a drop-down list with 3 items to choose for B10 cell
spreadsheet.setValidation("B10", ["Apple", "Mango", "Avocado"]);
~~~

### Details

If you need to remove validation from a cell(s), instead of the list of options, pass `null`, `0`, `false`, or `undefined` as the second parameter to the method:

~~~jsx
spreadsheet.setValidation("B15");

//or
spreadsheet.setValidation("B15", null);

//or
spreadsheet.setValidation("B15", false);
~~~

**Change log:** Added in v4.3

**Related article:** [Validating cells](working_with_cells.md#validating-cells)

