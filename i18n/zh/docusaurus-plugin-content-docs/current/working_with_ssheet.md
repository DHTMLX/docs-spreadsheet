---
sidebar_label: 电子表格操作
title: 电子表格操作
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解电子表格操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 电子表格操作 {#work-with-spreadsheet}

用户通过界面与 Spreadsheet 交互的同时，您也可以使用其[简洁的 API](api/api_overview.md) 来操作组件。

## 撤销/重做操作 {#undoredo-actions}

[](api/spreadsheet_undo_method.md) API 方法可撤销最近的操作：

~~~jsx
spreadsheet.undo();
~~~

要重新应用已撤销的操作，请使用 [](api/spreadsheet_redo_method.md) 方法：

~~~jsx
spreadsheet.redo();
~~~

## 添加/删除行和列 {#addingremoving-rows-and-columns}

### 列 {#columns}

要添加/删除列，请使用相应的 API 方法：

- [](api/spreadsheet_addcolumn_method.md)
- [](api/spreadsheet_deletecolumn_method.md)

向这些方法传入包含要添加/删除的列 id 的单元格 id。

~~~jsx
// adds an empty "C" column 
spreadsheet.addColumn("C1");
// removes the "C" column
spreadsheet.deleteColumn("C1");
~~~

添加新列时，相邻列将向右移动。

:::note
您可以通过提供单元格 id 区域作为 `deleteColumn()` 方法的参数来删除多个列，例如："A1:C3"。
:::

### 行 {#rows}

要添加/删除行，请使用以下 API 方法：

- [](api/spreadsheet_addrow_method.md)
- [](api/spreadsheet_deleterow_method.md)

向这些方法传入包含要添加/删除的行 id 的单元格 id。

~~~jsx
// adds an empty second row
spreadsheet.addRow("A2");
// removes the second row
spreadsheet.deleteRow("A2");
~~~

添加新行时，相邻行将向下移动一个单元格。

:::note
您可以通过提供单元格 id 区域作为 `deleteRow()` 方法的参数来删除多个行，例如："A1:C3"。
:::

## 列宽自动适应 {#autofit-column-width}

要更改列宽，使其自动调整以适应列中最长的内容，请使用 [`fitColumn()`](api/spreadsheet_fitcolumn_method.md) 方法。该方法接受一个参数——包含所需列名称的单元格 id。

~~~jsx
// adjusts the width of the "G" column
spreadsheet.fitColumn("G2");
~~~

## 冻结/解冻行和列 {#freezingunfreezing-rows-and-columns}

您可能需要固定（"冻结"）某些列或行，使其在滚动页面时保持静止，而其余列和行则可以移动。

### 列 {#columns-freeze}

要冻结/解冻列，请使用相应的 API 方法：

- [](api/spreadsheet_freezecols_method.md)
- [](api/spreadsheet_unfreezecols_method.md)

向这些方法传入单元格 id 以定义列的 id。如果未传入单元格 id，将使用当前选中的单元格。

~~~jsx 
// freezing columns
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed

// unfreezing columns
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~ 

### 行 {#rows-freeze}

要冻结/解冻行，请使用相应的 API 方法：

- [](api/spreadsheet_freezerows_method.md)
- [](api/spreadsheet_unfreezerows_method.md)

向这些方法传入单元格 id 以定义行的 id。如果未传入单元格 id，将使用当前选中的单元格。

~~~jsx
// freezing rows
spreadsheet.freezeRows("B2"); // the rows up to the "2" row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the "2" row in "sheet2" will be fixed

// unfreezing rows
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen
~~~

### 在数据集中冻结行/列 {#freezing-rowscolumns-in-the-dataset}

您也可以在将数据解析到 Spreadsheet 时，为特定工作表固定行和列。
为此，请在 [`parse()`](api/spreadsheet_parse_method.md) 方法的 `sheets` 对象中使用 `freeze` 属性：

~~~jsx {10-13}
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            freeze: {
                col: 2,
                row: 2
            },
            // more "sheet_1" settings
        }, 
        // more sheets configuration objects
    ]
};

spreadsheet.parse(data);
~~~ 

## 隐藏/显示行和列 {#hidingshowing-rows-and-columns}

您可以通过相应的 API 方法隐藏和显示特定的行和列。

### 列 {#columns-hide}

要隐藏/显示列，请使用以下方法：

- [](api/spreadsheet_hidecols_method.md)
- [](api/spreadsheet_showcols_method.md)

向这些方法传入单元格 id 以定义列的 id。如果未传入单元格 id，将使用当前选中的单元格。

~~~jsx
// hiding columns
spreadsheet.hideCols("B2"); // the "B" column will be hidden
spreadsheet.hideCols("sheet2!B2"); // the "B" column in "sheet2" will be hidden
spreadsheet.hideCols("B2:C2"); // the "B" and "C" columns will be hidden

