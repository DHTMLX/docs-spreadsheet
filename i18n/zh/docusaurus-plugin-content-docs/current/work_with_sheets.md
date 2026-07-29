---
sidebar_label: 工作表操作
title: 工作表操作
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解工作表操作相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 工作表操作 {#work-with-sheets}

## 添加新工作表 {#adding-a-new-sheet}

要添加新工作表，请按以下步骤操作：

1. 单击工作表标签以选择它

2. 单击底部工具栏中的 **添加工作表** 按钮

:::note
请注意，新工作表将添加在当前活动工作表之后。
:::

![DHTMLX Spreadsheet bottom toolbar with the Add sheet button and sheet tabs](/img/add_sheet.png)

## 删除工作表 {#removing-a-sheet}

要从电子表格中删除工作表，请右键单击工作表标签，然后选择 *删除*。

{{note 请注意，如果电子表格中只有一个工作表，则无法将其删除。}}

![DHTMLX Spreadsheet sheet tab context menu with the Delete option highlighted](/img/remove_sheet.png)

## 切换活动工作表 {#changing-the-active-sheet}

要切换当前活动工作表，请单击其他工作表标签。

![DHTMLX Spreadsheet sheet tabs at the bottom with the active sheet highlighted](/img/change_active_sheet.png)

## 重命名工作表 {#renaming-a-sheet}

要重命名工作表，请右键单击工作表标签，单击 *重命名*，然后输入新名称。

![DHTMLX Spreadsheet sheet tab context menu with the Rename option and a name input](/img/rename_sheet.png)

## 工作表之间的跨表引用 {#cross-references-between-sheets}

您可以通过跨表引用将多个工作表中的数据汇总到一个工作表中。<br> 具体步骤如下：

1\.  在单元格中输入等号（=）

2\.  单击您要跨表引用的工作表标签，然后选择单元格或单元格区域

3\.  完成公式输入并按 Enter

![DHTMLX Spreadsheet cross-reference formula built across multiple sheet tabs](/img/cross_reference.gif)
