---
sidebar_label: Integration mit Svelte
title: Svelte-Integration
description: In der Dokumentation erfahren Sie mehr über die Svelte-Integration der DHTMLX JavaScript Spreadsheet-Bibliothek. Lesen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Integration mit Svelte {#integration-with-svelte}

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Svelte** vertraut sein, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihrer Kenntnisse lesen Sie bitte die [**Svelte-Dokumentation**](https://svelte.dev/).
:::

DHTMLX Spreadsheet ist kompatibel mit **Svelte**. Wir haben Code-Beispiele vorbereitet, die zeigen, wie DHTMLX Spreadsheet mit **Svelte** verwendet wird. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-spreadsheet-demo).

## Projekt erstellen {#creating-a-project}

:::info
Bevor Sie mit der Erstellung eines neuen Projekts beginnen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Svelte** JS-Projekt zu erstellen, führen Sie folgenden Befehl aus:

~~~json
npm create vite@latest
~~~

Nennen wir das Projekt **my-svelte-spreadsheet-app**.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-svelte-spreadsheet-app
~~~

Installieren Sie anschließend die Abhängigkeiten und starten Sie die App. Verwenden Sie dazu einen Paketmanager:

- wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, müssen Sie folgende Befehle ausführen:

~~~jsx
yarn
yarn dev // oder yarn dev
~~~

- wenn Sie [**npm**](https://www.npmjs.com/) verwenden, müssen Sie folgende Befehle ausführen:

~~~json
npm install
npm run dev
~~~

Die App sollte auf localhost laufen (z. B. `http://localhost:3000`).

## Spreadsheet erstellen {#creating-spreadsheet}

Nun müssen Sie den DHTMLX Spreadsheet-Quellcode beziehen. Stoppen Sie zunächst die App und installieren Sie das Spreadsheet-Paket.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Spreadsheet-Testpaket**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Beachten Sie, dass das Test-Spreadsheet nur 30 Tage lang verfügbar ist.

### Schritt 2. Komponente erstellen {#step-2-component-creation}

Nun müssen Sie eine Svelte-Komponente erstellen, um Spreadsheet in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis *src/* und benennen Sie sie *Spreadsheet.svelte*.

#### Quelldateien importieren {#importing-source-files}

Öffnen Sie die Datei *Spreadsheet.svelte* und importieren Sie die Spreadsheet-Quelldateien. Beachten Sie:

- wenn Sie die PRO-Version verwenden und das Spreadsheet-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

Beachten Sie, dass die Quelldateien je nach verwendetem Paket minimiert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als *spreadsheet.min.css* importieren.

- wenn Sie die Testversion von Spreadsheet verwenden, geben Sie folgende Pfade an:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

In diesem Tutorial sehen Sie, wie die **Test**-Version von Spreadsheet konfiguriert wird.

#### Container festlegen und Spreadsheet hinzufügen {#setting-the-container-and-adding-spreadsheet}

Um Spreadsheet auf der Seite anzuzeigen, müssen Sie den Container für Spreadsheet erstellen und diese Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~html {3,6,10-11,19} title="Spreadsheet.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"

    let container; // Container für Spreadsheet initialisieren
    let spreadsheet;
    
    onMount(() => {
        // die Spreadsheet-Komponente initialisieren
        spreadsheet = new Spreadsheet(container, {});
    });

    onDestroy(() => {
        spreadsheet.destructor(); // Spreadsheet zerstören
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### Styles hinzufügen {#adding-styles}

Um Spreadsheet korrekt anzuzeigen, müssen Sie wichtige Styles für Spreadsheet und seinen Container in der CSS-Hauptdatei des Projekts festlegen:

~~~css title="app.css"
/* Styles für die initiale Seite festlegen */
html,
body,
#app { /* stellen Sie sicher, dass Sie den #app-Root-Container verwenden */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für den Spreadsheet-Container festlegen */
.widget {
    height: 100%;
}
~~~

#### Daten laden {#loading-data}

Um Daten in Spreadsheet einzufügen, müssen Sie einen Datensatz bereitstellen. Erstellen Sie die Datei *data.js* im Verzeichnis *src/* und fügen Sie einige Daten hinzu:

~~~jsx title="data.js"
export function getData() {
    return {
        styles: {
            bold: {
                "font-weight": "bold"
            },
            right: {
                "justify-content": "flex-end",
                "text-align": "right"
            }
        },
        data: [
            { cell: "a1", value: "Country", css:"bold" },
            { cell: "b1", value: "Product", css:"bold" },
            { cell: "c1", value: "Price", css:"right bold" },
            { cell: "d1", value: "Amount", css:"right bold" },
            { cell: "e1", value: "Total Price", css:"right bold" },

            { cell: "a2", value: "Ecuador" },
            { cell: "b2", value: "Banana" },
            { cell: "c2", value: 6.68, format: "currency" },
            { cell: "d2", value: 430 },
            { cell: "e2", value: 2872.4, format: "currency" },

            { cell: "a3", value: "Belarus" },
            { cell: "b3", value: "Apple" },
            { cell: "c3", value: 3.75, format: "currency" },
            { cell: "d3", value: 600 },
            { cell: "e3", value: 2250, format: "currency" },

            { cell: "a4", value: "Peru" },
            { cell: "b4", value: "Grapes" },
            { cell: "c4", value: 7.69, format: "currency" },
            { cell: "d4", value: 740 },
            { cell: "e4", value: 5690.6, format: "currency" },

            // weitere Zellen mit Daten
        ]
    }
}
~~~

Öffnen Sie anschließend die Datei *App.svelte*, importieren Sie die Daten und übergeben Sie sie als **Props** an die neu erstellte `<Spreadsheet/>`-Komponente:

~~~html {3,5,8} title="App.svelte"
<script>
    import Spreadsheet from "./Spreadsheet.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<Spreadsheet data={data} />
~~~

Öffnen Sie die Datei *Spreadsheet.svelte* und wenden Sie die übergebenen **Props** mit der Methode [`parse()`](api/spreadsheet_parse_method.md) auf Spreadsheet an:

~~~html {6,13} title="Spreadsheet.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"
    
    export let data;

    let container;
    let spreadsheet;
    
    onMount(() => {
        spreadsheet = new Spreadsheet(container, {});
        spreadsheet.parse(data);
    });

    onDestroy(() => {
        spreadsheet.destructor();
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

Die Spreadsheet-Komponente ist jetzt einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es Spreadsheet mit Daten. Sie können bei Bedarf auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [Spreadsheet API-Dokumentation](api/overview/properties_overview.md), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in Spreadsheet ausführt, löst das Widget ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Liste der Events](api/overview/events_overview.md).

Öffnen Sie *Spreadsheet.svelte* und ergänzen Sie die Methode `onMount()` wie folgt:

~~~html {8-11} title="Spreadsheet.svelte"
<script>
// ...
let spreadsheet;

onMount(() => {
    spreadsheet = new Spreadsheet(container, {})

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
});

onDestroy(() => {
    spreadsheet.destructor();
});
</script>

// ...
~~~

Wenn Sie die App danach starten, sollten Sie Spreadsheet mit Daten auf der Seite geladen sehen.

![DHTMLX Spreadsheet initialized with sample data in a Svelte application](/img/integrations/trial_spreadsheet.png)

Nun haben Sie eine grundlegende Einrichtung für die Integration von DHTMLX Spreadsheet mit Svelte. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das fertige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-spreadsheet-demo).
