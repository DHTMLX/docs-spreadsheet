---
sidebar_label: addColumn() 
title: метод addColumn
description: Добавьте пустой столбец в DHTMLX Spreadsheet с помощью метода addColumn(), который вставляет его на место столбца указанной ячейки и сдвигает существующие столбцы вправо.
---

# addColumn()

### Описание {#description}

@short: Добавляет новый столбец в таблицу

:::info
Метод находит указанную ячейку, выбирает её, сдвигает столбец, в котором находится ячейка, на одну позицию влево и добавляет на его место пустой столбец.
:::

### Использование {#usage}

~~~jsx
addColumn(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, содержащей идентификатор столбца, который нужно добавить

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// добавляет пустой столбец "G"
spreadsheet.addColumn("G1");
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
