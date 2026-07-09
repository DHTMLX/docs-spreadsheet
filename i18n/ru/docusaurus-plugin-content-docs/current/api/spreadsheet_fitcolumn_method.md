---
sidebar_label: fitColumn()
title: Метод fitColumn
description: Вы можете узнать о методе fitColumn в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подстраивает ширину столбца "G"
spreadsheet.fitColumn("G2");
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с таблицей](working_with_ssheet.md#autofit-column-width)
