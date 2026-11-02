---
sidebar_label: json()
title: json export method
description: Export the data of DHTMLX Spreadsheet into a JSON file with the export.json() method.
---

# json()

### Description

@short: Exports data from a spreadsheet into a JSON file

### Usage

~~~jsx
json(): void;
~~~

### Example

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Changelog:** Added in v4.3

**Related article:** [Data loading and export](loading_data.md)

**Related sample:** [Spreadsheet. Export/import JSON](https://snippet.dhtmlx.com/e3xct53l)
