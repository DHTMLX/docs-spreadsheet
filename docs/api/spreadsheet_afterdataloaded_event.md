---
sidebar_label: afterDataLoaded
title: afterDataLoaded event
description: You can learn about the afterDataLoaded event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterDataLoaded

### Description

@short: Fires after data loading has been completed

### Usage

~~~jsx
afterDataLoaded: () => void;
~~~

### Example

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe to the "afterDataLoaded" event
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.message({
        text: "Data is successfully loaded into Spreadsheet!",
        css: "dhx_message--success",
        expire: 5000
    });
});
~~~

**Change log:** Added in v5.2

**Related articles:** [Event handling](/handling_events)

**Related sample:** [Spreadsheet. Data loaded event](https://snippet.dhtmlx.com/vxr7amz6)

