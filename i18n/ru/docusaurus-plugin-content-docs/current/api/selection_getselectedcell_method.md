---
sidebar_label: getSelectedCell() 
title: Метод getSelectedCell объекта selection
description: Вы можете узнать о методе getSelectedCell объекта selection в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник по АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# getSelectedCell()

### Описание {#description}

@short: Возвращает идентификатор(ы) выбранной(ых) ячейки(ек)

### Использование {#usage}

~~~jsx
getSelectedCell(): string;
~~~

### Возвращает {#returns}

Метод возвращает идентификатор(ы) или диапазон выбранной(ых) ячейки(ек)

### Пример {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // параметры конфигурации
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// получает выбранные ячейки
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Связанные статьи:** [Работа со Spreadsheet](working_with_ssheet.md)
