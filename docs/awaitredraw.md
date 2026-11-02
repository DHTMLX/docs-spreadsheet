---
sidebar_label: AwaitRedraw helper
title: AwaitRedraw helper
description: Run code after DHTMLX Spreadsheet finishes rendering with the dhx.awaitRedraw helper, for API methods that take effect only once the component is on the page.
---

# AwaitRedraw helper

Some API methods of DHTMLX Spreadsheet take effect only after the component is rendered on the page. In some cases this can take a moment, so you need to wait until the browser completes rendering before running the next piece of code.

For such cases, you can use the `dhx.awaitRedraw` helper. It tracks the rendering cycle and runs your code as soon as Spreadsheet completes its rendering.

~~~js
dhx.awaitRedraw().then(() => {
    // your code here
});
~~~

For example, use `awaitRedraw` inside `afterDataLoaded` to make sure the cell value is available before reading it:

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~

