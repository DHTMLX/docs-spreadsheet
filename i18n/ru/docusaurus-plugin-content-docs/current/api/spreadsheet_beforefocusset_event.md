---
sidebar_label: beforeFocusSet
title: Событие beforeFocusSet
description: Вы можете узнать о событии beforeFocusSet в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeFocusSet"
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
