---
sidebar_label: beforeClear
title: beforeClear 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 beforeClear 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# beforeClear

:::caution
`beforeClear` 事件已在 v4.3 中弃用。它仍然可用，但建议采用新方式：

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
        return false;
    }
});
~~~

有关新概念的更多详情，请参阅 **[Spreadsheet 操作](api/overview/actions_overview.md)**。
:::

### 描述 {#description}

@short: 在电子表格被清空之前触发

### 用法 {#usage}

~~~jsx
beforeClear: () => void | boolean;
~~~

### 返回值 {#returns}

返回 `false` 可阻止清空电子表格；否则返回 `true`。

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "beforeClear" 事件
spreadsheet.events.on("beforeClear", function(){
    console.log("A spreadsheet will be cleared");
    return false;
});
~~~

**更新日志：** 在 v4.2 中新增

**相关文章：** [事件处理](handling_events.md)
