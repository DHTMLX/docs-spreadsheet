---
sidebar_label: beforeEditEnd
title: Событие beforeEditEnd
description: Вы можете узнать о событии beforeEditEnd в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# beforeEditEnd

### Описание {#description}

@short: Вызывается перед завершением редактирования ячейки

### Использование {#usage}

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор ячейки
- `value` - (обязательный) значение ячейки

### Возвращаемое значение {#returns}

Верните `true`, чтобы завершить редактирование ячейки, `false` — чтобы предотвратить закрытие редактора

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "beforeEditEnd"
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
