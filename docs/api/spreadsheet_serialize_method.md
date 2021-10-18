---
sidebar_label: serialize()
title: serialize method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# serialize()

@short: serializes data of spreadsheet into a JSON object

@signature: {`serialize: () => any[] | IDataWithStyles;`}

@returns:
A serialized JSON object.

@example:
var data = spreadsheet.serialize();

@descr:

Serialized data presents an object with:

- the **data** array includes objects with cells ids and values
- the **styles** object contains the applied CSS classes

~~~js
{
	"data": [
    	{ "cell": "a1", "value": 1203 },
		{ "cell": "b1", "value": 3020 },
		{ "cell": "c2", "value": 1020 },
		{ "cell": "d2", "value": 234 }
    ],
	"styles": {
		"someclass": {
			"background": "#F2F2F2",
			"color": "#F57C00"
		}		
	},
	"formats": [
        { name: "Common", id: "common", mask: "", example: "2702.31" },
        { name: "Number", id: "number", mask: "#,##0.00", example: "2702.31" },
        { name: "Percent", id: "percent", mask: "#,##0.00%", example: "27.0231%" },
        { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$2702.31" },
        { name: "Text", id: "text", mask: "abc", example: "'2702.31'" }
    ];
}
~~~

**Related articles**

[Data loading and export](loading_data.md#saving-and-restoring-state)
