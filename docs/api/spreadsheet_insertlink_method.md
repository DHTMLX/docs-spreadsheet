---
sidebar_label: insertLink()
title: insertLink method
description: You can learn about the insertLink method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# insertLink()

### Description

@short: inserts/removes a hyperlink in a cell

### Usage

~~~js
insertLink( 
    cell: string,
    link? : {
        text?: string, 
        href: string
    }
): void;
~~~

### Parameters

- `cell` - (required) the id of a cell
- `link` - (optional) an object with configuration of a link:
    - `text` - (optional) a text you want to display for a hyperlink
    - `href` - (required) the URL of the page the hyperlink leads to

:::info
To remove a hyperlink but keep the text, call the method without the `link` parameter.
:::

### Example

~~~jsx {6-8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

// insert a link in "A2" cell
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});

// remove a link from "A2" cell
spreadsheet.insertLink("A2");
~~~

**Change log:** Added in v5.0

**Related article:** [Work with Spreadsheet](working_with_cells.md#inserting-a-hyperlink-into-a-cell)
