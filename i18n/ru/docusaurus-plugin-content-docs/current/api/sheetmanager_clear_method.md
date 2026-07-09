---
sidebar_label: clear()
title: метод clear
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе clear Sheet Manager. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
