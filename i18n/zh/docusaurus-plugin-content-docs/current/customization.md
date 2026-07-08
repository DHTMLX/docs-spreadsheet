---
sidebar_label: 自定义
title: 自定义
description: 您可以在文档中了解 DHTMLX JavaScript Spreadsheet 库的自定义方式。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 自定义 {#customization}

您可以自定义工具栏、菜单和上下文菜单的外观、结构与功能，并为 Spreadsheet 定义自定义只读行为。

## 默认图标与自定义图标 {#default-and-custom-icons}

DHTMLX Spreadsheet 默认使用基于 [Material Design](https://pictogrammers.com/library/mdi/?welcome) 的图标。如有需要，您也可以使用任何其他图标字体包。为此，您需要在页面上引入所需的图标字体，并在 spreadsheet 的任意部分应用图标：工具栏控件、菜单和上下文菜单项。

例如，您可以在 DHTMLX Spreadsheet 源文件之后引入 [Font Awesome](https://fontawesome.com/) 图标包的 [CDN 链接](https://docs.fontawesome.com/web/setup/get-started)：

~~~html
<script type="text/javascript" src="../../codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="../../codebase/spreadsheet.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

之后，您可以将图标名称作为工具栏、菜单或上下文菜单控件参数对象中 `icon` 属性的值。详见下文。

## 控件类型与操作 {#controls-types-and-operations}

### 类型 {#types}

您可以添加以下类型的控件：`button`、`menuItem`、`separator` 和 `spacer`。

`button` 对象具有以下属性：

- `type` - 按钮类型，设置为 "button"
- `id` - 按钮的 id
- `icon` - 所用图标字体中图标的名称
- `hotkey` - 按钮的快捷键名称
- `value` - 按钮的值
- `tooltip` - 按钮的提示文本
- `twoState` - 定义按钮是否可处于两种状态的标志
- `active` - 按钮状态：`true` 为激活，`false` 为未激活

`menuItem` 对象具有以下属性：

- `type` - 菜单项类型，设置为 "menuItem"
- `id` - 菜单项的 id
- `icon` - 所用图标字体中图标的名称
- `hotkey` - 菜单项的快捷键名称
- `value` - 菜单项的值
- `childs` - 子控件数组（注意所有子项类型均应为 `menuItem`）

**工具栏**、**菜单**和**上下文菜单**的数据集合 API 允许您管理控件：添加自定义控件、移除不需要的控件，或更新控件（例如更改其图标）。

### 添加控件 {#adding-controls}

要添加新控件，请使用 `spreadsheet.{name}.data.add()` 方法。该方法接受以下参数：

- `config` - (*object*) 包含控件配置的对象
- `index` - (*number*) 控件的插入位置索引
- `parent` - (*string*) 父控件的 id（用于 `menuItem` 类型）

对于 button：

~~~jsx 
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "button", // "menuItem"
    id: "button-id",
    tooltip: "Some tooltip",
    icon: "icon-name"
}, 2);
~~~

对于 menuItem：

~~~jsx
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "menuitem-id", 
    value: "Some value",
}, -1, "parent-id");
~~~

### 更新控件 {#updating-controls}

您可以通过 `spreadsheet.{name}.data.update()` 方法更改控件的图标及其他配置选项。该方法接受两个参数：

- 控件的 id
- 包含控件新配置的对象

~~~jsx
// spreadsheet.menu.data.update / spreadsheet.contextMenu.data.update
spreadsheet.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

### 删除控件 {#deleting-controls}

要移除控件，请使用 `spreadsheet.{name}.data.remove()` 方法，并将要移除的控件 id 传入该方法：

~~~jsx
// spreadsheet.menu.data.remove / spreadsheet.contextMenu.data.remove
spreadsheet.toolbar.data.remove("control-id");
~~~

## 工具栏 {#toolbar}

### 默认控件 {#default-controls}

