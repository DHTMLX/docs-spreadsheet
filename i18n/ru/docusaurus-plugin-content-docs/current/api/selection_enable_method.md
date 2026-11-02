---
sidebar_label: enable() 
title: Метод enable объекта selection
description: "Снова включите выделение ячеек в DHTMLX Spreadsheet с помощью метода selection.enable(): он делает активной ячейку A1 и вызывает события выделения."
---

# enable()

### Описание {#description}

@short: Включает выделение ячеек

### Использование {#usage}

~~~jsx
enable(): void;
~~~

### Пример {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.enable();
~~~

### Подробности {#details}

Метод делает активной ячейку A1 активного листа. Для ячейки A1 вызываются события [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md), [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md), [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md) и [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md).

Если выделение уже включено, метод ничего не делает.

**Журнал изменений:** Добавлено в v6.0.4

**Связанные статьи:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`disable()`](api/selection_disable_method.md)
- [Доступность: настройка режима только для чтения](accessibility.md#read-only-setup)
