---
sidebar_label: afterClear
title: afterClear 事件
description: 处理在 DHTMLX Spreadsheet 被清空后触发的 afterClear 事件（自 v4.3 起已弃用，请改用 afterAction 事件）。
---

# afterClear

:::caution
`afterClear` 事件已在 v4.3 中弃用。它仍然可用，但建议采用新方式：

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
    }
});
~~~

有关新概念的更多详情，请参阅 **[Spreadsheet 操作](api/overview/actions_overview.md)**。
:::

### 描述 {#description}

@short: 在电子表格被清空后触发

### 用法 {#usage}

~~~jsx
afterClear: () => void;
~~~

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterClear" 事件
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**更新日志：** 在 v4.2 中新增

**相关文章：** [事件处理](handling_events.md)
