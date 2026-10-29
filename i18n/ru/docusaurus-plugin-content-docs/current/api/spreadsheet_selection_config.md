---
sidebar_label: selection
title: Конфигурация selection
description: Отключите выделение ячеек в DHTMLX Spreadsheet с помощью свойства selection, отдельно или вместе с режимом только для чтения, чтобы показывать данные без активной ячейки.
---

# selection

### Описание {#description}

@short: Необязательный. Включает/отключает выделение ячеек

### Использование {#usage}

~~~jsx
selection?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
selection: true
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    selection: false,
    // other config parameters
});
~~~

### Подробности {#details}

Если для свойства задано значение `false`:

- в Spreadsheet нет активной ячейки
- ячейки нельзя выделить мышью, клавиатурой или через API: методы [`setSelectedCell()`](api/selection_setselectedcell_method.md) и [`setFocusedCell()`](api/selection_setfocusedcell_method.md) игнорируются, а методы [`getSelectedCell()`](api/selection_getselectedcell_method.md) и [`getFocusedCell()`](api/selection_getfocusedcell_method.md) возвращают `undefined`
- ячейки нельзя редактировать из интерфейса: строка формул заблокирована, маркер заполнения скрыт, а метод [`startEdit()`](api/spreadsheet_startedit_method.md) игнорируется
- контекстное меню и значок меню столбца недоступны
- `Tab` останавливается на сетке один раз и переносит фокус дальше, а `Ctrl + F6` пропускает сетку

Размер столбцов и строк по-прежнему можно изменять перетаскиванием их границ, а данные по-прежнему можно изменять через API, например, с помощью метода [`setValue()`](api/spreadsheet_setvalue_method.md).

В сочетании со свойством [`readonly`](api/spreadsheet_readonly_config.md) параметр отключает клавиатурную навигацию и выделение, которые доступны в режиме только для чтения:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true,
    selection: false,
    // other config parameters
});
~~~

Чтобы отключать и включать выделение во время выполнения, используйте методы [`selection.disable()`](api/selection_disable_method.md) и [`selection.enable()`](api/selection_enable_method.md).

**Журнал изменений:** Добавлено в v6.0.4

**Связанные статьи:**
- [Выделение ячеек](configuration.md#selection-of-cells)
- [Режим только для чтения](configuration.md#read-only-mode)
- [Доступность: настройка режима только для чтения](accessibility.md#read-only-setup)
