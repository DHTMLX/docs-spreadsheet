---
sidebar_label: beforeSheetChange
title: Событие beforeSheetChange
description: Вы можете узнать о событии beforeSheetChange в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
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
