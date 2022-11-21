---
sidebar_label: redo()
title: redo method
description: You can learn about the redo method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# redo()

### Description

@short: Applies the reverted action once again

### Usage

~~~jsx
redo(): void;
~~~

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// applies the reverted action once again
spreadsheet.redo();
~~~
