---
sidebar_label: 工作表操作
title: 工作表操作
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解工作表操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 工作表操作 {#work-with-sheets}

从 v4.1 开始，您可以在电子表格中使用[多个工作表](api/spreadsheet_multisheets_config.md)。

本文介绍如何通过 API 方法添加新工作表、删除不需要的工作表、获取所有工作表以及获取当前活动工作表。此外还说明了如何一次性将多个工作表加载到电子表格中。

{{note 要了解如何通过用户界面与多个工作表交互，请查阅我们的[用户指南](work_with_sheets.md)。}}

从 v6.0 开始，**Sheet Manager** 模块通过 `spreadsheet.sheets` 属性处理工作表管理。专用的 [Sheet Manager API](api/overview/sheetmanager_overview.md) 替代了之前直接在 Spreadsheet 实例上可用的工作表相关方法。

## 加载多个工作表 {#loading-multiple-sheets}

要将多个工作表加载到电子表格中，请准备好包含所需工作表数量及其配置的数据，并将其作为参数传入 [`parse()`](api/spreadsheet_parse_method.md) 方法。数据应为 `object` 类型。[查看该对象可包含的属性列表](api/spreadsheet_parse_method.md)。

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note 如果 [`multiSheets`](api/spreadsheet_multisheets_config.md) 配置选项设置为 `false`，则只会创建一个工作表。}}

## 添加新工作表 {#adding-a-new-sheet}

要向电子表格添加新工作表，请使用 [`sheets.add()`](api/sheetmanager_add_method.md) 方法，并将新工作表的名称作为参数传入：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Add a sheet with a custom name
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // e.g. "sheet_2"

// Add a sheet with an auto-generated name
const anotherId = spreadsheet.sheets.add();
~~~

该方法返回所创建工作表的 id。

## 删除工作表 {#removing-a-sheet}

您可以通过 [`sheets.remove()`](api/sheetmanager_remove_method.md) 方法按 id 从电子表格中删除工作表：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Remove a sheet by its id
spreadsheet.sheets.remove("sheet_2");
~~~

请注意，如果电子表格中的工作表少于 2 个，则不会删除工作表。

## 设置活动工作表 {#setting-active-sheet}

要在电子表格初始化后动态切换活动工作表，请使用 [`sheets.setActive()`](api/sheetmanager_setactive_method.md) 方法。该方法以工作表的 id 作为参数：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Switch to the second sheet
spreadsheet.sheets.setActive("sheet_2");

// Verify the switch
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**相关示例：**[Spreadsheet. 设置活动工作表](https://snippet.dhtmlx.com/iowl449t)

## 获取活动工作表 {#getting-active-sheet}

您可以通过 [`sheets.getActive()`](api/sheetmanager_getactive_method.md) 方法获取当前活动工作表：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

该方法返回一个包含当前活动工作表 name 和 id 属性的对象。

## 获取所有工作表 {#getting-all-sheets}

[`sheets.getAll()`](api/sheetmanager_getall_method.md) 方法以工作表对象数组的形式返回电子表格的所有工作表：

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

## 通过 id 获取工作表 {#getting-a-sheet-by-id}

要通过 id 获取单个工作表对象，请使用 [`sheets.get()`](api/sheetmanager_get_method.md) 方法：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

## 清除工作表 {#clearing-sheets}

您可以使用 [`sheets.clear()`](api/sheetmanager_clear_method.md) 方法按 id 清除指定工作表的数据：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Clear a specific sheet by id
spreadsheet.sheets.clear("sheet_1");

// Clear the currently active sheet
spreadsheet.sheets.clear();
~~~

**相关示例：**[Spreadsheet. 清除](https://snippet.dhtmlx.com/szmtjn72)

如果需要一次性清除整个电子表格，请使用 [`clear()`](api/spreadsheet_clear_method.md) 方法。
