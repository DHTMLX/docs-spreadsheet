---
sidebar_label: serialize()
title: serialize method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# serialize()

@short: serializes data of spreadsheet into a JSON object

@signature: {`serialize: () => any[] | IDataWithStyles;`}

@returns:
A serialized JSON object with cells data and styles.

@example:
var data = spreadsheet.serialize();

@descr:

Serialized data presents an object with data and styles.

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
	}
}
~~~

**Related articles**

[Data loading and export](loading_data.md#saving-and-restoring-state)
