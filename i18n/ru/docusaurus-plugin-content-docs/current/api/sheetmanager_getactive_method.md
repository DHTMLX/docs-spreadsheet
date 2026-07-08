---
sidebar_label: getActive()
title: метод getActive
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе getActive менеджера листов. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getActive()

### Описание {#description}

@short: Возвращает объект листа, который в данный момент активен (отображается) в таблице

### Использование {#usage}

~~~ts
getActive: () => ISheet;
~~~

### Возвращает {#returns}

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

**Журнал изменений:** Добавлен в v6.0

**Связанные статьи:** [Работа с листами](working_with_sheets.md)
