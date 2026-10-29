---
sidebar_label: clear()
title: метод clear
description: Очистите значения, стили и форматирование листа в DHTMLX Spreadsheet с помощью метода sheets.clear(), не удаляя сам лист.
---

# clear()

### Описание {#description}

@short: Очищает содержимое указанного листа (удаляет все значения ячеек, стили и форматирование), не удаляя сам лист

Если идентификатор не передан, очищается текущий активный лист.

### Использование {#usage}

~~~ts
clear: (id?: Id) => void;
~~~

### Параметры {#parameters}

- `id` - (*string | number*) необязательный, уникальный идентификатор листа, который нужно очистить. Если не указан, очищается текущий активный лист.

### Пример {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Очистить конкретный лист по id
spreadsheet.sheets.clear("sheet_1");

// Очистить текущий активный лист
spreadsheet.sheets.clear();
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
