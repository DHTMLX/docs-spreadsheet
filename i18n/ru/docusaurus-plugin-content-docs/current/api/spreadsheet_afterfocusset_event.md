---
sidebar_label: afterFocusSet
title: Событие afterFocusSet
description: Отслеживайте ячейку с фокусом в DHTMLX Spreadsheet с помощью события afterFocusSet, которое вызывается после установки фокуса на ячейку и получает её id.
---

# afterFocusSet

### Описание {#description}

@short: Вызывается после установки фокуса на ячейку

### Использование {#usage}

~~~jsx
afterFocusSet: (cell: string) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterFocusSet"
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
