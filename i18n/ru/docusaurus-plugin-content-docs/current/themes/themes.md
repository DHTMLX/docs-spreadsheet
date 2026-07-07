---
sidebar_label: Встроенные темы
title: Встроенные темы
description: Вы можете узнать о встроенных темах библиотеки DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Встроенные темы {#built-in-themes}

Библиотека DHTMLX Spreadsheet предоставляет 4 предустановленные темы:

- [светлая тема](#light-theme-default) ("light") — используется по умолчанию
- [тёмная тема](#dark-theme) ("dark")
- [светлая высококонтрастная тема](#light-high-contrast-theme) ("contrast-light")
- [тёмная высококонтрастная тема](#dark-high-contrast-theme) ("contrast-dark")

Темы Spreadsheet разработаны в соответствии с международными стандартами. Высококонтрастные темы помогают пользователям с нарушениями зрения. Подробнее читайте в статье [Поддержка доступности](https://docs.dhtmlx.com/suite/common_features/accessibility_support/).

Все темы можно попробовать в примере ниже:

<iframe src="https://snippet.dhtmlx.com/t6rspqai?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Светлая тема (по умолчанию) {#light-theme-default}

![Светлая тема DHTMLX Spreadsheet по умолчанию с белым фоном и тёмным текстом](/img/themes/default_theme.png)

Тема `"light"` по умолчанию настраивается с помощью перечисленных ниже CSS-переменных:

~~~css
:root, [data-dhx-theme] {
    /* базовые цвета */
    --dhx-color-white: #fff;
    --dhx-color-gray-100: #e6e6e6;
    --dhx-color-gray-200: #ccc;
    --dhx-color-gray-300: #b3b3b3;
    --dhx-color-gray-400: #999;
    --dhx-color-gray-500: #808080;
    --dhx-color-gray-600: #666;
    --dhx-color-gray-700: #4d4d4d;
    --dhx-color-gray-800: #333;
    --dhx-color-gray-900: #1a1a1a;
    --dhx-color-black: #000;
    /* конец базовых цветов */

    /* шрифт */
    --dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

    --dhx-font-weight-regular: 400; 
    --dhx-font-weight-medium: 500; 
    --dhx-font-weight-bold: 700;

    --dhx-font-size-small: 12px;
    --dhx-font-size-normal: 14px;
    --dhx-font-size-large: 16px;

    --dhx-line-height-small: 16px;
    --dhx-line-height-normal: 20px;
    --dhx-line-height-large: 24px;

    --dhx-font-color-primary: rgba(0, 0, 0, .7);
    --dhx-font-color-secondary: rgba(0, 0, 0, .5);
    --dhx-font-color-additional: rgba(0, 0, 0, .3);
    --dhx-font-color-disabled: rgba(0, 0, 0, .3);

    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-color-white);
    /* конец шрифта */

    /* иконка */
    --dhx-icon-size-small: 16px;
    --dhx-icon-size-normal: 20px;
    --dhx-icon-size-large: 24px;
    /* конец иконки */

    /* граница */
    --dhx-border-width: 1px;
    --dhx-border-radius: 2px;
    --dhx-border-color: rgba(0, 0, 0, .1);
    --dhx-border-color-focused: rgba(0, 0, 0, .3);
    --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    /* конец границы */

    /* тень границы */
    --dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
    --dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
    --dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

    --dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
    /* конец тени границы */

    /* переходы */
    --dhx-transition-time: 0.2s;
    --dhx-transition-in: ease-in;
    --dhx-transition-out: ease-out;
    /* конец переходов */

    /* z-индекс */
    --dhx-z-index-up: 1;
    --dhx-z-index-force-up: 10;
    --dhx-z-index-overlay: 999;
    --dhx-z-index-overlay-total: 10000000;
    /* конец z-индекса */

    /* только служебная цветовая схема */
    --dhx-l-contrast-offset: 0%; /* смещение яркости для контрастной темы */
    --dhx-l-h-offset: 10%; /* смещение яркости при наведении */
    --dhx-s-d-offset: 30%; /* смещение насыщенности при отключении */
    --dhx-l-d: 70%; /* значение яркости при отключении */
    --dhx-a-l-h: .15; /* значение альфа при светлом наведении */
    --dhx-a-l-a: .3; /* значение альфа при светлом активном состоянии */
    /* конец служебной цветовой схемы */

    /* цветовая схема */
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
    /* конец цветовой схемы */

    /* цвета темы */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
    --dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
    --dhx-background-overlay-light: rgba(255, 255, 255, .5);

    --dhx-tooltip-background-dark: var(--dhx-color-gray-800);
    --dhx-tooltip-background-light: var(--dhx-color-white);

    --dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

    --dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-active: var(--dhx-color-primary);
    --dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-active: var(--dhx-color-secondary);
    --dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-active: var(--dhx-color-danger);
    --dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-active: var(--dhx-color-success);
    --dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
    /* конец цветов темы */

    /* служебные переменные DHTMLX Toolbar*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* конец служебных переменных DHTMLX Toolbar */

    /* служебные переменные DHTMLX Grid*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* конец служебных переменных DHTMLX Grid*/

    /* служебные переменные DHTMLX Calendar*/
    --dhx-s-calendar-muffled: .6;
    /* конец служебных переменных DHTMLX Calendar*/

    /* служебные переменные DHTMLX Slider*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* конец служебных переменных DHTMLX Slider*/
}
~~~

## Светлая высококонтрастная тема {#light-high-contrast-theme}

![Светлая высококонтрастная тема DHTMLX Spreadsheet с увеличенными шрифтами и более чёткими границами для доступности](/img/themes/light_high_contrast_theme.png)

Тема `"contrast-light"` настраивается с использованием как [корневых CSS-переменных](#light-theme-default), так и перечисленных ниже переменных:

~~~css
[data-dhx-theme='contrast-light'] {
    /* шрифт */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-secondary: rgba(0, 0, 0, .66);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    /* конец шрифта */

    /* граница */
    --dhx-border-color: rgba(0, 0, 0, .4);
    /* конец границы */

    /* цветовая схема */
    --dhx-l-contrast-offset: 14%;
    /* конец цветовой схемы */

    /* служебные переменные DHTMLX Toolbar*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* конец служебных переменных DHTMLX Toolbar */

    /* служебные переменные DHTMLX Grid*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* конец служебных переменных DHTMLX Grid*/
    
    /* служебные переменные DHTMLX Calendar*/
    --dhx-s-calendar-muffled: .8;
    /* конец служебных переменных DHTMLX Calendar*/

    /* служебные переменные DHTMLX Slider*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* конец служебных переменных DHTMLX Slider*/
}
~~~

## Тёмная тема {#dark-theme}

![Тёмная тема DHTMLX Spreadsheet с тёмным фоном и светлым текстом для работы при слабом освещении](/img/themes/dark_theme.png)

Тема `"dark"` настраивается с использованием как [корневых CSS-переменных](#light-theme-default), так и перечисленных ниже переменных:

~~~css
[data-dhx-theme='dark'] {
    /* шрифт */
    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, .7);
    --dhx-font-color-additional: rgba(255, 255, 255, .5);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* конец шрифта */

    /* граница */
    --dhx-border-color: rgba(255, 255, 255, 0.3);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.5);
    /* конец границы */

    /* цветовая схема */
    --dhx-l-secondary: 60%; /* смещение яркости для контрастной темы */

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* конец цветовой схемы */

    /* цвета темы */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* конец цветов темы */

    /* служебные переменные DHTMLX Toolbar*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* конец служебных переменных DHTMLX Toolbar */

    /* служебные переменные DHTMLX Grid*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* конец служебных переменных DHTMLX Grid*/
    
    /* служебные переменные DHTMLX Calendar*/
    --dhx-s-calendar-muffled: .6;
    /* конец служебных переменных DHTMLX Calendar*/

    /* служебные переменные DHTMLX Slider*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* конец служебных переменных DHTMLX Slider*/
}
~~~ 

## Тёмная высококонтрастная тема {#dark-high-contrast-theme}

![Тёмная высококонтрастная тема DHTMLX Spreadsheet с улучшенным контрастом текста для доступности](/img/themes/dark_contrast.png)

Тема `"contrast-dark"` настраивается с использованием как [корневых CSS-переменных](#light-theme-default), так и перечисленных ниже переменных:

~~~css
[data-dhx-theme='contrast-dark'] {
    /* шрифт */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-black);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* конец шрифта */

    /* граница */
    --dhx-border-color: rgba(255, 255, 255, 0.5);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.7);
    /* конец границы */

    /* цветовая схема */
    --dhx-l-contrast-offset: -12%; /* смещение яркости для контрастной темы */

    --dhx-l-secondary: 60%;

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* конец цветовой схемы */

    /* цвета темы */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* конец цветов темы */

    /* служебные переменные DHTMLX Toolbar*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* конец служебных переменных DHTMLX Toolbar */

    /* служебные переменные DHTMLX Grid*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* конец служебных переменных DHTMLX Grid*/

    /* служебные переменные DHTMLX Calendar*/
    --dhx-s-calendar-muffled: .8;
    /* конец служебных переменных DHTMLX Calendar*/

    /* служебные переменные DHTMLX Slider*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* конец служебных переменных DHTMLX Slider*/
}
~~~

## Стили, специфичные для Spreadsheet {#spreadsheet-specific-styles}

Список переменных, специфичных для компонента Spreadsheet, включает следующее:

- для темы **светлой по умолчанию** и скина **светлый высококонтрастный**:

~~~css
:root, [data-dhx-theme],[data-dhx-theme='contrast-light'] {
    
    --dhx-spreadsheet-range-background-1: #8be3c9;
    --dhx-spreadsheet-range-background-2: #f6f740;
    --dhx-spreadsheet-range-background-3: #f7b69e;
    --dhx-spreadsheet-range-background-4: #e0fcff;
    --dhx-spreadsheet-range-background-5: #8fe9ff;
    --dhx-spreadsheet-range-background-6: #d8ffa6;
    --dhx-spreadsheet-range-background-7: #e4e4e4;
    --dhx-spreadsheet-range-background-8: #ecb6ff;

    --dhx-spreadsheet-range-color-1: #00815a;
    --dhx-spreadsheet-range-color-2: #bfc000;
    --dhx-spreadsheet-range-color-3: #c55933;
    --dhx-spreadsheet-range-color-4: #0cc1d6;
    --dhx-spreadsheet-range-color-5: #0080a3;
    --dhx-spreadsheet-range-color-6: #529a0a;
    --dhx-spreadsheet-range-color-7: #6d767b;
    --dhx-spreadsheet-range-color-8: #ba38e7;

}
~~~

- для тем **тёмной** и **тёмной высококонтрастной**:

~~~css
[data-dhx-theme='contrast-dark'],
[data-dhx-theme='dark'] {
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
~~~

## Установка тем {#setting-themes}

Чтобы установить нужную тему — встроенную тему Spreadsheet или [пользовательскую](themes/custom_theme.md) — используйте один из описанных ниже способов:

### Использование атрибута `data-dhx-theme` {#using-the-data-dhx-theme-attribute}

Можно выбрать один из следующих вариантов:

- установить атрибут `data-dhx-theme` для выбранного контейнера:

~~~html title="index.html"
<!-- контейнер компонента -->
<div data-dhx-theme="dark" style="height: 100%" id="spreadsheet"></div>
~~~

- установить атрибут `data-dhx-theme` для HTML-элемента, например для `documentElement`:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Использование метода `dhx.setTheme()` {#using-the-dhxsettheme-method}

Метод `dhx.setTheme()` принимает следующие параметры:

- `theme: string` — (обязательный) имя темы. Может быть:
    - именем темы Spreadsheet: `"light" | "contrast-light" | "dark" | "contrast-dark"`
    - именем [пользовательской темы](themes/custom_theme.md)
    - `"light"` — по умолчанию
- `container: string | HTMLElement` — (необязательный) контейнер, к которому должна быть применена тема. Может быть:
    - HTMLElement
    - строковым значением с ID контейнера или ID ячейки Layout
    - `document.documentElement` — по умолчанию

Примеры ниже показывают, как использовать метод `dhx.setTheme()`:

- установка темы для body или контейнера

~~~html 
<div id="container"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");

    dhx.setTheme("dark"); //применяет тему "dark" к body 
    //или
    //применяет тему "dark" к контейнеру с id "container"
    dhx.setTheme("dark", "container"); 
</script>
~~~

- установка темы для контейнера, указанного через HTMLElement

~~~html 
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container-1");
    
    const container = document.getElementById("container-1");
    //применяет тему "dark" к контейнеру, указанному через HTMLElement
    dhx.setTheme("dark", container); 
</script>
~~~

**Связанные примеры:**

- [Spreadsheet. Светлая, тёмная, светлая высококонтрастная и тёмная высококонтрастная темы (скины)](https://snippet.dhtmlx.com/t6rspqai?tag=spreadsheet)
- [Spreadsheet. Пользовательские темы (скины)](https://snippet.dhtmlx.com/59nt1rcb?tag=spreadsheet)
