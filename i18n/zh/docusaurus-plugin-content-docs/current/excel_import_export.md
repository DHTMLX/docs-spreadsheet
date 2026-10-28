---
sidebar_label: Excel 导入/导出
title: Excel 导入与导出
description: 通过工具栏或"文件"菜单，将 Excel 文件中的数据导入 DHTMLX Spreadsheet，并导出为 .xlsx 文件。
---

# Excel 导入/导出 {#excel-importexport}

## 从 Excel 导入 {#import-from-excel}

您可以将 Excel 文件中的数据加载到 Spreadsheet 中。操作步骤如下：

1\.  单击工具栏中的**导入**按钮，然后选择 *Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet 工具栏中用于导入 Microsoft Excel XLSX 文件的导入按钮](/img/import_xlsx.png)

或：

通过菜单操作：*文件 -> 导入为... -> Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet 文件菜单中用于导入 Microsoft Excel XLSX 文件的"导入为"选项](/img/file_import.png)

2\. 在您的计算机上选择一个 Excel 文件，其内容将导入当前工作表中。

## 导出到 Excel {#export-to-excel}

您可以将 Spreadsheet 中输入的数据导出为 Excel 文件。请按以下步骤操作：

1\. 单击工具栏中的**导出**按钮：

![DHTMLX Spreadsheet 工具栏中用于保存为 Microsoft Excel XLSX 格式的导出按钮](/img/export_xlsx.png)

或：

通过菜单操作：*文件 -> 下载为... -> Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet 文件菜单中用于导出 Microsoft Excel XLSX 文件的"下载为"选项](/img/file_export.png)

2\. 在您的下载目录中查找包含 Spreadsheet 数据的 Excel 文件。

屏幕阅读器会播报导入和导出的开始与结束。

:::note
Excel 文件的导入和导出使用 WebAssembly。如果浏览器不支持 WebAssembly，"导入"和"导出"命令会显示一条消息，内容为 `wasmNotSupported` [本地化](localization.md#default-locale)键的文本。使用 `"xlsx"` 类型的 [`load()`](api/spreadsheet_load_method.md) 方法和 [`export.xlsx()`](api/export_xlsx_method.md) 方法会抛出带有相同文本的 `Error`，您可以在代码中捕获它。
:::
