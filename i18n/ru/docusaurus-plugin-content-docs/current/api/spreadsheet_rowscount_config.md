---
sidebar_label: rowsCount
title: конфигурация rowsCount
description: Вы можете узнать о конфигурации rowsCount в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# rowsCount

### Описание {#description}

@short: Необязательный. Задаёт количество строк в таблице при инициализации

### Использование {#usage}

~~~jsx
rowsCount?: number;
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  rowsCount: 10,
  // other config parameters
});
~~~

**Связанные статьи:** [Конфигурация](configuration.md#number-of-rows-and-columns)

**Связанный пример:** [Spreadsheet. Full Toolbar](https://snippet.dhtmlx.com/kpm017nx)
