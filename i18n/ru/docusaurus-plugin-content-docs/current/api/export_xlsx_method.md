---
sidebar_label: xlsx()
title: Метод экспорта xlsx
description: Вы можете узнать о методе экспорта xlsx в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# xlsx()

### Описание {#description}

@short: Экспортирует данные из таблицы в файл Excel (.xlsx)

### Использование {#usage}

~~~jsx
xlsx(name:string): void;
~~~

### Параметры {#parameters}

- `name` - (необязательный) имя экспортируемого файла .xlsx

### Пример {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// exports data from a spreadsheet into an Excel file
spreadsheet.export.xlsx();

// exports data from a spreadsheet into an Excel file with a custom name
spreadsheet.export.xlsx("MyData");
~~~

:::note 
Обратите внимание, что компонент поддерживает экспорт только в файлы Excel с расширением `.xlsx`.
:::

:::info
DHTMLX Spreadsheet использует библиотеку на основе WebAssembly [Json2Excel](https://github.com/dhtmlx/json2excel) для экспорта данных в Excel. [Подробнее](loading_data.md#exporting-data).
:::

**Полезная статья:** [Загрузка и экспорт данных](loading_data.md)

**Связанный пример:** [Spreadsheet. Экспорт Xlsx](https://snippet.dhtmlx.com/btyo3j8s)
