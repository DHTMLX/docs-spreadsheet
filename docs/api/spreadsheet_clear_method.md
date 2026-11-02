---
sidebar_label: clear()
title: clear method
description: Remove all the data from DHTMLX Spreadsheet with the clear() method.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// clears a spreadsheet
spreadsheet.clear();
~~~

**Change log:** Added in v4.2

**Related article:** [Clearing spreadsheet](working_with_ssheet.md#clearing-spreadsheet)

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
