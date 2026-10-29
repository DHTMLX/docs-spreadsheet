---
sidebar_label: fitColumn()
title: Метод fitColumn
description: Подстройте ширину столбца под его самое длинное значение в DHTMLX Spreadsheet с помощью метода fitColumn().
---

# fitColumn()

### Описание {#description}

@short: Подстраивает ширину столбца по его самому длинному значению


### Использование {#usage}

~~~jsx
fitColumn(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, содержащей имя нужного столбца

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// подстраивает ширину столбца "G"
spreadsheet.fitColumn("G2");
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#autofit-column-width)
