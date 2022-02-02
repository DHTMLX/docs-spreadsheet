---
sidebar_label: beforeClear
title: beforeClear event
description: You can learn about the beforeClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeClear

### Description

@short: fires before a spreadsheet is cleared

### Usage

~~~jsx
beforeClear: () => void | boolean;
~~~

### Returns

Return ***false*** to prevent clearing a spreadsheet; otherwise, ***true***.

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeClear" event
spreadsheet.events.on("beforeClear", function(){
	console.log("A spreadsheet will be cleared");
    return false;
});
~~~

**Changelog:** Added in v4.2
