---
sidebar_label: hideSearch()
title: hideSearch method
description: Hide the search bar of DHTMLX Spreadsheet with the hideSearch() method, for example, after a search opened with the search() method.
---

# hideSearch()

### Description

@short: Hides the search bar

### Usage

~~~jsx
hideSearch(): void;
~~~

### Example

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// opens a search bar and highlights the found cells
spreadsheet.search("min", true);

// hides the search bar
spreadsheet.hideSearch(); 
~~~

**Change log:** Added in v5.0

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#searching-for-data)
