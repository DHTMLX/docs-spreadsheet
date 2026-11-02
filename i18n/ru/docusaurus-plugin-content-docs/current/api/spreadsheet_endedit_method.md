---
sidebar_label: endEdit()
title: Метод endEdit
description: Завершите редактирование выбранной ячейки в DHTMLX Spreadsheet с помощью метода endEdit(), который закрывает редактор и сохраняет введённое значение.
---

# endEdit()

### Описание {#description}

@short: Завершает редактирование в выбранной ячейке, закрывает редактор и сохраняет введённое значение

### Использование {#usage}

~~~jsx
endEdit(): void;
~~~

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// завершает редактирование в выбранной ячейке
spreadsheet.endEdit();
~~~

**Полезная статья:** [Работа с таблицей](working_with_cells.md#editing-a-cell)
