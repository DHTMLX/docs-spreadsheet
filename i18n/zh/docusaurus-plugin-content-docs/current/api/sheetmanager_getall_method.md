---
sidebar_label: getAll()
title: getAll 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Sheet Manager 的 getAll 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# getAll()

### 描述 {#description}

@short: 返回电子表格中当前所有工作表对象组成的数组

:::info
每个工作表对象包含该工作表的 id 和 name。
:::

### 用法 {#usage}

~~~ts
getAll: () => ISheet[];
~~~

### 返回值 {#returns}

- `ISheet[]` - (*array*) 工作表对象数组。

### 示例 {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

**更新日志：** 在 v6.0 中新增

**相关文章：** [使用工作表](working_with_sheets.md)
