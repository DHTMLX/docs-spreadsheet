---
sidebar_label: remove()
title: remove 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 Sheet Manager 的 remove 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# remove()

### 描述 {#description}

@short: 根据标识符从电子表格中移除工作表

如果被移除的工作表处于活动状态，电子表格会自动切换到另一个可用的工作表。

:::info
要使用此方法，需要启用 [`multiSheets`](api/spreadsheet_multisheets_config.md) 配置选项。

另请注意，如果电子表格中的工作表数量少于 2 个，则不会删除工作表。
:::

### 用法 {#usage}

~~~ts
remove: (id: Id) => void;
~~~

### 参数 {#parameters}

- `id` - (*string | number*) 必填，要移除的工作表的唯一标识符。

### 示例 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// 按 id 移除工作表
spreadsheet.sheets.remove("sheet_2");
~~~

**更新日志：** 在 v6.0 中添加

**相关文章：** [使用工作表](working_with_sheets.md)
