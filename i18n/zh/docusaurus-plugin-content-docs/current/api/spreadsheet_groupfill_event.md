---
sidebar_label: groupFill
title: groupFill 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 groupFill 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# groupFill

### 描述 {#description}

@short: 在自动填充单元格时触发

### 用法 {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `focusedCell` - （必填）当前获得焦点的单元格 id
- `selectedCell` - （必填）已选中单元格的 id

### 示例 {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "groupFill" 事件
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**相关文章：** [事件处理](handling_events.md)
