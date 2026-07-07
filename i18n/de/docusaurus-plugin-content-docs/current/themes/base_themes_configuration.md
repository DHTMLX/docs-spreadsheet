---
sidebar_label: Configuring built-in themes
title: Integrierte Themes konfigurieren
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie, wie Sie Themes konfigurieren. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Integrierte Themes konfigurieren {#configuring-built-in-themes}

## Alle Themes konfigurieren {#configuring-all-themes}

Die CSS-Variablen des [Standard](/themes/#light-theme-default)-Themes enthalten Farbschema-Variablen:

~~~css
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
~~~

:::tip
Farbwerte werden im [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)-Format angegeben, wobei:

- *Farbton* ein Grad auf dem Farbkreis von 0 bis 360 ist. 0 ist Rot, 120 ist Grun, 240 ist Blau;
- *Sattigung* ein Prozentwert ist; 0% bedeutet vollstandig ungesattigt (Grau) und 100% ist vollstandig gesattigt;
- *Helligkeit* ein Prozentwert ist; 100% ist Weiss, 0% ist Schwarz und 50% ist "normal".
:::

Aufgrund dieser CSS-Variablen wird das Farbschema automatisch berechnet. Das bedeutet: Wenn Sie einen Farbschemawert im Root andern, werden die Werte fur die Themes `"contrast-light"`, `"dark"` und `"contrast-dark"` in Echtzeit automatisch neu berechnet.

Sie konnen beispielsweise die Primarfarben fur alle Spreadsheet-Themes gleichzeitig wie folgt uberschreiben:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

Ausserdem werden die Werte der aus der Primarfarbe berechneten Variablen entsprechend neu berechnet. Zum Beispiel wird der Wert der Fokusfarbe wie folgt berechnet:

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Einzelnes Theme konfigurieren {#configuring-a-separate-theme}

Wenn Sie einige Farbwerte fur ein einzelnes [Spreadsheet-Theme](/themes/) uberschreiben mochten, uberschreiben Sie diese im Attribut `data-dhx-theme`:

~~~html {1-27,39}
<style>
    [data-dhx-theme='light'] {
        /* Rahmen */
        --dhx-border-color: #ced4da;
        /* Ende Rahmen */

        /* Farbschema */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* Ende Farbschema */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("light");
</script>
~~~
