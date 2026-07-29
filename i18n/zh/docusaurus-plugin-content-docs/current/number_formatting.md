---
sidebar_label: 数字格式化
title: 数字格式化
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中学习有关数字格式化的开发者指南。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 数字格式化 {#number-formatting}

DHTMLX Spreadsheet 支持数字格式化，您可以将其应用于单元格中的数值。

![DHTMLX Spreadsheet Number format dropdown with Common, Number, Currency, Percent, Date, Time, and Text options](/img/number_format_options.png)

:::note
[用户指南](number_formatting_guide.md) 可以帮助您的用户更轻松地使用 Spreadsheet。
:::

## 默认数字格式 {#default-number-formats}

数字格式是一个包含一组属性的对象：

- `id` - 格式的 id，用于通过 [`setFormat()`](api/spreadsheet_setformat_method.md) 方法为单元格设置格式
- `mask` - 数字格式的掩码。请查看掩码中可用字符的列表（[见下文](#the-structure-of-a-mask)）
- `name` - 在工具栏和菜单下拉列表中显示的格式名称
- `example` - 显示格式化数字效果的示例。数字 2702.31 用作格式示例的默认值

默认数字格式如下：

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // depending on the localization.timeFormat config
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" },
    { name: "Scientific", id: "scientific", mask: "0.00E+00", example: "1.50E+03" }
];
~~~

以下是包含各种数字格式数据的电子表格效果：

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 日期格式 {#date-format}

您可以通过 [`localization`](api/spreadsheet_localization_config.md) 属性的 `dateFormat` 选项定义电子表格中日期的显示格式。默认格式为 `"%d/%m/%Y"`。

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        dateFormat: "%D/%M/%Y",
    }
});

spreadsheet.parse({
    styles: {
        // a set of styles
    },
    data: [
        {cell: "B1", value: "03/10/2022", format: "date"},
        {cell: "B2", value: new Date(), format: "date"},
    ]
});
~~~

查看[可用于创建格式的字符完整列表](api/spreadsheet_localization_config.md#characters-for-setting-date-format)。

## 时间格式 {#time-format}

要定义时间在电子表格单元格中的显示格式，请使用 [`localization`](api/spreadsheet_localization_config.md) 属性的 `timeFormat` 选项：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        timeFormat: 24,
    }
});

spreadsheet.parse({
    styles: {
        // a set of styles
    },
    data: [
        { cell: "A1", value: "18:30", format: "time" },
        { cell: "A2", value: 44550.5625, format: "time" },
        { cell: "A3", value: new Date(), format: "time" },
    ]
});
~~~

## 数字、日期、时间、货币本地化 {#number-date-time-currency-localization}

通过 Spreadsheet 配置选项，您可以本地化时间和日期、指定所需的货币符号，以及提供期望的小数分隔符和千位分隔符。所有这些设置均可在 [`localization`](api/spreadsheet_localization_config.md) 属性中进行配置。该属性是一个包含以下属性的对象：

- `decimal` - （可选）用作小数分隔符的符号，默认为 `"."（句点）`<br>可选值为 `"." | ","`
- `thousands` - （可选）用作千位分隔符的符号，默认为 `","（逗号）`<br>可选值为 `"." | "," | " " | ""`
- `currency` - （可选）货币符号，默认为 `"$"` 
- `dateFormat` - （可选）以字符串形式设置的日期显示格式，默认为 `"%d/%m/%Y"`。详情请查看 [`localization`](api/spreadsheet_localization_config.md) API 页面
- `timeFormat` - （可选）以 `12` 或 `24` 设置的时间显示格式，默认为 `12`

例如，您可以按如下方式更改默认本地化设置：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    localization: {
        decimal: ",", 
        thousands: " ", 
        currency: "¥",  
        dateFormat: "%D/%M/%Y",
        timeFormat: 24
    }
});

spreadsheet.parse(dataset);
~~~

以下是为 Spreadsheet 配置 `localization` 对象的效果：

<iframe src="https://snippet.dhtmlx.com/xislsb3c?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 科学计数法格式 {#scientific-number-format}

