---
sidebar_label: AwaitRedraw 辅助函数
title: AwaitRedraw 辅助函数
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 AwaitRedraw 辅助函数。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
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
