---
sidebar_label: Localization
title: Localization
description: You can learn about the localization of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Localization

You can localize labels in the interface of DHTMLX Spreadsheet and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=mobile" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Default locale

The English locale is used by default:

~~~js
var en = {
	undo: "Undo",
	redo: "Redo",
	textColor: "Text color",
	backgroundColor: "Background color",
	bold: "Bold",
	italic: "Italic",

	lockCell: "Lock cell",
	unlockCell: "Unlock cell",

	format: "Format",
	edit: "Edit",
	clear: "Clear",
	clearValue: "Clear value",
	clearStyles: "Clear styles",
	clearAll: "Clear all",

	insert: "Insert",
	columns: "Columns",
	rows: "Rows",
	addColumn: "Add column",
	removeColumn: "Remove column",
	addRow: "Add row",
	removeRow: "Remove row",

	configuration: "Configuration",
	underline: "Underline",
	halign: "Horizontal align",
	valign: "Vertical align",
	left: "Left",
	right: "Right",
	center: "Center",
	top: "Top",
	bottom: "Bottom",

	help: "Help",

	common: "common",
	number: "number",
	currency: "currency",
	percent: "percent",
	text: "text",
	date: "date",
	time: "time",

	downloadAs: "Download as...",
	importAs: "Import as...",

	import: "Import",
	export: "Export",
	file: "File",
	numberFormat: "Number format"
};
~~~

## Custom locale

To apply a different locale you need to:

- provide translation for all text labels in Spreadsheet, e.g. the Russian locale looks like this
- apply the new locale by calling the **dhx.i18n.setLocale()** method before initializing Spreadsheet

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
