---
sidebar_label: setStyle()
title: setStyle 方法
description: 使用 setStyle() 方法为 DHTMLX Spreadsheet 中的一个单元格、多个单元格或单元格区域应用相同的样式，样式以对象或数组形式传入。
---

# setStyle()

### 描述 {#description}

@short: 为单元格设置样式

:::info
该方法为指定的单元格设置相同的样式。如果您希望为电子表格单元格应用不同的样式，请使用 [](api/spreadsheet_parse_method.md) 方法。
:::

### 用法 {#usage}

~~~jsx
setStyle(cell: string, styles: array | object): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单个或多个单元格的 id，或单元格区域
- `styles` - （必填）应用于单元格的样式。[查看可用于设置单元格样式的属性列表](api/spreadsheet_parse_method.md#list-of-properties)

### 示例 {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 为单个单元格设置样式
spreadsheet.setStyle("A1", {background: "red"});

// 为单元格区域设置相同的样式
spreadsheet.setStyle("A1:D1", {color: "blue"});

// 为不同单元格设置相同的样式
spreadsheet.setStyle("B6,A1:D1", {color:"blue"});

// 从数组中依次为区域内的单元格设置样式
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

**相关示例：** [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)

:::info
从 v4.1 起，可以使用以下格式指定单元格或单元格区域的引用：

~~~jsx
spreadsheet.setStyle("sheet1!A2", {background: "red"}); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将为当前活动标签页中的单元格应用样式。
:::
