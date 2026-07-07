---
sidebar_label: afterSheetChange
title: Событие afterSheetChange
description: Вы можете узнать о событии afterSheetChange в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# afterSheetChange

### Описание {#description}

@short: Вызывается после смены активного листа

### Использование {#usage}

~~~jsx
afterSheetChange: (sheet: object) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `sheet` - (обязательный) объект с именем и идентификатором нового активного листа

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterSheetChange"
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**Список изменений:** Добавлено в v4.1

**Связанные статьи:** [Обработка событий](handling_events.md)
