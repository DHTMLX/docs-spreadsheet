---
sidebar_label: beforeFocusSet
title: Событие beforeFocusSet
description: Управляйте фокусом в DHTMLX Spreadsheet с помощью события beforeFocusSet, которое вызывается перед установкой фокуса на ячейку и отменяет её, если обработчик возвращает false.
---

# beforeFocusSet

### Описание {#description}

@short: Срабатывает перед установкой фокуса на ячейку

### Использование {#usage}

~~~jsx
beforeFocusSet: (cell: string) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки

### Возвращаемое значение {#returns}

Верните `true`, чтобы установить фокус на ячейку, `false` — чтобы запретить установку фокуса

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeFocusSet"
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
