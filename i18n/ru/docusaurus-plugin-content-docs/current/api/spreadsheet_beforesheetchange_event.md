---
sidebar_label: beforeSheetChange
title: Событие beforeSheetChange
description: Управляйте переключением листов в DHTMLX Spreadsheet с помощью события beforeSheetChange и верните false, чтобы текущий лист остался активным.
---

# beforeSheetChange

### Описание {#description}

@short: Срабатывает перед сменой активного листа

### Использование {#usage}

~~~jsx
beforeSheetChange: (sheet: object) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `sheet` - (обязательный) объект с именем и идентификатором текущего активного листа

### Возвращаемое значение {#returns}

Верните `true`, чтобы разрешить смену активного листа, `false` — чтобы запретить

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeSheetChange"
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed");
    console.log(sheet);
    return true;
});
~~~

**ÐÑÑÐ½Ð°Ð» Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹:** Добавлено в v4.1

**Полезная статья:** [Обработка событий](handling_events.md)
