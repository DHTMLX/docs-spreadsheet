---
sidebar_label: readonly
title: readonly config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# readonly

### Description

@short: enables/disables the readonly mode

### Usage

~~~jsx
readonly?: boolean
~~~

### Parameters

- `readonly` - (optional) enables/disables the readonly mode

### Default config

~~~jsx
readonly: false
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // other config parameters
});
~~~

**Related sample:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)

**Related articles:**
- [Configuration](configuration.md#read-only-mode)
- [Customization](customization.md#custom-read-only-mode)
