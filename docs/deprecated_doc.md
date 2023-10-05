---
sidebar_label: Deprecated documentation 2.1
title: Deprecated documentation
description: You can learn about deprecated documentation 2.1 of the DHTMLX JavaScript Spreadsheet library. Please, use the updated documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Deprecated documentation 2.1

:::note
The [**API of version 2.1**](https://docs.dhtmlx.com/spreadsheet__reference.html) described in the deprecated documentation is still available, but it is incompatible with the [**API starting from version 3.0**](api/api_overview.md).
:::

This list of changes will help you to migrate from the [version 2.1](https://docs.dhtmlx.com/spreadsheet__index.html) where DHTMLX Spreadsheet was PHP-based, to the totally renewed version 3.0, in which the component is totally built on JavaScript. Check the list below to explore all the changes.

## Changed API

- `getStyle()` -> [`spreadsheet.getStyle()`](api/spreadsheet_getstyle_method.md) - returns styles applied to a cell(s)
- `getValue()` -> [`spreadsheet.getValue()`](api/spreadsheet_getvalue_method.md) - returns an object with the value(s) of a cell(s)
- `setStyle()` -> [`spreadsheet.setStyle()`](api/spreadsheet_setstyle_method.md) - sets style for a cell or a range of cells
- `setValue()` -> [`spreadsheet.setValue()`](api/spreadsheet_setvalue_method.md) - sets value for a cell or a range of cells
- `lock()` -> [`spreadsheet.lock()`](api/spreadsheet_lock_method.md) - locks a cell or a range of cells
- `unlock()` -> [`spreadsheet.unlock()`](api/spreadsheet_unlock_method.md) - unlocks a locked cell or a range of cells

## Removed API

### Spreadsheet class

- `getCell()`
- `getCells()`
- `isCell()`
- `setSheetId()`

### SpreadsheetCell

- `calculate()`
- `exists()`
- `getAlign()`
- `getBgColor()`
- `getCalculatedValue()`
- `getColIndex()`
- `getColName()`
- `getColor()`
- `getCoords()`
- `getValidator()`
- `isBold()`
- `isIncorrect()`
- `isItalic()`
- `parseStyle()`
- `serializeStyle()`
- `setAlign()`
- `setBgColor()`
- `setBold()`
- `setColor()`
- `setItalic()`
- `setLocked()`
- `setValidator()`
