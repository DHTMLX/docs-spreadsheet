---
sidebar_label: eachCell()
title: eachCell method
description: You can learn about the eachcell method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# eachCell()

### Description

@short: Iterates cells in the spreadsheet

:::info
If the range of cells is not specified, the method iterates the selected cells.
:::

### Usage

~~~jsx
eachCell(
    cb: (cellName: string, cellValue: any) => any, 
    range?: string
): void;
~~~ 

### Parameters

- `callback` - (required) a callback function
- `range` - (optional) a range of cells to iterate

### Example

~~~jsx {21-27}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    items: [
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
~~~

**Related articles:** [Customization](customization.md#menu)

**Related sample**: [Spreadsheet. Menu](https://snippet.dhtmlx.com/2mlv2qaz)
