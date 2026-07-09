---
sidebar_label: afterSelectionSet
title: Событие afterSelectionSet
description: Вы можете узнать о событии afterSelectionSet в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# afterSelectionSet

### Описание {#description}

@short: Вызывается после выделения ячеек

### Использование {#usage}

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### Параметры {#parameters}

Колбэк события принимает следующие параметры:

- `cell` - (обязательный) идентификатор(ы) ячейки(ек)

### Пример {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// подписка на событие "afterSelectionSet"
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**Полезная статья:** [Обработка событий](handling_events.md)
