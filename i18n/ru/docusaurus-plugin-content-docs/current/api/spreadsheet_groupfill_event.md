---
sidebar_label: groupFill
title: Событие groupFill
description: Обработайте автозаполнение ячеек в DHTMLX Spreadsheet с помощью события groupFill, которое передаёт в обработчик ячейку в фокусе и выделенные ячейки.
---

# groupFill

### Описание {#description}

@short: Срабатывает при автозаполнении ячеек

### Использование {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `focusedCell` - (обязательный) идентификатор ячейки в фокусе
- `selectedCell` - (обязательный) идентификаторы выбранных ячеек

### Пример {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "groupFill"
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
