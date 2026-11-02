---
sidebar_label: beforeClear
title: beforeClear event
description: Prevent the clearing of DHTMLX Spreadsheet with the deprecated beforeClear event, or with the beforeAction event and the clear action that replace it.
---

# beforeClear

:::caution
The `beforeClear` event was deprecated in v4.3. It still works, but you should apply the new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires before a spreadsheet is cleared

### Usage

~~~jsx
beforeClear: () => void | boolean;
~~~

### Returns

Return `false` to prevent clearing a spreadsheet; otherwise, `true`.

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeClear" event
spreadsheet.events.on("beforeClear", function(){
    console.log("A spreadsheet will be cleared");
    return false;
});
~~~

**Changelog:** Added in v4.2

**Related article:** [Event handling](handling_events.md)