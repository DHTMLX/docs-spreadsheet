---
sidebar_label: getAll()
title: метод getAll
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе getAll менеджера листов. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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

### Возвращает {#returns}

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

**Журнал изменений:** Добавлен в v6.0

**Связанные статьи:** [Работа с листами](working_with_sheets.md)
