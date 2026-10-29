---
sidebar_label: fitColumn()
title: fitColumn method
description: Adjust the width of a column to its longest value in DHTMLX Spreadsheet with the fitColumn() method.
---

# fitColumn()

### Description

@short: Adjusts the width of the column to match its longest value


### Usage

~~~jsx
fitColumn(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the name of the necessary column

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// adjusts the width of the "G" column
spreadsheet.fitColumn("G2");
~~~

**Change log:** Added in v5.0

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#autofit-column-width)
