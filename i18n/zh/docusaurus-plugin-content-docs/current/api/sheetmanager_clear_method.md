---
sidebar_label: clear()
title: clear 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Sheet Manager 的 clear 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# clear()

### 描述 {#description}

@short: 清除指定工作表的内容（删除所有单元格值、样式和格式），但不删除工作表本身

如果未提供 id，则清除当前活动的工作表。

### 用法 {#usage}

~~~ts
clear: (id?: Id) => void;
~~~

### 参数 {#parameters}

- `id` - (`string | number`) 可选，要清除的工作表的唯一标识符。如果省略，则清除当前活动的工作表。

### 示例 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 按 id 清除指定工作表
spreadsheet.sheets.clear("sheet_1");

// 清除当前活动的工作表
spreadsheet.sheets.clear();
~~~

**更新日志：** 在 v6.0 中添加

**相关文章：** [使用工作表](working_with_sheets.md)
