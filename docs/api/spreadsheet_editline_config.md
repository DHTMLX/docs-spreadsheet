---
sidebar_label: editLine
title: editLine config
description: Show or hide the editing bar of DHTMLX Spreadsheet with the editLine property, which is turned on by default.
---

# editLine

### Description

@short: Optional. Shows/hides the editing bar

### Usage

~~~jsx
editLine?: boolean;
~~~

### Default config

~~~jsx
editLine: true
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    editLine: true,
    // other config parameters
});
~~~

**Related article:** [Configuration](configuration.md#editing-bar)

**Related sample:** [Spreadsheet. Disabled Line](https://snippet.dhtmlx.com/unem2jkh)
