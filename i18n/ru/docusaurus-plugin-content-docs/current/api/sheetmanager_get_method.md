---
sidebar_label: get()
title: метод get
description: Получите объект листа по его идентификатору в DHTMLX Spreadsheet с помощью метода sheets.get().
---

# get()

### Описание {#description}

@short: Возвращает объект отдельного листа по его идентификатору

### Использование {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### Параметры {#parameters}

- `id` - (*string | number*) обязательный, уникальный идентификатор листа, который нужно получить.

### Возвращаемое значение {#returns}

- `ISheet` - (*object*) объект листа, соответствующий переданному идентификатору.

### Пример {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
