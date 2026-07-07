---
sidebar_label: beforeSelectionSet
title: Событие beforeSelectionSet
description: Вы можете узнать о событии beforeSelectionSet в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# beforeSelectionSet

### Описание {#description}

@short: Срабатывает перед выделением ячеек

### Использование {#usage}

~~~jsx
beforeSelectionSet: (cell: string) => void | boolean;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор(ы) ячейки(ек)

### Возвращает {#returns}

Верните `true`, чтобы разрешить выделение ячеек, `false` — чтобы запретить выделение

### Пример {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписываемся на событие "beforeSelectionSet"
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Связанные статьи:** [Обработка событий](handling_events.md)
