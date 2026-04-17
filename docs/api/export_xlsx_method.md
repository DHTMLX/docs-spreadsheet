---
sidebar_label: xlsx()
title: xlsx export method
description: You can learn about the xlsx export method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# xlsx()

### Description

@short: Exports data from a spreadsheet into an Excel (.xlsx) file

### Usage

~~~jsx
xlsx(name:string): void;
~~~

### Parameters

- `name` - (optional) the name of an exported .xlsx file

### Example

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into an Excel file
spreadsheet.export.xlsx();

// exports data from a spreadsheet into an Excel file with a custom name
spreadsheet.export.xlsx("MyData");
~~~

:::note 
Please note that the component supports export to Excel files with the **.xlsx** extension only.
:::

:::info
DHTMLX Spreadsheet uses the WebAssembly-based library [Json2Excel](https://github.com/dhtmlx/json2excel) for export of data to Excel. [Check the details](/loading_data/#exporting-data).
:::

**Related articles:** [Data loading and export](/loading_data)

**Related sample:** [Spreadsheet. Export Xlsx](https://snippet.dhtmlx.com/btyo3j8s)
