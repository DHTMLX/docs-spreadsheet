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
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx", // a local path to the `worker.js` file of the export module
    // other config parameters
});
~~~

### Details

:::note 
DHTMLX Spreadsheet uses the WebAssembly-based library [JSON2Excel](https://github.com/dhtmlx/json2excel) for export of data into Excel.
:::

To export files you need to set the path to the **worker.js** file of the [Json2Excel](https://github.com/dhtmlx/json2excel) library (where export will be processed)  via the **exportModulePath** option. By default, `https://cdn.dhtmlx.com/libs/json2excel/1.5/worker.js?vx` is used.
- if you use the public export server, you don't need to specify the link to it, since it is used by default
- if you use your own export server, you need to:
  - install the [**Json2Excel**](https://github.com/dhtmlx/json2excel) library
  - use `"../libs/json2excel/x.x/worker.js?vx"` for a specific version (replace `x.x` with the version deployed on your server)


**Related articles:** [Data loading and export](loading_data.md#exporting-data)

**Related sample:** [Spreadsheet. Custom Import Export Path](https://snippet.dhtmlx.com/wykwzfhm)