[默认工具栏](/#toolbar) 包含以下控件块：

- **撤销（Undo）**块
  - *Undo* 按钮（id: "undo"）
  - *Redo* 按钮（id: "redo"）
- **颜色（Colors）**块
  - *文字颜色（Text color）*按钮（id: "color"）
  - *背景颜色（Background color）*按钮（id: "background"）
- **字体（Font）**块
  - *字号（Font size）*下拉框（id: "font-size"）
- **装饰（Decoration）**块
  - *粗体（Bold）*按钮（id: "font-weight-bold"）
  - *斜体（Italic）*按钮（id: "font-style-italic"）
  - *下划线（Underline）*按钮（id: "text-decoration-underline"）
  - *删除线（Strikethrough）*按钮（id: "text-decoration-line-through"）
- **对齐（Align）**块
  - **水平对齐**子块
    - *左对齐（Left）*按钮（id: "halign-left"）
    - *居中（Center）*按钮（id: "halign-center"）
    - *右对齐（Right）*按钮（id: "halign-right"）
  - **垂直对齐**子块
    - *顶部（Top）*按钮（id: "valign-top"）
    - *居中（Center）*按钮（id: "valign-center"）
    - *底部（Bottom）*按钮（id: "valign-bottom"）
  - **文字换行**子块
    - *截断（Clip）*按钮（id: "multiline-clip"）
    - *换行（Wrap）*按钮（id: "multiline-wrap"）
- **单元格（Cell）**块
  - *边框（Border）*按钮（id: "border"）
  - *合并/取消合并（Merge/Unmerge）*按钮（id: "merge"）
- **格式（Format）**块
  - *格式（Format）* menuItem（id: "format"）
- **操作（Actions）**块
  - *筛选（Filter）*按钮（id: "filter"）
  - *插入链接（Insert link）*按钮（id: "link"）

还可以添加以下块：

- **锁定（Lock）**块
    - *锁定（Lock）*按钮（id: "lock"）
- **清除（Clear）**块
  - *清除组（Clear group）* menuItem（id: "clear-group"）
    - *清除值（Clear value）* menuItem（id: "clear-value"）
    - *清除样式（Clear styles）* menuItem（id: "clear-styles"）
    - *全部清除（Clear all）* menuItem（id: "clear-all"）
- **行（Rows）**块
  - *添加行（Add row）*按钮（id: "add-row"）
  - *删除行（Remove row）*按钮（id: "remove-row"）
  - *取消冻结行（Unfreeze rows）*按钮（id: "unfreeze-rows"）
  - *冻结到第 [id] 行（Freeze up to row [id]）*（id: "freeze-rows"）
  - *隐藏行 [id]（Hide row(s) [id]）*（id: "hide-rows"）
- **列（Columns）**块
  - *添加列（Add column）*按钮（id: "add-col"）
  - *删除列（Remove column）*按钮（id: "remove-col"）
  - *取消冻结列（Unfreeze columns）*按钮（id: "unfreeze-cols"）
  - *冻结到第 [id] 列（Freeze up to column [id]）*（id: "freeze-cols"）
  - *隐藏列 [id]（Hide column(s) [id]）*（id: "hide-cols"）
- **文件（File）**块
  - *导出（Export）* menuItem（id: "export"）
    - *"Microsoft Excel(.xlsx)"* menuItem（id: "export-xlsx"）
  - *导入（Import）* menuItem（id: "import"）
    - *"Microsoft Excel(.xlsx)"* menuItem（id: "import-xlsx"）
- **帮助（Help）**块
  - *帮助（Help）*按钮（id: "help"）

### 添加控件 {#adding-controls-1}

以下示例向工具栏中添加一个新按钮：

~~~jsx
spreadsheet.toolbar.data.add({
    type: "button",
    icon: "dxi dxi-delete",
    tooltip: "Remove all",
    id: "remove-all"
});
~~~

![通过自定义添加了"删除全部"按钮的 DHTMLX Spreadsheet 工具栏](/img/custom_toolbar_button.png)

**相关示例**：[Spreadsheet. 自定义工具栏按钮](https://snippet.dhtmlx.com/qopk6lta)

以下示例向 "clear-group" 控件中添加一个新 menuItem 选项：

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2"
}, -1, "clear-group");
~~~

添加 menuItem 还有一种简写方式，适用于不需要精确指定新项位置的情况：

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2", 
    parent: "clear-group"   
});
~~~

### 更新控件 {#updating-controls-1}

以下示例将工具栏中撤销/重做按钮的默认图标替换为 Font Awesome 图标：

~~~jsx
spreadsheet.toolbar.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.toolbar.data.update("redo", { icon: "fa fa-redo" });
~~~

![使用了 Font Awesome 自定义撤销和重做图标的 DHTMLX Spreadsheet 工具栏](/img/custom_toolbar_icons.png)

**相关示例**：[Spreadsheet. 自定义工具栏图标](https://snippet.dhtmlx.com/mvnx43o0)

### 删除控件 {#deleting-controls-1}

以下示例从工具栏中删除撤销按钮：

~~~jsx
spreadsheet.toolbar.data.remove("undo");
~~~

### 自定义字号 {#custom-font-size}

您可以通过移除 `"font-size"` 下拉框中的现有项并添加自定义项来重新定义**字体**工具栏块中的可用字号列表：

~~~jsx
const FONT_SIZES = [8, 10, 12, 14, 16, 20];

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 配置选项
});

