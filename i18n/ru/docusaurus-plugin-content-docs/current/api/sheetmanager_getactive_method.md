---
sidebar_label: getActive()
title: метод getActive
description: Получите активный (видимый) лист DHTMLX Spreadsheet с помощью метода sheets.getActive(), который возвращает идентификатор и имя листа.
---

# getActive()

### Описание {#description}

@short: Возвращает объект листа, который в данный момент активен (отображается) в таблице

### Использование {#usage}

~~~ts
getActive: () => ISheet;
~~~

### Возвращаемое значение {#returns}

- `ISheet` - (*object*) объект текущего активного листа со свойствами `id` и `name`.

### Пример {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
