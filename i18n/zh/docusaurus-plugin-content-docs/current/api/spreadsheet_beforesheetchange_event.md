---
sidebar_label: beforeSheetChange
title: beforeSheetChange 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 beforeSheetChange 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# beforeSheetChange

### 描述 {#description}

@short: 在切换当前活动工作表之前触发

### 用法 {#usage}

~~~jsx
beforeSheetChange: (sheet: object) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `sheet` - （必填）包含当前活动工作表名称和 id 的对象

### 返回值 {#returns}

返回 `true` 以切换活动工作表，返回 `false` 以阻止切换活动工作表

### 示例 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "beforeSheetChange" 事件
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed");
    console.log(sheet);
    return true;
});
~~~

**更新日志：** 在 v4.1 中新增

**相关文章：** [事件处理](handling_events.md)
