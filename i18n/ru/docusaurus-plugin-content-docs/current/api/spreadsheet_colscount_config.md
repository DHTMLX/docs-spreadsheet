---
sidebar_label: colsCount
title: Конфигурация colsCount
description: Вы можете узнать о конфигурации colsCount в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    colsCount: 10,
    // другие параметры конфигурации
});
~~~

**Связанные статьи:** [Конфигурация](configuration.md#number-of-rows-and-columns)

**Связанный пример:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
