---
sidebar_label: afterSheetChange
title: afterSheetChange 事件
description: 使用 afterSheetChange 事件跟踪 DHTMLX Spreadsheet 中工作表的切换，该事件接收新活动工作表的名称和 id。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterSheetChange" 事件
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**更新日志：** 在 v4.1 中新增

**相关文章：** [事件处理](handling_events.md)
