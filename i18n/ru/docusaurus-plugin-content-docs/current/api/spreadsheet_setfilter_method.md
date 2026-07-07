---
sidebar_label: setFilter()
title: Метод setFilter
description: Вы можете узнать о методе setFilter в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# setFilter()

### Описание {#description}

@short: Фильтрует данные в таблице по заданным критериям

### Использование {#usage}

~~~jsx   
setFilter( 
    cell?: string,
    rules?:  [
        {
            condition?: {
                factor: "string", 
                value: date | number |string | [number, number]
            },
            exclude?: any[]
        },
        // more rule objects
    ]
): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки (или диапазона ячеек), содержащей идентификатор столбца, значения которого фильтруются (например, "A1", "A1:C10" или "sheet2!A1")
- `rules` - (необязательный) массив объектов с правилами фильтрации. Каждый объект может содержать следующие параметры:
    - `condition` - (необязательный) объект с параметрами условной фильтрации листа:
        - `factor` - (обязательный) строковое значение, определяющее выражение сравнения для фильтрации. Смотрите список доступных значений [ниже](#list-of-factors)
        - `value` - (обязательный) значение(я) для фильтрации по указанному фактору
    - `exclude` - (необязательный) массив элементов данных, которые должны быть исключены из листа

:::note
Чтобы сбросить фильтрацию, вызовите метод без параметров или передайте только параметр `cell`.
:::

### Пример {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// filter data by condition specified for column A
spreadsheet.setFilter("A2", [{condition: {factor: "te", value:"r" }}]);

// filter data by criteria specified for column A of Date sheet
spreadsheet.setFilter("Date!A1", [{condition: {factor: "db", value:"18/10/2022" }, exclude: ["25/06/2022"]}]);

// filter data by condition specified for column C
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}}]);

// filter data by conditions specified for columns A and C
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);


// reset filtering
spreadsheet.setFilter();
~~~

### Список факторов {#list-of-factors}

| Фактор | Значение               |
| ------ | ---------------------- |
| "e"    | пусто                  |
| "ne"   | не пусто               |
| "tc"   | текст содержит         |
| "tdc"  | текст не содержит      |
| "ts"   | текст начинается с     |
| "te"   | текст заканчивается на |
| "tex"  | точное совпадение      |
| "d"    | дата совпадает         |
| "db"   | дата до               |
| "da"   | дата после            |
| "gt"   | больше чем            |
| "geq"  | больше или равно      |
| "lt"   | меньше чем            |
| "leq"  | меньше или равно      |
| "eq"   | равно                 |
| "neq"  | не равно              |
| "ib"   | в диапазоне           |
| "inb"  | не в диапазоне        |

**Журнал изменений:** Добавлено в v5.0

**Связанная статья:** [Фильтрация данных](working_with_ssheet.md#filtering-data)

**Связанный пример:** [Spreadsheet. Фильтрация через АПИ](https://snippet.dhtmlx.com/effrcsg6)
