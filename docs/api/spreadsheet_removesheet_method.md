---
sidebar_label: removeSheet()
title: removesheet method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the removesheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# removeSheet()

@short: removes a sheet from the spreadsheet by its id

@signature: {`removeSheet: (id: string) => void;`}

@params:
`id: string` - the id of a sheet

@example:
spreadsheet.removeSheet("u1614669331209");

@descr:

To apply this method, you need to enable the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option.

Also note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.

@changelog: added in v4.1
