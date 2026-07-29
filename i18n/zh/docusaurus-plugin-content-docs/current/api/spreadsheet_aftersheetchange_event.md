---
sidebar_label: afterSheetChange
title: afterSheetChange 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 afterSheetChange 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# afterSheetChange

### 描述 {#description}

@short: 在当前活动工作表切换后触发

### 用法 {#usage}

~~~jsx
afterSheetChange: (sheet: object) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `sheet` - （必填）包含新活动工作表名称和 id 的对象

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "afterSheetChange" 事件
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**更新日志：** 在 v4.1 中新增

**相关文章：** [事件处理](handling_events.md)
