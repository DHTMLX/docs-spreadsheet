---
sidebar_label: fitColumn()
title: fitColumn method
description: You can learn about the fitColumn method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# fitColumn()

### Description

@short: adjusts the width of the column to match the longest value in the column


### Usage

~~~jsx
fitColumn(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the name of the necessary column

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// adjusts the width of the "G" column
spreadsheet.fitColumn("G2");
~~~

**Change log:** Added in v5.0

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md#autofit-column-width)
