---
sidebar_label: getAll()
title: getAll 方法
description: 使用 sheets.getAll() 方法获取 DHTMLX Spreadsheet 的所有工作表，该方法返回包含工作表 id 和名称的对象数组。
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
