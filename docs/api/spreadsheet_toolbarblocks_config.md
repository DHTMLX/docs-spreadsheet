---
sidebar_label: toolbarBlocks
title: JavaScript Spreadsheet - toolbarBlocks Config
description: changetext
---

# toolbarBlocks

@short: specifies blocks of buttons that will be shown in the toolbar of spreadsheet

@signature:

@default: ["undo", "colors", "decoration", "align", "format", "help"]

@type: array

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
	// full toolbar
	toolbarBlocks: [
    	"undo", "colors", "decoration", "align", "lock", "clear",
        "rows", "columns", "help", "format", "file"
    ]
});

@relatedsample:
**Related sample**: [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)

@descr:

You can specify your own structure of the toolbar by enumerating necessary elements in the **toolbarBlocks** array in the desired order, for example:

~~~js
var spreadsheet = new dhx.Spreadsheet("cont", {
	toolbarBlocks: ["help","colors", "align", "decoration", "lock", "clear"]
});
~~~

```
![Custom toolbar](custom_toolbar.png)
```

Check how you can [customize the toolbar](customization.md/#toolbar).

**Related articles**

[Configuration](configuration.md#toolbar)

[Customization](customization.md)

@todo: update image
