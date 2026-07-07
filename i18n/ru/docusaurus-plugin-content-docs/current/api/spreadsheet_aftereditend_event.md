---
sidebar_label: afterEditEnd
title: Событие afterEditEnd
description: Вы можете узнать о событии afterEditEnd в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterEditEnd"
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**Связанные статьи:** [Обработка событий](handling_events.md)
