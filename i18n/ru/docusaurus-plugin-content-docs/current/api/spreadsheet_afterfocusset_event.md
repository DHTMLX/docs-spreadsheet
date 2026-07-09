---
sidebar_label: afterFocusSet
title: Событие afterFocusSet
description: Вы можете узнать о событии afterFocusSet в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterFocusSet"
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
