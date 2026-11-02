---
sidebar_label: unlock()
title: метод unlock
description: Разблокируйте заблокированную ячейку, несколько ячеек или диапазон ячеек в DHTMLX Spreadsheet с помощью метода unlock(), чтобы пользователи снова могли их редактировать.
---

# unlock()

### Описание {#description}

@short: Снимает блокировку с заблокированной ячейки (ячеек)

### Использование {#usage}

~~~jsx
unlock(cell: string): void;
~~~

### Параметры {#parameters}

- `cell` - (обязательный) идентификатор(ы) ячейки (ячеек) или диапазона ячеек

### Пример {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// снимает блокировку с ячейки
spreadsheet.unlock("A1");

// снимает блокировку с диапазона ячеек
spreadsheet.unlock("A1:C1");

// снимает блокировку с указанных ячеек
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
Начиная с v4.1, ссылку на ячейку или диапазон ячеек можно указывать в следующем формате:

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

где `sheet1` — это название вкладки.

Если название вкладки не указано, метод снимает блокировку с ячейки (ячеек) активной вкладки.
:::
