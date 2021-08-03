importModulePath
==================

@short: sets the path to the import module
	
@type: string
@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    importModulePath: "../libs/excel2json/1.0/worker.js"
});


@template:	api_config
@descr:

{{note dhtmlxSpreadSheet uses the WebAssembly-based library [Excel2json](https://github.com/DHTMLX/excel2json) for import of data from Excel.}} 

To import files you need to:

- install the **Excel2json** library
- set the path to the **worker.js** file via the **importModulePath** option in one of the two ways:
	- by providing a local path to the file on your computer, like: **"../libs/excel2json/1.0/worker.js"**
    - by providing a link to the file from CDN: **"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"**

By default the link to CDN is used.

@relatedapi:
api/spreadsheet_load.md
api/spreadsheet_exportmodulepath_config.md

@related:
loading_data.md#importexcel

@relatedsample:
02_usage/03_import_xlsx.html

