---
sidebar_label: addSheet()
title: addsheet method
description: You can learn about the addsheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# addSheet()

@short: adds a new sheet into the spreadsheet

@signature: {`addSheet: (name?: string) => string;`}

@params:
`name: string` - the name of the new sheet

@returns:
The id of the new sheet.

@example:
spreadsheet.addSheet("New Sheet");
// -> "u1614669331209"

@descr:

To apply this method, you need to enable the [multisheets](api/spreadsheet_multisheets_config.md) configuration option.

@changelog: added in v4.1
