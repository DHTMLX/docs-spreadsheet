---
sidebar_label: afterEditStart
title: Событие afterEditStart
description: Обработайте начало редактирования ячейки в DHTMLX Spreadsheet с помощью события afterEditStart, которое получает id ячейки и её значение.
---

# afterEditStart

### Описание {#description}

@short: Вызывается после начала редактирования ячейки

### Использование {#usage}

~~~jsx
afterEditStart: (cell: string, value: string) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки
- `value` - (обязательный) значение ячейки

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterEditStart"
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
