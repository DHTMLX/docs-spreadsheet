---
sidebar_label: addSheet()
title: JavaScript Spreadsheet - addSheet Method
description: changetext
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