// showing columns
spreadsheet.showCols("B2"); // the "B" column will become visible again
spreadsheet.showCols("sheet2!B2"); // the "B" column in "sheet2" will become visible again
spreadsheet.showCols("B2:C2"); // the "B" and "C" columns will become visible again
~~~

### 行 {#rows-hide}

要隐藏/显示行，请使用以下 API 方法：

- [](api/spreadsheet_hiderows_method.md)
- [](api/spreadsheet_showrows_method.md)

向这些方法传入单元格 id 以定义行的 id。如果未传入单元格 id，将使用当前选中的单元格。

~~~jsx
// hiding rows
spreadsheet.hideRows("B2"); // the "2" row will be hidden  
spreadsheet.hideRows("sheet2!B2"); // the "2" row in "sheet2" will be hidden
spreadsheet.hideRows("B2:C4"); // the rows from "2" to "4" will be hidden 

// showing rows
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

## 筛选数据 {#filtering-data}

### 设置筛选器 {#set-filter}

您可以筛选电子表格中的数据，仅渲染满足指定条件的记录。为此，请使用 [`setFilter()`](api/spreadsheet_setfilter_method.md) 方法，并为所需列指定筛选规则。

例如，您可以为单独的列指定筛选条件：

~~~jsx
// filter data by criteria specified for column A
spreadsheet.setFilter("A2", [{condition: { factor: "tc", value: "e" }, exclude: ["Peru"]}]);

// filter data by criteria specified for column C
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);
~~~

在这种情况下，数据范围内每一列的标题处都会出现筛选图标。

您也可以为单元格区域指定筛选条件，例如：

~~~jsx
// filter data by criteria specified for column C
spreadsheet.setFilter("C1:C9", [{condition: {factor: "inb", value: [5,8]}, exclude: [3.75]}]);

// filter data by criteria specified for column A and C
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);
~~~

此时筛选图标仅出现在指定区域内的列上。

**相关示例：**[Spreadsheet. 通过 API 筛选](https://snippet.dhtmlx.com/effrcsg6)

### 重置筛选器 {#reset-filter}

如果要重置筛选，请不带参数调用 [`setFilter()`](api/spreadsheet_setfilter_method.md) 方法，或只向其传入第一个参数：

~~~jsx
spreadsheet.setFilter("A2");
~~~

### 获取筛选器 {#get-filter}

要获取当前工作表中数据的筛选条件，请使用 [`getFilter()`](api/spreadsheet_getfilter_method.md) 方法。将所需工作表的 ID 作为参数传入该方法。

~~~jsx
const filter = spreadsheet.getFilter("Income");
~~~

如果要获取当前活动工作表的筛选条件，无需传入工作表 ID：

~~~jsx
const filter = spreadsheet.getFilter();
~~~

## 搜索数据 {#searching-for-data}

您可以通过将要搜索的值传入 [`search()`](api/spreadsheet_search_method.md) 方法来获取包含该值的单元格。

~~~jsx
spreadsheet.search("min"); // -> ['D1']
~~~

您也可以传入 `true` 作为第二个参数，以打开搜索栏并高亮显示电子表格中找到的单元格：

~~~jsx
spreadsheet.search("min", true); 
~~~

默认情况下，电子表格会在当前活动工作表中搜索单元格。要在其他工作表中搜索记录，请将工作表 ID 作为该方法的第三个参数传入：

~~~jsx
spreadsheet.search("min", false, "Income");
~~~

### 关闭搜索栏 {#close-search-bar}

要隐藏搜索栏，请使用 [`hideSearch()`](api/spreadsheet_hidesearch_method.md) 方法：

~~~jsx
spreadsheet.hideSearch();
~~~

## 排序数据 {#sorting-data}

从 v4.3 开始，您可以使用 [`sortCells()`](api/spreadsheet_sortcells_method.md) 方法对电子表格中的数据进行排序。向该方法传入两个参数：
- `cell` - 要用于排序电子表格数据的单元格或单元格区域的 id
- `dir` - 排序方向：1 - 升序，-1 - 降序

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});

spreadsheet.sortCells("B2:B11", -1);
~~~

## 清除电子表格 {#clearing-spreadsheet}

您可以使用 [`clear()`](api/spreadsheet_clear_method.md) 方法一次性清除整个电子表格：

~~~jsx
spreadsheet.clear();
~~~

**相关示例：**[Spreadsheet. 清除](https://snippet.dhtmlx.com/szmtjn72)

如果需要清除特定工作表，请使用 [`sheets.clear()`](api/sheetmanager_clear_method.md) 方法。
