---
sidebar_label: afterEditStart
title: Событие afterEditStart
description: Вы можете узнать о событии afterEditStart в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterEditStart"
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
