---
sidebar_label: hideSearch()
title: hideSearch method
description: You can learn about the hideSearch method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# hideSearch()

### Description

@short: hides the search bar

### Usage

~~~js
hideSearch(): void;
~~~

### Example

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// opens a search bar and highlights the found cells
spreadsheet.search("min", true);

// hides the search bar
spreadsheet.hideSearch(); 
~~~

**Change log:** Added in v5.0

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#searching-for-data)
