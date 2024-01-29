---
sidebar_label: afterClear
title: afterClear event
description: You can learn about the afterClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterClear

:::caution
The **afterClear** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~js
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires after a spreadsheet is cleared

### Usage

~~~jsx
afterClear: () => void;
~~~

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterClear" event
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Changelog:** Added in v4.2

**Related articles:** [Event handling](handling_events.md)