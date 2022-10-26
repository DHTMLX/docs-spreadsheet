---
sidebar_label: detach()
title: detach events bus method
description: You can learn about the detach events bus method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# detach()

### Description

@short: Detaches a handler from an event (which was attached before by the on() method)

### Usage

~~~jsx
detach(name: string): void;
~~~

### Parameters

- `name` - (required) the name of event to detach

### Example

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");
~~~

:::info
By default **detach()** removes all event handlers from the target event. You can detach particular event handlers by using the context marker.
:::

~~~jsx
const marker = "any"; // you can use any string|object value

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// the next command will delete only handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

**Related articles:** [Event Handling](handling_events.md)
