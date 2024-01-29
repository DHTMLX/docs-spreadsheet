---
sidebar_label: timeFormat
title: timeFormat config
description: You can learn about the dateFormat config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# timeFormat

### Description

@short: Optional. Defines the format of time in the spreadsheet

### Usage

~~~jsx
timeFormat?: number;  // 12 | 24
~~~

### Default config

~~~jsx
timeFormat: 12
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    timeFormat: 24,
    // other config parameters
});

spreadsheet.parse({
    styles: {
        // a set of styles
    },
    data: [
        { cell: "A1", value: "18:30", format: "time" },
        { cell: "A2", value: 44550.5625, format: "time" },
        { cell: "A3", value: new Date(), format: "time" },
       ]
});
~~~

**Change log:** Added in v4.3

**Related articles:** [Time format](number_formatting.md/#time-format)