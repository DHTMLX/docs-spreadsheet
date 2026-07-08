---
sidebar_label: get()
title: get 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Sheet Manager 的 get 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# get()

### 描述 {#description}

@short: 根据标识符返回单个工作表对象

### 用法 {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### 参数 {#parameters}

- `id` - (*string | number*) 必填，要获取的工作表的唯一标识符。

### 返回值 {#returns}

- `ISheet` - (*object*) 与给定 id 匹配的工作表对象。

### 示例 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**更新日志：** 在 v6.0 中添加

**相关文章：** [使用工作表](working_with_sheets.md)
