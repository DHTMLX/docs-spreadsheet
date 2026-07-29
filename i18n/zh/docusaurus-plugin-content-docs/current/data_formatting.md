---
sidebar_label: 数据格式化
title: 数据格式化
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解数据格式化的相关内容。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 数据格式化 {#data-formatting}

## 颜色与样式 {#color-and-style}

DHTMLX Spreadsheet 的工具栏包含多个用于修改单元格数据样式的按钮区块。

![DHTMLX Spreadsheet 工具栏中用于文字颜色、背景色、粗体和斜体的颜色与文字样式按钮](/img/color.png)

您可以进行以下操作：

- 使用**文字颜色**按钮的颜色选择器更改**文字颜色**
- 使用**背景颜色**按钮的颜色选择器更改**背景颜色**
- 对文字应用*粗体*、*斜体*和*下划线*样式
- 对文字应用*删除线*格式

## 对齐 {#alignment}

### 水平对齐 {#horizontal-alignment}

要水平对齐单元格中的数据，请按以下步骤操作：

1\. 选择要对齐的一个或多个单元格

2\. 选择以下操作之一：

- 单击工具栏中的"水平对齐"按钮，然后选择*左对齐*、*居中*或*右对齐*

![DHTMLX Spreadsheet 工具栏中显示左对齐、居中和右对齐选项的水平对齐下拉菜单](/img/align.png)

- 或通过菜单操作：*格式* -> *水平对齐* -> 选择*左对齐*、*居中*或*右对齐*

![DHTMLX Spreadsheet 格式菜单中的水平对齐子菜单选项](/img/horizontal_alignment.png)

### 垂直对齐 {#vertical-alignment}

要垂直对齐单元格中的数据，请按以下步骤操作：

1\. 选择要对齐的一个或多个单元格

2\. 选择以下操作之一：

- 单击工具栏中的"垂直对齐"按钮，然后选择*顶部*、*居中*或*底部*

![DHTMLX Spreadsheet 工具栏中显示顶部、居中和底部选项的垂直对齐下拉菜单](/img/vertical_align.png)

- 或通过菜单操作：*格式* -> *垂直对齐* -> 选择*顶部*、*居中*或*底部*

![DHTMLX Spreadsheet 格式菜单中的垂直对齐子菜单选项](/img/vertical_alignment.png)

### 单元格文字换行 {#wrap-text-in-a-cell}

您可以通过以下方式对单元格中的文字进行换行：

1\. 选择要格式化的一个或多个单元格

2\. 选择以下操作之一：

- 单击工具栏中的"文字换行"按钮，然后选择*截断*或*换行*

![DHTMLX Spreadsheet 工具栏中显示截断和换行选项的文字换行下拉菜单](/img/wrap.png)

- 或通过菜单操作：*格式* -> *文字换行* -> 选择*截断*或*换行*

![DHTMLX Spreadsheet 格式菜单中显示截断和换行的文字换行子菜单](/img/text_wrapping.png)

:::tip
当您更改列宽时，文字换行会自动调整。
:::

## 删除样式和值 {#removing-styles-and-values}

您可以清除单元格值、单元格样式，或同时清除两者。有以下两种方式可供选择：

1\. 通过工具栏按钮：

- 选择目标单元格或多个单元格。
- 使用工具栏中的**清除**按钮。
- 在下拉列表中选择所需选项：

![DHTMLX Spreadsheet 工具栏中用于清除值或样式的清除按钮下拉菜单](/img/clear_button.png)

2\. 通过单元格的上下文菜单：

- 选择目标单元格或多个单元格。
- 右键单击选区以调出上下文菜单。
- 选择**清除**选项，然后在下拉列表中选择所需选项：

![DHTMLX Spreadsheet 上下文菜单中用于清除值、样式或全部的清除选项](/img/clear_option.png)

## 单元格样式边框 {#styled-borders-for-cells}

您可以为单个单元格或一组单元格添加样式边框。

### 设置样式边框 {#setting-styled-borders}

- 选择需要设置样式边框的单元格或一组单元格
- 单击工具栏中的**边框**按钮，选择所需的边框类型、颜色和样式

![DHTMLX Spreadsheet 边框工具栏按钮，显示边框类型、颜色和样式选项](/img/styled_cell_border.png)

### 移除样式边框 {#removing-styled-borders}

- 选择需要移除样式边框的单元格或一组单元格
- 单击工具栏中的**边框**按钮，选择*清除边框*选项

![DHTMLX Spreadsheet 边框工具栏按钮，高亮显示清除边框选项](/img/clear_cells_border.png)
