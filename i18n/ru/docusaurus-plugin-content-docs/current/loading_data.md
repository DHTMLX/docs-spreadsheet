---
sidebar_label: Загрузка и экспорт данных
title: Загрузка данных
description: Вы можете узнать о загрузке данных в библиотеке DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Загрузка и экспорт данных {#data-loading-and-export}

Вы можете заполнить DHTMLX Spreadsheet подготовленным набором данных, который может включать как данные ячеек, так и стили. Компонент поддерживает два способа загрузки данных:

- загрузка из внешнего файла
- загрузка из локального источника

Компонент также поддерживает [экспорт данных в файл Excel](#exporting-data).

## Подготовка данных {#preparing-data}

DHTMLX Spreadsheet ожидает данные в формате JSON.

Это может быть простой массив объектов ячеек. Используйте этот способ, если нужно создать набор данных только для одного листа.

~~~jsx  title="Подготовка данных для одного листа"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, format:"currency" },
    { cell: "D2", value: 430, format:"percent" },
    // "myFormat" is the id of a custom format
    { cell: "E2", value: 2872.4, format:"myFormat" },
    
    // add drop-down lists to cells
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // more cell objects
];
~~~

Или это может быть объект с данными для загрузки сразу в несколько листов. Например:

~~~jsx title="Подготовка данных для нескольких листов"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ],
            merged: [
                // merge cells A1 and B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // merge cells A2, A3, A4, and A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ]
        },
        // more sheet objects
    ]
};
~~~

Ознакомьтесь с полными списками доступных свойств для этих двух способов в [справочнике API](api/spreadsheet_parse_method.md).

:::tip
Возможность загрузки объединённых ячеек доступна только при подготовке данных в объекте листа.
:::

### Задание стилей для ячеек {#setting-styles-for-cells}

Возможно, вам потребуется определить стили ячеек в наборе данных. В этом случае данные должны быть объектом с *отдельными свойствами*, описывающими объекты данных и CSS-классы, применяемые к конкретным ячейкам.

Задайте CSS-класс для ячейки с помощью свойства `css`.

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "A1", value: "Country" },
        { cell: "B1", value: "Product" },
        { cell: "C1", value: "Price" },
        { cell: "D1", value: "Amount" },
        { cell: "E1", value: "Total Price" },

        { cell: "A2", value: "Ecuador" },
        { cell: "B2", value: "Banana" },
        { cell: "C2", value: 6.68, css: "someclass" },
        { cell: "D2", value: 430, css: "someclass" },
        { cell: "E2", value: 2872.4 }
    ],
}
~~~

