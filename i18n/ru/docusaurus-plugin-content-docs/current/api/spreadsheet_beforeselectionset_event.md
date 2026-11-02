---
sidebar_label: beforeSelectionSet
title: Событие beforeSelectionSet
description: Управляйте выделением ячеек в DHTMLX Spreadsheet с помощью события beforeSelectionSet, которое вызывается перед выделением ячеек и отменяет его, если обработчик возвращает false.
---

# beforeSelectionSet

### Описание {#description}

@short: Срабатывает перед выделением ячеек

### Использование {#usage}

~~~jsx
beforeSelectionSet: (cell: string) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор(ы) ячейки(ек)

### Возвращаемое значение {#returns}

Верните `true`, чтобы разрешить выделение ячеек, `false` — чтобы запретить выделение

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeSelectionSet"
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
