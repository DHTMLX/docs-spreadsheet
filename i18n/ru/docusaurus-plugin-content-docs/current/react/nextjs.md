---
sidebar_label: Next.js
title: React Spreadsheet в Next.js
description: "Как использовать DHTMLX React Spreadsheet в приложении Next.js с App Router."
---

# React Spreadsheet в Next.js {#react-spreadsheet-in-nextjs}

DHTMLX Spreadsheet — это клиентский виджет, которому требуется доступ к DOM браузера. В Next.js с App Router серверные компоненты используются по умолчанию, поэтому необходимо обернуть таблицу в клиентский компонент с директивой `"use client"`.

:::note
JS-вывод обёртки React Spreadsheet уже включает баннер `"use client"`, но директива всё равно нужна в вашем собственном файле компонента, который её импортирует.
:::

## Настройка {#setup}

Создайте новый проект Next.js и установите React Spreadsheet:

~~~bash
npx create-next-app@latest my-spreadsheet-app
cd my-spreadsheet-app
npm install @dhtmlx/trial-react-spreadsheet
~~~

## Создание клиентского компонента {#creating-a-client-component}

Создайте новый файл для компонента таблицы с директивой `"use client"`:

~~~tsx title="src/components/SpreadsheetView.tsx"
"use client";

import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

const initialSheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Data",
        cells: {
            A1: { value: "Name", css: "bold" },
            B1: { value: "Value", css: "bold" },
            A2: { value: "Item 1" },
            B2: { value: 100 },
        },
    },
];

const styles = {
    bold: { "font-weight": "bold" },
};

export default function SpreadsheetView() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}
~~~

## Подключение CSS {#css-import}

Подключите CSS-файл непосредственно в клиентском компоненте (как показано выше) или в корневом макете:

~~~tsx title="src/app/layout.tsx"
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

## Размеры контейнера {#container-sizing}

Убедитесь, что контейнер имеет явные размеры. Для таблицы на весь экран добавьте эти стили в глобальный CSS:

~~~css title="src/app/globals.css"
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## Полный пример {#complete-example}

Используйте клиентский компонент на серверной странице:

~~~tsx title="src/app/page.tsx"
import SpreadsheetView from "@/components/SpreadsheetView";

export default function Home() {
    return <SpreadsheetView />;
}
~~~

## Связанные API и гайды {#related-api-and-guides}

- [Справочник пропсов](react/props.md) - все пропсы компонента с типами и значениями по умолчанию
- [Справочник событий](react/events.md) - реагирование на действия пользователя
- [Основы управления состоянием](react/state/state-management-basics.md) - управление данными таблицы в состоянии React
