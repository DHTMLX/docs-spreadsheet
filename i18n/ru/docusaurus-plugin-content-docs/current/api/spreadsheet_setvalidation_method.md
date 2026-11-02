---
sidebar_label: setValidation()
title: Метод setValidation
description: Добавьте в ячейки DHTMLX Spreadsheet выпадающий список значений с помощью метода setValidation(), взяв варианты из диапазона ячеек или массива, или удалите проверку данных.
---

# setValidation()

### Описание {#description}

@short: Устанавливает валидацию для ячеек, добавляя в них выпадающие списки

Метод также может удалять валидацию данных из ячейки(ек).

### Использование {#usage}

~~~jsx
setValidation(
    cell: string,
    options: string | string[]
): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки(ек) или диапазон ячеек
- `options` - (обязательный) строка с диапазоном ячеек ("C1:C3") или массив строковых значений

### Пример {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});

spreadsheet.parse(dataset);

// sets validation and creates a drop-down list with 3 items to choose for B10 cell
spreadsheet.setValidation("B10", ["Apple", "Mango", "Avocado"]);
~~~

### Подробности {#details}

Если необходимо удалить валидацию из ячейки(ек), передайте `null`, `0`, `false` или `undefined` вторым параметром вместо списка вариантов:

~~~jsx
spreadsheet.setValidation("B15");

//or
spreadsheet.setValidation("B15", null);

//or
spreadsheet.setValidation("B15", false);
~~~

**Журнал изменений:** Добавлено в v4.3

**Полезная статья:** [Валидация ячеек](working_with_cells.md#validating-cells)
