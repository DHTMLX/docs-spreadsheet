---
sidebar_label: localization
title: localization config
description: You can learn about the localization config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# localization

### Description

@short: Optional. Defines the format of numbers, dates, time and currency

### Usage

~~~jsx
localization?: object;
~~~

### Parameters

The `localization` object may contain the following properties:

- `decimal` - (optional) the symbol used as a decimal separator, `"."` by default.<br>Possible values are `"." | ","`
- `thousands` - (optional) the symbol used as a thousands separator, `","` by default.<br>Possible values are `"." | "," | " " | ""`
- `currency` - (optional) the currency sign, `"$"` by default
- `dateFormat` - (optional) the format of displaying dates set as a string. The default format is `"%d/%m/%Y"`. Check details [below](#characters-for-setting-date-format)
- `timeFormat` - (optional) the format of displaying time set as either `12` or `24`. The default format is `12`

### Default config

~~~jsx
const defaultLocales = {
    decimal: ".", 
    thousands: ",",
    currency: "$",
    dateFormat: "%d/%m/%Y",
    timeFormat: 12,
};
~~~

### Example

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    localization: {
        decimal: ",", 
        thousands: " ", 
        currency: "¥",  
        dateFormat: "%D/%M/%Y",
        timeFormat: 24
    }
});

spreadsheet.parse(dataset);
~~~

### Characters for setting date format

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

**Change log:** 
- Added in v5.1

**Related article:** [Number, date, time, currency localization](number_formatting.md#number-date-time-currency-localization)