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
Note that the component supports export to Excel files with the `.xlsx` extension only.
:::

Besides cell values, an exported file keeps the cell styles, the number formats, the merged cells, the frozen columns and rows, the links, the drop-down editors, and the locked state of cells. All of them are restored on [import of the file back into Spreadsheet](loading_data.md#loading-excel-file-xlsx).

:::info
DHTMLX Spreadsheet uses the WebAssembly-based library [Json2Excel](https://github.com/dhtmlx/json2excel) to export data to Excel. [Check the details](loading_data.md#exporting-data).
:::

**Related article:** [Data loading and export](loading_data.md)

**Related sample:** [Spreadsheet. Export Xlsx](https://snippet.dhtmlx.com/btyo3j8s)
