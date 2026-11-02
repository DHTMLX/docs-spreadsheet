---
sidebar_label: multiSheets
title: multiSheets config
description: Turn the work with multiple sheets on or off in DHTMLX Spreadsheet with the multiSheets property, which shows or hides the bottom tabbar with sheet tabs.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: false,
    // other config parameters
});
~~~

:::info
Setting the property to `false` hides the bottom tabbar with sheet tabs.
:::

**Change log:** Added in v4.1
