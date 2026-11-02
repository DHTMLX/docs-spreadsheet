---
sidebar_label: beforeEditStart
title: Событие beforeEditStart
description: Управляйте тем, какие ячейки можно редактировать в DHTMLX Spreadsheet, с помощью события beforeEditStart и верните false, чтобы редактор не открывался.
---

# beforeEditStart

### Описание {#description}

@short: Срабатывает перед началом редактирования ячейки

### Использование {#usage}

~~~jsx
beforeEditStart: (cell: string, value: string) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки
- `value` - (обязательный) значение ячейки

### Возвращаемое значение {#returns}

Верните `true`, чтобы разрешить редактирование ячейки, `false` — чтобы запретить

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeEditStart"
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
