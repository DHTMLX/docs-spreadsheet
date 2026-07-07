---
sidebar_label: importModulePath
title: Конфигурация importModulePath
description: Вы можете узнать о конфигурации importModulePath в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# importModulePath

### Описание {#description}

@short: Необязательный. Задаёт путь к модулю импорта

### Использование {#usage}

~~~jsx
importModulePath?: string;
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    importModulePath: "../libs/excel2json/1.0/worker.js",
    // другие параметры конфигурации
});
~~~

### Подробности {#details}

:::note 
DHTMLX Spreadsheet использует библиотеку [Excel2json](https://github.com/DHTMLX/excel2json) на основе WebAssembly для импорта данных из Excel.
:::

Чтобы импортировать файлы, необходимо:

- установить библиотеку **Excel2json**
- задать путь к файлу *worker.js* с помощью параметра `importModulePath` одним из двух способов:
  - указав локальный путь к файлу на вашем компьютере, например: `"../libs/excel2json/1.0/worker.js"`
  - указав ссылку на файл из CDN: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

По умолчанию используется ссылка на CDN.

**Связанные статьи:** [Загрузка данных и экспорт](loading_data.md#loading-excel-file-xlsx)

**Связанный пример:** [Spreadsheet. Пользовательский путь для импорта и экспорта](https://snippet.dhtmlx.com/wykwzfhm)
