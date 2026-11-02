---
sidebar_label: afterDataLoaded
title: afterDataLoaded event
description: Run code after data is loaded into DHTMLX Spreadsheet with the afterDataLoaded event, for example, to show a message when the loading is complete.
---

# afterDataLoaded

### Description

@short: Fires after data loading completes

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

**Related article:** [Event handling](handling_events.md)

**Related sample:** [Spreadsheet. Data loaded event](https://snippet.dhtmlx.com/vxr7amz6)

