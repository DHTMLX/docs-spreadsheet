---
sidebar_label: getAll()
title: метод getAll
description: Получите все листы DHTMLX Spreadsheet с помощью метода sheets.getAll(), который возвращает массив объектов с идентификаторами и именами листов.
---

# getAll()

### Описание {#description}

@short: Возвращает массив всех объектов листов, присутствующих в таблице в данный момент

:::info
Каждый объект листа содержит его id и name.
:::

### Использование {#usage}

~~~ts
getAll: () => ISheet[];
~~~

### Возвращаемое значение {#returns}

- `ISheet[]` - (*array*) массив объектов листов.

### Пример {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
