---
sidebar_label: json()
title: json export method
description: You can learn about the json export method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into a JSON file
spreadsheet.export.json();
~~~

**Changelog:** Added in v4.3

**Related articles:** [Data loading and export](loading_data.md)

**Related sample:** [Spreadsheet. Export/import JSON](https://snippet.dhtmlx.com/e3xct53l)
