---
sidebar_label: Spreadsheet 概览
title: DHTMLX Spreadsheet 概览
slug: /
description: 您可以在 DHTMLX 文档中查阅 JavaScript Spreadsheet 库的概览。浏览开发者指南和 API 参考、尝试代码示例和在线演示，并下载免费 30 天试用版 DHTMLX Spreadsheet。
---

# DHTMLX Spreadsheet 概览 {#dhtmlx-spreadsheet-overview}

DHTMLX Spreadsheet 是一款用于在线编辑和格式化电子表格数据的客户端 JavaScript 组件。它提供可配置的工具栏、便捷的菜单与上下文菜单，以及可调整的表格，支持快捷键导航，可从外部和本地数据源加载数据，并支持将界面本地化为所需语言。

:::tip
[用户指南](guides.md#user-guides)可帮助您的用户轻松使用 Spreadsheet。
:::

## Spreadsheet 结构 {#spreadsheet-structure}

### 工具栏 {#toolbar}

**工具栏**部分相当灵活。它包含几个默认控件组："undo"、"colors"、"decoration"、"align"、"cell"、"format"、"actions"。您可以[更改工具栏结构](configuration.md#toolbar)，添加更多控件组，或自定义控件组的排列顺序。

![DHTMLX Spreadsheet 工具栏，包含撤销、颜色、装饰、对齐、单元格、格式和操作控件](/img/overview_toolbar.png)

您还可以通过添加自定义控件和更新控件配置来[自定义工具栏](customization.md#toolbar)。

### 编辑栏 {#editing-line}

**编辑栏**具有两个用途：

- 编辑选中单元格的内容
- 控制当前编辑单元格中的更改

![DHTMLX Spreadsheet 编辑栏，用于编辑单元格内容和跟踪更改](/img/overview_editline.png)

如有需要，您可以通过相应的[配置选项](configuration.md#editing-bar)关闭编辑栏。

### 表格 {#grid}

**表格**是一个以字母标识列、以数字标识行的网格。因此，表格中的单元格由列字母和行数字共同定义，例如 C3。

![DHTMLX Spreadsheet 表格，列以字母标识，行以数字标识](/img/spreadsheet_init.png)

### 上下文菜单 {#context-menu}

**上下文菜单**包含 6 个主菜单项——**锁定**、**清除**、**列**、**行**、**排序**和**插入链接**——每项均有子菜单。

![DHTMLX Spreadsheet 上下文菜单，包含锁定、清除、列、行、排序和插入链接选项](/img/overview_contextmenu.png)

[上下文菜单的结构同样可自定义](customization.md#context-menu)。您可以添加自定义控件、更新控件配置，以及移除不需要的控件。

### 菜单 {#menu}

**菜单**部分包含几个功能块，将工具栏和上下文菜单中最常用的选项汇集在一起，便于快速访问。

默认情况下，**菜单**部分处于隐藏状态，但您可以通过相关的[配置选项](configuration.md#menu)将其开启。

![DHTMLX Spreadsheet 菜单部分，汇集了常用的工具栏和上下文菜单选项](/img/overview_menu.png)

您可以通过使用自定义控件、更新控件配置和移除不需要的控件来[修改菜单结构](customization.md#menu)。

## 下一步 {#whats-next}

现在您可以开始在应用程序中使用 DHTMLX Spreadsheet 了。请参阅[快速入门](how_to_start.md)教程以获取指引。

如需进一步了解 DHTMLX Spreadsheet，请查阅以下指南：

- [API 概览](api/api_overview.md)
- [指南](guides.md)
