---
sidebar_label: 无障碍
title: 无障碍
description: 让键盘用户和屏幕阅读器用户都能使用 DHTMLX Spreadsheet。了解以 WCAG 2.2 AA 为目标的 WAI-ARIA 支持、键盘导航、屏幕阅读器播报和高对比度主题。
---

# DHTMLX Spreadsheet 的无障碍支持

本指南面向在需要满足无障碍要求的应用中嵌入 DHTMLX Spreadsheet 的开发者。您可以据此对照自己的检查清单评估该组件，并为键盘、屏幕阅读器和高对比度用户进行配置。

Spreadsheet 会在其标记中渲染 WAI-ARIA 角色和状态。键盘焦点始终停留在活动单元格上，工具栏、菜单栏和工作表标签各自只占一个 Tab 停靠点。对于没有独立元素的变化，例如被拒绝的编辑或搜索结果，会发送到实时区域，由屏幕阅读器朗读。

:::info 目标合规标准
DHTMLX Spreadsheet 旨在满足 **WCAG 2.2 AA 级**、美国《康复法》**第 508 条**以及 **EN 301 549**（欧洲无障碍法案的技术基准）。

合规情况按准则逐条针对 DHTMLX Spreadsheet 6.0.4 进行说明。详细的**无障碍合规报告（VPAT® 2.5）**见：[无障碍合规报告](accessibility_conformance_report.md)。
:::

## 功能 {#capabilities}

| 领域 | 支持情况 |
| ---- | ------- |
| 键盘操作 | 单元格上的每个命令都有对应按键。工具栏、菜单栏和工作表标签是单一的 Tab 停靠点，使用方向键在其中导航。列宽、行高和列筛选都有上下文菜单命令，因此无需拖动或点击图标 |
| WAI-ARIA 语义 | 单元格是包含 `columnheader`、`rowheader` 和 `gridcell` 元素的 `grid`。这些角色始终会被渲染 |
| 焦点模型 | 键盘焦点位于活动单元格上。<kbd>Tab</kbd> 进入工作表时停在活动单元格上，并从最后一个或第一个单元格离开。<kbd>Ctrl</kbd> + <kbd>F6</kbd> 在菜单、工具栏、工作表和工作表标签之间移动焦点 |
| 选择模型 | 活动单元格、单个范围和多个范围通过 `aria-selected` 暴露，并会播报范围的大小。可以使用 [`selection`](api/spreadsheet_selection_config.md) 选项关闭选择功能 |
| 只读模式 | 可以浏览、选择、复制和搜索工作表；编辑会被拒绝并播报，且上下文菜单不可用 |
| 屏幕阅读器 | 已使用 NVDA、JAWS 和 VoiceOver 测试 |
| 视觉无障碍 | 提供 `contrast-light` 和 `contrast-dark` 主题，在每个主题中都有可见的焦点指示器，并且提示不依赖颜色 |
| 文本缩放和页面缩放 | 在 200% 和 400% 缩放以及覆盖文本间距的情况下，布局仍可正常操作 |
| 自定义 | 提供用于发送自定义消息的公共 [`announce()`](api/spreadsheet_announce_method.md) 方法，以及适用于每个内置名称和播报内容的可翻译 `aria_*` 语言环境字符串 |
| 标准 | WCAG 2.2 AA、Section 508、EN 301 549 |

## 涵盖范围 {#covered-areas}

本指南涵盖 Spreadsheet 组件：

- 单元格、列头和行头、合并单元格以及冻结的行和列
- 选择：活动单元格、范围和多个范围
- 公式栏和单元格编辑器，包括带值列表的单元格的编辑器
- 带有颜色和边框弹出框的工具栏、菜单栏和上下文菜单
- 工作表标签
- 排序、筛选、搜索、数据验证、单元格中的链接、导入和导出
- 主题和焦点指示器

