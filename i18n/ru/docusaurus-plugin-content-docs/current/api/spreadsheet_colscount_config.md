---
sidebar_label: colsCount
title: Конфигурация colsCount
description: Задайте количество столбцов, которое DHTMLX Spreadsheet показывает при инициализации, с помощью свойства colsCount.
---

# colsCount

### Описание {#description}

@short: Необязательный. Задаёт количество столбцов в таблице при инициализации

### Использование {#usage}

~~~jsx
colsCount?: number;
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    colsCount: 10,
    // другие параметры конфигурации
});
~~~

**Полезная статья:** [Конфигурация](configuration.md#number-of-rows-and-columns)

**Связанный пример:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
