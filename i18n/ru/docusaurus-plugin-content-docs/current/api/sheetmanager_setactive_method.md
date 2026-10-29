---
sidebar_label: setActive()
title: метод setActive
description: Переключите активный (видимый) лист DHTMLX Spreadsheet на лист с указанным идентификатором с помощью метода sheets.setActive().
---

# setActive()

### Описание {#description}

@short: Переключает активный (отображаемый) лист на тот, что указан по его идентификатору

Интерфейс таблицы перерисовывается для отображения содержимого целевого листа.

### Использование {#usage}

~~~ts
setActive: (id: Id) => void;
~~~

### Параметры {#parameters}

- `id` - (*string | number*) обязательный, уникальный идентификатор листа, который нужно активировать.

### Пример {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Переключиться на второй лист
spreadsheet.sheets.setActive("sheet_2");

// Проверить переключение
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
