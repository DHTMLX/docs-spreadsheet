---
sidebar_label: getFilter()
title: getFilter method
description: You can learn about the getFilter method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFilter()

### Description

@short: Returns an object with criteria specified for data filtering

### Usage

~~~js   
getFilter(id?: string): {cell, rules};
~~~

### Parameters

- `id` - (optional) the id of a sheet. If not specified, the method is called for the current sheet

### Returns

The method returns an object with filtering criteria. The object includes two attributes:

- `cell` - a range of cells for which filtering is applied
- `rules` - an array of objects with rules for filtering

### Example

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

// gets criteria of filtering for the current sheet
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**Change log:** Added in v5.0

**Related article:** [Filtering data](working_with_ssheet.md#filtering-data)