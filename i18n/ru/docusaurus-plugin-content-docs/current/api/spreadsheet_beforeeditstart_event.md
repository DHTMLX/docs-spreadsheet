---
sidebar_label: beforeEditStart
title: Событие beforeEditStart
description: Вы можете узнать о событии beforeEditStart в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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

### Возвращает {#returns}

Верните `true`, чтобы разрешить редактирование ячейки, `false` — чтобы запретить

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeEditStart"
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Связанные статьи:** [Обработка событий](handling_events.md)
