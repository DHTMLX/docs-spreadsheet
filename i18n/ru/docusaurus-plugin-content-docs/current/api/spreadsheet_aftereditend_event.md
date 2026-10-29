---
sidebar_label: afterEditEnd
title: Событие afterEditEnd
description: Обработайте завершение редактирования ячейки в DHTMLX Spreadsheet с помощью события afterEditEnd, которое получает id ячейки и её новое значение.
---

# afterEditEnd

### Описание {#description}

@short: Вызывается после завершения редактирования ячейки

### Использование {#usage}

~~~jsx
afterEditEnd: (cell: string, value: string) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки
- `value` - (обязательный) значение ячейки

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterEditEnd"
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
