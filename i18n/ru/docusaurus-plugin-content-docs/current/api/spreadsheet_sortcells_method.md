---
sidebar_label: sortCells()
title: Метод sortCells
description: Отсортируйте данные DHTMLX Spreadsheet по возрастанию или убыванию по столбцу или диапазону ячеек с помощью метода sortCells().
---

# sortCells()

### Описание {#description}

@short: Сортирует данные в таблице

### Использование {#usage}

~~~jsx
sortCells(cell: string, dir: number): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек, по которым нужно отсортировать данные в таблице
- `dir` - (обязательный) направление сортировки:
    - 1 - по возрастанию
    - -1 - по убыванию

### Пример {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // configuration parameters
});
spreadsheet.parse(data);

// sorts data on the first sheet
spreadsheet.sortCells("B2:B11", -1);

// sorts data on several sheets
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~


**Связанный пример:** [Spreadsheet. Инициализация с несколькими листами](https://snippet.dhtmlx.com/ihtkdcoc)

**Полезная статья:** [Сортировка данных](working_with_ssheet.md#sorting-data)
