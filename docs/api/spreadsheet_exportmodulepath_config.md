---
sidebar_label: exportModulePath
title: exportModulePath config
description: You can learn about the exportModulePath config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# exportModulePath

### Description

@short: Optional. Sets the path to the export module

### Usage

~~~jsx
exportModulePath?: string;
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    exportModulePath: "../libs/json2excel/next/worker.js", // latest version; use x.x instead of next for a specific version
    // other config parameters
});
~~~

### Details

:::note 
DHTMLX Spreadsheet uses the WebAssembly-based library [JSON2Excel](https://github.com/dhtmlx/json2excel) for export of data into Excel.
:::

To export files you need to:

- install the **JSON2excel** library
- set the path to the **worker.js** file via the **exportModulePath** option in one of the two ways:
  - by providing a local path to the file on your computer:
    - use `"../libs/json2excel/next/worker.js"` for the latest version
    - use `"../libs/json2excel/x.x/worker.js"` for a specific version (replace `x.x` with the actual version from the [GitHub repository](https://github.com/dhtmlx/json2excel))
  - by providing a link to the file from CDN:
    - use `"https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx"` for the latest version
    - use `"https://cdn.dhtmlx.com/libs/json2excel/x.x/worker.js?vx"` for a specific version (replace `x.x` with the actual version from the [GitHub repository](https://github.com/dhtmlx/json2excel))

By default, `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx` is used.

**Related articles:** [Data loading and export](loading_data.md#exporting-data)

**Related sample:** [Spreadsheet. Custom Import Export Path](https://snippet.dhtmlx.com/wykwzfhm)