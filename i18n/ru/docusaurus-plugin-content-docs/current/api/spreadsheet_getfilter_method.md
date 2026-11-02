---
sidebar_label: getFilter()
title: Метод getFilter
description: Получите критерии фильтрации листа в DHTMLX Spreadsheet с помощью метода getFilter(), который возвращает отфильтрованный диапазон ячеек и правила фильтрации.
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

### Возвращаемое значение {#returns}

Метод возвращает объект с критериями фильтрации. Объект включает два атрибута:

- `cell` - диапазон ячеек, к которому применяется фильтрация
- `rules` - массив объектов с правилами фильтрации

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// получает критерии фильтрации для текущего листа
const filter = spreadsheet.getFilter(); // -> {cell:"A1:A8", rules: [{…}, {…}, {…}, {…}, {…}]}
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Фильтрация данных](working_with_ssheet.md#filtering-data)
