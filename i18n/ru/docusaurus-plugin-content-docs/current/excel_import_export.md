---
sidebar_label: Импорт/экспорт Excel
title: Импорт и экспорт Excel
description: Импорт данных из файлов Excel в DHTMLX Spreadsheet и экспорт в .xlsx через панель инструментов или меню File.
---

# Импорт/экспорт Excel {#excel-importexport}

## Импорт из Excel {#import-from-excel}

Вы можете загрузить данные из файла Excel в Spreadsheet. Для этого:

1\.  Нажмите кнопку **Import** в панели инструментов и выберите *Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet toolbar with the Import button for Microsoft Excel XLSX files](/img/import_xlsx.png)

или:

Перейдите в меню: *File -> Import As... -> Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet File menu with the Import As option for Microsoft Excel XLSX files](/img/file_import.png)

2\. Выберите файл Excel на вашем компьютере, и его содержимое будет импортировано в открытый лист.

## Экспорт в Excel {#export-to-excel}

Вы можете экспортировать данные, введённые в Spreadsheet, в файл Excel. Выполните следующие шаги:

1\. Нажмите кнопку **Export** в панели инструментов:

![DHTMLX Spreadsheet toolbar with the Export button for saving to Microsoft Excel XLSX](/img/export_xlsx.png)

или:

Перейдите в меню: *File -> Download As... -> Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet File menu with the Download As option for Microsoft Excel XLSX export](/img/file_export.png)

2\. Проверьте папку загрузок: там будет файл Excel с данными из Spreadsheet.

Программы чтения с экрана озвучивают начало и завершение импорта и экспорта.

:::note
Импорт и экспорт файлов Excel используют WebAssembly. Если браузер не поддерживает WebAssembly, команды Import и Export показывают сообщение с текстом ключа `wasmNotSupported` [локали](localization.md#default-locale). Метод [`load()`](api/spreadsheet_load_method.md) с типом `"xlsx"` и метод [`export.xlsx()`](api/export_xlsx_method.md) выбрасывают `Error` с тем же текстом, который можно перехватить в коде.
:::