spreadsheet.toolbar.data.removeAll("font-size");
spreadsheet.toolbar.data.add(
    FONT_SIZES.map(size => ({ value: size, id: `font-size-${size}` })),
    -1,
    "font-size"
);

spreadsheet.parse(dataset);
~~~

**相关示例：** [Spreadsheet. 设置自定义字号](https://snippet.dhtmlx.com/tffbf11g)

## 菜单 {#menu}

### 默认控件 {#default-controls-1}

[默认菜单](/#menu) 具有以下结构：

- **文件（File）** menuItem（id: "edit"）
  - *导入为...（Import as...）* menuItem（id: "import"）
    - *"Microsoft Excel(.xlsx)"* menuItem（id: "import-xlsx"）
  - *下载为...（Download as...）* menuItem（id: "download"）
    - *"Microsoft Excel(.xlsx)"* menuItem（id: "export-xlsx"）
- **编辑（Edit）** menuItem（id: "edit"）
  - *撤销（Undo）* menuItem（id: "undo"）
  - *重做（Redo）* menuItem（id: "redo"）
  - 分隔符
  - *冻结（Freeze）* menuItem（id: "freeze"）
    - *取消冻结列（Unfreeze columns）* menuItem（id: "unfreeze-cols"）
    - *冻结到第 [id] 列（Freeze up to column [id]）*（id: "freeze-cols"）
    - 分隔符（id: "freeze-sep"）
    - *取消冻结行（Unfreeze rows）* menuItem（id: "unfreeze-rows"）
    - *冻结到第 [id] 行（Freeze up to row [id]）*（id: "freeze-rows"）
  - *锁定（Lock）* menuItem（id: "lock"）
  - 分隔符
  - *清除（Clear）* menuItem（id: "clear"）
    - *清除值（Clear value）* menuItem（id: "clear-value"）
    - *清除样式（Clear styles）* menuItem（id: "clear-styles"）
    - *全部清除（Clear all）* menuItem（id: "clear-all"）
- **插入（Insert）** menuItem（id: "insert"）
  - *列（Columns）* menuItem（id: "columns"）
    - *添加列（Add column）* menuItem（id: "add-col"）
    - *删除列（Remove column）* menuItem（id: "remove-col"）
  - *行（Rows）* menuItem（id: "rows"）
    - *添加行（Add row）* menuItem（id: "add-row"）
    - *删除行（Remove row）* menuItem（id: "remove-row"）
  - *插入链接（Insert link）* menuItem（id: "link"）
- **格式（Format）** menuItem（id: "configuration"）
  - *粗体（Bold）* menuItem（id: "font-weight-bold"）
  - *斜体（Italic）* menuItem（id: "font-style-italic"）
  - *下划线（Underline）* menuItem（id: "text-decoration-underline"）
  - *删除线（Strikethrough）* menuItem（id: "text-decoration-line-through"）
  - 分隔符
  - *水平对齐（Horizontal align）* menuItem（id: "halign"）
    - *左对齐（Left）* menuItem（id: "halign-left"）
    - *居中（Center）* menuItem（id: "halign-center"）
    - *右对齐（Right）* menuItem（id: "halign-right"）
  - *垂直对齐（Vertical align）* menuItem（id: "valign"）
    - *顶部（Top）* menuItem（id: "valign-top"）
    - *居中（Center）* menuItem（id: "valign-center"）
    - *底部（Bottom）* menuItem（id: "valign-bottom"）
  - *文字换行（Text wrapping）* menuItem（id: "multiline"）
    - *截断（Clip）* menuItem（id: "multiline-clip"）
    - *换行（Wrap）* menuItem（id: "multiline-wrap"）
  - *格式（Format）* menuItem（id: "format"）
  - *合并/取消合并（Merge/Unmerge）* menuItem（id: "merge"）
- **数据（Data）** menuItem（id: "data"）
  - *数据验证（Data validation）* menuItem（id: "validation"）
  - *搜索（Search）* menuItem（id: "search"）
  - *筛选（Filter）* menuItem（id: "filter"）
  - *排序（Sort）* menuItem（id: "sort"）
    - *升序排序（Sort A to Z）* menuItem（id: "asc-sort"）
    - *降序排序（Sort Z to A）* menuItem（id: "desc-sort"）
- **帮助（Help）** menuItem（id: "help"）

### 添加控件 {#adding-controls-2}

以下示例向菜单中添加一个新 menuItem：

~~~jsx
spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    childs: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});
~~~

![带有用于检查数字的自定义验证选项的 DHTMLX Spreadsheet 菜单](/img/custom_menuitem.png)

