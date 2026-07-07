---
sidebar_label: 单元格操作
title: 单元格操作
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解单元格操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 单元格操作 {#work-with-cells}

## 设置单元格值 {#setting-cell-value}

### 设置值 {#set-values}

要通过 API 为单元格设置值，请使用 [](api/spreadsheet_setvalue_method.md) 方法。向该方法传入以下参数：

- `cells` - (`string`) 单元格或单元格区域的 id
- `value` - (`string/number/array`) 要为单元格设置的值

~~~jsx
// setting value for one cell
spreadsheet.setValue("A1",5);
// setting the same value for a range of cells
spreadsheet.setValue("A1:D1",5);
// setting the same value for different cells
spreadsheet.setValue("B6,A1:D1",5);
// setting values from an array for cells in a range alternately
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

:::note
请注意，该方法为指定的单元格设置相同（重复）的值。如果要向电子表格单元格中添加不同的值，请使用 [`parse()`](api/spreadsheet_parse_method.md) 方法。
:::


### 获取值 {#get-values}

您也可以通过将*所需单元格或单元格区域的 id* 传入 [](api/spreadsheet_getvalue_method.md) 方法来返回单元格中的值。

该方法以字符串、数字或数组的形式返回值：

~~~jsx
// returning the value of one cell
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// returning the values of the range of cells
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// returning the values of different cells
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## 验证单元格 {#validating-cells}

从 v4.3 开始，您可以通过添加下拉选项列表对单元格应用数据验证。为此，请使用 [](api/spreadsheet_setvalidation_method.md) 方法：

~~~jsx
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

下拉列表限制了用户的选择范围。当用户在单元格中输入意外值时，将显示 *无效值* 消息。

:::info
[`setValidation()`](api/spreadsheet_setvalidation_method.md) 方法也可以从指定单元格中移除验证。[查看详情](api/spreadsheet_setvalidation_method.md#details)。
:::

## 在单元格中插入超链接 {#inserting-a-hyperlink-into-a-cell}

要在单元格中插入超链接，请使用 [`insertLink()`](api/spreadsheet_insertlink_method.md) 方法。该方法还可以添加与超链接一起显示的文本：

~~~jsx
// insert a link in "A2" cell
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

如果需要从单元格中删除链接，只需向该方法传入单元格 ID：

~~~jsx
// remove a link from "A2" cell
spreadsheet.insertLink("A2");
~~~

## 设置单元格样式 {#styling-cells}

### 设置样式 {#set-styles}

您可以使用 [](api/spreadsheet_setstyle_method.md) 方法为单元格或单元格区域应用样式。该方法接受两个参数：

- `cells` - (`string`) 单元格或单元格区域的 id
- `styles` - (`object/array`) 要应用于单元格的样式

~~~jsx
// setting style for one cell
spreadsheet.setStyle("A1", {background: "red"});
// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1", {color: "blue"});
// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

:::note
该方法为指定的单元格设置相同的样式。如果要对电子表格单元格应用不同的样式，请使用 [`parse()`](api/spreadsheet_parse_method.md) 方法。
:::

### 获取样式 {#get-styles}

要获取应用于单元格的样式，请使用 [](api/spreadsheet_getstyle_method.md) 方法。向其传入*单元格或单元格区域的 id*：

~~~jsx
// getting style of one cell
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// getting styles of a range of cells
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details
 
// getting styles of different cells
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

对于多个单元格，该方法返回一个包含各单元格样式的对象数组：

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

## 编辑单元格 {#editing-a-cell}

### 启用单元格编辑器 {#enable-cell-editor}

您可以通过调用 [](api/spreadsheet_startedit_method.md) 方法在单元格中添加输入框：

~~~jsx
spreadsheet.startEdit();
~~~

该方法可接受两个可选参数：

- `cell` - (`string`) 可选，单元格的 id
- `value` - (`string`) 可选，单元格值

如果未传入单元格 id，输入框将添加到当前选中的单元格。

### 禁用单元格编辑器 {#disable-cell-editor}

要完成单元格编辑，请使用 [](api/spreadsheet_endedit_method.md) 方法，该方法将关闭编辑器并保存输入的值。

~~~jsx
spreadsheet.endEdit();
~~~

## 锁定单元格 {#locking-cells}

### 锁定单元格 {#lock-cells}

您可以通过程序锁定一个或多个单元格，使其对用户只读。为此请使用 [](api/spreadsheet_lock_method.md) 方法。该方法以*单元格 id 或单元格区域*作为参数。

~~~jsx
// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**相关示例**：[Spreadsheet. 锁定单元格](https://snippet.dhtmlx.com/czeyiuf8)

### 解锁单元格 {#unlock-cells}

要解锁已锁定的单元格，请使用 [](api/spreadsheet_unlock_method.md) 方法。将*单元格 id 或包含锁定单元格的区域*作为参数传入：

~~~jsx
// unlocks a cell
spreadsheet.unlock("A1");
 
// unlocks a range of cells
spreadsheet.unlock("A1:C1");
 
// unlocks specified cells
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### 检查单元格是否已锁定 {#check-whether-a-cell-is-locked}

要检查一个或多个单元格是否已锁定，请使用 [](api/spreadsheet_islocked_method.md) 方法，并将*单元格 id 或单元格区域*传入：

~~~jsx
// checks whether a cell is locked
var cellLocked = spreadsheet.isLocked("A1"); 

// checks whether several cells are locked
var rangeLocked = spreadsheet.isLocked("A1:C1");

// checks whether scattered cells are locked
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

该方法根据单元格的状态返回 `true` 或 `false`。如果同时检查多个单元格，只要其中至少有一个锁定单元格，方法即返回 `true`。

## 合并单元格 {#merging-cells}

### 合并单元格 {#merge-cells}

您可以通过将要合并的单元格区域传入 [`mergeCells()`](api/spreadsheet_mergecells_method.md) 方法来将两个或多个单元格合并为一个：

~~~jsx
//merge cells A6, A7, and A8
spreadsheet.mergeCells("A6:A8");

//merge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2");
~~~

### 拆分单元格 {#split-cells}

您也可以使用 [`mergeCells()`](api/spreadsheet_mergecells_method.md) 方法拆分已合并的单元格。除单元格区域外，还需传入 `true` 作为第二个参数以取消合并指定单元格：

~~~jsx
//unmerge cells B2, C2, and D2
spreadsheet.mergeCells("B2:D2", true);
~~~

## 选择单元格 {#selecting-cells}

### 选中单元格 {#select-cells}

Spreadsheet 支持通过 `Selection` 对象的 API 设置单元格选中状态。

您可以通过将单元格 id 传入 [](api/selection_setselectedcell_method.md) 方法来选中单元格：

~~~jsx
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

也可以通过 [](api/selection_getselectedcell_method.md) 方法获取选中单元格的 id：

~~~jsx
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

### 取消选中单元格 {#unselect-cells}

要从单元格中移除选中状态，请将单元格 id 传入 [](api/selection_removeselectedcell_method.md) 方法：

~~~jsx
// sets selection
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// removes selection
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**相关示例：**[Spreadsheet. 移除选中状态](https://snippet.dhtmlx.com/u4j76cuh)

## 在单元格上设置焦点 {#setting-focus-on-a-cell}

`Selection` 对象支持在电子表格单元格上设置焦点，以及获取已聚焦单元格的 id。为此请使用对应的方法：

- [](api/selection_setfocusedcell_method.md)

~~~jsx
// pass the id of the cell to set focus on
spreadsheet.selection.setFocusedCell("D4");
~~~

- [](api/selection_getfocusedcell_method.md)

~~~jsx
// getting the focused cell 
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~
