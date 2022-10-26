---
sidebar_label: search()
title: search method
description: You can learn about the search method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# search()

### Description

@short: searches for cells by the specified parameters

The method can also open a search box in the top right corner of the spreadsheet and highlight the matched results

### Usage

~~~js
search( 
    text?: string,
    openSearch?: boolean, 
    sheetId?: string | number
): string[];
~~~

### Parameters

- `text` - (optional) the value to search
- `openSearch` - (optional) if `true`, opens a search box and highlights cells with the matched results; `false` by default
- `sheetId` - (optional) the ID of the sheet. By default, the method searches for cells on the currently active sheet

### Returns

The method returns an array with IDs of the found cells

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// return IDs of cells with the matched result, open a search field and highlight the cells
spreadsheet.search("feb", true, "Income"); // -> ['C1']
~~~

**Change log:** Added in v5.0

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#searching-for-data)
