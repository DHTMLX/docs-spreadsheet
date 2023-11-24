---
sidebar_label: localization
title: localization config
description: You can learn about the localization config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# localization

### Description

@short: Optional. Defines the format of numbers, dates, currency; specifies delimiters

### Usage

~~~jsx
export interface ILocalization {
	decimal?: "." | ",";  // separator between decimals
	thousands?: "." | "," | " " | ""; // separator between thousands
	currency?: string; // any currency sign
	dateFormat?: string;
	timeFormat?: 12 | 24;
}
~~~

### Default config

~~~jsx
const localization = {
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
        dateFormat: "%d/%m/%Y",
	    timeFormat: 12
    }
});

spreadsheet.parse(dataset);
~~~

**Change log:** 
- Added in v5.1

**Related article:** 