---
sidebar_label: removeSheet()
title: JavaScript Spreadsheet - removeSheet Method
description: changetext
---

# removeSheet()

@short: removes a sheet from the spreadsheet by its id

@signature:

@params:
`id: string` - the id of a sheet

@example:
spreadsheet.removeSheet("u1614669331209");

@descr:

To apply this method, you need to enable the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option.

Also note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.

@changelog: added in v4.1


@template: api_method