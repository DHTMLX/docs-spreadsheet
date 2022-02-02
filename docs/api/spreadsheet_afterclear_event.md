---
sidebar_label: afterClear
title: afterClear event
description: You can learn about the afterClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterClear

### Description

@short: fires after a spreadsheet is cleared

### Usage

~~~jsx
afterClear: () => void;
~~~

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterClear" event
spreadsheet.events.on("afterClear", function(){
	console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Changelog:** Added in v4.2
