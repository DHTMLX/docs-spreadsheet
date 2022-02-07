---
sidebar_label: getActiveSheet()
title: getactiveSheet method
description: You can learn about the getactiveSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getActiveSheet()

### Description

@short: Returns the sheet that is currently active

### Usage

~~~jsx
getActiveSheet(): object;
~~~

### Returns

The method returns an object with the name and id attributes of the active sheet

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// returns {name: "sheet", id: "u1614675531904"}
spreadsheet.getActiveSheet();
~~~

**Change log:** Added in v4.1
