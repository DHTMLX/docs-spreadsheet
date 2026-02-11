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

The **localization** object may contain the following properties:

- **decimal** - (optional) the symbol used as a decimal separator, **"."** by default.<br>Possible values are `"." | ","`
- **thousands** - (optional) the symbol used as a thousands separator, **","** by default.<br>Possible values are `"." | "," | " " | ""`
- **currency** - (optional) the currency sign, **"$"** by default
- **dateFormat** - (optional) the format of displaying dates set as a string. The default format is **"%d/%m/%Y"**. Check the details at the [dateFormat](/api/spreadsheet_dateformat_config) API page
- **timeFormat** - (optional) the format of displaying time set as either *12* or *24*. The default format is **12**

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

**Change log:** 
- Added in v5.1

**Related article:** [Number, date, time, currency localization](/number_formatting/#number-date-time-currency-localization)