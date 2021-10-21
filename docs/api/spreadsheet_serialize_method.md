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

- the **formats** array - the array of the number format
- the **styles** object - the object with the applied CSS classes
- the **sheets** array - the array of sheets with name and data:
  - **name** - the sheet name
  - **data** - the array of objects with cells id, format and value

**Related articles**

[Data loading and export](loading_data.md#saving-and-restoring-state)
