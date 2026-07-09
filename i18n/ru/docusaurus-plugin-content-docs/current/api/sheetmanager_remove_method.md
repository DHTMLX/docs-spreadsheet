---
sidebar_label: remove()
title: метод remove
description: В документации DHTMLX JavaScript Spreadsheet вы можете узнать о методе remove менеджера листов. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# remove()

### Описание {#description}

@short: Удаляет лист из таблицы по его идентификатору

Если удалённый лист был активным, таблица автоматически переключается на другой доступный лист.

:::info
Чтобы применить этот метод, необходимо включить параметр конфигурации [`multiSheets`](api/spreadsheet_multisheets_config.md).

Также обратите внимание, что лист не удаляется, если в таблице меньше 2 листов.
:::

### Использование {#usage}

~~~ts
remove: (id: Id) => void;
~~~

### Параметры {#parameters}

- `id` - (*string | number*) обязательный, уникальный идентификатор листа, который нужно удалить.

### Пример {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Удалить лист по его id
spreadsheet.sheets.remove("sheet_2");
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
