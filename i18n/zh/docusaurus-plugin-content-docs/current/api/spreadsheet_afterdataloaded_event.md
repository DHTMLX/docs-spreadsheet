---
sidebar_label: afterDataLoaded
title: afterDataLoaded 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 afterDataLoaded 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# afterDataLoaded

### 描述 {#description}

@short: 在数据加载完成后触发

### 用法 {#usage}

~~~jsx
afterDataLoaded: () => void;
~~~

### 示例 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterDataLoaded" 事件
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.message({
        text: "Data is successfully loaded into Spreadsheet!",
        css: "dhx_message--success",
        expire: 5000
    });
});
~~~

**更新日志：** 在 v5.2 中新增

**相关文章：** [事件处理](handling_events.md)

**相关示例：** [Spreadsheet. 数据加载事件](https://snippet.dhtmlx.com/vxr7amz6)
