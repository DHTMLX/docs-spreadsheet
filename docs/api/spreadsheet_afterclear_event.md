---
sidebar_label: afterClear
title: afterClear event
description: Handle the afterClear event that fires after DHTMLX Spreadsheet is cleared (deprecated since v4.3, use the afterAction event instead).
---

# afterClear

:::caution
The `afterClear` event was deprecated in v4.3. It still works, but you should apply the new approach:

~~~jsx
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterClear" event
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Changelog:** Added in v4.2

**Related article:** [Event handling](handling_events.md)