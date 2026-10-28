---
sidebar_label: isDisabled() 
title: Метод isDisabled объекта selection
description: Проверьте, отключено ли выделение ячеек в DHTMLX Spreadsheet, с помощью метода selection.isDisabled().
---

# isDisabled()

### Описание {#description}

@short: Проверяет, отключено ли выделение ячеек

### Использование {#usage}

~~~jsx
isDisabled(): boolean;
~~~

### Возвращаемое значение {#returns}

Метод возвращает `true`, если выделение отключено, и `false` в противном случае

### Пример {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

const disabled = spreadsheet.selection.isDisabled(); // -> true
~~~

**Журнал изменений:** Добавлено в v6.0.4

**Связанные статьи:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [`disable()`](api/selection_disable_method.md)
- [Доступность: настройка режима только для чтения](accessibility.md#read-only-setup)
