---
sidebar_label: Темы
title: Темы React Spreadsheet
description: "Применение встроенных или пользовательских тем к DHTMLX React Spreadsheet."
---

# Темы React Spreadsheet {#react-spreadsheet-themes}

React Spreadsheet поставляется с четырьмя встроенными темами и поддерживает пользовательские темы через CSS-переменные. Используйте проп `theme`, чтобы выбрать встроенную тему или применить собственную.

## Встроенные темы {#built-in-themes}

Тип [`SpreadsheetTheme`](react/types.md#spreadsheettheme) определяет четыре встроенные темы:

- `"light"` (по умолчанию)
- `"dark"`
- `"contrast-light"`
- `"contrast-dark"`

Также можно передать строку с именем пользовательской темы.

## Применение темы {#applying-a-theme}

Передайте проп `theme` компоненту `ReactSpreadsheet` с именем нужной темы:

~~~tsx
<ReactSpreadsheet sheets={sheets} theme="dark" />
~~~

## Переключение во время работы {#switching-at-runtime}

Используйте состояние React для динамического переключения тем:

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData, type SpreadsheetTheme } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([/* ... */]);
    const [theme, setTheme] = useState<SpreadsheetTheme>("light");

    return (
        <>
            <select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="contrast-light">Contrast Light</option>
                <option value="contrast-dark">Contrast Dark</option>
            </select>

            <ReactSpreadsheet sheets={sheets} theme={theme} />
        </>
    );
}
~~~

## Пользовательские CSS-переменные {#custom-css-variables}

DHTMLX Spreadsheet использует многоуровневую систему CSS-переменных. Вы можете переопределить эти переменные, чтобы настроить внешний вид за пределами встроенных тем.

### Создание пользовательской темы {#creating-a-custom-theme}

Определите пользовательский селектор `data-dhx-theme`, переопределите нужные переменные и передайте имя темы как проп:

~~~css title="src/custom-theme.css"
[data-dhx-theme='corporate'] {
    /* цветовая схема */
    --dhx-h-primary: 220;
    --dhx-s-primary: 60%;
    --dhx-l-primary: 45%;

    /* панель инструментов и сетка */
    --dhx-s-toolbar-background: #f0f4f8;
    --dhx-s-grid-header-background: #e2e8f0;

    /* цвета диапазонов таблицы */
    --dhx-spreadsheet-range-background-1: #bee3f8;
    --dhx-spreadsheet-range-color-1: #2b6cb0;
}
~~~

~~~tsx
import "./custom-theme.css";

<ReactSpreadsheet sheets={sheets} theme="corporate" />
~~~

## Связанные руководства {#related-guides}

- [Темы](/themes/) — обзор встроенных тем DHTMLX Spreadsheet
- [Настройка базовых тем](themes/base_themes_configuration.md) — настройка базовых тем
- [Пользовательская тема](themes/custom_theme.md) — создание пользовательских тем
