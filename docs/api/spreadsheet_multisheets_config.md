---
sidebar_label: multiSheets
title: JavaScript Spreadsheet - multiSheets Config
description: changetext
---

# multiSheets

@short: enables/disables the ability to work with multiple sheets in the spreadsheet

@signature:

@type: boolean

@default: true

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
	multiSheets: false
});

@descr:

Setting the property to *false* will hide the bottom tabbar with sheet tabs.

@changelog: added in v4.1
