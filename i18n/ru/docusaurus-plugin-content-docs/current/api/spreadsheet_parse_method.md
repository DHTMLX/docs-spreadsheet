---
sidebar_label: parse()
title: метод parse
description: Вы можете узнать о методе parse в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# parse()

### Описание {#description}

@short: Загружает данные в таблицу из локального источника данных

### Использование {#usage}

~~~jsx title="Загрузка данных в один лист"
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        },
        locked?: boolean,
        link?: {
            text?: string,
            href: string
        }
    },
    // more cell objects
]): void;
~~~

~~~jsx title="Загрузка данных в несколько листов"
parse({
    sheets: [
        {
            name?: string,
            id?: string,
            cols?: [
                {
                    width?: number,
                    hidden?: boolean,
                },
                // more column objects
            ],
            rows?: [
                {
                    height?: number,
                    hidden?: boolean,
                },
                // more row objects
            ],
            data: [
                {
                    cell: string,
                    value: string | number | Date,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // more cell objects
            ],
            merged?: [
                { 
                    from: { column: index, row: index }, 
                    to: { column: index, row: index }
                },
                // more objects
            ],
            freeze?: {
               col?: number,
               row?: number,
            }
        },
        // more sheet objects
    ]      
}): void;
~~~

### Параметры {#parameters}

Если нужно создать набор данных *только для одного листа*, укажите данные как **массив объектов ячеек**. Для каждого объекта **cell** можно задать следующие параметры:

- `cell` - (обязательный) идентификатор ячейки, формируемый как "идентификатор столбца + идентификатор строки", например A1
- `value` - (обязательный) значение ячейки
- `css` - (необязательный) имя CSS-класса
- `format` - (необязательный) имя [стандартного числового формата](number_formatting.md#default-number-formats) или [пользовательского формата](number_formatting.md#formats-customization), добавленного для применения к значению ячейки
- `editor` - (необязательный) объект с настройками редактора ячейки:
    - `type` - (обязательный) тип редактора ячейки: "select"
    - `options` - (обязательный) диапазон ячеек ("A1:B8") или массив строковых значений
- `locked` - (необязательный) определяет, заблокирована ли ячейка, по умолчанию `false`
- `link` - (необязательный) объект с настройками ссылки, добавленной в ячейку:
    - `text` - (необязательный) текст ссылки
    - `href` - (обязательный) URL, определяющий назначение ссылки

<br>

Если нужно создать набор данных *сразу для нескольких листов*, укажите данные как **объект** со следующим параметром:

- `sheets` - (обязательный) массив объектов **sheet**. Каждый объект имеет следующие свойства:
    - `name` - (необязательный) имя листа
    - `id` - (необязательный) идентификатор листа
    - `rows` - (необязательный) массив объектов с конфигурациями строк. Каждый объект может содержать следующие свойства:
        - `height` - (необязательный) высота строки. Если не указана, строки имеют высоту 32px
        - `hidden` - (необязательный) определяет видимость строки
    - `cols` - (необязательный) массив объектов с конфигурациями столбцов. Каждый объект может содержать следующие свойства:
        - `width` - (необязательный) ширина столбца. Если не указана, столбцы имеют ширину 120px
        - `hidden` - (необязательный) определяет видимость столбца
    - `data` - (обязательный) массив объектов **cell**. Каждый объект имеет следующие свойства:
        - `cell` - (обязательный) идентификатор ячейки, формируемый как "идентификатор столбца + идентификатор строки", например A1
        - `value` - (обязательный) значение ячейки
        - `css` - (необязательный) имя CSS-класса
        - `format` - (необязательный) имя [стандартного числового формата](number_formatting.md#default-number-formats) или [пользовательского формата](number_formatting.md#formats-customization), добавленного для применения к значению ячейки
        - `editor` - (необязательный) объект с настройками редактора ячейки:
            - `type` - (обязательный) тип редактора ячейки: "select"
            - `options` - (обязательный) диапазон ячеек ("A1:B8") или массив строковых значений
        - `locked` - (необязательный) определяет, заблокирована ли ячейка, по умолчанию `false`
        - `link` - (необязательный) объект с настройками ссылки, добавленной в ячейку:
            - `text` - (необязательный) текст ссылки
            - `href` - (обязательный) URL, определяющий назначение ссылки
    - `merged` - (необязательный) массив объектов, каждый из которых определяет диапазон ячеек для объединения. Каждый объект должен содержать следующие свойства:
        - `from` - объект, определяющий позицию первой ячейки диапазона:
            - `column` - индекс столбца
            - `row` - индекс строки
        - `to` - объект, определяющий позицию последней ячейки диапазона:
            - `column` - индекс столбца
            - `row` - индекс строки
    - `freeze` - (необязательный) объект, задающий и настраивающий фиксированные столбцы/строки для конкретных листов. Может содержать следующие свойства:
        - `col` - (необязательный) задаёт количество фиксированных столбцов (например, 2), по умолчанию `0`
        - `row` - (необязательный) задаёт количество фиксированных строк (например, 2), по умолчанию `0`

:::info
Если параметр конфигурации [`multisheets`](api/spreadsheet_multisheets_config.md) установлен в `false`, создаётся только один лист.
:::

### Пример {#example}

~~~jsx {22} title="Пример 1. Загрузка данных в один лист"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, css: "someclass" },
    { cell: "D2", value: 430 },
    { cell: "E2", value: 2872.4 },
    
    // добавляем выпадающие списки в ячейки
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // больше данных
];

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);
~~~

