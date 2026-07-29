---
sidebar_label: 配置内置主题
title: 配置内置主题
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解如何配置主题。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# 配置内置主题 {#configuring-built-in-themes}

## 配置所有主题 {#configuring-all-themes}

[默认](/themes/#light-theme-default)主题的 CSS 变量包含配色方案变量：

~~~css
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
颜色值以 [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 格式指定，其中：

- *色相* 是色轮上 0 到 360 之间的度数。0 为红色，120 为绿色，240 为蓝色；
- *饱和度* 为百分比值；0% 表示完全不饱和（灰色），100% 表示完全饱和；
- *亮度* 为百分比值；100% 为白色，0% 为黑色，50% 为"正常"。
:::

由于这些 CSS 变量的存在，配色方案会自动计算。这意味着，如果您在根元素中更改某个配色方案的值，`"contrast-light"`、`"dark"` 和 `"contrast-dark"` 主题的对应值会实时自动重新计算。

例如，您可以按如下方式一次性覆盖所有 Spreadsheet 主题的主色：

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

此外，从主色计算得出的变量值也会相应重新计算。例如，焦点颜色的计算方式如下：

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## 配置单个主题 {#configuring-a-separate-theme}

如果您希望为某个单独的 [Spreadsheet 主题](/themes/)覆盖部分颜色值，请在 `data-dhx-theme` 属性中进行覆盖：

~~~html {1-27,39}
<style>
    [data-dhx-theme='light'] {
        /* 边框 */
        --dhx-border-color: #ced4da;
        /* 边框结束 */

        /* 配色方案 */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* 配色方案结束 */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("light");
</script>
~~~
