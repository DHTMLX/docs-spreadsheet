---
sidebar_label: Быстрый старт
title: Быстрый старт с React Spreadsheet
description: "Пошаговое руководство по отображению первого компонента DHTMLX React Spreadsheet."
---

# Быстрый старт с React Spreadsheet {#quick-start-with-react-spreadsheet}

Это руководство поможет вам создать приложение на React с DHTMLX Spreadsheet с нуля.

## Создание нового проекта {#create-a-new-project}

~~~bash
npm create vite@latest my-spreadsheet-app -- --template react-ts
cd my-spreadsheet-app
~~~

## Установка React Spreadsheet {#install-react-spreadsheet}

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

Описание других вариантов пакетов см. в разделе [Установка](react/installation.md).

## Создание демонстрационных данных {#create-demo-data}

Создайте файл `src/data.ts` с примером данных для таблицы:

~~~ts title="src/data.ts"
import type { SheetData } from "@dhtmlx/trial-react-spreadsheet";

export const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Sales",
        cells: {
            A1: { value: "Product", css: "bold" },
            B1: { value: "Revenue", css: "bold", format: "currency" },
            A2: { value: "Widget" },
            B2: { value: 15000, format: "currency" },
            A3: { value: "Gadget" },
            B3: { value: 22000, format: "currency" },
            A4: { value: "Total" },
            B4: { value: "=SUM(B2:B3)", format: "currency" },
        },
    },
];

export const styles = {
    bold: { "font-weight": "bold" },
};
~~~

## Создание компонента {#create-the-component}

Замените содержимое файла `src/App.tsx`:

~~~tsx title="src/App.tsx"
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
import { sheets as initialSheets, styles } from "./data";

function App() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}

export default App;
~~~

## Добавление стилей {#add-styles}

Обновите `src/index.css`, чтобы обеспечить полноэкранный макет:

~~~css title="src/index.css"
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## Запуск приложения {#start-the-app}

~~~bash
npm run dev
~~~

Откройте URL, указанный в терминале (обычно `http://localhost:5173`), чтобы увидеть таблицу.

## Связанные API и гайды {#related-api-and-guides}

- [Справочник пропсов](react/props.md) — настройка поведения таблицы
- [Справочник событий](react/events.md) — реакция на действия пользователя
- [Справочник типов](react/types.md) — интерфейсы и перечисления TypeScript
- [Управление данными и состоянием](react/state/state-management-basics.md) — управление данными таблицы в состоянии приложения

Также можно изучить [демонстрационный репозиторий на GitHub](https://github.com/DHTMLX/react-spreadsheet-examples) с полным рабочим примером.
