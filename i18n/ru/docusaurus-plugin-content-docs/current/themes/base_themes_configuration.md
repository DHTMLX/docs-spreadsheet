---
sidebar_label: Настройка встроенных тем
title: Настройка встроенных тем
description: Вы можете изучить настройку тем в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Настройка встроенных тем {#configuring-built-in-themes}

## Настройка всех тем {#configuring-all-themes}

CSS-переменные темы [по умолчанию](/themes/#light-theme-default) включают переменные цветовой схемы:

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
Значения цветов задаются в формате [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl), где:

- *оттенок* — угол на цветовом круге от 0 до 360. 0 — красный, 120 — зелёный, 240 — синий;
- *насыщенность* — процентное значение; 0% означает полностью ненасыщенный (серый), 100% — полностью насыщенный;
- *яркость* — процентное значение; 100% — белый, 0% — чёрный, 50% — «нормальный».
:::

Благодаря этим CSS-переменным цветовая схема вычисляется автоматически. Это означает, что при изменении значения цветовой схемы в корне значения для тем `"contrast-light"`, `"dark"` и `"contrast-dark"` пересчитываются автоматически в реальном времени.

Например, можно переопределить основные цвета для всех тем Spreadsheet одновременно следующим образом:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

Кроме того, значения переменных, вычисляемых на основе основного цвета, пересчитываются соответствующим образом. Например, значение цвета фокуса вычисляется следующим образом:

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Настройка отдельной темы {#configuring-a-separate-theme}

Если вы хотите переопределить отдельные значения цветов для конкретной [темы Spreadsheet](/themes/), переопределите их в атрибуте `data-dhx-theme`:

~~~html {1-27,39}
<style>
    [data-dhx-theme='light'] {
        /* граница */
        --dhx-border-color: #ced4da;
        /* конец границы */

        /* цветовая схема */
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
        /* конец цветовой схемы */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("light");
</script>
~~~
