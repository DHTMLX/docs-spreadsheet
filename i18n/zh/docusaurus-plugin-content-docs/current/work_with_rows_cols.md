---
sidebar_label: 行与列操作
title: 行与列操作
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解行与列的操作方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 行与列操作 {#work-with-rows-and-columns}

DHTMLX Spreadsheet 支持通过工具栏按钮、菜单选项和单元格上下文菜单选项来添加和删除列与行、自动调整列宽以适应内容、冻结和解冻列与行，以及隐藏和显示列与行。

## 添加/删除行和列 {#addingremoving-rows-and-columns}

### 添加行 {#adding-rows}

要添加新行，请按以下步骤操作：

1\. 选择一行（单击其表头）或该行中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **行** 按钮，选择 *在上方添加行* 选项

![DHTMLX Spreadsheet Rows toolbar button with the Add row above option highlighted](/img/add_row_button.png)

- 或在菜单中选择 **插入** 选项，然后选择 *行 -> 在上方添加行*

![DHTMLX Spreadsheet Insert menu showing Rows and the Add row above option](/img/add_row_menu.png)

- 或右键单击该行或行中的某个单元格，选择 *行 -> 在上方添加行*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Add row above](/img/add_row_context_menu.png)

### 删除行 {#removing-rows}

要删除行，请按以下步骤操作：

1\. 选择一行（单击其表头）或该行中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **行** 按钮，选择 *删除行* 选项

![DHTMLX Spreadsheet Rows toolbar button with the Remove row option highlighted](/img/remove_row_button.png)

- 或在菜单中选择 **插入** 选项，然后选择 *行 -> 删除行*

![DHTMLX Spreadsheet Insert menu showing Rows and the Remove row option](/img/remove_row_menu.png)

- 或右键单击该行或行中的某个单元格，选择 *行 -> 删除行*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove row](/img/remove_row_context_menu.png)

:::note
要一次删除多行：选择这些行，右键单击调出上下文菜单，然后选择 *行 -> 删除行 [ids]*。
:::

### 添加列 {#adding-columns}

要添加新列，请按以下步骤操作：

1\. 选择一列（单击其表头）或该列中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **列** 按钮，选择 *在左侧添加列* 选项

![DHTMLX Spreadsheet Columns toolbar button with the Add column left option highlighted](/img/add_column_button.png)

- 或在菜单中选择 **插入** 选项，然后选择 *列 -> 在左侧添加列*

![DHTMLX Spreadsheet Insert menu showing Columns and the Add column left option](/img/add_column_menu.png)

- 或右键单击该列或列中的某个单元格，选择 *列 -> 在左侧添加列*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Add column](/img/add_column_context_menu.png)

### 删除列 {#removing-columns}

要删除列，请按以下步骤操作：

1\. 选择一列（单击其表头）或该列中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **列** 按钮，选择 *删除列* 选项

![DHTMLX Spreadsheet Columns toolbar button with the Remove column option highlighted](/img/remove_column_button.png)

- 或在菜单中选择 **插入** 选项，然后选择 *列 -> 删除列*

![DHTMLX Spreadsheet Insert menu showing Columns and the Remove column option](/img/remove_column_menu.png)

- 或右键单击该列或列中的某个单元格，选择 *列 -> 删除列*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Remove column](/img/remove_column_context_menu.png)

:::note
要一次删除多列：选择这些列，右键单击调出上下文菜单，然后选择 *列 -> 删除列 [ids]*。
:::

## 列宽自动适应 {#autofit-column-width}

要更改列宽，使其自动适应列中最长的内容，您可以：

- 双击表头中列的调整光标

![DHTMLX Spreadsheet column header with the resize cursor for autofitting column width](/img/resize_cursor.png)

- 或按以下步骤操作：

1\. 左键单击列的三点图标

![DHTMLX Spreadsheet column context menu opened from the three dots icon](/img/column_context_menu.png)

2\. 选择 *列 -> 适应数据*

![DHTMLX Spreadsheet Columns submenu with the Fit to data option for autofit column width](/img/column_autofit.png)

## 冻结/解冻行和列 {#freezingunfreezing-rows-and-columns}

### 冻结行 {#freezing-rows}

要将行冻结到某一行，请按以下步骤操作：

1\. 选择一行（单击其表头）或该行中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **行** 按钮，选择 *冻结到第 [id] 行* 选项

![DHTMLX Spreadsheet Rows toolbar button with the Freeze up to row option highlighted](/img/freeze_rows_toolbar.png)

- 或在菜单中选择 **编辑** 选项，然后选择 *冻结 -> 冻结到第 [id] 行*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to row](/img/freeze_rows_menu.png)

