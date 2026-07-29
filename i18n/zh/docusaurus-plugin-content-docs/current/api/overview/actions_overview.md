---
sidebar_label: Spreadsheet 操作
title: 操作概览
description: 您可以在文档中查看 DHTMLX JavaScript Spreadsheet 库的操作概览。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天试用版的 DHTMLX Spreadsheet。
---

# 操作概览 {#actions-overview}

本节介绍与 Spreadsheet 事件交互的新方式。

从 v4.3 起，DHTMLX Spreadsheet 引入了一对 [`beforeAction`](api/spreadsheet_beforeaction_event.md)/[`afterAction`](api/spreadsheet_afteraction_event.md) 事件，使您的代码更简洁明了。这两个事件分别在操作执行前后触发，并精确指明执行的是哪个操作。

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    // more actions
});

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config)
    },
    // more actions
});
~~~

[可用操作的完整列表见下文。](#list-of-actions)

>这意味着您不再需要添加成对的 [**before- 和 after-**](api/overview/events_overview.md) 事件来跟踪和处理在电子表格中执行更改时的操作。

>但如需要，您可以使用**旧方式**，因为所有现有事件仍然如常工作：
~~~jsx
spreadsheet.events.on("afterColumnAdd", function(cell){
    console.log("A new column is added", cell);
});
~~~
~~~jsx
spreadsheet.events.on("beforeColumnAdd", function(cell){
    console.log("A new column will be added", cell);
    return true;
});
~~~




## 操作列表 {#list-of-actions}

| 操作                 | 描述                                                                                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addColumn**        | 添加新列时执行该操作                                                                                                                                                   |
| **addRow**           | 添加新行时执行该操作                                                                                                                                                   |
| **addSheet**         | 添加新工作表时执行该操作                                                                                                                                               |
| **clear**            | 通过 <b>clear()</b> 方法清空电子表格时执行该操作                                                                                                                       |
| **clearSheet**       | 通过 <b>sheets.clear()</b> 方法清空工作表时执行该操作                                                                                                                  |
| **deleteColumn**     | 删除列时执行该操作                                                                                                                                                     |
| **deleteRow**        | 删除行时执行该操作                                                                                                                                                     |
| **deleteSheet**      | 删除工作表时执行该操作                                                                                                                                                 |
| **filter**           | 在工作表中筛选数据时执行该操作                                                                                                                                         |
| **fitColumn**        | 自动适配列宽时执行该操作                                                                                                                                               |
| **groupAction**      | 选中一组单元格并对其执行某些操作时执行该操作（例如：更改单元格的样式或格式、锁定/解锁单元格，或清除单元格的值或样式）                                                 |
| **insertLink**       | 在单元格中插入超链接时执行该操作                                                                                                                                       |
| **lockCell**         | 锁定/解锁单元格时执行该操作                                                                                                                                            |
| **merge**            | 合并一组单元格时执行该操作                                                                                                                                             |
| **removeCellStyles** | 清除单元格样式时执行该操作                                                                                                                                             |
| **renameSheet**      | 重命名工作表时执行该操作                                                                                                                                               |
| **resizeCol**        | 调整列宽时执行该操作                                                                                                                                                   |
| **resizeRow**        | 调整行高时执行该操作                                                                                                                                                   |
| **setCellFormat**    | 更改单元格格式时执行该操作                                                                                                                                             |
| **setCellValue**     | 更改或删除单元格值时执行该操作                                                                                                                                         |
| **setValidation**    | 为单元格设置数据验证时执行该操作                                                                                                                                       |
| **sortCells**        | 在电子表格中排序数据时执行该操作                                                                                                                                       |
| **setCellStyle**     | 更改单元格样式时执行该操作                                                                                                                                             |
| **toggleVisibility** | 隐藏/显示列/行时执行该操作                                                                                                                                             |
| **toggleFreeze**     | 冻结/取消冻结列/行时执行该操作                                                                                                                                         |
| **unmerge**          | 拆分单元格时执行该操作                                                                                                                                                 |

**更新日志：**

- **toggleFreeze** 和 **toggleVisibility** 操作在 v5.2 中新增
- **merge**、**unmerge**、**filter**、**fitColumn**、**insertLink** 操作在 v5.0 中新增

**相关示例：** [Spreadsheet. 操作](https://snippet.dhtmlx.com/efcuxlkt)
