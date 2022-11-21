---
sidebar_label: undo()
title: undo method
description: You can learn about the undo method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# undo()

### Description

@short: Reverts the latest action

### Usage

~~~jsx
undo(): void;
~~~

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// performs one step back
spreadsheet.undo();
~~~
