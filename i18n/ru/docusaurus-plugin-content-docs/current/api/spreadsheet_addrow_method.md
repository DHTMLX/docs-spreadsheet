---
sidebar_label: addRow()
title: метод addRow
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе addRow. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// добавляет пустую вторую строку
spreadsheet.addRow("G2");
~~~

**Связанные статьи:** [Работа с таблицей](working_with_ssheet.md#addingremoving-rows-and-columns)
