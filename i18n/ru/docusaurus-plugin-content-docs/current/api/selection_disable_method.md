---
sidebar_label: disable() 
title: Метод disable объекта selection
description: "Отключите выделение ячеек в DHTMLX Spreadsheet во время выполнения с помощью метода selection.disable(): он убирает активную ячейку и игнорирует выделение мышью, клавиатурой и через API."
---

# disable()

### Описание {#description}

@short: Отключает выделение ячеек

### Использование {#usage}

~~~jsx
disable(): void;
~~~

### Пример {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.disable();
~~~

### Подробности {#details}

Метод:

- завершает редактирование ячейки и сохраняет введённое значение
- снимает выделение и убирает активную ячейку на каждом листе
- игнорирует выделение мышью, клавиатурой и через API, пока не будет вызван метод [`enable()`](api/selection_enable_method.md)

Пока выделение отключено, методы [`getSelectedCell()`](api/selection_getselectedcell_method.md) и [`getFocusedCell()`](api/selection_getfocusedcell_method.md) возвращают `undefined`. Остальные эффекты такие же, как у параметра конфигурации [`selection: false`](api/spreadsheet_selection_config.md#details).

Если выделение уже отключено, метод ничего не делает.

**Журнал изменений:** Добавлено в v6.0.4

**Связанные статьи:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [Доступность: настройка режима только для чтения](accessibility.md#read-only-setup)
