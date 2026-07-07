---
sidebar_label: localization
title: localization 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 localization 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# localization

### 描述 {#description}

@short: 可选。定义数字、日期、时间和货币的格式

### 用法 {#usage}

~~~jsx
localization?: object;
~~~

### 参数 {#parameters}

`localization` 对象可包含以下属性：

- `decimal` - （可选）用作小数分隔符的符号，默认为 `"."`。<br>可选值为 `"." | ","`
- `thousands` - （可选）用作千位分隔符的符号，默认为 `","`。<br>可选值为 `"." | "," | " " | ""`
- `currency` - （可选）货币符号，默认为 `"$"`
- `dateFormat` - （可选）以字符串形式设置的日期显示格式。默认格式为 `"%d/%m/%Y"`。详见[下方](#characters-for-setting-date-format)说明
- `timeFormat` - （可选）时间显示格式，取值为 `12` 或 `24`。默认格式为 `12`

### 默认配置 {#default-config}

~~~jsx
const defaultLocales = {
    decimal: ".", 
    thousands: ",",
    currency: "$",
    dateFormat: "%d/%m/%Y",
    timeFormat: 12,
};
~~~

### 示例 {#example}

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

### 日期格式字符说明 {#characters-for-setting-date-format}

DHTMLX Spreadsheet 使用以下字符来设置日期格式：

| 字符 | 含义 |
|-----------|---------------------------------------------------|
| **%d**    | 带前导零的数字日期，01..31         |
| **%j**    | 不带前导零的数字日期，1..31                            |
| **%D**    | 星期的简写名称，Su Mo Tu...                |
| **%l**    | 星期的全称，Sunday Monday Tuesday...    |
| **%m**    | 带前导零的数字月份，01..12       |
| **%n**    | 不带前导零的数字月份，1..12                          |
| **%M**    | 月份的简写名称，Jan Feb Mar...           |
| **%F**    | 月份的全称，January February March... |
| **%y**    | 两位数字年份                        |
| **%Y**    | 四位数字年份                        |
| **%h**    | 带前导零的 12 小时制小时，01..12        |
| **%g**    | 不带前导零的 12 小时制小时，1..12           |
| **%H**    | 带前导零的 24 小时制小时，00..23         |
| **%G**    | 不带前导零的 24 小时制小时，0..23                            |
| **%i**    | 带前导零的分钟，01..59                 |
| **%s**    | 带前导零的秒钟，01..59                 |
| **%a**    | am 或 pm                                          |
| **%A**    | AM 或 PM                                          |
| **%u**    | 毫秒                                      |

**变更日志：** 
- 在 v5.1 中新增

**相关文章：** [数字、日期、时间、货币本地化](number_formatting.md#number-date-time-currency-localization)