科学计数法（指数表示法）作为默认格式提供，适用于简洁地表示非常大或非常小的数字。内置的 `"scientific"` 格式使用掩码 `0.00E+00`，例如将 1500.31 显示为 `1.50E+03`。

要将其应用于单元格，请使用 [`setFormat()`](api/spreadsheet_setformat_method.md) 方法：

~~~jsx
spreadsheet.setFormat("A1", "scientific");
~~~

您还可以通过 [`formats`](api/spreadsheet_formats_config.md) 配置选项使用不同掩码定义自定义科学格式。例如，`0.###E+0` 产生更紧凑的输出：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    formats: [
        { id: "scientific_compact", mask: "0.###E+0", name: "Scientific (compact)", example: "1.5E+3" }
    ]
});
~~~

## 格式自定义 {#formats-customization}

您不仅限于[默认数字格式](#default-number-formats)。您可以通过以下两种方式自定义格式：

- 修改默认数字格式的设置
- 向电子表格中添加自定义数字格式

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

您可以使用 [`formats`](api/spreadsheet_formats_config.md) 配置选项进行所有这些修改。该选项是一个格式对象数组，每个对象包含一组属性：

- `id` - （`string`）必填，格式的 id，用于通过 [`setFormat()`](api/spreadsheet_setformat_method.md) 方法为单元格设置格式
- `mask` - （`string`）必填，数字格式的掩码。请查看掩码中可用字符的列表（[见下文](#the-structure-of-a-mask)）
- `name` - （`string`）可选，在工具栏和菜单下拉列表中显示的格式名称
- `example` - （`string`）可选，显示格式化数字效果的示例

### 掩码结构 {#the-structure-of-a-mask}

掩码可以包含一组通用语法字符，包括数字占位符、分隔符、百分号和货币符号等有效字符：

- **0** - 数字中的一位数。用于显示不重要的零，当数字的位数少于格式中的零的数量时。例如，要将 2 显示为 2.0，请使用格式 0.0。
- **#** - 数字中的一位数。仅显示有效数字（当数字的位数少于格式中的 # 符号数量时，不重要的零将被省略）。
- **$** - 将数字格式化为美元值。要使用不同的货币符号，需要在掩码中将其定义为 **[$ your_currency_sign]**#,##0.00，例如 [$ €]#,##0.00。
{{note 请注意，[$ 和 ] 之间的所有字符都将被解释为货币符号。}}
- **.(句点)** - 为数字添加小数点。
- **,(逗号)** - 为数字添加千位分隔符。
- **[用于设置日期格式的字符](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)** - 用于创建日期和时间的掩码。例如，要将 27.09.2023 显示为 27, Sep 2023，请使用格式 `"%d, %M %Y"`。
- **E+ / E-** - 以科学（指数）计数法格式化数字。`E` 后面的数字定义指数位的最小数量。`E+` 始终显示指数符号；`E-` 仅对负指数显示指数符号。例如，掩码 `0.00E+00` 将 1500.31 显示为 `1.50E+03`。

## 设置格式 {#setting-format}

要将所需格式应用于数值，请使用 [`setFormat()`](api/spreadsheet_setformat_method.md) 方法。该方法接受两个参数：

- `cell` - （`string`）需要格式化其值的单元格 id
- `format` - （`string`）要应用于单元格值的[默认数字格式](#default-number-formats)名称

例如：

~~~jsx
// applies the percent format to cell A1
spreadsheet.setFormat("A1","percent");
~~~

## 获取格式 {#getting-format}

您可以使用 [`getFormat()`](api/spreadsheet_getformat_method.md) 方法获取应用于单元格值的数字格式。该方法以单元格 id 作为参数。

~~~jsx
var format = spreadsheet.getFormat("A1"); 
// ->"percent"
~~~

## 事件 {#events}

您可以使用一对事件来控制单元格格式的更改：

- [`beforeAction`](api/spreadsheet_beforeaction_event.md) - 在 `setCellFormat` 操作执行之前触发
- [`afterAction`](api/spreadsheet_afteraction_event.md) - 在 `setCellFormat` 操作执行之后触发
