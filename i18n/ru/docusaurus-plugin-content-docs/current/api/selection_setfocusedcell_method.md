---
sidebar_label: setFocusedCell() 
title: Метод setFocusedCell объекта selection
description: Сделайте ячейку активной и переместите на неё фокус клавиатуры в DHTMLX Spreadsheet с помощью метода selection.setFocusedCell().
---

# setFocusedCell()

### Описание {#description}

@short: Устанавливает фокус на указанную ячейку

### Использование {#usage}

~~~jsx
setFocusedCell(cell: string, scroll?: boolean): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор ячейки, на которую нужно установить фокус
- `scroll` - (необязательный) определяет, нужно ли прокручивать Spreadsheet к ячейке, по умолчанию `true`

### Пример {#example}

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

### Подробности {#details}

Метод делает указанную ячейку активной и после перерисовки перемещает на неё фокус клавиатуры. Фокус клавиатуры не перемещается, если он находится:

- в элементе за пределами Spreadsheet
- на панели инструментов, в меню или на вкладках листов, на которые он перешёл с помощью клавиатуры
- в открытом редакторе ячейки

Если фокус клавиатуры находится на теле страницы, например, сразу после загрузки страницы, метод перемещает его на ячейку.

Те же правила действуют при любом другом изменении активной ячейки, например, с помощью другого метода API.

Если обработчик события [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md) возвращает `false`, активная ячейка не меняется, а фокус клавиатуры не перемещается.

Метод ничего не делает, пока выделение отключено с помощью параметра конфигурации [`selection: false`](api/spreadsheet_selection_config.md) или метода [`selection.disable()`](api/selection_disable_method.md).

**Журнал изменений:** Перемещение фокуса клавиатуры на ячейку добавлено в v6.0.4

**Полезные статьи:**
- [Работа со Spreadsheet](working_with_ssheet.md)
- [Специальные возможности: навигация с помощью клавиатуры](accessibility.md#keyboard-navigation)
