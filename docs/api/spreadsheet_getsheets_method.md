---
sidebar_label: getSheets()
title: getSheets method
description: You can learn about the getSheets method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getSheets()

### Description

@short: Gets all sheets of the spreadsheet

### Usage

~~~jsx
getSheets(): array;
~~~

### Returns

The method returns an array of sheets objects

:::info
Each sheet object includes the **name** and **id** attributes of the sheet.
:::

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// returns  [{name: "sheet1", id: "u1614669331194"}, …]
spreadsheet.getSheets();
~~~

**Change log:** Added in v4.1
