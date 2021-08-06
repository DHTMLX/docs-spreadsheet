---
sidebar_label: spreadsheet
title: JavaScript Spreadsheet - 
description: changetext
---

toolbarBlocks
=============

@short:  
	specifies blocks of buttons that will be shown in the toolbar of spreadsheet
    
@default: ["undo","colors","decoration","align","format","help"]
@type: array
@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
	// full toolbar
	toolbarBlocks: [
    	"undo", "colors", "decoration", "align", "lock", "clear", 
        "rows", "columns", "help", "format", "file"
    ]
});


@template:	api_config
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
Check how you can [customize the toolbar](customization.md).

@related:
configuration.md#toolbar
customization.md

@relatedsample:
03_configuration/01_full_toolbar.html

@todo: update image