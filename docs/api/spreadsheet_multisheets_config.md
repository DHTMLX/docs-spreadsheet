---
sidebar_label: multiSheets
title: multiSheets config
description: You can learn about the multiSheets config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# multiSheets

### Description

@short: Optional. Enables/disables an ability to work with multiple sheets in the spreadsheet

### Usage

~~~jsx
multiSheets?: boolean;
~~~

### Default config

~~~jsx
multiSheets: true
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  multiSheets: false,
  // other config parameters
});
~~~

:::info
Setting the property to ***false*** will hide the bottom tabbar with sheet tabs.
:::

**Change log:** Added in v4.1
