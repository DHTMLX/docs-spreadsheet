---
sidebar_label: startEdit()
title: Метод startEdit
description: Начните редактирование переданной или выбранной ячейки DHTMLX Spreadsheet с помощью метода startEdit(), при необходимости с начальным значением.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// starts editing the currently selected cell
spreadsheet.startEdit();
~~~

### Подробности {#details}

Ввод текста в активной ячейке запускает редактирование через этот метод. Текст, набранный с помощью редактора метода ввода (IME), передаётся как `initialValue` по завершении набора. Поэтому события [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md) и [`afterEditStart`](api/spreadsheet_aftereditstart_event.md) получают введённый или набранный текст, а `beforeEditStart` может отменить редактирование.

**Журнал изменений:** Запуск редактирования с текстом, набранным с помощью IME, добавлен в v6.0.4

**Полезная статья:** [Работа с таблицей](working_with_cells.md#editing-a-cell)
