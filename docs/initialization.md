---
sidebar_label: Initialization
title: Initialization
description: You can learn about the initialization of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Initialization

This guide will give you detailed instructions on how to create DHTMLX Spreadsheet on a page to enrich your application with features of a mighty worksheet. Follow the steps below to get a ready-to-use component:

1. [Include the DHTMLX Spreadsheet source files on a page](#including-source-files).
2. [Create a container for DHTMLX Spreadsheet](#creating-container).
3. [Initialize DHTMLX Spreadsheet with the object constructor](#initializing-dhtmlx-spreadsheet).

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Including source files

[Download the package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

To create DHTMLX Spreadsheet, you need to include 2 source files on your page:

- spreadsheet.js
- spreadsheet.css

Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

The structure of the Spreadsheet pack is the following:

- **sources** - the source code files of the library; they are easy-to-read and are mostly intended for debugging;
- **codebase** - the obfuscated code files of the library; they are much smaller and intended for use in production. **Include these files in your apps when they are ready**;
- **samples** - the code samples;
- **docs** - the full documentation of the component.

## Creating container

Add a container for Spreadsheet and give it an id, for example "spreadsheet":

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## Initializing DHTMLX Spreadsheet

Initialize DHTMLX Spreadsheet with the `dhx.Spreadsheet` object constructor. The constructor has two parameters:

- the HTML container for Spreadsheet,
- an object with configuration properties. [See the full list below](#configuration-properties).

~~~jsx title="index.js"
// creating DHTMLX Spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config options
});
~~~

### Configuration properties

See the full list of [properties](api/api_overview.md/#spreadsheet-properties) that you can specify in the Spreadsheet configuration object in the [Spreadsheet API overview](api/api_overview.md/#spreadsheet-properties) article.

You can set configuration options during initialization as the second parameter of the constructor:

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
