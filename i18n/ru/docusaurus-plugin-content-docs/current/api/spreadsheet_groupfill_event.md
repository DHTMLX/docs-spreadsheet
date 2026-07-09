---
sidebar_label: groupFill
title: Событие groupFill
description: Вы можете узнать о событии groupFill в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# groupFill

### Описание {#description}

@short: Срабатывает при автозаполнении ячеек

### Использование {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### Параметры {#parameters}

Калбэк события принимает следующие параметры:

- `focusedCell` - (обязательный) идентификатор ячейки в фокусе
- `selectedCell` - (обязательный) идентификаторы выбранных ячеек

### Пример {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "groupFill"
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
