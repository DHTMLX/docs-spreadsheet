---
sidebar_label: startEdit()
title: Метод startEdit
description: Вы можете узнать о методе startEdit в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# startEdit()

### Описание {#description}

@short: Запускает редактирование выбранной ячейки

:::info
Если идентификатор ячейки не передан, редактирование начинается в текущей выбранной ячейке.
:::

### Использование {#usage}

~~~jsx
startEdit(cell?: string, initialValue?: string): void;
~~~

### Параметры {#parameters}

- `cell` - (необязательный) идентификатор ячейки
- `initialValue` - (необязательный) значение ячейки

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// starts editing the currently selected cell
spreadsheet.startEdit();
~~~

**Связанные статьи:** [Работа с таблицей](working_with_cells.md#editing-a-cell)
