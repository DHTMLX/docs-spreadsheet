---
sidebar_label: remove()
title: remove method
description: You can learn about the remove method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# remove()

### Description

@short: Removes a sheet from the spreadsheet by its identifier

If the removed sheet was active, the spreadsheet will automatically switch to another available sheet.

:::info
To apply this method, you need to enable the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option.

Also note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.
:::

### Usage

~~~ts
remove: (id: Id) => void;
~~~

### Parameters

- `id` - (*string | number*) required, the unique identifier of the sheet to remove.

### Example

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Remove a sheet by its id
spreadsheet.sheets.remove("sheet_2");
~~~

**Change log:** Added in v6.0

**Related articles:** [Working with sheets](working_with_sheets.md)
