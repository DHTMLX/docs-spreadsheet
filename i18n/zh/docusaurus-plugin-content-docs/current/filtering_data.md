---
sidebar_label: 筛选数据
title: 筛选数据
description: 按条件或按值筛选 DHTMLX Spreadsheet 中的数据，使用键盘打开筛选器，并清除或移除筛选。
---

# 筛选数据 {#filtering-data}

您可以对电子表格中的数据进行筛选，以仅显示符合指定条件的记录。

要激活筛选，请使用以下两种方式之一：

- 将焦点设置到单元格或选择一组单元格，然后单击工具栏中的**筛选**按钮

![DHTMLX Spreadsheet 工具栏中用于启用数据筛选的筛选按钮](/img/filter_button.png)

- 将焦点设置到单元格或选择一组单元格，然后通过菜单操作：*数据 -> 筛选*

![DHTMLX Spreadsheet 数据菜单中用于激活列筛选的筛选选项](/img/filter_menu.png)

之后，**筛选**图标将出现在选定范围内每个列标题的右侧。

## 使用键盘打开筛选器 {#opening-a-filter-with-the-keyboard}

不使用鼠标打开某一列的筛选器：

- 将活动单元格移动到带有**筛选**图标的列标题单元格

- 按 `Shift + F10` 或 Menu 键调出上下文菜单，然后选择*打开筛选*

![DHTMLX Spreadsheet 带有筛选图标的标题单元格的上下文菜单，其中"打开筛选"命令处于焦点状态](/img/open_filter_context_menu.png)

*打开筛选*命令仅在带有**筛选**图标的单元格的上下文菜单中显示。右键单击此类单元格后，您也可以选择该命令。在[只读模式](api/spreadsheet_readonly_config.md)下，上下文菜单和*打开筛选*命令不可用。

筛选弹出窗口会获得焦点，`Tab` 键在其控件之间移动。`Esc` 键关闭弹出窗口并使焦点返回到单元格。如果弹出窗口中打开了下拉列表或日期选择器，`Esc` 会先关闭它。

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
