---
sidebar_label: addRow()
title: метод addRow
description: Добавьте пустую строку в DHTMLX Spreadsheet с помощью метода addRow(), который вставляет её на место строки указанной ячейки и сдвигает существующие строки вниз.
---

# addRow()

### Описание {#description}

@short: Добавляет новую строку в таблицу

:::info
Метод находит указанную ячейку, выбирает её, сдвигает строку, в которой находится ячейка, на одну позицию вниз и добавляет на её место пустую строку.
:::

### Использование {#usage}

~~~jsx
addRow(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, содержащей идентификатор строки, которую нужно добавить

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// добавляет пустую вторую строку
spreadsheet.addRow("G2");
~~~

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
