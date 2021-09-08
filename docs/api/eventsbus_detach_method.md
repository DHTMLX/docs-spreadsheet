---
sidebar_label: detach()
title: JavaScript Spreadsheet - detach() Events Bus Method
description: changetext
---

# detach()

@short: detaches a handler from an event (which was attached before by the on() method)

@signature:

@params:
- `name: string` - the name of event to detach
- `context: any` - a context marker

@example:
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");

@descr:

By default **detach()** removes all event handlers from the target event. You can detach particular event handlers by using the context marker.

~~~js
var marker = "any"; // you can use any string|object value

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// the next command will delete only handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

@relatedapi:
api/eventsbus_fire_method.md
api/eventsbus_on_method.md

@related:
handling_events.md
