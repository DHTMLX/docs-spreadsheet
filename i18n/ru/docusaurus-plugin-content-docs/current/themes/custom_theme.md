---
sidebar_label: Пользовательская тема
title: Пользовательская тема
description: Вы можете узнать, как создать пользовательскую тему, в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Пользовательская тема {#custom-theme}

Если стандартные темы Spreadsheet не подходят для вашего проекта, вы можете настроить собственную цветовую тему.
Ознакомьтесь с темами **custom light** и **custom dark** в примере ниже:

<iframe src="https://snippet.dhtmlx.com/59nt1rcb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

Чтобы создать собственную пользовательскую тему, переопределите значения внутренних CSS-переменных следующим образом:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* шрифт */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* конец шрифта */

        /* граница */
        --dhx-border-color: #007a99;
        /* конец границы */

        /* цветовая схема */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* конец цветовой схемы */

        /* цвета темы */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* конец цветов темы */

        /* служебные переменные DHTMLX Grid*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* конец служебных переменных DHTMLX Grid*/

        /* служебные переменные DHTMLX Toolbar*/
        --dhx-s-toolbar-background: #002229;
        /* конец служебных переменных DHTMLX Toolbar */

        /* служебные переменные DHTMLX Spreadsheet */
        --dhx-spreadsheet-range-background-1: #00815a;
        --dhx-spreadsheet-range-background-2: #bfc000;
        --dhx-spreadsheet-range-background-3: #c55933;
        --dhx-spreadsheet-range-background-4: #0cc1d6;
        --dhx-spreadsheet-range-background-5: #0080a3;
        --dhx-spreadsheet-range-background-6: #529a0a;
        --dhx-spreadsheet-range-background-7: #6d767b;
        --dhx-spreadsheet-range-background-8: #ba38e7;

        --dhx-spreadsheet-range-color-1: #8be3c9;
        --dhx-spreadsheet-range-color-2: #f6f740;
        --dhx-spreadsheet-range-color-3: #f7b69e;
        --dhx-spreadsheet-range-color-4: #e0fcff;
        --dhx-spreadsheet-range-color-5: #8fe9ff;
        --dhx-spreadsheet-range-color-6: #d8ffa6;
        --dhx-spreadsheet-range-color-7: #e4e4e4;
        --dhx-spreadsheet-range-color-8: #ecb6ff;
        /* конец служебных переменных DHTMLX Spreadsheet */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("custom-theme-dark");
</script>
~~~

**Связанный пример:** [Spreadsheet. Пользовательские темы (скины)](https://snippet.dhtmlx.com/59nt1rcb?mode=wide)
