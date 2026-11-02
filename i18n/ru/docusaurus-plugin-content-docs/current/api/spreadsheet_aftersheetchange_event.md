---
sidebar_label: afterSheetChange
title: Событие afterSheetChange
description: Отслеживайте переключение листов в DHTMLX Spreadsheet с помощью события afterSheetChange, которое получает имя и id нового активного листа.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписка на событие "afterSheetChange"
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**Журнал изменений:** Добавлено в v4.1

**Полезная статья:** [Обработка событий](handling_events.md)
