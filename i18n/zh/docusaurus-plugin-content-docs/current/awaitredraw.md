---
sidebar_label: AwaitRedraw 辅助函数
title: AwaitRedraw 辅助函数
description: 使用 dhx.awaitRedraw 辅助函数在 DHTMLX Spreadsheet 完成渲染后运行代码，适用于仅在组件显示在页面上后才生效的 API 方法。
---

# AwaitRedraw 辅助函数 {#awaitredraw-helper}

DHTMLX Spreadsheet 的某些 API 方法只有在组件渲染到页面后才会生效。在某些情况下，这可能需要一点时间，因此您需要等待浏览器完成渲染后再运行下一段代码。

对于此类情况，您可以使用 `dhx.awaitRedraw` 辅助函数。它会追踪渲染周期，并在 Spreadsheet 完成渲染后立即执行您的代码。

~~~js
dhx.awaitRedraw().then(() => {
    // 您的代码
});
~~~

例如，在 `afterDataLoaded` 内使用 `awaitRedraw`，以确保在读取单元格值之前该值已可用：

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~
