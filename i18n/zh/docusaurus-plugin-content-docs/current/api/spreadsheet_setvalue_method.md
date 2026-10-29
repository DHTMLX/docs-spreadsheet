---
sidebar_label: setValue()
title: setValue 方法
description: 使用 setValue() 方法为 DHTMLX Spreadsheet 中的一个单元格、多个单元格或单元格区域设置值，可传入单个值或在单元格间重复的值数组。
---

# setValue()

### 描述 {#description}

@short: 为单元格设置值

:::info
该方法为指定的单元格设置相同（重复）的值。如果您希望为电子表格单元格添加不同的值，请使用 [](api/spreadsheet_parse_method.md) 方法。
:::

### 用法 {#usage}

~~~jsx
setValue(cell: string, value: string | number | array): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单个或多个单元格的 id，或单元格区域
- `value` - （必填）为单元格设置的值

### 示例 {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 为单个单元格设置值
spreadsheet.setValue("A1",5);

// 为单元格区域设置相同的值
spreadsheet.setValue("A1:D1",5);

// 为不同单元格设置相同的值
spreadsheet.setValue("B6,A1:D1",5);

// 从数组中依次为区域内的单元格设置值
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

**相关示例：** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

:::info
从 v4.1 起，可以使用以下格式指定单元格或单元格区域的引用：

~~~jsx
spreadsheet.setValue("sheet1!A1",5);
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将为当前活动标签页中的单元格设置值。
:::
