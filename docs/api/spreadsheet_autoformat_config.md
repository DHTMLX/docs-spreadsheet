---
sidebar_label: autoFormat
title: JavaScript Spreadsheet - autoFormat Config
description: changetext
---

# autoFormat

@short: defines whether the format of a cell content is detected automatically

@signature:

@default: true

@type: boolean

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
    autoFormat:false
});

@descr:

@related:
number_formatting.md#autodetectingcellformat

@relatedsample:
03_configuration/07_autoformat.html

@relatedapi:
api/spreadsheet_formats_config.md
api/spreadsheet_setformat_method.md
api/spreadsheet_getformat_method.md
api/spreadsheet_beforeformatchange_event.md
api/spreadsheet_afterformatchange_event.md
