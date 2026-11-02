---
sidebar_label: 合并单元格
title: 合并单元格
description: 通过工具栏或格式菜单在 DHTMLX Spreadsheet 中合并和拆分单元格，并了解删除行和列如何影响合并单元格。
---

# 合并单元格 {#merging-cells}

## 合并单元格 {#merge-cells}

要合并单元格，请按以下步骤操作：

1\. 选择您想要合并的单元格范围

2\. 点击工具栏中的 **合并** 按钮

![DHTMLX Spreadsheet toolbar with the Merge button for merging a range of cells](/img/merge_cells.png)

或

1\. 选择您想要合并的单元格范围

2\. 在菜单中选择：*格式 -> 合并*

![DHTMLX Spreadsheet Format menu with the Merge option for cell merging](/img/merge_cells_via_menu.png)

:::info
合并后的单元格显示所选范围中左上角单元格的内容。
:::

## 拆分单元格 {#split-cells}

要拆分已合并的单元格，请按以下步骤操作：

1\. 选择已合并的单元格

2\. 点击工具栏中的 **取消合并** 按钮

![DHTMLX Spreadsheet toolbar with the Unmerge button for splitting merged cells](/img/unmerge_cells.png)

或

1\. 选择已合并的单元格

2\. 在菜单中选择：*格式 -> 取消合并*

![DHTMLX Spreadsheet Format menu with the Unmerge option for splitting merged cells](/img/unmerge_cells_via_menu.png)

## 删除合并单元格所在的行和列 {#removing-rows-and-columns-of-merged-cells}

通过合并单元格删除行或列时，该合并单元格跨越的所有行或列都会被删除。选中单个单元格或单元格区域，并通过工具栏、菜单、上下文菜单或 [`deleteRow()`](api/spreadsheet_deleterow_method.md) / [`deleteColumn()`](api/spreadsheet_deletecolumn_method.md) 方法删除行或列时，都是这样处理的。上下文菜单会在命令名称中显示完整范围，例如 *删除第 2-4 行*。

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove rows 2-4 for a merged cell](/img/remove_merged_rows_context_menu.png)

选中整行或整列时（例如单击其表头，或使用 `Shift + Space` 或 `Ctrl (Cmd) + Space`），只会删除选中的行或列。跨越这些行或列的合并单元格会相应缩小，只剩一个单元格的合并单元格会变成普通单元格。

位于被删除行下方或被删除列右侧的合并单元格会随之移动。
