---
sidebar_label: getActive()
title: getActive 方法
description: 使用 sheets.getActive() 方法获取 DHTMLX Spreadsheet 的活动（可见）工作表，该方法返回工作表的 id 和名称。
---

# getActive()

### 描述 {#description}

@short: 返回当前在电子表格中处于活动状态（可见）的工作表对象

### 用法 {#usage}

~~~ts
getActive: () => ISheet;
~~~

### 返回值 {#returns}

- `ISheet` - (*object*) 当前活动的工作表对象，包含 `id` 和 `name` 属性。

### 示例 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**更新日志：** 在 v6.0 中新增

**相关文章：** [使用工作表](working_with_sheets.md)
