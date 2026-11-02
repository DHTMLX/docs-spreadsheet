---
sidebar_label: setActive()
title: setActive 方法
description: 使用 sheets.setActive() 方法将 DHTMLX Spreadsheet 的活动（可见）工作表切换为指定 id 的工作表。
---

# setActive()

### 描述 {#description}

@short: 将活动（可见）工作表切换为指定标识符对应的工作表

电子表格 UI 会重新渲染以显示目标工作表的内容。

### 用法 {#usage}

~~~ts
setActive: (id: Id) => void;
~~~

### 参数 {#parameters}

- `id` - (*string | number*) 必填，要激活的工作表的唯一标识符。

### 示例 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 切换到第二个工作表
spreadsheet.sheets.setActive("sheet_2");

// 验证切换结果
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**更新日志：** 在 v6.0 中新增

**相关文章：** [使用工作表](working_with_sheets.md)
