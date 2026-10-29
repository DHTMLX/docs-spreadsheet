---
sidebar_label: afterSelectionSet
title: Событие afterSelectionSet
description: Обработайте выделение ячеек в DHTMLX Spreadsheet с помощью события afterSelectionSet, которое вызывается после выделения ячеек и получает их id.
---

# afterSelectionSet

### Описание {#description}

@short: Вызывается после выделения ячеек

### Использование {#usage}

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор(ы) ячейки(ек)

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterSelectionSet"
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
