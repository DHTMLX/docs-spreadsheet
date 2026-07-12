---
sidebar_label: 数字格式化
title: 数字格式化指南
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中学习有关数字格式化的用户指南。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 数字格式化 {#number-formatting}

## 支持的数字格式 {#supported-number-formats}

您可以将多种数字格式应用于单元格值：

<table>
    <tbody>
        <tr>
            <td><b>通用</b></td>
            <td>数字按原样显示，不应用任何格式</td>
        </tr>
        <tr>
            <td><b>数字</b></td>
            <td>数字以指定分隔符分隔十位、百位和千位后显示</td>
        </tr>
        <tr>
            <td><b>货币</b></td>
            <td>数字以货币符号（$）显示</td>
        </tr>
        <tr>
            <td><b>百分比</b></td>
            <td>数字以百分号（%）显示</td>
        </tr>
        <tr>
            <td><b>日期</b></td>
            <td>数字以指定格式的日期显示</td>
        </tr>
        <tr>
            <td><b>时间</b></td>
            <td>数字以 12 小时或 24 小时格式的时间显示</td>
        </tr>
        <tr>
            <td><b>文本</b></td>
            <td>数字以文本形式显示，与您输入的完全一致</td>
        </tr>
        <tr>
            <td><b>科学计数法</b></td>
            <td>数字以指数表示法显示（例如，1500.31 显示为 <b>1.50E+03</b>）；适用于非常大或非常小的数字</td>
        </tr>
    </tbody>
</table>

## 如何设置格式 {#how-to-set-format}

按照以下步骤，通过工具栏将特定数字格式应用于 Spreadsheet 数据：

- 选择您想要格式化的一个或多个单元格。
- 点击 **数字格式** 按钮：

![DHTMLX Spreadsheet toolbar with the Number format button for applying numeric formatting](/img/number_format_button.png)

- 从建议的选项中选择您想要应用的格式：

![DHTMLX Spreadsheet Number format dropdown with Common, Number, Currency, Percent, Date, Time, and Text options](/img/number_format_options.png)
