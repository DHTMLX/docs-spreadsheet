---
sidebar_label: 搜索数据
title: 搜索数据
description: 使用搜索栏在 DHTMLX Spreadsheet 中搜索数据。通过 Ctrl（Cmd）+ F 或"数据"菜单打开搜索栏，在匹配项之间移动，并使用 Esc 关闭。
---

# 搜索数据 {#searching-for-data}

要打开搜索栏，请使用以下两种方式之一：

- 将焦点设置到任意单元格，然后按 **Ctrl（Cmd）+ F**
- 或通过菜单操作：*数据* -> *搜索*

![DHTMLX Spreadsheet 搜索栏，带有用于查找数据的文本输入框](/img/search_data.png)

在搜索栏中输入要查找的文本。包含该文本的第一个单元格会被高亮并滚动到可见区域，计数器显示匹配项的数量。要在匹配项之间移动，请单击搜索栏中的箭头按钮。

编辑单元格以及切换到另一个工作表后，搜索结果会更新。停止输入后，屏幕阅读器会播报匹配项数量和第一个匹配项的地址，例如 "Results: 5. 1 of 5, B2" 或 "No results"。移动到另一个匹配项时，会播报其位置和地址，例如 "2 of 5, B7"。

要关闭搜索栏，请按 **Esc** 或单击关闭按钮。焦点会返回到活动单元格。

要通过 API 搜索数据，请使用 [`search()`](api/spreadsheet_search_method.md) 方法。
