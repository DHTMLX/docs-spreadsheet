---
sidebar_label: afterSheetAdd
title: afterSheetAdd event
description: You can learn about the afterSheetAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetAdd

:::caution
The **afterSheetAdd** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addSheet") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](../../api/overview/actions_overview/)**. 
:::

### Description

@short: Fires after a new sheet is added

### Usage

~~~jsx
afterSheetAdd: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object with the name and id of a new sheet

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterSheetAdd" event
spreadsheet.events.on("afterSheetAdd", function(sheet) {
    console.log("A new sheet is added:", sheet.name);
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](/handling_events)