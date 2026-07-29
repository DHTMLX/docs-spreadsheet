---
sidebar_label: Themes
title: React Spreadsheet-Themes
description: "Integrierte oder benutzerdefinierte Themes auf DHTMLX React Spreadsheet anwenden."
---

# React Spreadsheet-Themes {#react-spreadsheet-themes}

React Spreadsheet wird mit vier integrierten Themes geliefert und unterstutzt benutzerdefinierte Themes uber CSS-Variablen. Verwenden Sie die `theme`-Prop, um ein integriertes Theme auszuwahlen oder ein selbst definiertes Theme anzuwenden.

## Integrierte Themes {#built-in-themes}

Der Typ [`SpreadsheetTheme`](react/types.md#spreadsheettheme) definiert vier integrierte Themes:

- `"light"` (Standard)
- `"dark"`
- `"contrast-light"`
- `"contrast-dark"`

Sie konnen auch einen benutzerdefinierten Theme-Namen als Zeichenkette ubergeben.

## Theme anwenden {#applying-a-theme}

Ubergeben Sie die `theme`-Prop an `ReactSpreadsheet` mit dem Namen des gewunschten Themes:

~~~tsx
<ReactSpreadsheet sheets={sheets} theme="dark" />
~~~

## Zur Laufzeit wechseln {#switching-at-runtime}

Verwenden Sie den React-Status, um Themes dynamisch zu wechseln:

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData, type SpreadsheetTheme } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([/* ... */]);
    const [theme, setTheme] = useState<SpreadsheetTheme>("light");

    return (
        <>
            <select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="contrast-light">Contrast Light</option>
                <option value="contrast-dark">Contrast Dark</option>
            </select>

            <ReactSpreadsheet sheets={sheets} theme={theme} />
        </>
    );
}
~~~

## Benutzerdefinierte CSS-Variablen {#custom-css-variables}

DHTMLX Spreadsheet verwendet ein mehrschichtiges CSS-Variablen-System. Sie konnen diese Variablen uberschreiben, um das Erscheinungsbild uber die integrierten Themes hinaus anzupassen.

### Benutzerdefiniertes Theme erstellen {#creating-a-custom-theme}

Definieren Sie einen benutzerdefinierten `data-dhx-theme`-Selektor, uberschreiben Sie die benotigten Variablen und ubergeben Sie den Theme-Namen als Prop:

~~~css title="src/custom-theme.css"
[data-dhx-theme='corporate'] {
    /* Farbschema */
    --dhx-h-primary: 220;
    --dhx-s-primary: 60%;
    --dhx-l-primary: 45%;

    /* Toolbar und Grid */
    --dhx-s-toolbar-background: #f0f4f8;
    --dhx-s-grid-header-background: #e2e8f0;

    /* Spreadsheet-Bereichsfarben */
    --dhx-spreadsheet-range-background-1: #bee3f8;
    --dhx-spreadsheet-range-color-1: #2b6cb0;
}
~~~

~~~tsx
import "./custom-theme.css";

<ReactSpreadsheet sheets={sheets} theme="corporate" />
~~~

## Verwandte Anleitungen {#related-guides}

- [Themes](/themes/) - Ubersicht der integrierten Themes fur DHTMLX Spreadsheet
- [Konfiguration der Basis-Themes](themes/base_themes_configuration.md) - Konfigurieren von Basis-Themes
- [Benutzerdefiniertes Theme](themes/custom_theme.md) - Erstellen benutzerdefinierter Themes
