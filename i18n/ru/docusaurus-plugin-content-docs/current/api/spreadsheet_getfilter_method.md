---
sidebar_label: getFilter()
title: Метод getFilter
description: Вы можете узнать о методе getFilter в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getFilter()

### Описание {#description}

@short: Возвращает объект с критериями, заданными для фильтрации данных

### Использование {#usage}

~~~jsx   
getFilter(id?: string): {cell, rules};
~~~

### Параметры {#parameters}

- `id` - (необязательный) идентификатор листа. Если не указан, метод вызывается для текущего листа

### Возвращает {#returns}

Метод возвращает объект с критериями фильтрации. Объект включает два атрибута:

- `cell` - диапазон ячеек, к которому применяется фильтрация
- `rules` - массив объектов с правилами фильтрации

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// получает критерии фильтрации для текущего листа
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**Журнал изменений:** Добавлен в v5.0

**Связанные статьи:** [Фильтрация данных](working_with_ssheet.md#filtering-data)
