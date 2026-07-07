---
sidebar_label: addColumn() 
title: метод addColumn
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе addColumn. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// добавляет пустой столбец "G"
spreadsheet.addColumn("G1");
~~~

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
