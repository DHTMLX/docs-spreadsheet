---
sidebar_label: eachCell()
title: eachcell method
description: You can learn about the eachcell method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# eachCell()

@short: iterates cells in the spreadsheet

@signature: {`eachCell: (cb: (cellName: string, cellValue: any) => any, range?: string) => void;`}

@params:
- `callback: function` - a callback function
- `range: string` - a range of cells to iterate

@example:
spreadsheet.menu.data.add({
	id: "validate",
	value: "Validate",
	childs: [
		{
			id: "isNumber",
			value: "Is number"
		},
		{
			id: "isEven",
			value: "Is even number"
		}
	]
});

function checkValue(check) {
	spreadsheet.eachCell(function (cell, value) {
		if (!check(value)) {
			spreadsheet.setStyle(cell, { background: "#e57373" });
		} else {
			spreadsheet.setStyle(cell, { background: "" });
		}
	}, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
	switch (id) {
		case "isNumber":
			checkValue(function (value) { return !isNaN(value) });
			break;
		case "isEven":
			checkValue(function (value) { return value % 2 === 0 });
			break;
	}
});

@relatedsample:
**Related sample**: [Spreadsheet. Menu](https://snippet.dhtmlx.com/uulux27v?)

@descr:

**Related articles**

[Customization](customization.md#menu)
