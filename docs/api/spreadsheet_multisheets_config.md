---
sidebar_label: multiSheets
title: multisheets config | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the multisheets config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# multiSheets

@short: enables/disables the ability to work with multiple sheets in the spreadsheet

@signature: {`multiSheets?: boolean;`}

@default: true

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
	multiSheets: false
});

@descr:

Setting the property to *false* will hide the bottom tabbar with sheet tabs.

@changelog: added in v4.1
