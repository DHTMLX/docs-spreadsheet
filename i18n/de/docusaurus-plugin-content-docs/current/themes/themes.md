---
sidebar_label: Built-in themes
title: Integrierte Themes
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr uber die integrierten Themes. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Integrierte Themes {#built-in-themes}

Die DHTMLX Spreadsheet-Bibliothek bietet 4 vordefinierte Themes:

- [Helles Theme](#light-theme-default) ("light") - wird standardmassig verwendet
- [Dunkles Theme](#dark-theme) ("dark")
- [Helles Hochkontrast-Theme](#light-high-contrast-theme) ("contrast-light")
- [Dunkles Hochkontrast-Theme](#dark-high-contrast-theme) ("contrast-dark")

Die Spreadsheet-Themes wurden in Ubereinstimmung mit internationalen Standards entwickelt. Die Hochkontrast-Themes helfen Benutzern mit Sehbehinderungen. Weitere Details finden Sie im Artikel [Barrierefreiheitsunterstutzung](https://docs.dhtmlx.com/suite/common_features/accessibility_support/).

Sie konnen alle Themes im folgenden Beispiel ausprobieren:

<iframe src="https://snippet.dhtmlx.com/t6rspqai?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Helles Theme (Standard) {#light-theme-default}

![DHTMLX Spreadsheet Standard-Hell-Theme mit weissem Hintergrund und dunklem Text](/img/themes/default_theme.png)

Das Standard-Theme `"light"` wird mithilfe der unten aufgefuhrten CSS-Variablen konfiguriert:

~~~css
:root, [data-dhx-theme] {
    /* Basisfarben */
    --dhx-color-white: #fff;
    --dhx-color-gray-100: #e6e6e6;
    --dhx-color-gray-200: #ccc;
    --dhx-color-gray-300: #b3b3b3;
    --dhx-color-gray-400: #999;
    --dhx-color-gray-500: #808080;
    --dhx-color-gray-600: #666;
    --dhx-color-gray-700: #4d4d4d;
    --dhx-color-gray-800: #333;
    --dhx-color-gray-900: #1a1a1a;
    --dhx-color-black: #000;
    /* Ende Basisfarben */

    /* Schrift */
    --dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

    --dhx-font-weight-regular: 400; 
    --dhx-font-weight-medium: 500; 
    --dhx-font-weight-bold: 700;

    --dhx-font-size-small: 12px;
    --dhx-font-size-normal: 14px;
    --dhx-font-size-large: 16px;

    --dhx-line-height-small: 16px;
    --dhx-line-height-normal: 20px;
    --dhx-line-height-large: 24px;

    --dhx-font-color-primary: rgba(0, 0, 0, .7);
    --dhx-font-color-secondary: rgba(0, 0, 0, .5);
    --dhx-font-color-additional: rgba(0, 0, 0, .3);
    --dhx-font-color-disabled: rgba(0, 0, 0, .3);

    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-color-white);
    /* Ende Schrift */

    /* Symbol */
    --dhx-icon-size-small: 16px;
    --dhx-icon-size-normal: 20px;
    --dhx-icon-size-large: 24px;
    /* Ende Symbol */

    /* Rahmen */
    --dhx-border-width: 1px;
    --dhx-border-radius: 2px;
    --dhx-border-color: rgba(0, 0, 0, .1);
    --dhx-border-color-focused: rgba(0, 0, 0, .3);
    --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    /* Ende Rahmen */

    /* Rahmenschatten */
    --dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
    --dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
    --dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

    --dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
    /* Ende Rahmenschatten */

    /* Ubergange */
    --dhx-transition-time: 0.2s;
    --dhx-transition-in: ease-in;
    --dhx-transition-out: ease-out;
    /* Ende Ubergange */

    /* z-index */
    --dhx-z-index-up: 1;
    --dhx-z-index-force-up: 10;
    --dhx-z-index-overlay: 999;
    --dhx-z-index-overlay-total: 10000000;
    /* Ende z-index */

    /* Nur Servicefarbschema */
    --dhx-l-contrast-offset: 0%; /* Helligkeits-Offset fur Kontrast-Theme */
    --dhx-l-h-offset: 10%; /* Helligkeits-Hover-Offset */
    --dhx-s-d-offset: 30%; /* Sattigungs-Deaktivierungs-Offset */
    --dhx-l-d: 70%; /* Helligkeitswert deaktiviert */
    --dhx-a-l-h: .15; /* Alpha-Wert fur helles Hover */
    --dhx-a-l-a: .3; /* Alpha-Wert fur helles Aktiv */
    /* Ende nur Servicefarbschema */

    /* Farbschema */
    --dhx-h-primary: 200;
    --dhx-s-primary: 98%;
    --dhx-l-primary: 40%;

    --dhx-h-secondary: 0;
    --dhx-s-secondary: 0%;
    --dhx-l-secondary: 30%;

    --dhx-h-danger: 0;
    --dhx-s-danger: 100%;
    --dhx-l-danger: 60%;

    --dhx-h-success: 154;
    --dhx-s-success: 89%;
    --dhx-l-success: 37%;

    --dhx-h-background: 0;
    --dhx-s-background: 0%;
    --dhx-l-background: 100%;
    --dhx-a-background: 0.5;
    /* Ende Farbschema */

    /* Theme-Farben */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
    --dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
    --dhx-background-overlay-light: rgba(255, 255, 255, .5);

    --dhx-tooltip-background-dark: var(--dhx-color-gray-800);
    --dhx-tooltip-background-light: var(--dhx-color-white);

    --dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

    --dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-active: var(--dhx-color-primary);
    --dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-active: var(--dhx-color-secondary);
    --dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-active: var(--dhx-color-danger);
    --dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-active: var(--dhx-color-success);
    --dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
    /* Ende Theme-Farben */

    /* DHTMLX Toolbar-Servicevariablen*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* Ende DHTMLX Toolbar-Servicevariablen */

    /* DHTMLX Grid-Servicevariablen*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* Ende DHTMLX Grid-Servicevariablen*/

    /* DHTMLX Calendar-Servicevariablen*/
    --dhx-s-calendar-muffled: .6;
    /* Ende DHTMLX Calendar-Servicevariablen*/

    /* DHTMLX Slider-Servicevariablen*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* Ende DHTMLX Slider-Servicevariablen*/
}
~~~

## Helles Hochkontrast-Theme {#light-high-contrast-theme}

![DHTMLX Spreadsheet helles Hochkontrast-Theme mit grosseren Schriften und starkeren Rahmen fur barrierefreie Nutzung](/img/themes/light_high_contrast_theme.png)

Das Theme `"contrast-light"` wird mithilfe der [Root-CSS-Variablen](#light-theme-default) und der unten aufgefuhrten Variablen konfiguriert:

~~~css
[data-dhx-theme='contrast-light'] {
    /* Schrift */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-secondary: rgba(0, 0, 0, .66);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    /* Ende Schrift */

    /* Rahmen */
    --dhx-border-color: rgba(0, 0, 0, .4);
    /* Ende Rahmen */

    /* Farbschema */
    --dhx-l-contrast-offset: 14%;
    /* Ende Farbschema */

    /* DHTMLX Toolbar-Servicevariablen*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* Ende DHTMLX Toolbar-Servicevariablen */

    /* DHTMLX Grid-Servicevariablen*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* Ende DHTMLX Grid-Servicevariablen*/
    
    /* DHTMLX Calendar-Servicevariablen*/
    --dhx-s-calendar-muffled: .8;
    /* Ende DHTMLX Calendar-Servicevariablen*/

    /* DHTMLX Slider-Servicevariablen*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* Ende DHTMLX Slider-Servicevariablen*/
}
~~~

## Dunkles Theme {#dark-theme}

![DHTMLX Spreadsheet dunkles Theme mit dunklem Hintergrund und hellem Text fur die Nutzung bei schwachem Licht](/img/themes/dark_theme.png)

Das Theme `"dark"` wird mithilfe der [Root-CSS-Variablen](#light-theme-default) und der unten aufgefuhrten Variablen konfiguriert:

~~~css
[data-dhx-theme='dark'] {
    /* Schrift */
    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, .7);
    --dhx-font-color-additional: rgba(255, 255, 255, .5);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* Ende Schrift */

    /* Rahmen */
    --dhx-border-color: rgba(255, 255, 255, 0.3);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.5);
    /* Ende Rahmen */

    /* Farbschema */
    --dhx-l-secondary: 60%; /* Helligkeits-Offset fur Kontrast-Theme */

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* Ende Farbschema */

    /* Theme-Farben */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* Ende Theme-Farben */

    /* DHTMLX Toolbar-Servicevariablen*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* Ende DHTMLX Toolbar-Servicevariablen */

    /* DHTMLX Grid-Servicevariablen*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* Ende DHTMLX Grid-Servicevariablen*/
    
    /* DHTMLX Calendar-Servicevariablen*/
    --dhx-s-calendar-muffled: .6;
    /* Ende DHTMLX Calendar-Servicevariablen*/

    /* DHTMLX Slider-Servicevariablen*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* Ende DHTMLX Slider-Servicevariablen*/
}
~~~ 

## Dunkles Hochkontrast-Theme {#dark-high-contrast-theme}

![DHTMLX Spreadsheet dunkles Hochkontrast-Theme mit verbessertem Textkontrast fur barrierefreie Nutzung](/img/themes/dark_contrast.png)

Das Theme `"contrast-dark"` wird mithilfe der [Root-CSS-Variablen](#light-theme-default) und der unten aufgefuhrten Variablen konfiguriert:

~~~css
[data-dhx-theme='contrast-dark'] {
    /* Schrift */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-black);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* Ende Schrift */

    /* Rahmen */
    --dhx-border-color: rgba(255, 255, 255, 0.5);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.7);
    /* Ende Rahmen */

    /* Farbschema */
    --dhx-l-contrast-offset: -12%; /* Helligkeits-Offset fur Kontrast-Theme */

    --dhx-l-secondary: 60%;

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* Ende Farbschema */

    /* Theme-Farben */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* Ende Theme-Farben */

    /* DHTMLX Toolbar-Servicevariablen*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* Ende DHTMLX Toolbar-Servicevariablen */

    /* DHTMLX Grid-Servicevariablen*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* Ende DHTMLX Grid-Servicevariablen*/

    /* DHTMLX Calendar-Servicevariablen*/
    --dhx-s-calendar-muffled: .8;
    /* Ende DHTMLX Calendar-Servicevariablen*/

    /* DHTMLX Slider-Servicevariablen*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* Ende DHTMLX Slider-Servicevariablen*/
}
~~~

## Spreadsheet-spezifische Stile {#spreadsheet-specific-styles}

Die Liste der fur die Spreadsheet-Komponente spezifischen Variablen umfasst folgende:

- fur das **Standard-Hell**-Theme und das **helle Hochkontrast**-Theme:

~~~css
:root, [data-dhx-theme],[data-dhx-theme='contrast-light'] {
    
    --dhx-spreadsheet-range-background-1: #8be3c9;
    --dhx-spreadsheet-range-background-2: #f6f740;
    --dhx-spreadsheet-range-background-3: #f7b69e;
    --dhx-spreadsheet-range-background-4: #e0fcff;
    --dhx-spreadsheet-range-background-5: #8fe9ff;
    --dhx-spreadsheet-range-background-6: #d8ffa6;
    --dhx-spreadsheet-range-background-7: #e4e4e4;
    --dhx-spreadsheet-range-background-8: #ecb6ff;

    --dhx-spreadsheet-range-color-1: #00815a;
    --dhx-spreadsheet-range-color-2: #bfc000;
    --dhx-spreadsheet-range-color-3: #c55933;
    --dhx-spreadsheet-range-color-4: #0cc1d6;
    --dhx-spreadsheet-range-color-5: #0080a3;
    --dhx-spreadsheet-range-color-6: #529a0a;
    --dhx-spreadsheet-range-color-7: #6d767b;
    --dhx-spreadsheet-range-color-8: #ba38e7;

}
~~~

- fur die **dunklen** und **dunklen Hochkontrast**-Themes:

~~~css
[data-dhx-theme='contrast-dark'],
[data-dhx-theme='dark'] {
    --dhx-spreadsheet-range-background-1: #00815a;
    --dhx-spreadsheet-range-background-2: #bfc000;
    --dhx-spreadsheet-range-background-3: #c55933;
    --dhx-spreadsheet-range-background-4: #0cc1d6;
    --dhx-spreadsheet-range-background-5: #0080a3;
    --dhx-spreadsheet-range-background-6: #529a0a;
    --dhx-spreadsheet-range-background-7: #6d767b;
    --dhx-spreadsheet-range-background-8: #ba38e7;

    --dhx-spreadsheet-range-color-1: #8be3c9;
    --dhx-spreadsheet-range-color-2: #f6f740;
    --dhx-spreadsheet-range-color-3: #f7b69e;
    --dhx-spreadsheet-range-color-4: #e0fcff;
    --dhx-spreadsheet-range-color-5: #8fe9ff;
    --dhx-spreadsheet-range-color-6: #d8ffa6;
    --dhx-spreadsheet-range-color-7: #e4e4e4;
    --dhx-spreadsheet-range-color-8: #ecb6ff;

}
~~~

## Themes setzen {#setting-themes}

Um das gewunschte Theme zu setzen, sei es ein integriertes Spreadsheet-Theme oder ein [benutzerdefiniertes](themes/custom_theme.md), verwenden Sie eine der unten beschriebenen Methoden:

### Verwendung des Attributs `data-dhx-theme` {#using-the-data-dhx-theme-attribute}

Sie konnen zwischen den folgenden Varianten wahlen:

- Das Attribut `data-dhx-theme` fur den gewunschten Container setzen:

~~~html title="index.html"
<!-- Komponenten-Container -->
<div data-dhx-theme="dark" style="height: 100%" id="spreadsheet"></div>
~~~

- Das Attribut `data-dhx-theme` fur ein HTML-Element setzen, z. B. fur `documentElement`:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Verwendung der Methode `dhx.setTheme()` {#using-the-dhxsettheme-method}

Die Methode `dhx.setTheme()` akzeptiert folgende Parameter:

- `theme: string` - (erforderlich) der Name des Themes. Mogliche Werte:
    - der Name des Spreadsheet-Themes: `"light" | "contrast-light" | "dark" | "contrast-dark"`
    - der Name eines [benutzerdefinierten Themes](themes/custom_theme.md)
    - `"light"` - standardmassig
- `container: string | HTMLElement` - (optional) der Container, auf den das Theme angewendet werden soll. Mogliche Werte:
    - ein HTMLElement
    - ein Zeichenkettenwert mit der ID des Containers oder der ID einer Layout-Zelle
    - `document.documentElement` - standardmassig

Die folgenden Beispiele zeigen, wie die Methode `dhx.setTheme()` verwendet wird:

- Theme auf den Body oder den Container setzen

~~~html 
<div id="container"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");

    dhx.setTheme("dark"); // Wendet das "dark"-Theme auf den Body an 
    //or
    // Wendet das "dark"-Theme auf den Container mit der ID "container" an
    dhx.setTheme("dark", "container"); 
</script>
~~~

- Theme auf den via HTMLElement angegebenen Container setzen

~~~html 
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container-1");
    
    const container = document.getElementById("container-1");
    // Wendet das "dark"-Theme auf den via HTMLElement angegebenen Container an
    dhx.setTheme("dark", container); 
</script>
~~~

**Verwandte Beispiele:**

- [Spreadsheet. Helles, dunkles, helles Hochkontrast- und dunkles Hochkontrast-Theme (Skins)](https://snippet.dhtmlx.com/t6rspqai?tag=spreadsheet)
- [Spreadsheet. Benutzerdefinierte Themes (Skins)](https://snippet.dhtmlx.com/59nt1rcb?tag=spreadsheet)