最终页面的无障碍程度还取决于宿主应用。请参阅[宿主页面的职责](#host-page-responsibilities)。

## WAI-ARIA 支持 {#wai-aria-support}

Spreadsheet 会自动为其标记添加 WAI-ARIA 角色和属性，且无法关闭。组件的每个部分都有各自的角色和名称，名称来自[语言环境](#localization)。

### Spreadsheet 容器 {#spreadsheet-container}

Spreadsheet 的各个部分都是独立的具名控件：

| 部分 | 角色 / 属性 | 无障碍名称 |
| ---- | ---------------- | --------------- |
| 菜单栏 | `role="menubar"` + `aria-label` | "Main" |
| 工具栏 | `role="toolbar"` + `aria-label` | "Formatting" |
| 公式栏 | 输入框上的 `aria-label` | "Formula bar, B7"，其中包含活动单元格的地址 |
| 单元格 | `role="grid"` + `aria-label` | "Spreadsheet" |
| 工作表标签 | `role="toolbar"` + `aria-label` | "Sheets" |
| 实时区域 | `role="status"`、`aria-live="polite"`、`aria-atomic="true"` | 视觉上隐藏，位于网格旁边，在 `role="grid"` 之外 |

Spreadsheet 的根元素没有地标角色，因此您可以将其放在适合您页面的地标内。

### 单元格表面 {#cell-surface}

以下属性描述单元格的整体情况，由 `.dhx_grid-content` 元素承载：

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| `.dhx_grid-content` | `role="grid"` | 可交互的单元格网格 |
| `.dhx_grid-content` | `aria-label` | "Spreadsheet"，来自 `aria_grid` 语言环境键 |
| `.dhx_grid-content` | `aria-rowcount` | 工作表的行数加上标题行 |
| `.dhx_grid-content` | `aria-colcount` | 可见列数加上行号列 |
| `.dhx_grid-content` | `aria-readonly` | 在[只读模式](api/spreadsheet_readonly_config.md)下以及[选择](api/spreadsheet_selection_config.md)功能关闭时为 `"true"` |
| `.dhx_grid-content` | `aria-multiselectable` | `"true"`；选择功能关闭时为 `"false"` |

### 行和单元格 {#rows-and-cells}

下表列出了行和单元格的角色，以及位置和状态属性：

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 行 | `role="row"` + `aria-rowindex` | 工作表的一行。由于列头是第一行，工作表的第 1 行具有 `aria-rowindex="2"` |
| 单元格 | `role="gridcell"` + `aria-colindex` | 一个单元格。由于行号是第一列，A 列具有 `aria-colindex="2"` |
| 行号 | `role="rowheader"` | 行的标题 |
| 单元格 | `aria-selected` | 在活动单元格和所选范围的每个单元格上为 `"true"` |
| 单元格 | `aria-readonly` | 在只读模式下、[选择](api/spreadsheet_selection_config.md)功能关闭时以及[锁定的单元格](work_with_cells.md#locking-cells)上为 `"true"` |
| 单元格 | `tabindex` | 活动单元格上为 `"0"`，其他单元格上为 `"-1"`，因此这些单元格只占一个 Tab 停靠点 |
| 活动单元格 | DOM 焦点 | 键盘焦点位于活动单元格本身，而不是单独的输入框上。编辑单元格时，焦点位于单元格编辑器上 |
| 合并单元格 | `aria-colspan` / `aria-rowspan` | 合并单元格跨越的列数或行数。被其覆盖的单元格使用 `aria-hidden="true"` 隐藏 |
| 单元格中的链接 | 带有 `target="_blank"` 和 `rel="noopener noreferrer"` 的 `<a href>` | 使用 `http`、`https`、`mailto`、`ftp` 或 `tel` 协议的链接 |

单元格还包含视觉上隐藏的文本，屏幕阅读器会将其与值一起朗读：

| 隐藏文本 | 出现时机 |
| ----------- | ---- |
| 单元格地址，例如 "B7" | 在活动单元格和所选范围的每个单元格上。屏幕阅读器会在值之前朗读地址 |
| "link" | 在带链接的已选单元格上。<kbd>Alt</kbd> + <kbd>Enter</kbd> 打开链接 |
| "locked" | 在已锁定的已选单元格上 |
| 公式错误的描述，例如 "Reference error. Check the cell references" | 在带公式错误的单元格上 |
| "Invalid value. Choose a value from the list" | 在其值不在[值列表](work_with_cells.md#using-drop-down-lists-in-cells)中的单元格上 |
| "Filter" / "Filter applied" | 在带筛选图标的单元格上 |

### 列头和行头 {#column-and-row-headers}

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 列字母 | `role="columnheader"` + `aria-colindex` | 列的标题 |
| 全选角落 | `role="columnheader"` | 名称为 "Select all" |
| 行号 | `role="rowheader"` | 行的标题 |
| 列菜单图标、隐藏行和隐藏列的图标 | `aria-hidden="true"` | 装饰性元素。相关命令位于上下文菜单中 |

标题不是 Tab 停靠点。点击列字母、行号或角落会选中相应的行或列，并将焦点返回到活动单元格。

### 公式栏和编辑器 {#formula-bar-and-editors}

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 公式栏输入框 | `aria-label` | "Formula bar, B7"，其中包含活动单元格的地址。在已锁定的单元格上，输入框为 `readonly`，因此仍可读取其值。选择功能关闭时，公式栏为空且被锁定 |
| 单元格编辑器输入框 | `aria-label` | "Cell editor, B7" |
| 带值列表的单元格的编辑器 | `role="combobox"`、`aria-controls`、`aria-expanded`、`aria-activedescendant` | 值列表是由 `option` 元素组成的 `listbox`，高亮的选项带有 `aria-selected` |
| 值无效的编辑器 | `aria-invalid="true"` | 单元格已保存的值不在其值列表中。该属性在值保存后更新，而不是在用户输入时更新 |
| 公式帮助的关闭图标 | `role="button"` + `aria-label` | "Close formula help" |

### 工具栏和菜单 {#toolbar-and-menus}

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 工具栏 | `role="toolbar"` + `aria-label` | "Formatting"；边框弹出框、搜索栏和链接弹出框的工具栏分别命名为 "Borders"、"Search" 和 "Link" |
| 工具栏按钮 | `aria-label` | 按钮的值。图标按钮以其工具提示命名，例如 "Bold (ctrl+b)"。图标使用 `aria-hidden="true"` 隐藏 |
| 加粗、斜体、下划线、删除线、锁定、筛选 | `aria-pressed` | 格式或筛选是否开启 |
| 打开下拉菜单的按钮 | `aria-haspopup="menu"`、`aria-expanded` | 下拉菜单是以其按钮命名的 `menu` |
| 对齐、文本换行、数字格式 | `role="menuitemradio"` + `aria-checked` | 互斥选项组中的一个选项 |
| 文本颜色、背景颜色、边框颜色 | `aria-label` | 控件名称及当前颜色，例如 "Text color: dark gray" |
| 调色板 | 由 `gridcell` 元素组成的 `role="grid"` | 该网格名称为 "Color palette"。每个颜色单元格以其颜色命名，已选中的颜色带有 `aria-selected="true"` |
| 边框样式列表 | 由 `option` 元素组成的 `role="listbox"` | 选项名称为 "Thin line"、"Medium line"、"Thick line"、"Dashed line"、"Dotted line"、"Double line" |
| 菜单栏 | `role="menubar"` + `aria-label` | "Main"。其菜单项会打开带有 `role="menu"` 的弹出框。在弹出框中，格式菜单项具有 `role="menuitemcheckbox"`，对齐、文本换行和数字格式菜单项具有 `role="menuitemradio"`。两者都通过 `aria-checked` 报告其状态 |
| 上下文菜单 | `role="menu"` + `aria-label` | 单元格的菜单为 "Cell"，工作表标签的菜单为 "Sheet" |

### 工作表标签 {#sheet-tabs}

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 工作表标签栏 | `role="toolbar"` + `aria-label` | "Sheets" |
| 工作表标签 | `button` + `aria-pressed` | 标签以其工作表命名。活动工作表的标签具有 `aria-pressed="true"` |
| 添加工作表按钮 | `aria-label` | "Add sheet" |

### 对话框 {#dialogs}

| 选择器 | 角色 / 属性 | 用途 |
| -------- | ---------------- | ------- |
| 列宽和行高对话框 | `role="dialog"`、`aria-modal="true"`、`aria-label` | 以对话框标题命名。输入框的标签为 "Width in pixels" / "Height in pixels" |
| 搜索栏 | `role="dialog"` + `aria-label` | 名称为 "Search"。搜索输入框的标签为 "Search"，按钮名称为 "Previous match"、"Next match" 和 "Close search" |
| 插入链接、数据验证 | `role="dialog"` + `aria-label` | 以对话框标题命名 |
| 警告框 | `role="alertdialog"`、`aria-modal="true"`、`aria-labelledby`、`aria-describedby` | 以警告框标题命名，并由其文本描述 |

### 隐藏元素和装饰性元素 {#hidden-and-decorative-elements}

Spreadsheet 使用 `aria-hidden="true"` 对辅助技术隐藏装饰性部分，包括锁定图标、筛选图标和列菜单图标、隐藏行和隐藏列的图标，以及全选图标。绘制选择区域、复制和搜索高亮以及填充柄的图层也会被隐藏。公式栏中公式的彩色副本，以及被合并单元格覆盖的单元格同样如此。布局包装元素具有 `role="presentation"`。网格前后的焦点哨兵元素仅用于将焦点传递给活动单元格。

## 选择和编辑模型 {#selection-and-editing-model}

DOM 焦点位于活动单元格本身，因此屏幕阅读器朗读的是单元格，而不是单独的输入框。活动单元格移动时，屏幕阅读器首先朗读新单元格的地址，然后是其值和隐藏描述。当用户使用键盘或鼠标选择范围时，屏幕阅读器会在选择不再变化后播报该范围的大小。被多个范围共有的单元格只计一次，隐藏行和隐藏列中的单元格也会被计入。编辑单元格时不会有任何播报。当范围缩减为活动单元格时，会播报该单元格的地址。

| 情形 | 屏幕阅读器获得的内容 |
| --------- | --------------------------- |
| 活动单元格移动 | 带有地址、值和描述的单元格，例如 "B7, 120, locked" |
| 选择一个范围 | "B2 to D7, 18 cells" |
| 使用 <kbd>Ctrl</kbd> 选择多个范围 | "B2 to B4, D2 to D4, 6 cells" |
| 通过 <kbd>Enter</kbd>、<kbd>F2</kbd> 或输入打开编辑器 | 名称为 "Cell editor, B7" 的编辑器输入框 |
| 打开带值列表的单元格的编辑器 | 已展开的组合框。按下 <kbd>↑</kbd> 或 <kbd>↓</kbd> 后，会朗读列表中高亮的选项 |
| 编辑已保存 | 会播报已编辑单元格及依赖它们的单元格中新出现的公式错误，以及已编辑单元格中的无效值 |
| 对锁定单元格的编辑被拒绝 | "The cell is locked" |
| 在只读模式下按下编辑键 | "The sheet is read-only" |

<kbd>Enter</kbd>、<kbd>F2</kbd> 或输入会打开编辑器。<kbd>Enter</kbd> 保存值并向下移动，<kbd>Tab</kbd> 保存值并向右移动，<kbd>Esc</kbd> 取消编辑。 

## 键盘导航 {#keyboard-navigation}

Spreadsheet 在页面上出现后键盘即可使用，无需任何配置。下表概述了键盘模型。完整的快捷键集合请参阅[快捷键列表](hotkeys.md)。

![通过向下箭头键打开的工具栏水平对齐下拉菜单，焦点位于其第一项](/img/accessibility/toolbar_dropdown_focus.png)

### 单元格 {#cells}

| 按键 | 操作 |
| ---- | ------ |
| 方向键 | 移动活动单元格。活动单元格会停在第一个和最后一个可见的行和列 |
| <kbd>Shift</kbd> + 方向键 | 扩展所选范围 |
| <kbd>Home</kbd> / <kbd>End</kbd> | 移至该行的第一个或最后一个可见单元格 |
| <kbd>Ctrl</kbd> + 方向键、<kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | 移至工作表的边缘 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 在行内向右或向左移动。从工作表的最后一个或第一个单元格出发，将焦点移出单元格，移至页面的下一个或上一个部分，例如工作表标签或公式栏 |
| <kbd>Enter</kbd>、<kbd>F2</kbd> | 打开编辑器 |
| <kbd>Esc</kbd> | 关闭编辑器且不保存 |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> / <kbd>Shift</kbd> + <kbd>Space</kbd> | 选择列或行 |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd> | 显示所选范围内的隐藏行或列 |
| <kbd>Alt</kbd> + <kbd>Enter</kbd> | 打开活动单元格的链接 |
| <kbd>Shift</kbd> + <kbd>F10</kbd> 或 Menu 键 | 打开上下文菜单，其中包含针对单元格的命令；在 <kbd>Ctrl</kbd> + <kbd>Space</kbd> 之后则为针对列的命令 |
| <kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>、<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | 切换到下一个或上一个工作表 |

### 在各部分之间移动 {#moving-between-the-parts}

| 按键 | 操作 |
| ---- | ------ |
| <kbd>Ctrl</kbd> + <kbd>F6</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd> | 将焦点移至下一个或上一个部分：菜单、工具栏、工作表、工作表标签。公式栏和隐藏的部分会被跳过。进行中的编辑会先被保存 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 按页面的 Tab 顺序将焦点移至下一个或上一个部分。每个栏只占一个 Tab 停靠点，焦点会落在最近使用的控件上 |

### 工具栏、菜单栏和工作表标签 {#toolbar-menu-bar-and-sheet-tabs}

| 按键 | 操作 |
| ---- | ------ |
| <kbd>←</kbd> / <kbd>→</kbd>、<kbd>Home</kbd> / <kbd>End</kbd> | 在栏的控件之间移动 |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | 按下控件：执行命令、打开下拉菜单或切换到工作表 |
| <kbd>↓</kbd> | 打开下拉菜单并将焦点移至其第一项 |
| <kbd>↑</kbd> / <kbd>↓</kbd> | 在已打开的下拉菜单或菜单的各项之间移动 |
| <kbd>→</kbd> / <kbd>←</kbd> | 打开或关闭子菜单 |
| <kbd>Esc</kbd> | 关闭下拉菜单或菜单，并将焦点返回到其控件 |

### 弹出框和对话框 {#popups-and-dialogs}

| 按键 | 操作 |
| ---- | ------ |
| 方向键、<kbd>Home</kbd> / <kbd>End</kbd> | 在调色板的颜色之间移动 |
| <kbd>Enter</kbd> | 应用颜色、边框，或列宽和行高对话框中的尺寸 |
| <kbd>Esc</kbd> | 关闭弹出框、对话框或搜索栏，并将焦点返回到打开它的控件或单元格。在自定义颜色模式下，返回调色板。在从边框弹出框打开的颜色或样式弹出框中，关闭该弹出框并将焦点返回到边框弹出框中的对应按钮 |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | 在对话框或自定义颜色模式的控件之间移动。在颜色弹出框或边框弹出框中，关闭该弹出框并将焦点返回到其工具栏按钮 |
| <kbd>↑</kbd> / <kbd>↓</kbd>、<kbd>Enter</kbd> | 在单元格的值列表中移动并选择一个值 |

:::note
仅限指针的操作都有键盘替代方式。上下文菜单中的 *Column width* 和 *Row height* 命令无需拖动即可设置精确的尺寸，*Open filter* 命令无需点击图标即可打开筛选器。
:::

## 辅助技术 {#assistive-technology}

DHTMLX 团队使用以下屏幕阅读器测试 Spreadsheet：

| 屏幕阅读器 | 浏览器 | 平台 |
| ------------- | ------- | -------- |
| NVDA | Firefox | Windows |
| JAWS | Chrome | Windows |
| VoiceOver | Safari | macOS |

屏幕阅读器从各状态所属的元素获取该状态：

| 状态 | 暴露方式 | 朗读位置 |
| ----- | --------------- | ------- |
| 位置 | `aria-rowindex`、`aria-colindex`，以及单元格文本中的单元格地址 | 每个单元格。地址包含在活动单元格和所选范围内单元格的文本中 |
| 选择 | `aria-selected` | 活动单元格和所选范围内的单元格 |
| 可编辑性 | `aria-readonly` | 只读模式下以及选择功能关闭时的网格和单元格，以及锁定的单元格 |
| 合并单元格 | `aria-colspan`、`aria-rowspan` | 合并单元格 |
| 行头 | `role="rowheader"` | 行号 |
| 切换状态 | `aria-pressed` | 加粗、斜体、下划线、删除线、锁定和筛选按钮，以及工作表标签 |
| 选中状态 | `aria-checked` | 菜单栏的格式菜单项，以及对齐、文本换行和数字格式菜单项 |
| 错误和无效值 | 单元格中的隐藏文本、`aria-invalid` | 单元格及其编辑器 |
| 链接 | `<a href>` 和隐藏文本 "link" | 带链接的单元格 |

## 高对比度和焦点 {#high-contrast-and-focus}

### 主题 {#themes}

Spreadsheet 有四个内置主题：`light`（默认）、`dark`、`contrast-light` 和 `contrast-dark`。`contrast-light` 和 `contrast-dark` 主题满足 WCAG AA 对文本的对比度要求。可以使用 `dhx.setTheme()` 方法或 `data-dhx-theme` 属性切换主题：

~~~jsx
dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

详情请参阅[内置主题](/themes/)一文。

在浅色主题中，标记公式单元格引用的颜色的对比度至少为 4.5:1。

`contrast-light` 主题在白色背景上绘制深色文本和边框。在下面的 Spreadsheet 中，带有筛选图标的单元格的上下文菜单通过键盘打开。获得焦点的命令 [*Open filter*](filtering_data.md#opening-a-filter-with-the-keyboard) 以虚线轮廓标记，活动单元格以主题主色的实线边框标记：

![contrast-light 主题中的 Spreadsheet](/img/accessibility/spreadsheet_contrast_light.png)

`contrast-dark` 主题在深色背景上绘制浅色文本和边框。当焦点位于工具栏控件上时，该控件以 `--dhx-spreadsheet-focus-color` 颜色的焦点环标记，在深色主题中，该颜色比活动单元格边框的主色更浅：

![contrast-dark 主题中的 Spreadsheet](/img/accessibility/spreadsheet_contrast_dark.png)

### 焦点指示器 {#focus-indicator}

键盘焦点在每个主题中都可见：

- 活动单元格具有主题主色的 2px 实线边框
- 获得键盘焦点的单元格和单元格编辑器具有主题主色的 2px 轮廓
- 公式栏，以及工具栏、菜单栏、工作表标签、边框弹出框、链接弹出框和搜索栏的控件，具有 `--dhx-spreadsheet-focus-color` 变量颜色的 2px 轮廓
- 在调色板、边框样式列表、工具栏和菜单栏的下拉菜单以及上下文菜单中，获得焦点的项具有 `--dhx-color-focused` 颜色的 1px 虚线轮廓
- 在单元格的列表编辑器中，焦点保留在编辑器内，列表的当前项以背景色高亮显示

在深色主题中，`--dhx-spreadsheet-focus-color` 变量比主色更浅，并且可以在[自定义主题](themes/custom_theme.md)中重新定义。每个指示器在每个主题中的对比度见[无障碍合规报告](accessibility_conformance_report.md)。

### 颜色和缩放 {#color-and-zoom}

- **颜色不是唯一的提示。** 活动单元格和选区同时具有边框和填充，无效值具有标记和隐藏描述，格式按钮通过 `aria-pressed` 报告其状态。颜色按钮的无障碍名称中包含颜色名称。
- **缩放和重排。** Spreadsheet 在 200% 和 400% 缩放下仍可操作。单元格可向两个方向滚动，工具栏、菜单栏和工作表标签适配 320 CSS px 的宽度。
- **文本间距。** 在应用 WCAG 文本间距覆盖时，不会有控件标签被截断，并且当标签增多时，工作表标签栏可以滚动。
- **滚动到可见区域。** 活动单元格会滚动到可见区域，并位于冻结的行和列旁边。

## 状态播报 {#status-announcements}

Spreadsheet 通过礼貌（polite）实时区域播报没有独立元素的变化，因此屏幕阅读器会先读完当前这句话：

| 事件 | 播报文本 | 语言环境键 |
| ----- | -------------- | ---------- |
| 选择一个范围 | "B2 to D7, 18 cells" | `aria_selectedRange`、`aria_rangeExtent`、`aria_rangeSeparator` |
| 编辑导致公式错误或无效值 | "B7: Reference error. Check the cell references" | `aria_cellMessage` |
| 编辑导致多个错误 / 无效值 | "3 new errors. B7: ..." / "3 invalid values. B7: ..." | `aria_newErrors`、`aria_invalidValues` |
| 对锁定的单元格 / 范围的编辑被拒绝 | "The cell is locked" / "Locked cells were not changed" | `aria_lockedCell`、`aria_lockedCells` |
| 在只读模式下按下编辑键 | "The sheet is read-only" | `aria_readonlySheet` |
| 输入搜索文本 | "Results: 5. 1 of 5, B2" 或 "No results" | `aria_searchResults`、`aria_searchMatch`、`aria_searchNoResults` |
| 显示下一个或上一个匹配项 | "2 of 5, B7" | `aria_searchMatch` |
| 导出 Excel 文件 | "Exporting the file"、"The file is exported" | `aria_exportStarted`、`aria_exportDone` |
| 导入在文件对话框中选择的文件 | "Importing the file"、"The file is imported" | `aria_importStarted`、`aria_importDone` |
| 应用列宽 / 行高命令 | "Column width set to 120 pixels" | `aria_columnWidthSet`、`aria_rowHeightSet` |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd> 没有找到可显示的内容 | "No hidden rows in the selection" | `aria_noHiddenRows`、`aria_noHiddenCols` |

若要播报您自己命令的结果，请调用 [`announce()`](api/spreadsheet_announce_method.md) 方法：

~~~jsx
spreadsheet.announce("The report is saved");
~~~

## 本地化 {#localization}

无障碍名称、单元格描述和播报内容以带有 `aria_` 前缀的键存储在 `spreadsheet` 语言环境中，与界面标签放在一起。请在初始化 Spreadsheet 之前使用 `dhx.i18n.setLocale()` 方法翻译它们：

~~~jsx
dhx.i18n.setLocale("spreadsheet", {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_cellEditor: "Zelleneditor, {cell}",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt",
    aria_selectedRange: "{range}, {count} Zellen",
    aria_rangeExtent: "{start} bis {end}"
});

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

花括号中的部分，例如 `{cell}` 或 `{count}`，会被替换为相应的值，必须保留在翻译后的字符串中。颜色名称和警告框按钮的名称来自 `colorpicker` 和 `message` 语言环境。完整的键列表请参阅[本地化](localization.md#default-locale)，其他语言环境请参阅[本地化内置组件](localization.md#localizing-built-in-widgets)。

## 配置示例 {#configuration-recipes}

### 无障碍默认设置 {#accessible-default-setup}

Spreadsheet 的键盘和 WAI-ARIA 输出无需任何配置。若要满足 WCAG AA 对文本的对比度要求，请选择对比度主题。设置主题的其他方式请参阅[内置主题](/themes/)：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // the keyboard navigation and the WAI-ARIA output need no configuration
});
spreadsheet.parse(data);

dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

### 只读设置 {#read-only-setup}

使用 [`readonly`](api/spreadsheet_readonly_config.md) 选项显示用户可以阅读和复制但不能修改的数据。键盘和屏幕阅读器用户仍然可以在单元格间移动：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true
});
spreadsheet.parse(data);
~~~

若要在没有活动单元格和选择的情况下显示数据，请添加 [`selection: false`](api/spreadsheet_selection_config.md)。此时网格会成为一个键盘可直接通过的 Tab 停靠点。

### 翻译无障碍字符串 {#translated-accessibility-strings}

屏幕阅读器从四个语言环境中读取无障碍字符串：`spreadsheet` 包含名称、单元格描述和播报内容，`colorpicker` 包含颜色名称，`message` 包含警告框按钮的名称，`grid` 包含已加载行数的播报内容。请在创建 Spreadsheet 之前设置这四个语言环境。键的说明请参阅[本地化内置组件](localization.md#localizing-built-in-widgets)：

~~~jsx
const deSpreadsheet = {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt"
};
const deColorpicker = {
    aria_palette: "Farbpalette",
    aria_colorRed: "rot"
};
const deMessage = {
    aria_confirm: "Bestätigen"
};
const deGrid = {
    aria_rowsLoaded: "{count} Zeilen geladen"
};

dhx.i18n.setLocale("spreadsheet", deSpreadsheet);
dhx.i18n.setLocale("colorpicker", deColorpicker);
dhx.i18n.setLocale("message", deMessage);
dhx.i18n.setLocale("grid", deGrid);

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

### 播报自定义命令 {#announcing-a-custom-command}

当您自己的命令更改数据时，请使用 [`announce()`](api/spreadsheet_announce_method.md) 方法告知屏幕阅读器用户结果。下面的示例添加了一个清空活动工作表的[菜单](customization.md#menu)命令：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");

spreadsheet.menu.data.add({ id: "clear-sheet", value: "Clear sheet" });

spreadsheet.menu.events.on("click", function (id) {
    if (id === "clear-sheet") {
        spreadsheet.sheets.clear();
        spreadsheet.announce("The sheet is cleared");
    }
});
~~~

## 宿主页面的职责 {#host-page-responsibilities}

有一些要求属于页面层面，而不在组件内部。请确保宿主页面：

- 设置文档语言，例如 `<html lang="en">`，并设置页面标题
- 在 Spreadsheet 上方放置标题，并将其置于地标内，例如 `<main>`
- 如果 Spreadsheet 之前有很长的导航，则提供跳转链接
- 为任何用单元格颜色标记的状态提供第二种提示，例如文本或图标，因为单元格样式的颜色属于您的数据
- 检查您在单元格样式和自定义主题中设置的颜色的对比度

## 测试和方法 {#testing-and-methodology}

DHTMLX 团队基于组件源代码并在浏览器中验证 Spreadsheet 6.0.4 的无障碍性：

1. **自动化测试**：在 `light`、`dark`、`contrast-light` 和 `contrast-dark` 主题中使用 [axe-core](https://github.com/dequelabs/axe-core)，并在搜索栏、列表编辑器、对话框和警告框处于打开状态时进行测试。
2. **人工源代码审查**：检查各部分的角色、状态和名称，键盘处理程序和焦点区域，以及主题令牌及其对比度。
3. **人工测试**：对单元格、各栏、菜单和对话框进行仅键盘操作的走查，使用 NVDA、JAWS 和 VoiceOver 进行屏幕阅读器测试，200% 和 400% 缩放，320 CSS px 下的重排，以及 WCAG 文本间距覆盖。
4. **合规报告**：结果按准则逐条发布在[无障碍合规报告](accessibility_conformance_report.md)中，包括 Spreadsheet 部分支持的准则。

## 相关资源 {#resources}

- [无障碍合规报告（VPAT 2.5）](accessibility_conformance_report.md)
- [快捷键列表](hotkeys.md)
- [`readonly`](api/spreadsheet_readonly_config.md)
- [`selection`](api/spreadsheet_selection_config.md)
- [`announce()`](api/spreadsheet_announce_method.md)
- [本地化](localization.md)
- [内置主题](/themes/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Authoring Practices: Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WAI-ARIA Authoring Practices: Toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
