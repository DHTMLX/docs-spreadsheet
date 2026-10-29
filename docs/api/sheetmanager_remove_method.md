---
sidebar_label: remove()
title: remove method
description: Remove a sheet by its id from DHTMLX Spreadsheet with the sheets.remove() method, which keeps at least one sheet and switches to another sheet if the active one is removed.
---

# remove()

### Description

@short: Removes a sheet from the spreadsheet by its identifier

If the removed sheet was active, the spreadsheet automatically switches to another available sheet.

:::info
To apply this method, you need to enable the [`multiSheets`](api/spreadsheet_multisheets_config.md) configuration option.

Also note that a sheet is not deleted if the spreadsheet has fewer than 2 sheets.
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

**Related article:** [Working with sheets](working_with_sheets.md)