~~~jsx title="Пример 2. Загрузка данных в несколько листов"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            rows: [
                { height: 50, hidden: true }, // конфигурация первой строки
                { height: 50 }, // конфигурация второй строки
                // высота остальных строк — 32
            ],
            cols: [
                { width: 300 }, // конфигурация первого столбца
                { width: 300, hidden: true }, // конфигурация второго столбца
                // ширина остальных столбцов — 120
            ],
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            merged: [
                // объединяем ячейки A1 и B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // объединяем ячейки A2, A3, A4 и A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } }
            ],
            freeze: {
                col: 2,
                row: 2
            },
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
            ]
        }
    ]
};

spreadsheet.parse(data);
~~~

## Загрузка стилизованных данных {#parsing-styled-data}

Вы также можете задать конкретные стили для ячеек при подготовке набора данных. Для этого определите данные как объект с двумя параметрами:

- `styles` - (обязательный) объект с CSS-классами, применяемыми к конкретным ячейкам. [Подробнее ниже](#list-of-properties)
- `data` - (обязательный) загружаемые данные

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "a1", value: "Country" },
        { cell: "b1", value: "Product" },
        { cell: "c1", value: "Price" },
        { cell: "d1", value: "Amount" },
        { cell: "e1", value: "Total Price" },

        { cell: "a2", value: "Ecuador" },
        { cell: "b2", value: "Banana" },
        { cell: "c2", value: 6.68, css: "someclass" },
        { cell: "d2", value: 430, css: "someclass" },
        { cell: "e2", value: 2872.4 }
    ],
};

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

:::info
Задайте CSS-класс для ячейки с помощью свойства `css`.
:::

### Список свойств {#list-of-properties}

Список свойств, которые можно указать в объекте `styles`:

- `background`
- `color`
- `textAlign`
- `verticalAlign`
- `textDecoration`
- `fontWeight`
- `fontStyle`
- `multiline: "wrap"` (начиная с v5.0.3)
- `border`, `border-right`, `border-left`, `border-top`, `border-bottom` (начиная с v5.2)

:::note
При необходимости вы также можете использовать следующие свойства:

- `fontSize`
- `font`
- `fontFamily`
- `textShadow`

однако в некоторых случаях они могут работать не так, как ожидается (например, при применении `position: absolute` или `display: box`)
:::

**Журнал изменений:**

- Свойство `freeze` и параметр `hidden` для свойств `rows` и `cols` объекта `sheets` добавлены в v5.2
- Свойства `locked` и `link` объекта `cell` добавлены в v5.1
- Свойство `merged` объекта `sheets` добавлено в v5.0
- Свойство `editor` объекта `cell` добавлено в v4.3
- Свойства `rows` и `cols` объекта `sheets` добавлены в v4.2
- Возможность подготовки данных для нескольких листов добавлена в v4.1

**Связанные статьи:** [Загрузка и экспорт данных](loading_data.md)

**Связанные примеры**:

- [Spreadsheet. Styled Data](https://snippet.dhtmlx.com/abnh7glb)
- [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)
- [Spreadsheet. Initialization with merged cells](https://snippet.dhtmlx.com/0vtukep9)
