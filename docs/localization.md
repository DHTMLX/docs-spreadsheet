---
sidebar_label: Localization
title: JavaScript Spreadsheet - Localization
description: changetext
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
	align: "Align",
	left: "Left",
	right: "Right",
	center: "Center",

	help: "Help",

	common: "common",
	number: "number",
	currency: "currency",
	percent: "percent",

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
