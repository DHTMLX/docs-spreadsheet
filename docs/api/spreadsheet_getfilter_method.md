---
sidebar_label: getFilter()
title: getFilter method
description: Get the filtering criteria of a sheet in DHTMLX Spreadsheet with the getFilter() method, which returns the filtered range of cells and the filter rules.
---

# getFilter()

### Description

@short: Returns an object with criteria specified for data filtering

### Usage

~~~jsx   
getFilter(id?: string): {cell, rules};
~~~

### Parameters

- `id` - (optional) the id of a sheet. If not specified, the method is called for the current sheet

### Returns

The method returns an object with filtering criteria. The object includes two attributes:

- `cell` - a range of cells for which filtering is applied
- `rules` - an array of objects with rules for filtering

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// gets criteria of filtering for the current sheet
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**Change log:** Added in v5.0

**Related article:** [Filtering data](working_with_ssheet.md#filtering-data)