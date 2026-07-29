---
sidebar_label: 更新日志
title: DHTMLX Spreadsheet 更新日志
description: 您可以在文档中了解 DHTMLX JavaScript Spreadsheet 库的最新动态。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 更新日志 {#whats-new}

如果您正在从旧版本升级 Spreadsheet，请查阅[迁移到新版本](migration.md)了解详细信息。

## 版本 6.0.2 {#version-602}

发布于 2026 年 7 月 1 日

### 修复 {#fixes}

- 经历"从 Excel 复制 → 粘贴到 Spreadsheet → 导出/导入"流程后，单元格边框丢失的问题
- 粘贴到最后一行下方的数据无法显示，原因是网格未添加新行来容纳这些数据

## 版本 6.0 {#version-60}

发布于 2026 年 5 月 20 日

[博客中的版本回顾](https://dhtmlx.com/blog/meet-dhtmlx-spreadsheet-6-0/)

### 重大变更 {#breaking-changes}

新版本对 Spreadsheet API 引入了重大变更：部分方法、属性和事件已被标记为废弃。请查阅[迁移指南](migration.md#52---60)以跟进最新版本。

### 新功能 {#new-functionality}

- 引入了 [React Spreadsheet 封装](react.md)。相关示例请查看 [GitHub 示例仓库](https://github.com/DHTMLX/react-spreadsheet-examples)
- 引入了 [`SheetManager`](api/overview/sheetmanager_overview.md) 模块。这是一个用于管理 Spreadsheet 中工作表的集中式 API，可通过 `spreadsheet.sheets` 属性访问，并替代了根 Spreadsheet 实例上所有[已废弃的工作表相关方法](migration.md#deprecated-methods)。
    - 新方法：[`sheets.add()`](api/sheetmanager_add_method.md)、[`sheets.remove()`](api/sheetmanager_remove_method.md)、[`sheets.getAll()`](api/sheetmanager_getall_method.md)、[`sheets.getActive()`](api/sheetmanager_getactive_method.md)、[`sheets.setActive()`](api/sheetmanager_setactive_method.md)、[`sheets.clear()`](api/sheetmanager_clear_method.md)、[`sheets.get()`](api/sheetmanager_get_method.md)
- 通过新的 [`addFormula()`](api/spreadsheet_addformula_method.md) 方法支持指定[自定义（用户定义）公式](functions.md#custom-formulas)
- 支持以[科学计数法（指数表示法）](number_formatting.md#scientific-number-format)显示数字

### 更新 {#updates}

- 支持调整单元格内容的字体大小：
    - 通过[内置工具栏控件](customization.md#default-controls)设置默认字体大小选项
    - 为工具栏控件设置[自定义字体大小](customization.md#custom-font-size)
- [公式引擎](functions.md#math-functions)中新增了条件聚合函数：`COUNTIF`、`COUNTIFS`、`SUMIF`、`SUMIFS`、`AVERAGEIF`、`AVERAGEIFS`、`MAXIFS`、`MINIFS`
- [公式引擎](functions.md#array-functions)中新增了动态数组函数：`CHOOSECOLS`、`CHOOSEROWS`、`DROP`、`EXPAND`、`RANDARRAY`、`SEQUENCE`、`SORT`、`SORTBY`、`TAKE`、`TEXTSPLIT`、`TOCOL`、`TOROW`、`UNIQUE`、`WRAPCOLS`、`WRAPROWS`
- 为 Spreadsheet 添加了 [`awaitRedraw()`](awaitredraw.md) 辅助工具，用于检测渲染过程并在组件完成渲染后执行所需代码
- 在类型定义中添加了 [JSDoc 注解](using_typescript.md#jsdoc-hints)，可在 IDE 中直接提供内联 API 描述、参数类型和代码示例

### 修复 {#fixes-60}

- 通过 API 切换活动工作表后焦点丢失的问题
- 转置模式下返回已更改单元格数组的问题
- 粘贴后重新计算依赖公式的问题
- 粘贴操作期间用公式覆盖锁定单元格的问题
- 在锁定单元格中运行数学公式的问题
- 对类似单元格引用、以数字开头或包含特殊字符的工作表名称进行转义的问题
- 当单元格 id 为零（第一个工作表的第一个单元格）时动态数组出现的问题

## 版本 5.2.9 {#version-529}

发布于 2026 年 1 月 8 日

### 修复 {#fixes-529}

- 在已打开的编辑器中输入时，编辑器下拉筛选现在使用 `startsWith` 而非 `includes`
- Excel 单元格边框在导出和导入后现在可以保留
- 防止从外部表格粘贴时字体大小被覆盖

## 版本 5.2.8 {#version-528}

发布于 2025 年 12 月 15 日

### 修复 {#fixes-528}

- 在公式编辑期间选择其他单元格时焦点丢失的问题
- 键盘导航相关问题

## 版本 5.2.7 {#version-527}

发布于 2025 年 12 月 9 日

### 修复 {#fixes-527}

- 工作表包含带数据验证列表的单元格时导出到 Excel 失败的问题
- 当单元格初始值为 `%` 时，带数据验证列表的下拉框停止工作的问题
- 在公式栏中设置焦点后 `INDEX/MATCH` 公式失效的问题

## 版本 5.2.6 {#version-526}

发布于 2025 年 11 月 19 日

### 修复 {#fixes-526}

- 导入包含自动换行单元格的 .xlsx 文件时出现多余 DOM 元素的问题
- 管理列时列上下文菜单中列/行标签显示不正确的问题
- 冻结包含合并单元格的区域时工作表结构损坏的问题
- 改进了含有跨行/跨列单元格的工作表中的键盘导航

## 版本 5.2.5 {#version-525}

发布于 2025 年 10 月 23 日

### 修复 {#fixes-525}

- 对适合列宽的内容应用"自动换行"选项时行高减小的问题

## 版本 5.2.4 {#version-524}

发布于 2025 年 9 月 24 日

### 修复 {#fixes-524}

- 添加了对多行单元格的导出/导入支持

## 版本 5.2.3 {#version-523}

发布于 2025 年 9 月 10 日

### 修复 {#fixes-523}

- 插入数组时单元格中数字对齐不正确的问题
- 改进了亚洲语言的输入体验

## 版本 5.2.2 {#version-522}

发布于 2025 年 8 月 18 日

### 更新 {#updates-522}

- 增强了 `setValidation()` 以支持内置下拉编辑器中的预测筛选
- 添加了对隐藏/冻结列/行、数据验证选择框以及 .xlsx 文件中 Excel 链接的导出/导入支持

### 修复 {#fixes-522}

- 在冻结列/行中取消合并跨行/跨列单元格的问题
- 应用内置主题的问题
- 中文输入的问题
- MacOS 上日语输入的问题：自动补全确认导致编辑器关闭
- 编译 `spreadsheet.d.ts` 文件的问题

## 版本 5.2.1 {#version-521}

发布于 2025 年 6 月 30 日

### 更新 {#updates-521}

- 支持通过上下文菜单在一次操作中删除多个列/行

### 修复 {#fixes-521}

- 复制/粘贴脚本错误
- 在工作表中选择两行或多行末尾行时删除行出现的错误
- 工具栏自定义时显示警告的问题
- 日期选择器缺少本地化的问题
- 工具栏中垂直滚动条不必要显示的问题
- 修复公式计算的数学错误

## 版本 5.2 {#version-52}

发布于 2025 年 5 月 20 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-2/)

### 重大变更 {#breaking-changes-52}

新版本对列和行的冻结/解冻功能引入了一些变更。请查阅[迁移指南](migration.md#51---52)以跟进最新版本。

### 废弃 {#deprecated}

- `leftSplit` 和 `topSplit` 配置属性已被移除

### 新功能 {#new-functionality-52}

- 编辑单元格：
    - 支持[通过界面为一组单元格创建带样式的边框](data_formatting.md#styled-borders-for-cells)
- 冻结/解冻列/行：
    - 支持通过[界面](work_with_rows_cols.md#freezingunfreezing-rows-and-columns)冻结/解冻列和行
    - 支持通过 [API](working_with_ssheet.md#freezingunfreezing-rows-and-columns) 冻结/解冻列和行
        - 新方法：[`freezeCols()`](api/spreadsheet_freezecols_method.md)、[`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)、[`freezeRows()`](api/spreadsheet_freezerows_method.md)、[`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)
        - 新 action：[`toggleFreeze`](api/overview/actions_overview.md#list-of-actions)
        - [`parse()`](api/spreadsheet_parse_method.md) 方法的 *sheets* 对象新增 `freeze` 属性
- 隐藏/显示列/行：
    - 支持通过[界面](work_with_rows_cols.md#hidingshowing-rows-and-columns)隐藏/显示列和行
    - 支持通过 [API](working_with_ssheet.md#hidingshowing-rows-and-columns) 隐藏/显示列和行
        - 新方法：[`hideCols()`](api/spreadsheet_hidecols_method.md)、[`showCols()`](api/spreadsheet_showcols_method.md)、[`hideRows()`](api/spreadsheet_hiderows_method.md)、[`showRows()`](api/spreadsheet_showrows_method.md)
        - 新 action：[`toggleVisibility`](api/overview/actions_overview.md#list-of-actions)
        - [`parse()`](api/spreadsheet_parse_method.md) 方法 *sheets* 对象的 *cols* 和 *rows* 配置新增 `hidden` 属性
- 使用公式：
    - 添加了[公式说明弹出框](functions.md#popup-with-formula-description)
    - 新增本地化字段：[`formulas`](localization.md#default-locale-for-formulas)
- 文件导入：
    - 新增 [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md) 事件，用于指示数据加载到 Spreadsheet 已完成

### 修复 {#fixes-52}

- 排序问题
- 筛选器移动到新列的问题
- 使用 "addSheet" action 阻止添加工作表时出现的错误
- 筛选空白单元格的问题
- 编辑大型跨行/跨列表格的问题
- 在单元格中撤销操作时出现的错误
- 进入/编辑含有 IF 公式的单元格时出现的错误
- 剪切并粘贴链接后出现的脚本错误
- 导出/导入 .xlsx 文件时文本对齐方式更改的问题
- 某些操作后 Spreadsheet 失去焦点的问题
- 性能改进

## 版本 5.1.8 {#version-518}

发布于 2024 年 12 月 10 日

### 修复 {#fixes-518}

- 导入到框架时本地试用包的问题

## 版本 5.1.7 {#version-517}

发布于 2024 年 11 月 27 日

### 修复 {#fixes-517}

- 移除了 "item not found" 警告
- 解析优化
- 使用 (Shift)+Tab 快捷键移动到相邻单元格时，已打开的单元格编辑器不再关闭

## 版本 5.1.6 {#version-516}

发布于 2024 年 7 月 25 日

### 修复 {#fixes-516}

- 插入的行/列在加载时从序列化数据中丢失
- 空日期单元格在日期选择器和时间选择器中显示最后选择的日期
- 数字本地化和单元格中空字符串值的问题
- 编辑单元格时搜索功能无法获得焦点
- 为 Spreadsheet 容器使用 `ngIf/ngFor` 导致组件损坏

## 版本 5.1.5 {#version-515}

发布于 2024 年 2 月 13 日

### 修复 {#fixes-515}

- 粘贴包含零的单元格会创建空单元格
- 复制后粘贴空单元格抛出错误
- 修复通用格式的 `setValue()` 功能
- 在序列化期间保存工作表 id 并通过 `afterAction` 事件返回
- 修复通过界面使用跨工作表公式
- 修复 Ctrl+F 搜索

## 版本 5.1.4 {#version-514}

发布于 2024 年 1 月 31 日

### 修复 {#fixes-514}

- 跨行/跨列单元格粘贴不正确的问题

## 版本 5.1.3 {#version-513}

发布于 2024 年 1 月 29 日

### 修复 {#fixes-513}

- "common" 格式下数字值解析不正确的问题
- Spreadsheet 与 Suite 一起使用时的本地化 i18n 问题
- 加载包含大量跨行/跨列单元格的表格时的性能问题
- 跨行/跨列单元格粘贴不正确的问题

## 版本 5.1.2 {#version-512}

发布于 2024 年 1 月 16 日

### 修复 {#fixes-512}

- 修复复制和粘贴单元格的问题。从 Excel 复制并粘贴到 Spreadsheet 的含日期单元格显示为字符串
- 修复 "common" 格式中被格式化为数字的数字值问题
- 修复解析数据时修改初始数据集的问题
- 修复跨行/跨列单元格粘贴的问题

## 版本 5.1.1 {#version-511}

发布于 2023 年 12 月 14 日

### 修复 {#fixes-511}

- 修复 `fixColumn()` 方法忽略选择编辑器箭头图标的问题
- 修复单元格样式优先于区域样式的问题
- 修复复制/粘贴含有已应用样式的单元格内容及撤销功能的问题
- 修复粘贴到不同单元格时链接发生变化的问题
- 修复合并单元格的复制/粘贴问题
- 修复样式序列化的问题
- 修复调用 `setSelectedCell()` 或 `setFocusedCell()` 方法时滚动到单元格的问题

## 版本 5.1 {#version-51}

发布于 2023 年 12 月 7 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-1/)

### 新功能 {#new-functionality-51}

- [支持新主题](/themes/)：深色、浅色高对比度和深色高对比度
- 扩展了[数字、日期、时间和货币格式本地化的支持](number_formatting.md#number-date-time-currency-localization)
- [与 Svelte 框架集成](svelte_integration.md)
- 支持[为导出的 .xlsx 文件提供自定义名称](loading_data.md#how-to-set-a-custom-name-for-an-exported-file)
- 支持在数据集中[保存单元格的"锁定"状态](loading_data.md#setting-the-locked-state-for-a-cell)和[为单元格指定链接](loading_data.md#adding-a-link-into-a-cell)

### 更新 {#updates-51}

- 更新了[与 React、Angular 和 Vue.js 的集成](/integrations/)
- 自动[将公式中的小写字母转换为大写](functions.md)
- 公式自动闭合

### 修复 {#fixes-51}

- 修复对单元格中设置的值应用撤销的问题
- 修复粘贴行数的限制
- 修复编辑行中公式中的空格被替换为 `&nbsp;` 符号的问题
- 修复 Excel 导入中日期类值处理不正确的问题
- 修复单元格块编辑不正确的问题
- 修复筛选期间调用 `getExcelDate()` 时出现的脚本错误
- 修复粘贴单元格内容时将文本值转换为数字的问题
- 修复从列宽已修改的 Excel 文件粘贴数据时不正确的问题

## 版本 5.0.10 {#version-5010}

发布于 2023 年 11 月 27 日

### 修复 {#fixes-5010}

- 修复类型问题

## 版本 5.0.9 {#version-509}

发布于 2023 年 10 月 24 日

### 修复 {#fixes-509}

- 修复 setStyle() 方法调用不正确的问题，该方法在 before/afterSelectionSet 事件之前触发
- 修复内容自动换行不正确的问题
- 修复类型问题

## 版本 5.0.7 {#version-507}

发布于 2023 年 9 月 21 日

### 修复 {#fixes-507}

- 修复将公式导出到 Excel 的问题
- 修复单击撤销按钮时恢复单元格剪切内容的问题

## 版本 5.0.6 {#version-506}

发布于 2023 年 9 月 18 日

### 修复 {#fixes-506}

- 修复零值渲染的问题
- 修复应用以字符串值设置的颜色样式的问题
- 修复 XSS 漏洞问题
- 修复在非活动工作表中更改值时修改了活动工作表中值的问题

## 版本 5.0.5 {#version-505}

发布于 2023 年 8 月 10 日

### 修复 {#fixes-505}

- 修复 XSS 漏洞问题
- 修复包含单元格跨行/跨列的数据粘贴不正确的问题

## 版本 5.0.4 {#version-504}

发布于 2023 年 6 月 5 日

### 修复 {#fixes-504}

- 修复只读模式下块选择或上下文菜单调用时的错误
- 修复只读模式下显示编辑菜单的问题
- 修复数字四舍五入不正确的问题
- 修复合并单元格后编辑行中公式被其结果替换的问题

## 版本 5.0.3 {#version-503}

发布于 2023 年 4 月 26 日

### 修复 {#fixes-503}

- 修复计算最后一个要合并的单元格时的不正确行为
- 修复 Excel 导入/导出的问题
- 修复应用数据验证后数据被交换的问题
- 修复将含有"："符号的文本解释为链接的问题
- 修复多行数据加载问题。现在可以在 [`styles`](api/spreadsheet_parse_method.md#parsing-styled-data) 对象中设置 `multiline: "wrap"` 属性
- 修复当 [`multiSheets`](api/spreadsheet_multisheets_config.md) 设置为 `false` 时 Spreadsheet 初始化时合并单元格的问题
- 修复双击表头列边框后重置列滚动位置的问题

## 版本 5.0.2 {#version-502}

发布于 2023 年 2 月 14 日

### 修复 {#fixes-502}

- 修复复制并粘贴单元格值后单元格对齐方式未保存的问题
- 修复排序数据后筛选结果发生变化的问题
- 修复时间选择器中 12 小时格式显示的问题
- 修复单元格自动填充后链接样式被移除的问题
- 现在可以为日期添加多个[自定义格式](number_formatting.md#formats-customization)
- 现在即使行/列属于[受限的列和行](configuration.md#number-of-rows-and-columns)，也可以删除

## 版本 5.0.1 {#version-501}

发布于 2023 年 1 月 19 日

### 修复 {#fixes-501}

- 修复在带货币格式的单元格中输入的值被保存为字符串而非数字的问题
- 修复清除先前搜索单元格选中状态的问题
- 修复将数据解析到电子表格后数据显示的问题
- 修复删除列后网格重绘的问题
- 修复空值排序的问题
- 修复使用下拉列表时数字值验证的问题
- 修复含字母数字值的单元格自动填充
- 改进了数字格式掩码的处理
- 现在所有单元格中的数字值默认右对齐

## 版本 5.0 {#version-50}

发布于 2022 年 11 月 21 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-5-0/)

### 重大变更 {#breaking-changes-50}

新版本对 [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 属性引入了一些变更。请查阅[迁移文章](migration.md#43---50)以跟进最新版本。

### 新功能 {#new-functionality-50}

- 数据搜索：
    - 支持通过[界面](data_search.md)搜索数据
    - 支持通过 [API](working_with_ssheet.md#searching-for-data) 搜索数据：
        - 新方法：[`search()`](api/spreadsheet_search_method.md) 和 [`hideSearch()`](api/spreadsheet_hidesearch_method.md)
- 筛选数据：
    - 支持通过[界面](filtering_data.md)筛选数据
    - 支持通过 [API](working_with_ssheet.md#filtering-data) 筛选数据：
        - 新方法：[`setFilter()`](api/spreadsheet_setfilter_method.md) 和 [`getFilter()`](api/spreadsheet_getfilter_method.md)
        - 新 action：[`filter`](api/overview/actions_overview.md#list-of-actions)
- 合并/拆分单元格：
    - 支持通过[界面](merge_cells.md)合并/拆分单元格
    - 支持通过 [API](working_with_cells.md#merging-cells) 合并/拆分单元格：
        - 工作表对象的新属性：[`merged`](api/spreadsheet_parse_method.md)
        - 新方法：[`mergeCells()`](api/spreadsheet_mergecells_method.md)
        - 新 actions：[`merge`](api/overview/actions_overview.md#list-of-actions) 和 [`unmerge`](api/overview/actions_overview.md#list-of-actions)
- 列宽自动适应：
    - 支持通过[界面](work_with_rows_cols.md#autofit-column-width)自动适应列宽
    - 支持通过 [API](working_with_ssheet.md#autofit-column-width) 自动适应列宽：
        - 新方法：[`fitColumn()`](api/spreadsheet_fitcolumn_method.md)
        - 新 action：[`fitColumn`](api/overview/actions_overview.md#list-of-actions)
- 插入超链接：
    - 支持通过[界面](work_with_cells.md#inserting-a-hyperlink-into-a-cell)向单元格插入超链接
    - 支持通过 [API](working_with_cells.md#inserting-a-hyperlink-into-a-cell) 向单元格插入超链接：
        - 新方法：[`insertLink()`](api/spreadsheet_insertlink_method.md)
        - 新 action：[`insertLink`](api/overview/actions_overview.md#list-of-actions)
- [数据删除线格式](data_formatting.md#color-and-style)

### 更新 {#updates-50}

- [扩展的本地化选项列表](localization.md#default-locale)
- [扩展的快捷键组合列表](hotkeys.md)：
    - 用于数据搜索
        - `Ctrl (Cmd) + F`
        - `Ctrl (Cmd) + G`
        - `Ctrl (Cmd) + Shift + G`
    - 用于选择整列/整行
        - `Ctrl (Cmd) + Space`
        - `Shift + Space`
    - 用于将单元格内容左对齐/右对齐/居中对齐
        - `Ctrl (Cmd) + Shift + L`
        - `Ctrl (Cmd) + Shift + R`
        - `Ctrl (Cmd) + Shift + E`
    - 用于为单元格内容添加删除线
        - `Alt + Shift + 5 (Cmd + Shift + X)`
    - 用于添加新工作表和在工作表之间切换
        - `Shift + F11`
        - `Alt + Arrow Up/ Arrow Down`
    - 用于在单元格中插入超链接
        - `Ctrl (Cmd) + K`

## 版本 4.3 {#version-43}

发布于 2022 年 5 月 23 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-3/)

### 重大变更 {#breaking-changes-43}

版本 4.3 没有引入重大变更，但引入了一种处理电子表格中执行的 actions 的新方式。详情请查阅[迁移文章](migration.md#42---43)。

### 新功能 {#new-functionality-43}

- 支持通过 [`setValidation()`](api/spreadsheet_setvalidation_method.md) 方法或[界面](work_with_cells.md#using-drop-down-lists-in-cells)向单元格添加下拉选项列表
- 支持通过 `topSplit` 属性在电子表格顶部固定行
- 支持通过 [`sortCells()`](api/spreadsheet_sortcells_method.md) 方法或[界面](sorting_data.md)对数据进行排序
- [支持将长文本拆分为多行](data_formatting.md#wrap-text-in-a-cell)（工具栏中添加了*文本自动换行*按钮）
- 大幅扩展了支持的[日期、财务、数学、字符串函数](functions.md#information-functions)列表（标注了 *v4.3 中新增* 标签）
- 支持[查找函数](functions.md#lookup-functions)
- 添加了[时间格式](number_formatting.md#default-number-formats)
- 支持通过 [`timeFormat`](api/spreadsheet_localization_config.md) 属性定义电子表格单元格中时间的格式
- 支持通过时间选择器在单元格中输入时间
- [导出为 JSON](api/export_json_method.md)
- [从 JSON 导入](api/spreadsheet_load_method.md#loading-json-files)
- 新增事件：[beforeAction](api/spreadsheet_beforeaction_event.md) 和 [afterAction](api/spreadsheet_afteraction_event.md)
- 新的 [Actions 系统](api/overview/actions_overview.md)

### 更新 {#updates-43}

- [`parse()`](api/spreadsheet_parse_method.md) 方法已更新。单元格对象新增 **editor** 属性

## 版本 4.2 {#version-42}

发布于 2021 年 11 月 29 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-2-with130-new-functions-boolean-operators-date-format-row-resizing-much/)

### 新功能 {#new-functionality-42}

- 支持[日期](functions.md#date-functions)、[财务](functions.md#financial-functions)、[信息](functions.md#information-functions)、[正则](functions.md#regex-functions)和[其他](functions.md#other-functions)函数
- 支持[布尔运算符](functions.md#boolean-operators)
- 支持通过界面调整行高
- 工具栏中新增[垂直对齐](data_formatting.md#alignment)按钮
- 支持通过 `setActiveSheet()` 方法设置活动工作表
- 支持通过 Selection 对象的 [`removeSelectedCell()`](api/selection_removeselectedcell_method.md) 方法从指定单元格移除选中状态
- 支持通过 [`clear()`](api/spreadsheet_clear_method.md) 或 `clearSheet()` 方法分别清除电子表格或其工作表
- 新增事件：[`beforeClear`](api/spreadsheet_beforeclear_event.md)、[`afterClear`](api/spreadsheet_afterclear_event.md)、`beforeSheetClear`、`afterSheetClear`
- 支持通过 [`dateFormat`](api/spreadsheet_localization_config.md) 属性定义电子表格中日期的格式
- [日期格式已添加到默认数字格式中](number_formatting.md#default-number-formats)

### 更新 {#updates-42}

- 扩展了[本地化选项](localization.md)列表
- 扩展了[数学](functions.md#math-functions)和[字符串](functions.md#string-functions)函数列表
- Spreadsheet 工具栏的对齐块已更新。详情请查阅[迁移文章](migration.md#41---42)
- [`parse()`](api/spreadsheet_parse_method.md) 和 [`serialize()`](api/spreadsheet_serialize_method.md) 方法已更新。工作表对象的新 **rows** 和 **cols** 属性允许保存每个工作表的行高和列宽状态。

### 修复 {#fixes-42}

- CTRL-X 快捷键问题
- 在隐藏[编辑栏](api/spreadsheet_editline_config.md)的电子表格中编辑单元格时出现脚本错误的问题

## 版本 4.1.3 {#version-413}

发布于 2021 年 8 月 31 日

[博客中的版本回顾](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-6-scheduler-5-3-12-suite-7-2-1/)

### 修复 {#fixes-413}

- 修复删除行/列后撤销操作恢复时的不正确行为
- 修复数字格式对象中"mask"属性的不正确工作
- 修复从 Excel 粘贴数据到电子表格时选区顶部空单元格/行被截断的问题
- 修复绝对公式引用的单元格未被标记的问题
- 修复"afterSelectionSet"事件在选择一个单元格区域后触发两次的问题
- 修复 TypeScript 定义问题
- 修复"text"数字格式的问题

## 版本 4.1.2 {#version-412}

发布于 2021 年 6 月 3 日

[博客中的版本回顾](https://dhtmlx.com/blog/maintenance-release-suite-7-1-9-spreadsheet-4-1-2/)

### 修复 {#fixes-412}

- 修复同时对多列应用自动填充时包含数学函数的单元格自动填充不正确的问题
- 修复使用"Ctrl + 单击"后再次单击同一单元格时，选中单元格未取消选中的问题
- 修复使用键盘导航选择公式后将数学公式应用于单元格的问题
- 修复使用"Ctrl + 单击"选择单元格时锁定/解锁单元格的问题
- 修复"serialize()"方法导致"0"值未被序列化的问题
- 修复单击表头列边框后列宽自动调整的问题
- 修复编辑行中零值显示的问题
- 修复编辑长内容单元格的问题
- 修复将电子表格导出到 Excel 文件的问题
- 修复包含大量列的电子表格中水平滚动条不正确行为和列显示的问题
- 修复在空电子表格中使用键盘导航后出现的脚本错误

## 版本 4.1.1 {#version-411}

发布于 2021 年 4 月 14 日

[博客中的版本回顾](https://dhtmlx.com/blog/maintenance-release-gantt-7-1-2-suite-7-1-5-spreadsheet-4-1-1/)

### 修复 {#fixes-411}

- 修复 TypeScript 定义问题
- 修复绝对引用问题
- 修复使用".xlsx"扩展名文件加载数据时出现的问题
- 修复从 Excel 文件复制的数据粘贴不正确的问题
- 修复对浮点数求和时返回错误结果的问题

## 版本 4.1 {#version-41}

发布于 2021 年 3 月 24 日

[博客中的版本回顾](https://dhtmlx.com/blog/dhtmlx-spreadsheet-4-1-multiple-sheets/)

### 新功能 {#new-functionality-41}

- 新增 [multiSheets](api/spreadsheet_multisheets_config.md) 配置选项
- 支持在电子表格中[使用多个工作表](work_with_sheets.md)
- 支持在多个工作表中[使用跨工作表引用](work_with_sheets.md#cross-references-between-sheets)
- 支持一次性[加载多个工作表](working_with_sheets.md#loading-multiple-sheets)到电子表格
- 新增用于[操作多个工作表](working_with_sheets.md)的方法：`addSheet()`、`removeSheet()`、`getActiveSheet()`、`getSheets()`
- 新增事件：`BeforeSheetAdd`、`AfterSheetAdd`、[`BeforeSheetChange`](api/spreadsheet_beforesheetchange_event.md)、[`AfterSheetChange`](api/spreadsheet_aftersheetchange_event.md)、`BeforeSheetRemove`、`AfterSheetRemove`、`BeforeSheetRename`、`AfterSheetRename`
- 支持通过 [getFormula()](api/spreadsheet_getformula_method.md) 方法获取单元格的公式

### 更新 {#updates-41}

- [getValue()](api/spreadsheet_getvalue_method.md)、[setValue()](api/spreadsheet_setvalue_method.md)、[getStyle()](api/spreadsheet_getstyle_method.md)、[setStyle()](api/spreadsheet_setstyle_method.md)、[getFormat()](api/spreadsheet_getformat_method.md)、[setFormat()](api/spreadsheet_setformat_method.md)、[isLocked()](api/spreadsheet_islocked_method.md)、[lock()](api/spreadsheet_lock_method.md)、[unlock()](api/spreadsheet_unlock_method.md) 方法的 "cell" 参数格式已更新。现在单元格或单元格区域的引用可以包含标签页名称。

## 版本 4.0.5 {#version-405}

发布于 2021 年 2 月 3 日

### 修复 {#fixes-405}

- 修复性能问题
- 修复用户在单元格中撤销最后一个操作时出现的脚本错误
- 修复调用析构函数后抛出的脚本错误
- 修复将单元格区域的值插入单个单元格时被截断的问题
- 修复单元格剪切后再次粘贴时单元格格式识别的问题

## 版本 4.0.4 {#version-404}

发布于 2021 年 1 月 12 日

### 修复 {#fixes-404}

- 修复处理超过 2 个数字时"SUM"函数的不正确工作
- 修复调用"destructor()"后初始化电子表格的问题
- 修复类型问题

## 版本 4.0.3 {#version-403}

发布于 2020 年 12 月 28 日

### 修复 {#fixes-403}

- 修复在数据集中为单元格值设置格式的问题
- 修复将电子表格附加到布局时出现的错误
- 修复计算结果后无法编辑单元格公式的问题
- 修复 [setFocusedCell()](api/selection_setfocusedcell_method.md) 方法的不正确工作
- 修复使用公式时焦点的不正确行为
- 修复使用"ctrl"键选择单元格区域的问题
- 修复通过"ctrl+点击"向含有公式的单元格添加单元格区域的问题
- 修复数学函数的不正确工作
- 修复通过弹出框和鼠标点击选择 SUM() 公式的问题

## 版本 4.0.2 {#version-402}

发布于 2020 年 12 月 21 日

### 修复 {#fixes-402}

- 修复在页面上创建 2 个或更多电子表格对象时键盘导航的不正确行为
- 修复 types.d.ts 文件抛出错误的问题
- 修复复制和粘贴单元格区域的问题

## 版本 4.0.1 {#version-401}

发布于 2020 年 12 月 2 日

### 修复 {#fixes-401}

- 将鼠标悬停在工具栏的撤销/重做按钮上时工具提示显示不正确
- 在导入大于电子表格大小的数据后删除最后一列时出现的问题
- [setSelectedCell()](api/selection_setselectedcell_method.md) 方法的问题，导致选中单元格的公式未在公式栏中显示
- TypeScript 定义生成不正确
- 单元格内容对齐的视觉问题
- 空单元格或零值单元格序列化的问题

## 版本 4.0 {#version-40}

发布于 2020 年 10 月 19 日

### 新功能 {#new-functionality-40}

- [数学函数](functions.md)
- [TypeScript 支持](using_typescript.md)
- 支持通过 `leftSplit` 配置属性冻结电子表格左侧的列
- [文本格式已添加到默认数字格式中，用于将单元格内容显示为文本](number_formatting.md#default-number-formats)
- 支持使用["Ctrl+Shift+左键单击"](hotkeys.md#selection)组合键选择多个不连续的单元格区域

### 修复 {#fixes-40}

- 修复对单元格区域应用背景色时颜色选择器的不正确工作
- 修复导入 Excel 文件时数字解析不正确的问题
- 修复从 Google 或 Excel 表格复制的所有数据被插入电子表格单个单元格的问题
- 修复 [editLine:false](api/spreadsheet_editline_config.md) 属性的不正确工作，该属性导致编辑操作在控制台中以错误结束
- 修复 `AfterValueChange` 事件被调用两次的问题

## 版本 3.1.4 {#version-314}

发布于 2019 年 9 月 19 日

### 修复 {#fixes-314}

- 样式修复

## 版本 3.1.3 {#version-313}

发布于 2019 年 9 月 19 日

### 修复 {#fixes-313}

- Spreadsheet 附加到 Layout 时单元格获取焦点的问题

## 版本 3.1.2 {#version-312}

发布于 2019 年 3 月 25 日

### 修复 {#fixes-312}

- Excel 导出中文本样式的问题
- 右对齐文本下划线的问题

## 版本 3.1.1 {#version-311}

发布于 2019 年 3 月 25 日

### 修复 {#fixes-311}

- 导出到 Excel 的问题

## 版本 3.1 {#version-31}

发布于 2019 年 3 月 21 日

### 新功能 {#new-functionality-31}

- [从 Excel 导入](loading_data.md#loading-excel-file-xlsx)
- [导出到 Excel](loading_data.md#exporting-data)
- [数字格式化](number_formatting.md)
- [单元格内容自动填充](work_with_cells.md#auto-filling-cells-with-content)

### 更新 {#updates-31}

- [单元格区域中的快捷键行为](hotkeys.md)

### 修复 {#fixes-31}

- 活动单元格上快捷键的问题

## 版本 3.0.3 {#version-303}

发布于 2018 年 12 月 13 日

### 修复 {#fixes-303}

- 自定义只读模式下的不正确行为
- 删除列/行方法的问题
- 编辑行焦点丢失的问题
- 活动单元格上快捷键的问题

## 版本 3.0.2 {#version-302}

发布于 2018 年 12 月 6 日

### 修复 {#fixes-302}

- 快捷键行为的问题
- 选择手柄位置的问题
- 活动单元格焦点丢失的问题
- 活动单元格上选中行为不正确
- 活动单元格上快捷键行为不正确
- 方向键滚动行为不正确

## 版本 3.0.1 {#version-301}

发布于 2018 年 11 月 8 日

### 修复 {#fixes-301}

- 撤销操作的不正确行为
- 对一组单元格执行剪切-粘贴操作的不正确行为

## 版本 3.0 {#version-30}

发布于 2018 年 10 月 25 日

### 重大变更 {#breaking-change}

{{note 版本 3.0 的 API 与 v2.1 的 API 不兼容。}}

与之前基于 PHP 的版本相比，版本 3.0 的 DHTMLX Spreadsheet 是一个完全客户端的 JavaScript 组件。

请查阅[迁移](migration.md#21---30)文章了解新 API 的使用方法。

### 新功能 {#new-functionality-30}

Spreadsheet 的 API 已经过更改，使用起来更加便捷。另一个重要更新是对组件进行了全面重新设计，使 Spreadsheet 界面焕然一新。在全新外观的同时，DHTMLX Spreadsheet 的可用性也得到了大幅提升。

- [Spreadsheet 概述](/)
- [完全可自定义的结构和可调整的外观](customization.md)
- [全新重构的 API](api/api_overview.md)
