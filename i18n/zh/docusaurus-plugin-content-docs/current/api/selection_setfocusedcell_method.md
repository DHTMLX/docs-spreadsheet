---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection 方法
description: 使用 selection.setFocusedCell() 方法在 DHTMLX Spreadsheet 中激活单元格并将键盘焦点移到该单元格。
---

# setFocusedCell()

### 描述 {#description}

@short: 将焦点设置到指定单元格

### 用法 {#usage}

~~~jsx
setFocusedCell(cell: string, scroll?: boolean): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）要设置焦点的单元格 id
- `scroll` - （可选）是否将 Spreadsheet 滚动到该单元格，默认为 `true`

### 示例 {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

### 详情 {#details}

该方法会激活指定的单元格，并在重绘后将键盘焦点移到该单元格。在以下情况下，键盘焦点不会被移动：

- 焦点位于 Spreadsheet 之外的元素中
- 焦点通过键盘位于工具栏、菜单或工作表标签上
- 焦点位于已打开的单元格编辑器中

如果键盘焦点位于页面 body 上（例如页面刚加载完成时），该方法会将焦点移到该单元格。

通过其他方式更改活动单元格（例如通过其他 API 方法）时，同样适用上述规则。

如果 [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md) 事件的处理函数返回 `false`，则活动单元格不会改变，键盘焦点也不会移动。

当通过 [`selection: false`](api/spreadsheet_selection_config.md) 配置项或 [`selection.disable()`](api/selection_disable_method.md) 方法关闭 selection 时，该方法不执行任何操作。

**更新日志：** 将键盘焦点移到单元格的功能在 v6.0.4 中新增

**相关文章：**
- [使用 Spreadsheet](working_with_ssheet.md)
- [无障碍访问：键盘导航](accessibility.md#keyboard-navigation)
