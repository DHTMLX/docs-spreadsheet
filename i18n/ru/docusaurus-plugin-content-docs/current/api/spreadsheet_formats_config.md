---
sidebar_label: formats
title: Конфигурация formats
description: Вы можете узнать о конфигурации formats в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# formats

### Описание {#description}

@short: Необязательный. Определяет список числовых форматов

### Использование {#usage}

~~~jsx
formats?: array;
~~~

### Параметры {#parameters}

Свойство `formats` представляет собой массив объектов числовых форматов, каждый из которых включает набор свойств:

- `id` - идентификатор формата, используемый для установки формата ячейки с помощью метода [](api/spreadsheet_setformat_method.md)
- `mask` - маска для числового формата
- `name` - имя формата, отображаемое в выпадающих списках панели инструментов и меню
- `example` - пример, показывающий, как выглядит отформатированное число. По умолчанию для примеров форматов используется число 2702.31

### Конфигурация по умолчанию {#default-config}

Числовые форматы по умолчанию:

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // зависит от конфигурации timeFormat
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" }
];
~~~


### Пример {#example}

~~~jsx {2-19}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    formats: [
        {
            name: "U.S. Dollar",
            id: "currency",
            mask: "$#,##0.00"
        },
        {
            name: "Euro",
            id: "euro",
            mask: "[$€]#.##0,00",
            example: "1000.50"
        },
        {
            name: "Swiss franc",
            id: "franc",
            mask: "[$CHF ]#.##0,00"
        }
    ],
    // другие параметры конфигурации
});
~~~

**Журнал изменений:**
- Формат "Time" добавлен в v4.3
- Формат "Date" добавлен в v4.2
- Формат "Text" добавлен в v4.0

**Полезные статьи:** 
- [Числовое форматирование](number_formatting.md)
- [Настройка форматов](number_formatting.md#formats-customization)
