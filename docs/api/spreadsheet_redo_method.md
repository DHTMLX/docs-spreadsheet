---
sidebar_label: redo()
title: redo method
description: Apply an undone action once again in DHTMLX Spreadsheet with the redo() method.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// applies the reverted action once again
spreadsheet.redo();
~~~
