---
sidebar_label: multiSheets
title: multiSheets
description: changetext
---

@short: enables/disables the ability to work with multiple sheets in the spreadsheet
	

@type: boolean
@default: true 

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {			
	multiSheets: false
});


@template:	api_config
@descr:
Setting the property to *false* will hide the bottom tabbar with sheet tabs.

@changelog: added in v4.1