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
const en = {
	// Toolbar
	undo: "Undo",
	redo: "Redo",

	textColor: "Text color",
	backgroundColor: "Background color",

	bold: "Bold",
	italic: "Italic",
	underline: "Underline",
	strikethrough: "Strikethrough",
	
	link: "Link",

	halign: "Horizontal align",
	valign: "Vertical align",
	left: "Left",
	right: "Right",
	center: "Center",
	top: "Top",
	bottom: "Bottom",
	multiline: "Text wrapping",
	clip: "Clip",
	wrap: "Wrap",
	merge: "Merge",
	unmerge: "Unmerge",

	lockCell: "Lock cell",
	unlockCell: "Unlock cell",

	clear: "Clear",
	clearValue: "Clear value",
	clearStyles: "Clear styles",
	clearAll: "Clear all",

	columns: "Columns",
	rows: "Rows",
	addColumn: "Add column",
	removeColumn: "Remove column",
	fitToData: "Fit to data",
	addRow: "Add row",
	removeRow: "Remove row",

	format: "Format",
	common: "Common",
	number: "Number",
	currency: "Currency",
	percent: "Percent",
	text: "Text",
	date: "Date",
	time: "Time",

	filter: "Filter",

	help: "Help",

	// Tabbar
	deleteSheet: "Delete",
	renameSheet: "Rename",
	renameSheetAlert: "A sheet with the name $name already exists. Please enter another name. ",

	// Menu
	file: "File",
	import: "Import",
	export: "Export",
	downloadAs: "Download as...",
	importAs: "Import as...",

	data: "Data",
	validation: "Data validation",
	search: "Search",
	sort: "Sort",
	ascSort: "Sort A to Z",
	descSort: "Sort Z to A",

	// Actions
	copy: "Copy",
	edit: "Edit",
	insert: "Insert",
	remove: "Remove",
	linkCopied: "Link copied to clipboard",

	// Filter 
	e:"Is empty",
	ne: "Is not empty",
	tc: "Text contains",
	tdc: "Text doesn't contain",
	ts: "Text starts with",
	te: "Text ends with",
	tex: "Text is exactly",
	d: "Date is",
	db: "Date is before",
	da: "Date is after",
	gt: "Greater than",
	geq: "Greater or equal to",
	lt: "Less than",
	leq: "Less or equal to",
	eq: "Is equal to",
	neq:"Is not equal to",
	ib: "Is between",
	inb: "Is not between",

	none: "None",
	empty: "Empty",
	value: "Value",
	values: "By values",
	condition: "By condition",
	and: "And",

	// Buttons
	cancel: "Cancel",
	save: "Save",
	removeValidation: "Remove validation",
	selectAll: "Select all",
	unselectAll: "Unselect all",
	apply: "Apply",
	ok: "Ok",

	// Messages
	alertTitle: "There was a problem!",
	mergeAlertMessage: "You can't $action a range containing merges!",
	spanMergeAlert: "You can't merge frozen and non-frozen cells!",
	dontShowAgain: "Don't show again",
	spanPasteError: "You can't paste merges that cross the boundary of a frozen region",
	spanMergeLockedError: "You can't merge locked cells!",
	spanUnmergeLockedError: "You can't unmerge locked cells!",
};
~~~

## Custom locale

To apply a different locale you need to:

- provide translation for all text labels in Spreadsheet, e.g. the Russian locale looks like this
- apply the new locale by calling the **dhx.i18n.setLocale()** method before initializing Spreadsheet

<iframe src="https://snippet.dhtmlx.com/yn5hyyim?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
