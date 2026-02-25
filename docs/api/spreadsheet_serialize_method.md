---
sidebar_label: serialize()
title: serialize method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# serialize()

### Description

@short: Serializes data of spreadsheet into a JSON object

### Usage

~~~jsx
serialize(): object;
~~~

### Returns

The method returns a serialized JSON object

Serialized data presents an object with the following attributes:

- **formats** - an array of objects with number formats
- **styles** - an object with the applied CSS classes
- **sheets** - an array of sheet objects. Each object contains the following attributes:
  - **name** - the sheet name
  - **data** - an array of data objects
  - **rows** - an array of height objects
  - **cols** - an array of width objects

### Example

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const data = spreadsheet.serialize();
~~~

**Related articles:** [Data loading and export](/loading_data/#saving-and-restoring-state)
