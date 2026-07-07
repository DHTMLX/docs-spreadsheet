---
sidebar_label: get()
title: метод get
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе get менеджера листов. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# get()

### Описание {#description}

@short: Возвращает объект отдельного листа по его идентификатору

### Использование {#usage}

~~~ts
get: (id: Id) => ISheet;
~~~

### Параметры {#parameters}

- `id` - (`string | number`) обязательный, уникальный идентификатор листа, который нужно получить.

### Возвращает {#returns}

- `ISheet` - (`object`) объект листа, соответствующий переданному идентификатору.

### Пример {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**Журнал изменений:** Добавлен в v6.0

**Связанные статьи:** [Работа с листами](working_with_sheets.md)
