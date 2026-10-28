---
sidebar_label: 配置
title: 配置
description: 配置 DHTMLX Spreadsheet。设置工具栏、编辑栏、菜单、行数和列数、只读模式、单元格选择以及数字格式。
---

# 配置 {#configuration}

您可以根据需要调整 DHTMLX Spreadsheet 的各项设置。可用的配置选项允许您限制行数和列数、更改工具栏外观，以及控制菜单和编辑栏的显示。如有需要，您还可以将 Spreadsheet 初始化为只读模式。

## 工具栏 {#toolbar}

Spreadsheet 的工具栏由若干控件块组成，可根据需要进行修改。默认情况下，工具栏包含以下控件块：`"undo"`、`"colors"`、`"font"`、`"decoration"`、`"align"`、`"cell"`、`"format"`、`"actions"`。您还可以从以下列表中添加更多控件块：`"lock"`、`"clear"`、`"rows"`、`"columns"`、`"file"`、`"help"`。

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

工具栏结构可通过组件的 [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 配置选项进行调整，该选项是一个包含控件名称字符串的数组。

您也可以通过在 `toolbarBlocks` 数组中按所需顺序列举必要元素来自定义工具栏结构，例如：`"colors"`、`"align"`、`"cell"`、`"decoration"`、`"lock"`、`"clear"`。

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

工具栏[高度可定制](customization.md)。您可以添加新控件、更改控件图标，以及应用所需的图标集。

## 编辑栏 {#editing-bar}

由于 Spreadsheet 结构灵活，您可以切换编辑栏的显示状态，以获得所需的组件外观。使用 [`editLine`](api/spreadsheet_editline_config.md) 配置选项来隐藏或显示编辑栏。

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 行数和列数 {#number-of-rows-and-columns}

Spreadsheet 初始化时，默认以 26 列和 1000 行的网格启动。当达到此限制后，系统会自动渲染额外的行和列，无需手动添加。不过，如果您希望对其进行限制，可以指定精确的行数和列数。为此，请使用 [`colsCount`](api/spreadsheet_colscount_config.md) 和 [`rowsCount`](api/spreadsheet_rowscount_config.md) 选项。

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 菜单 {#menu}

Spreadsheet 的菜单默认隐藏。您可以通过相应的配置选项 [`menu`](api/spreadsheet_menu_config.md) 切换其显示状态：

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 只读模式 {#read-only-mode}

您还可以通过 [`readonly`](api/spreadsheet_readonly_config.md) 配置选项启用只读模式，以防止对 Spreadsheet 单元格进行编辑。

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    readonly: true,
});
~~~

在只读模式下，工具栏、菜单和公式栏会被隐藏。用户可以使用键盘在单元格间导航，使用鼠标选择单元格，以及复制和搜索单元格。编辑操作会被拒绝，并向屏幕阅读器播报"The sheet is read-only"。填充柄会被隐藏。详细信息请参阅 [`readonly`](api/spreadsheet_readonly_config.md#details) 文章。要了解键盘和屏幕阅读器用户如何使用只读 Spreadsheet，请参阅无障碍指南的[只读设置](accessibility.md#read-only-setup)部分。

要在只读模式下关闭键盘导航和选择，请将 [`selection`](api/spreadsheet_selection_config.md) 选项设置为 `false`：

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    readonly: true,
    selection: false,
});
~~~

您也可以[自定义 Spreadsheet 的只读行为](customization.md#custom-read-only-mode)。

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 单元格选择 {#selection-of-cells}

默认情况下，用户可以使用鼠标和键盘选择单元格，并且 Spreadsheet 具有活动单元格。要关闭选择，请将 [`selection`](api/spreadsheet_selection_config.md) 配置选项设置为 `false`：

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
});
~~~

此时，Spreadsheet 没有活动单元格，无法通过界面选择或编辑单元格，上下文菜单也不可用。

要在运行时关闭和开启选择，请使用 [`selection.disable()`](api/selection_disable_method.md) 和 [`selection.enable()`](api/selection_enable_method.md) 方法。[`selection.isDisabled()`](api/selection_isdisabled_method.md) 方法用于检查选择是否已关闭。

没有选择时，网格会成为键盘可直接跳过的单个 Tab 停靠点。请参阅无障碍指南的[只读设置](accessibility.md#read-only-setup)部分。

## 单元格自定义数字格式 {#custom-number-formats-for-cells}

您可以对单元格值应用 7 种默认格式："Common"（通用）、"Number"（数字）、"Percent"（百分比）、"Currency"（货币）、"Date"（日期）、"Time"（时间）、"Text"（文本）。

您可以通过 [`formats`](api/spreadsheet_formats_config.md) 配置选项重新定义默认格式或指定自定义数字格式。详细信息请参阅[数字格式化](number_formatting.md)文章。

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## 导出/导入模块路径 {#path-to-exportimport-modules}

DHTMLX Spreadsheet 支持以 Excel 格式导入和导出数据。该组件使用基于 WebAssembly 的库：[Excel2Json](https://github.com/dhtmlx/excel2json) 和 [JSON2Excel](https://github.com/dhtmlx/json2excel) 来处理数据的导入/导出。

安装必要的库后，您需要通过相应的配置选项设置 *worker.js* 文件的路径（本地路径或 CDN 地址）：[`importModulePath`](api/spreadsheet_importmodulepath_config.md) 或 [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md)。

详细信息请参阅[数据加载与导出](loading_data.md)文章。

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
