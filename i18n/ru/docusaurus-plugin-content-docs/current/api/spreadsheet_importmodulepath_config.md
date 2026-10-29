---
sidebar_label: importModulePath
title: Конфигурация importModulePath
description: Задайте путь к файлу worker.js библиотеки Excel2json, с помощью которой DHTMLX Spreadsheet импортирует файлы Excel, через свойство importModulePath.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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

**Полезная статья:** [Загрузка данных и экспорт](loading_data.md#loading-excel-file-xlsx)

**Связанный пример:** [Spreadsheet. Пользовательский путь для импорта и экспорта](https://snippet.dhtmlx.com/wykwzfhm)
