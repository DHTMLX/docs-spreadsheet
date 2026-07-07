---
sidebar_label: afterAction
title: afterAction 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 afterAction 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# afterAction

### 描述 {#description}

@short: 在操作执行完成后触发

### 用法 {#usage}

~~~jsx
afterAction: (action: string, config: object) => void;
~~~

### 参数 {#parameters}

事件的 callback 接收以下参数：

- `action` - （必填）操作名称。查看可用操作的完整列表，请参阅[此处](api/overview/actions_overview.md#list-of-actions)
- `config` - （必填）包含操作参数的对象

### 示例 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**更新日志：** 在 v4.3 中添加

**相关文章：** 
- [Spreadsheet 操作](api/overview/actions_overview.md)
- [事件处理](handling_events.md)
