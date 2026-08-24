---
sidebar_label: serialize()
title: метод serialize
description: Вы можете узнать о методе serialize в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# serialize()

### Описание {#description}

@short: Сериализует данные таблицы в JSON-объект

### Использование {#usage}

~~~jsx
serialize(): {
    sheets: [
        {
            name: string,
            id: string,
            data: [
                {
                    cell: string,
                    value?: string | number,
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
            ],
            cols: [
                {
                    width: number,
                    hidden: boolean
                },
                // more column objects
            ],
            rows: [
                {
                    height: number,
                    hidden: boolean
                },
                // more row objects
            ],
            merged: [
                {
                    from: { column: number, row: number },
                    to: { column: number, row: number }
                },
                // more objects
            ],
            freeze: {
                col: number,
                row: number
            }
        },
        // more sheet objects
    ],
    styles: object,
    formats: array
};
~~~

### Возвращаемое значение {#returns}

Метод возвращает сериализованный JSON-объект со следующими атрибутами:

- `formats` - массив объектов с числовыми форматами
- `styles` - объект с применёнными CSS-классами, где ключ - это имя класса, а значение - объект с его свойствами стиля
- `sheets` - массив объектов листов. Каждый объект содержит следующие атрибуты:
    - `name` - имя листа
    - `id` - идентификатор листа
    - `data` - массив объектов ячеек. Каждый объект содержит атрибут `cell` с идентификатором ячейки и атрибуты, которые были заданы для ячейки: `value`, `css`, `format`, `editor`, `locked`, `link`
    - `cols` - массив объектов с конфигурациями столбцов. Каждый объект содержит атрибуты `width` и `hidden`
    - `rows` - массив объектов с конфигурациями строк. Каждый объект содержит атрибуты `height` и `hidden`
    - `merged` - массив объектов, каждый из которых определяет диапазон объединённых ячеек через атрибуты `from` и `to`
    - `freeze` - объект с количеством фиксированных столбцов и строк, `{ col: 0, row: 0 }`, если ничего не зафиксировано

Обратите внимание:

- атрибуты `merged` и `freeze` всегда присутствуют в объекте листа, как и атрибут `hidden` в объекте столбца или строки, который равен `false`, когда столбец или строка видимы
- массивы `cols` и `rows` охватывают диапазон данных листа и расширяются дальше, если ширина столбца, высота строки или состояние `hidden` были изменены за пределами этого диапазона. Таким образом, пользовательские размеры пустых столбцов и строк также сохраняются
- ячейка попадает в массив `data`, если у неё есть значение, CSS-класс, редактор или состояние `locked`. Таким образом, заблокированные пустые ячейки также сохраняются
- возвращаемый объект можно передать в метод [](api/spreadsheet_parse_method.md) без изменений

### Пример {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const state = spreadsheet.serialize();
~~~

**Полезная статья:** [Загрузка и экспорт данных](loading_data.md#saving-and-restoring-state)