**相关示例**：[Spreadsheet. 菜单数据](https://snippet.dhtmlx.com/2mlv2qaz)

### 更新控件 {#updating-controls-2}

以下示例将撤销/重做 menuItem 的默认图标替换为 Font Awesome 图标：

~~~jsx
spreadsheet.menu.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.menu.data.update("redo", { icon: "fa fa-redo" });
~~~

![使用了 Font Awesome 自定义撤销和重做图标的 DHTMLX Spreadsheet 菜单](/img/custom_menu_icons.png)

### 删除控件 {#deleting-controls-2}

以下示例从菜单中删除撤销 menuItem：

~~~jsx
spreadsheet.menu.data.remove("undo");
~~~

## 上下文菜单 {#context-menu}

### 默认控件 {#default-controls-2}

[默认上下文菜单](/#context-menu) 具有以下结构：

- **锁定（Lock）** menuItem（id: "lock"）
- **清除（Clear）** menuItem（id: "clear"）
  - *清除值（Clear value）* menuItem（id: "clear-value"）
  - *清除样式（Clear styles）* menuItem（id: "clear-styles"）
  - *全部清除（Clear all）* menuItem（id: "clear-all"）
- **列（Columns）** menuItem（id: "columns"）
  - *添加列（Add column）* menuItem（id: "add-col"）
  - *删除列（Remove column）* menuItem（id: "remove-col"）
  - *适应数据宽度（Fit to data）* menuItem（id: "fit-col"）
  - 分隔符
  - *取消冻结列（Unfreeze columns）* menuItem（id: "unfreeze-cols"）
  - *冻结到第 [id] 列（Freeze up to column [id]）* menuItem（id: "freeze-cols"）
  - *显示列（Show columns）* menuItem（id: "show-cols"）
  - *隐藏列 [id]（Hide column(s) [id]）* menuItem（id: "hide-cols"）
- **行（Rows）** menuItem（id: "rows"）
  - *添加行（Add row）* menuItem（id: "add-row"）
  - *删除行（Remove row）* menuItem（id: "remove-row"）
  - 分隔符
  - *取消冻结行（Unfreeze rows）* menuItem（id: "unfreeze-rows"）
  - *冻结到第 [id] 行（Freeze up to row [id]）* menuItem（id: "freeze-rows"）
  - *显示行（Show rows）* menuItem（id: "show-rows"）
  - *隐藏行 [id]（Hide row(s) [id]）* menuItem（id: "hide-rows"）
- **排序（Sort）** menuItem（id: "sort"）
  - *升序排序（Sort A to Z）* menuItem（id: "asc-sort"）
  - *降序排序（Sort Z to A）* menuItem（id: "desc-sort"）
- **插入链接（Insert link）** menuItem（id: "link"）

### 添加控件 {#adding-controls-3}

以下示例向上下文菜单中添加一个新 menuItem：

~~~jsx
spreadsheet.contextMenu.data.add({
    icon: "mdi mdi-eyedropper-variant",
    value: "Paint format",
    id: "paint-format"
});
~~~

![带有自定义"格式刷"选项的 DHTMLX Spreadsheet 上下文菜单](/img/custom_context_menuitem.png)

**相关示例**：[Spreadsheet. 上下文菜单](https://snippet.dhtmlx.com/atl9gd4h)

### 更新控件 {#updating-controls-3}

以下示例将锁定 menuItem 的默认图标替换为 Font Awesome 图标：

~~~jsx
spreadsheet.contextMenu.data.update("lock", { icon: "fa fa-key" });
~~~

![使用了 Font Awesome 自定义锁定图标的 DHTMLX Spreadsheet 上下文菜单](/img/custom_context_icon.png)

### 删除控件 {#deleting-controls-3}

以下示例从上下文菜单中删除撤销 menuItem：

~~~jsx
spreadsheet.contextMenu.data.remove("lock");
~~~

## 自定义只读模式 {#custom-read-only-mode}

除了对整个 Spreadsheet 应用[只读模式](configuration.md#read-only-mode)外，您还可以通过名称以 `before` 开头的事件来阻止特定操作，例如：

- [](api/spreadsheet_beforeeditstart_event.md)
- [](api/spreadsheet_beforeaction_event.md)

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

spreadsheet.events.on("beforeEditStart", function(){
    return false;
});

spreadsheet.events.on("beforeAction", function(actionName){
    if (actionName === "setCellValue" || actionName === "setCellStyle") {
        return false;
    }
});

spreadsheet.parse(data);
~~~

**相关示例**：[Spreadsheet. 自定义只读模式](https://snippet.dhtmlx.com/8xcursbe)
