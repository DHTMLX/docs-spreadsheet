---
sidebar_label: 筛选数据
title: 筛选数据
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解数据筛选的相关内容。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 筛选数据 {#filtering-data}

您可以对电子表格中的数据进行筛选，以仅显示符合指定条件的记录。

要激活筛选，请使用以下两种方式之一：

- 将焦点设置到单元格或选择一组单元格，然后单击工具栏中的**筛选**按钮

![DHTMLX Spreadsheet 工具栏中用于启用数据筛选的筛选按钮](/img/filter_button.png)

- 将焦点设置到单元格或选择一组单元格，然后通过菜单操作：*数据 -> 筛选*

![DHTMLX Spreadsheet 数据菜单中用于激活列筛选的筛选选项](/img/filter_menu.png)

之后，**筛选**图标将出现在选定范围内每个列标题的右侧。

## 按条件筛选 {#filtering-by-condition}

- 单击目标列的**筛选**图标

- 选择一个内置比较运算符，例如**大于**

- 指定筛选条件并单击**应用**

![DHTMLX Spreadsheet 列筛选下拉菜单，显示"大于"等比较运算符](/img/filter_by_condition.png)

### 清除筛选 {#clearing-a-filter}

要清除筛选，请单击列标题中的**筛选**图标，选择_按条件：**无**_，然后单击**应用**。

![DHTMLX Spreadsheet 筛选对话框，显示用于清除筛选的"按条件：无"选项](/img/clear_filter_bycondition.png)

## 按值筛选 {#filtering-by-values}

- 单击目标列的**筛选**图标

- 单击**取消全选**按钮

![DHTMLX Spreadsheet 列筛选，显示取消全选按钮和值复选框](/img/unselect_all_button.png)

- 勾选您想要显示的值的复选框，然后单击**应用**

### 清除筛选 {#clearing-a-filter-1}

要清除筛选，请单击列标题中的**筛选**图标，单击**全选**按钮，然后单击**应用**。

![DHTMLX Spreadsheet 列筛选对话框，显示用于清除值筛选的全选按钮](/img/clear_filter_by_values.png)

## 移除筛选 {#removing-filters}

要禁用筛选，请执行以下操作之一：

- 单击工具栏中的**筛选**按钮
- 或通过菜单操作：*数据 -> 筛选*

列标题上的**筛选**图标将消失，所有隐藏的记录将重新显示。
