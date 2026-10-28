---
sidebar_label: announce()
title: announce 方法
description: 通过 announce() 方法向 DHTMLX Spreadsheet 的屏幕阅读器用户发送状态消息，例如报告自定义工具栏或菜单命令的执行结果。
---

# announce()

### 描述 {#description}

@short: 向屏幕阅读器用户播报一条消息

### 用法 {#usage}

~~~jsx
announce(message: string): void;
~~~

### 参数 {#parameters}

- `message` - （必填）要播报的文本。传入空字符串将清除消息

### 示例 {#example}

在下面的示例中，自定义菜单命令会统计所选范围内的空单元格数量，并播报统计结果：

~~~jsx {18}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.menu.data.add({
    id: "count-empty",
    value: "Count empty cells"
});

spreadsheet.menu.events.on("click", function (id) {
    if (id === "count-empty") {
        let count = 0;
        spreadsheet.eachCell(function (cell, value) {
            if (value === "" || value === undefined || value === null) count++;
        }, spreadsheet.selection.getSelectedCell());
        spreadsheet.announce(count + " empty cells in the selection");
    }
});
~~~

### 详情 {#details}

使用该方法可以向屏幕阅读器用户告知某个没有自身可见元素的操作的结果，例如自定义工具栏或菜单命令。

消息会发送到紧随网格元素之后的一个视觉隐藏的实时区域（`role="status"`、`aria-live="polite"`、`aria-atomic="true"`）。屏幕阅读器会在读完当前语音后朗读该消息，且键盘焦点不会移动。

Spreadsheet 自身的消息也通过同一区域播报：所选范围、新的公式错误和无效值、被拒绝的编辑、搜索结果、导入和导出的开始与结束，以及新的列宽和行高（参见[状态播报列表](accessibility.md#status-announcements)）。该区域一次只保存一条消息，因此后到的消息（无论是您自己的还是内置的）会替换前一条。

如果传入的文本与该区域当前的文本相同，屏幕阅读器会再次朗读它。

该方法在[只读模式](api/spreadsheet_readonly_config.md)下以及[选择](api/spreadsheet_selection_config.md)功能关闭时同样有效。在 Spreadsheet 附加到页面之前以及调用 `destructor()` 方法之后，该方法不执行任何操作。

**更新日志：** 在 v6.0.4 中新增

**相关文章：**
- [状态播报](accessibility.md#status-announcements)
- [播报自定义命令](accessibility.md#announcing-a-custom-command)
- [自定义菜单](customization.md#menu)
