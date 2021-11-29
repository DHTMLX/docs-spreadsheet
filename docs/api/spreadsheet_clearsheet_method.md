---
sidebar_label: clearSheet()
title: clear method
description: You can learn about the clearSheet method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# clearSheet()

@short: clears a sheet

@signature: {`clearSheet: (id?: string) => void;`}

@params:
`id: string` - optional, the id of a sheet to be cleared. If not specified, the method clears the currently active sheet.

@example:
// clears the sheet by its id
spreadsheet.clearSheet("u1636003130922");
// clears the currently active sheet
spreadsheet.clearSheet();

@descr:
**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

@changelog: added in v4.2

@descr:
#### Related article

[Clearing sheets](working_with_sheets.md/#clearing-sheets)