---
sidebar_label: endEdit()
title: Метод endEdit
description: Вы можете узнать о методе endEdit в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// завершает редактирование в выбранной ячейке
spreadsheet.endEdit();
~~~

**Полезная статья:** [Работа с таблицей](working_with_cells.md#editing-a-cell)
