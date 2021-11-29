---
sidebar_label: dateFormat
title: dateFormat config
description: You can learn about the dateFormat config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# dateFormat

@short: defines the format of dates in the spreadsheet

@signature: {`dateFormat?: string;`}

@default: "%d/%m/%Y"

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
	dateFormat: "%D/%M/%Y"
});

@descr:

DHTMLX Spreadsheet uses the following characters for setting a date format:

| Character | Definition                                        |
|-----------|---------------------------------------------------|
| **%d**    | day as a number with leading zero, 01..31         |
| **%j**    | day as a number, 1..31                            |
| **%D**    | short name of the day, Su Mo Tu...                |
| **%l**    | full name of the day, Sunday Monday Tuesday...    |
| **%m**    | month as a number with leading zero, 01..12       |
| **%n**    | month as a number, 1..12                          |
| **%M**    | short name of the month, Jan Feb Mar...           |
| **%F**    | full name of the month, January February March... |
| **%y**    | year as a number, 2 digits                        |
| **%Y**    | year as a number, 4 digits                        |
| **%h**    | hours 12-format with leading zero, 01..12)        |
| **%g**    | hours 12-format, 1..12)                           |
| **%H**    | hours 24-format with leading zero, 00..23         |
| **%G**    | hours 24-format, 0..23                            |
| **%i**    | minutes with leading zero, 01..59                 |
| **%s**    | seconds with leading zero, 01..59                 |
| **%a**    | am or pm                                          |
| **%A**    | AM or PM                                          |
| **%u**    | milliseconds                                      |

@changelog: added in v4.2

@descr:
#### Related article

[Date format](number_formatting.md/#date-format)
