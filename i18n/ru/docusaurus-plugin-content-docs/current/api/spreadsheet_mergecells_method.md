---
sidebar_label: mergeCells()
title: метод mergeCells
description: Объедините диапазон ячеек в одну ячейку или разделите объединённые ячейки в DHTMLX Spreadsheet с помощью метода mergeCells().
---

# mergeCells()

### Описание {#description}

@short: Объединяет диапазон ячеек в одну или разделяет объединённые ячейки

### Использование {#usage}

~~~jsx
mergeCells( 
    cell: string,
    remove?: boolean
);
~~~

### Параметры {#parameters}

- `cell` - (обязательный) диапазон ячеек (например, "A1:A5")
- `remove` - (необязательный) определяет действие над ячейками:
    - `false` - объединить ячейки (по умолчанию)
    - `true` - разделить ячейки

### Пример {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// объединяет ячейки A3, A4 и A5
spreadsheet.mergeCells("A2:A5");

// разделяет ячейки A3, A4 и A5
spreadsheet.mergeCells("A2:A5", true);
~~~

**Журнал изменений:** Добавлено в v5.0

**Полезная статья:** [Работа с ячейками](working_with_cells.md#merging-cells)
