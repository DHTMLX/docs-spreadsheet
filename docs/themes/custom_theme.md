---
sidebar_label: Custom theme
title: Custom theme
description: You can learn about the custom theme of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Custom Theme

If the base Spreadsheet themes don't fit your project, you can configure your own color theme. For this, you need to override the values of the internal CSS variables:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* font */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* end font */

        /* border */
        --dhx-border-color: #007a99;
        /* end border */

        /* color scheme */
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
        /* end color scheme */

        /* theme colors */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* end theme colors */

        /* DHTMLX Grid service variables*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* end DHTMLX Grid service variables*/

        /* DHTMLX Toolbar service variables*/
        --dhx-s-toolbar-background: #002229;
        /* end DHTMLX Toolbar service variables */

        /* DHTMLX Spreadsheet service variables */
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
    }
</style>
~~~

**Related sample:** [Spreadsheet. Custom themes (skins)](https://snippet.dhtmlx.com/59nt1rcb?mode=wide)