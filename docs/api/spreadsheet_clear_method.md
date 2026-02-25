---
sidebar_label: clear()
title: clear method
description: You can learn about the clear method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# clear()

### Description

@short: Clears a spreadsheet

### Usage

~~~jsx
clear(): void;
~~~

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// clears a spreadsheet
spreadsheet.clear();
~~~

**Change log:** Added in v4.2

**Related articles:** [Clearing spreadsheet](/working_with_ssheet/#clearing-spreadsheet)

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
