---
sidebar_label: 编辑单元格
title: 编辑单元格
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解单元格操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 编辑单元格 {#editing-cells}

## 在单元格中输入内容 {#entering-content-in-a-cell}

### 手动输入数据 {#entering-data-manually}

- 单击工作表上所需的单元格。
- 输入文本、数字、日期或时间，然后按 **Enter**。

### 输入公式 {#entering-a-formula}

- 单击您希望显示公式结果的单元格。
- 输入 `=` 符号。
- 创建公式。为此，您可以使用：
    - 常量数字和计算运算符，例如 `=3-2*5+12`
    - 单元格引用和计算运算符，例如 `=A1/A2`
    - [内置函数](functions.md)，例如 `=MAX(C46;D46)`
- 按 **Enter**。

:::note
公式中的小写字母会自动转换为大写。
:::

## 在单元格中插入超链接 {#inserting-a-hyperlink-into-a-cell}

### 添加链接 {#adding-a-link}

要向单元格插入超链接，可以使用以下任一方式。

#### 使用上下文菜单 {#using-context-menu}

- 右键单击单元格，选择 *插入链接*

![DHTMLX Spreadsheet context menu with the Insert link option highlighted](/img/link/via_context_menu.png)

- 在弹出的窗口中，输入文本和链接地址，然后单击 *保存*

![DHTMLX Spreadsheet Insert link dialog with Text and Link input fields](/img/link/popup_window.png)

#### 使用工具栏按钮 {#using-toolbar-button}

- 选中单元格，单击工具栏中的 **插入链接** 按钮

![DHTMLX Spreadsheet toolbar with the Insert link button highlighted](/img/link/via_toolbar.png)

- 在弹出的窗口中，输入文本和链接地址，然后单击 *保存*

#### 使用菜单 {#using-menu}

- 选中单元格，在菜单中选择：*插入 -> 插入链接*

![DHTMLX Spreadsheet Insert menu with the Insert link option](/img/link/via_menu.png)

- 在弹出的窗口中，输入文本和链接地址，然后单击 *保存*。

### 复制链接 {#copying-a-link}

- 选中包含要复制的链接的单元格
- 在弹出的提示框中，单击 **复制** 图标

![DHTMLX Spreadsheet link popup with the Copy icon highlighted](/img/link/copy_link.png)

### 编辑链接 {#editing-a-link}

- 选中包含要编辑的链接的单元格
- 在弹出的提示框中，单击 **编辑** 图标

![DHTMLX Spreadsheet link popup with the Edit icon highlighted](/img/link/edit.png)

### 删除链接 {#removing-a-link}

- 选中包含要删除的链接的单元格
- 在弹出的提示框中，单击 **删除链接** 图标

![DHTMLX Spreadsheet link popup with the Remove link icon highlighted](/img/link/remove_link.png)

## 在单元格中使用下拉列表 {#using-drop-down-lists-in-cells}

您可以在单元格中创建下拉列表，让用户从列表中选择所需的选项。

### 手动输入方式创建下拉列表 {#creating-a-drop-down-list-by-typing-it-manually}

- 选择您要创建列表的单元格或单元格区域

- 在菜单中选择：*数据 -> 数据验证*

- 选择 *条目列表* 条件

- 输入您希望在下拉列表中显示的条目

- 单击 **保存** 按钮

![DHTMLX Spreadsheet Data validation dialog creating a drop-down list from a list of items](/img/data_validation.gif)

### 通过区域创建下拉列表 {#creating-a-drop-down-list-by-using-a-range}

- 输入您希望在下拉列表中显示的条目

- 选择您要创建列表的单元格或单元格区域

- 在菜单中选择：*数据 -> 数据验证*

- 选择 *来自区域的列表* 条件

- 选择您的列表区域

- 单击 **保存** 按钮

![DHTMLX Spreadsheet Data validation dialog creating a drop-down list from a cell range](/img/data_validation_range.gif)

### 从单元格中移除验证 {#removing-validation-from-a-cell}

您可以停止在单元格中使用下拉列表。操作方法如下：

- 选择要移除下拉列表的单元格或单元格区域
- 在菜单中选择：*数据 -> 数据验证*
- 选择 *移除验证* 选项

![DHTMLX Spreadsheet Data menu with the Data validation Remove validation option](/img/remove_validation.png)

## 在多个单元格中输入相同数据 {#entering-the-same-data-in-several-cells}

您可以使用**填充手柄**将相同的数据自动填充到多个单元格中。详情请参阅下文。

### 自动填充单元格内容 {#auto-filling-cells-with-content}

您可以自动填充单元格数据。工作方式如下：

1\. 选择一个或多个单元格，其数据将作为填充更多单元格的基础。

2\. 在选中的单元格中输入数据。自动填充支持以下几种方式：

- 复制值

​例如，要生成序列 4,4,4,4...，只需在第一个单元格中输入 4。

- 按规律填充
    - 要生成序列 1, 2, 3, 4, 5, ...，在前两个单元格中分别输入 1 和 2。
    - 要生成序列 1, 3, 5, 7, 9, ...，在前两个单元格中分别输入 1 和 3。
    - 要生成序列 2, 4, 6, 8, 10, ...，在前两个单元格中分别输入 2 和 4。
    - 除数字外，您还可以在规律中使用字母，例如，要生成序列 1, a, 2, b, 3, a, 4, b, ...，在前四个单元格中分别输入 1, a, 2, b。

3\. 拖动**填充手柄**

![DHTMLX Spreadsheet autofill dragging the fill handle to replicate cell data](/img/autofill.gif)

## 锁定单元格 {#locking-cells}

您可以锁定单元格以防止其值被更改。锁定单元格后，右上角会显示灰色"钥匙"图标。锁定的单元格不响应任何编辑尝试。

![DHTMLX Spreadsheet locked cells marked with a gray key icon in the top right corner](/img/lockedcells.png)

要锁定或解锁单元格，请使用以下任一方式：

### 通过工具栏按钮锁定单元格 {#lock-cells-via-the-toolbar-button}

- 选择要锁定/解锁的单元格（无需相邻）。
- 单击工具栏中的 **锁定单元格** 按钮。

![DHTMLX Spreadsheet toolbar with the Lock cell button highlighted](/img/lock.png)

### 通过上下文菜单锁定单元格 {#lock-cells-via-the-context-menu}

- 右键单击要锁定/解锁的单元格或单元格区域。
- 在弹出的上下文菜单中选择"锁定/解锁单元格"选项。

![DHTMLX Spreadsheet context menu with the Lock/Unlock cell option highlighted](/img/unlock.png)
