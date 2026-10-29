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
afterAction: (
    action: string,
    config: {
        action?: string,
        cell?: string,
        row?: number,
        col?: number,
        val?: any,
        prev?: any,
        groupAction?: string,
        pageId?: string | number,
        pageName?: string,
        // other properties of the action
    } | object[]
) => void;
~~~

### 参数 {#parameters}

事件的 callback 接收以下参数：

- `action` - （必填）操作名称。查看可用操作的完整列表，请参阅[此处](api/overview/actions_overview.md#list-of-actions)
- `config` - （必填）包含操作参数的对象。属性集合取决于具体操作。该对象可包含：
    - `action` - （可选）操作名称
    - `cell` - （可选）操作所应用的单元格或单元格区域的 id，例如 `"A1"` 或 `"B2:D5"`
    - `row` - （可选）该单元格所在行的从零开始的索引
    - `col` - （可选）该单元格所在列的从零开始的索引
    - `val` - （可选）操作应用的新值，例如单元格的值、样式或尺寸
    - `prev` - （可选）先前的值
    - `groupAction` - （可选）当 `cell` 为单元格区域时，代替 `action` 执行的操作名称，例如 `"groupAction"`、`"groupRowAction"` 或 `"resizeCol"`
    - `pageId` - （可选）工作表的 id
    - `pageName` - （可选）工作表的名称

    当多个操作一起执行时（例如粘贴时），`action` 参数为 `"groupAction"`，`config` 是由此类对象组成的数组。

### 示例 {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 配置参数
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**更新日志：** 在 v4.3 中新增

**相关文章：** 
- [Spreadsheet 操作](api/overview/actions_overview.md)
- [事件处理](handling_events.md)
