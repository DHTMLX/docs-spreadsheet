---
sidebar_label: exportModulePath
title: Конфигурация exportModulePath
description: Вы можете узнать о конфигурации exportModulePath в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# exportModulePath

### Описание {#description}

@short: Необязательный. Задаёт путь к модулю экспорта

### Использование {#usage}

~~~jsx
exportModulePath?: string;
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx", // локальный путь к файлу `worker.js` модуля экспорта
    // другие параметры конфигурации
});
~~~

### Подробности {#details}

:::note 
DHTMLX Spreadsheet использует библиотеку на основе WebAssembly [JSON2Excel](https://github.com/dhtmlx/json2excel) для экспорта данных в Excel.
:::

Для экспорта файлов необходимо задать путь к файлу *worker.js* библиотеки [Json2Excel](https://github.com/dhtmlx/json2excel) (в котором выполняется экспорт) с помощью параметра `exportModulePath`. По умолчанию используется `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`.
- если вы используете публичный сервер экспорта, указывать ссылку на него не нужно, так как он используется по умолчанию
- если вы используете собственный сервер экспорта, необходимо:
  - установить библиотеку [**Json2Excel**](https://github.com/dhtmlx/json2excel)
  - использовать `"../libs/json2excel/x.x/worker.js?vx"` для конкретной версии (замените `x.x` на версию, развёрнутую на вашем сервере)


**Связанные статьи:** [Загрузка и экспорт данных](loading_data.md#exporting-data)

**Связанный пример:** [Spreadsheet. Пользовательский путь импорта и экспорта](https://snippet.dhtmlx.com/wykwzfhm)
