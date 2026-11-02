---
sidebar_label: undo()
title: undo method
description: Revert the latest action in DHTMLX Spreadsheet with the undo() method, and reapply it with the redo() method.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// performs one step back
spreadsheet.undo();
~~~