- 或右键单击某行或行中的某个单元格，选择 *行 -> 冻结到第 [id] 行*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Freeze up to row](/img/freeze_rows_context_menu.png)

### 解冻行 {#unfreezing-rows}

（*下图中行已冻结到第 5 行*）

要解冻行，请选择以下任一操作：

- 单击工具栏中的 **行** 按钮，选择 *解冻行* 选项

![DHTMLX Spreadsheet Rows toolbar button with the Unfreeze rows option highlighted](/img/unfreeze_rows_toolbar.png)

- 或在菜单中选择 **编辑** 选项，然后选择 *冻结 -> 解冻行*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze rows](/img/unfreeze_rows_menu.png)

- 或右键单击任意单元格，选择 *行 -> 解冻行*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Unfreeze rows](/img/unfreeze_rows_context_menu.png)

### 冻结列 {#freezing-columns}

要将列冻结到某一列，请按以下步骤操作：

1\. 选择一列（单击其表头）或该列中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **列** 按钮，选择 *冻结到第 [id] 列* 选项

![DHTMLX Spreadsheet Columns toolbar button with the Freeze up to column option highlighted](/img/freeze_columns_toolbar.png)

- 或在菜单中选择 **编辑** 选项，然后选择 *冻结 -> 冻结到第 [id] 列*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to column](/img/freeze_columns_menu.png)

- 或右键单击某列或列中的某个单元格，选择 *列 -> 冻结到第 [id] 列*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Freeze up to column](/img/freeze_columns_context_menu.png)

### 解冻列 {#unfreezing-columns}

（*下图中列已冻结到 D 列*）

要解冻列，请选择以下任一操作：

- 单击工具栏中的 **列** 按钮，选择 *解冻列* 选项

![DHTMLX Spreadsheet Columns toolbar button with the Unfreeze columns option highlighted](/img/unfreeze_columns_toolbar.png)

- 或在菜单中选择 **编辑** 选项，然后选择 *冻结 -> 解冻列*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze columns](/img/unfreeze_columns_menu.png)

- 或右键单击任意单元格，选择 *列 -> 解冻列*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Unfreeze columns](/img/unfreeze_columns_context_menu.png)

## 隐藏/显示行和列 {#hidingshowing-rows-and-columns}

### 隐藏行 {#hiding-rows}

要隐藏行，请按以下步骤操作：

1\. 选择一行（单击其表头）或该行中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **行** 按钮，选择 *隐藏行 [id]* 选项

![DHTMLX Spreadsheet Rows toolbar button with the Hide rows option highlighted](/img/hide_rows_toolbar.png)

- 或右键单击某行或行中的某个单元格，选择 *行 -> 隐藏行 [id]*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Hide rows](/img/hide_row_context_menu.png)

### 显示行 {#showing-rows}

要显示已隐藏的行，请选择以下任一操作：

- 单击行表头中代替隐藏行出现的"箭头"图标

（*下图中第 8 行和第 11 行已隐藏*）

![DHTMLX Spreadsheet rows header with the arrows icon indicating hidden rows](/img/show_rows.png)

- 或选择包含隐藏行的行或多个单元格，右键单击调出上下文菜单，然后选择 *行 -> 显示行*

（*下图中第 8 行已隐藏*）

![DHTMLX Spreadsheet context menu with the Rows submenu showing Show rows](/img/show_rows_context_menu.png)

### 隐藏列 {#hiding-columns}

要隐藏列，请按以下步骤操作：

1\. 选择一列（单击其表头）或该列中的某个单元格。

2\. 选择以下任一操作：

- 单击工具栏中的 **列** 按钮，选择 *隐藏列 [id]* 选项

![DHTMLX Spreadsheet Columns toolbar button with the Hide columns option highlighted](/img/hide_columns_toolbar.png)

- 或右键单击某列或列中的某个单元格，选择 *列 -> 隐藏列 [id]*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Hide columns](/img/hide_columns_context_menu.png)

### 显示列 {#showing-columns}

要显示已隐藏的列，请选择以下任一操作：

- 单击列表头中代替隐藏列出现的"箭头"图标

（*下图中 C 列和 E 列已隐藏*）

![DHTMLX Spreadsheet columns header with the arrows icon indicating hidden columns](/img/show_columns.png)

- 或选择包含隐藏列的列或多个单元格，右键单击调出上下文菜单，然后选择 *列 -> 显示列*

（*下图中 C 列已隐藏*）

![DHTMLX Spreadsheet context menu with the Columns submenu showing Show columns](/img/show_columns_context_menu.png)