:::info
[Ознакомьтесь со списком свойств, которые можно использовать для стилизации ячеек](api/spreadsheet_parse_method.md#list-of-properties)
:::

### Задание заблокированного состояния для ячейки {#setting-the-locked-state-for-a-cell}

Если вы хотите указать заблокированные ячейки в наборе данных, используйте свойство `locked` ячейки и установите его в `true`:

~~~jsx
const dataset = [
    { cell: "a1", value: "Country", locked: true }, //locks a cell
    { cell: "b1", value: "Product", locked: true },   

    { cell: "a2", value: "Ecuador" },
    { cell: "b2", value: "Banana" },

    { cell: "a3", value: "Belarus" },
    { cell: "b3", value: "Apple" },
    // more cells
];
~~~

Ознакомьтесь с полным списком доступных свойств ячеек в [справочнике API](api/spreadsheet_parse_method.md#parameters).

**Связанный пример**: [Spreadsheet. Заблокированные ячейки](https://snippet.dhtmlx.com/czeyiuf8?tag=spreadsheet)

### Добавление ссылки в ячейку {#adding-a-link-into-a-cell}

Вы можете указать ссылку для ячейки прямо в наборе данных. Для этого задайте свойство `link` как объект и укажите необходимые настройки:

- `text` — (необязательно) текст ссылки
- `href` — (обязательно) URL-адрес, определяющий назначение ссылки

Вот как это выглядит в наборе данных:

~~~jsx
const dataset = [
    { cell: "a1", value: "Country"}, //locks a cell
    { cell: "b1", value: "Product"},   

    { cell: "a2", value: "Ecuador"},
    { 
        cell: "b2", 
        value: "Banana", 
        link:{
            href:"http://localhost:8080/"
        } 
    },
    // more cells
];
~~~

:::note
Обратите внимание, что не следует использовать свойство `value` объекта `cell` и свойство `text` объекта `link` одновременно, поскольку они являются взаимоисключающими.
:::

**Связанный пример**: [Spreadsheet. Импорт и экспорт в JSON](https://snippet.dhtmlx.com/e3xct53l?tag=spreadsheet)

## Загрузка из внешнего источника {#external-data-loading}

### Загрузка данных JSON {#loading-json-data}

По умолчанию Spreadsheet ожидает данные в формате JSON. Чтобы загрузить данные из внешнего источника, используйте метод [](api/spreadsheet_load_method.md). Он принимает URL-адрес файла с данными в качестве параметра:

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.json");
~~~

**Связанный пример**: [Spreadsheet. Загрузка данных](https://snippet.dhtmlx.com/ih9zmc3e?tag=spreadsheet)


:::info
Если вы хотите предоставить пользователям возможность импортировать JSON-файл в таблицу через Проводник файлов, прочитайте раздел [Загрузка JSON-файлов](api/spreadsheet_load_method.md#loading-json-files).
:::

### Загрузка данных CSV {#loading-csv-data}

Вы также можете загружать данные в формате CSV. Для этого нужно вызвать метод [](api/spreadsheet_load_method.md) и передать название формата ("csv") вторым параметром:

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.csv", "csv");
~~~

**Связанный пример**: [Spreadsheet. Загрузка CSV](https://snippet.dhtmlx.com/1f87y71v?tag=spreadsheet)

### Загрузка файла Excel (.xlsx) {#loading-excel-file-xlsx}

Вы можете загрузить файл в формате Excel с расширением `.xlsx` в таблицу. В пользовательском интерфейсе есть соответствующие элементы управления на панели инструментов и в меню:

- Меню: Файл -> Импорт как..-> Microsoft Excel(.xlsx)

![Меню «Файл» DHTMLX Spreadsheet с параметром «Импорт как» для файлов Microsoft Excel XLSX](/img/file_import.png)

- Панель инструментов: Импорт -> Microsoft Excel(.xlsx)

![Панель инструментов DHTMLX Spreadsheet с кнопкой «Импорт» для файлов Microsoft Excel XLSX](/img/import_xlsx.png)

#### Как импортировать данные {#how-to-import-data}

{{note Обратите внимание, что функция импорта не работает в Internet Explorer.}}

DHTMLX Spreadsheet использует библиотеку на основе WebAssembly [Excel2Json](https://github.com/dhtmlx/excel2json) для импорта данных из Excel. Чтобы загрузить данные Excel в Spreadsheet, необходимо:

- установить библиотеку **Excel2Json**
- указать параметр [](api/spreadsheet_importmodulepath_config.md) в конфигурации Spreadsheet и задать путь к файлу *worker.js* одним из двух способов:
  - указав локальный путь к файлу на вашем компьютере, например: `"../libs/excel2json/1.0/worker.js"`
  - указав ссылку на файл из CDN: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    importModulePath: "../libs/excel2json/1.0/worker.js"
});
~~~

**Связанный пример**: [Spreadsheet. Настраиваемый путь импорта/экспорта](https://snippet.dhtmlx.com/wykwzfhm)

Чтобы загрузить данные из файла Excel, передайте строку с типом расширения ("xlsx") в качестве второго параметра метода [](api/spreadsheet_load_method.md):

~~~jsx
// .xlsx only
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

{{note Обратите внимание, что компонент поддерживает импорт только из файлов Excel с расширением `.xlsx`.}}

**Связанный пример**: [Spreadsheet. Импорт Xlsx](https://snippet.dhtmlx.com/cqlpy828?tag=spreadsheet)

При необходимости вы также можете [экспортировать данные из таблицы в файл Excel](#exporting-data).

### Обработка кода после загрузки {#processing-after-loading-code}

Компонент выполняет AJAX-запрос и ожидает, что удалённый URL предоставит корректные данные. Загрузка данных асинхронна, поэтому любой код, выполняемый после загрузки, необходимо оборачивать в промис:

~~~jsx
spreadsheet.load("/some/data").then(function(){
   // do something
});
~~~

## Загрузка из локального источника {#loading-from-local-source}

Чтобы загрузить данные из локального источника, используйте метод [](api/spreadsheet_parse_method.md). Передайте [подготовленный набор данных](#preparing-data) в качестве параметра этого метода:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.parse(data);
~~~

**Связанный пример**: [Spreadsheet. Настраиваемое количество ячеек](https://snippet.dhtmlx.com/vc3mstsw)

Подробнее о загрузке нескольких листов в таблицу см. в статье [Работа с листами](working_with_sheets.md#loading-multiple-sheets).

## Сохранение и восстановление состояния {#saving-and-restoring-state}

Чтобы сохранить текущее состояние таблицы, используйте метод [](api/spreadsheet_serialize_method.md). Он преобразует данные в массив JSON-объектов. Каждый JSON-объект содержит конфигурацию ячейки.

~~~jsx
// saving state of the spreadsheet1
var state = spreadsheet1.serialize();
~~~

Затем вы можете разобрать данные, хранящиеся в сохранённом массиве состояния, в другую таблицу. Например:

~~~jsx
// creating a new spreadsheet
var spreadsheet2 = new dhx.Spreadsheet(document.body);
// parsing the state of the spreadsheet1 into spreadsheet2
spreadsheet2.parse(state);
~~~

## Экспорт данных {#exporting-data}

### Экспорт в Excel {#export-into-excel}

DHTMLX Spreadsheet может экспортировать данные из таблицы в файл Excel. В пользовательском интерфейсе есть соответствующие элементы управления на панели инструментов и в меню:

- Меню: Файл -> Скачать как..-> Microsoft Excel(.xlsx)

![Меню «Файл» DHTMLX Spreadsheet с параметром «Скачать как» для экспорта в Microsoft Excel XLSX](/img/file_export.png)

- Панель инструментов: Экспорт -> Microsoft Excel(.xlsx)

![Панель инструментов DHTMLX Spreadsheet с кнопкой «Экспорт» для сохранения в Microsoft Excel XLSX](/img/export_xlsx.png)

#### Как экспортировать данные {#how-to-export-data}

:::note 
Обратите внимание, что функция экспорта не работает в Internet Explorer.
:::

Библиотека использует библиотеку на основе WebAssembly [Json2Excel](https://github.com/dhtmlx/json2excel) для экспорта данных в Excel. Экспорт обрабатывается в файле *worker.js* библиотеки **Json2Excel** (ссылка по умолчанию: `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`). Вы можете использовать публичный сервер экспорта или локальный сервер экспорта. Для экспорта файлов необходимо:

- указать параметр [](api/spreadsheet_exportmodulepath_config.md) в конфигурации Spreadsheet и задать путь к файлу *worker.js*:
    - если вы используете публичный сервер экспорта, вам не нужно указывать ссылку на него, так как он используется по умолчанию
    - если вы используете собственный сервер экспорта, необходимо:
        - установить библиотеку [**Json2Excel**](https://github.com/dhtmlx/json2excel)
        - использовать `"../libs/json2excel/x.x/worker.js?vx"` для конкретной версии (замените `x.x` на версию, развёрнутую на вашем сервере)

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx" // the path to the export module, if a local export server is used
});
~~~

**Связанный пример**: [Spreadsheet. Настраиваемый путь импорта/экспорта](https://snippet.dhtmlx.com/wykwzfhm)

После настройки необходимых источников вы можете использовать соответствующий метод API [](api/export_xlsx_method.md) объекта Export для экспорта данных компонента:

~~~jsx
spreadsheet.export.xlsx();
~~~

**Связанный пример**: [Spreadsheet. Экспорт Xlsx](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

:::note 
Обратите внимание, что компонент поддерживает экспорт только в файлы Excel с расширением `.xlsx`.
:::

#### Как задать пользовательское имя для экспортируемого файла {#how-to-set-a-custom-name-for-an-exported-file}

По умолчанию имя экспортируемого файла — "data". Вы можете указать собственное имя для экспортируемого файла. Для этого нужно передать пользовательское имя в качестве параметра метода [](api/export_xlsx_method.md):

~~~jsx
spreadsheet.export.xlsx("MyData");
~~~

**Связанный пример**: [Spreadsheet. Экспорт Xlsx](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

Ознакомьтесь с шагами по [импорту данных из файла Excel в Spreadsheet](#loading-excel-file-xlsx).

### Экспорт в JSON {#export-into-json}

Начиная с версии v4.3 библиотека также может экспортировать данные из таблицы в файл JSON. Для этого используйте метод [json()](api/export_json_method.md) объекта Export:

~~~jsx
spreadsheet.export.json();
~~~

**Связанный пример**: [Spreadsheet. Экспорт/импорт JSON](https://snippet.dhtmlx.com/e3xct53l)
