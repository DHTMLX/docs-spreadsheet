---
sidebar_label: beforeAction
title: beforeAction 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 beforeAction 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# beforeAction

### 描述 {#description}

@short: 在操作执行之前触发

### 用法 {#usage}

~~~jsx
beforeAction: (action: string, config: object) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `action` - （必填）操作的名称。完整的可用操作列表请查看[此处](api/overview/actions_overview.md#list-of-actions)
- `config` - （必填）包含操作参数的对象

### 返回值 {#returns}

返回 `false` 可阻止操作执行；否则返回 `true`

### 示例 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(dataset);

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return false;
    }
});
~~~

**变更日志：** 在 v4.3 中新增

**相关文章：**
- [Spreadsheet 操作](api/overview/actions_overview.md)
- [事件处理](handling_events.md)
