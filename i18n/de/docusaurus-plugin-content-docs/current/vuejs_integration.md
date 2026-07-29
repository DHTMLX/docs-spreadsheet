---
sidebar_label: Integration mit Vue
title: Vue-Integration
description: In der Dokumentation erfahren Sie mehr über die Vue-Integration der DHTMLX JavaScript Spreadsheet-Bibliothek. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Integration mit Vue {#integration-with-vue}

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**Vue**](https://vuejs.org/) vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Vue 3-Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Spreadsheet ist kompatibel mit **Vue**. Wir haben Code-Beispiele vorbereitet, die zeigen, wie Sie DHTMLX Spreadsheet mit **Vue 3** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).

## Ein Projekt erstellen {#creating-a-project}

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Vue**-Projekt zu erstellen, führen Sie den folgenden Befehl aus:

~~~json
npm create vue@latest
~~~

Dieser Befehl installiert und führt `create-vue` aus, das offizielle Scaffolding-Tool für **Vue**-Projekte. Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nennen wir das Projekt **my-vue-spreadsheet-app**.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-spreadsheet-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie dazu einen Paketmanager:

- Wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie die folgenden Befehle aus:

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- Wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie die folgenden Befehle aus:

~~~json
npm install
npm run dev
~~~

Die App sollte auf localhost laufen (zum Beispiel `http://localhost:3000`).

## Spreadsheet erstellen {#creating-spreadsheet}

Jetzt müssen Sie den DHTMLX Spreadsheet-Quellcode beziehen. Stoppen Sie zunächst die App und installieren Sie das Spreadsheet-Paket.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Spreadsheet-Testpaket**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Beachten Sie, dass das Testpaket von Spreadsheet nur 30 Tage lang verfügbar ist.

### Schritt 2. Komponente erstellen {#step-2-component-creation}

Jetzt müssen Sie eine Vue-Komponente erstellen, um Spreadsheet in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis *src/components/* und benennen Sie sie *Spreadsheet.vue*.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei *Spreadsheet.vue* und importieren Sie die Spreadsheet-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das Spreadsheet-Paket aus einem lokalen Ordner installieren, sehen die Import-Pfade folgendermaßen aus:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

Beachten Sie, dass die Quelldateien je nach verwendetem Paket minifiziert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als *spreadsheet.min.css* importieren.

- Wenn Sie die Testversion von Spreadsheet verwenden, geben Sie die folgenden Pfade an:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Test**version von Spreadsheet konfigurieren.

#### Den Container einrichten und Spreadsheet hinzufügen {#setting-the-container-and-adding-spreadsheet}

Um Spreadsheet auf der Seite anzuzeigen, müssen Sie den Container für Spreadsheet erstellen und diese Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~html {2,7-8,18} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    mounted() {
        // Spreadsheet-Komponente initialisieren
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    },

    unmounted() {
        this.spreadsheet.destructor(); // Spreadsheet zerstören
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Styles hinzufügen {#adding-styles}

Um Spreadsheet korrekt anzuzeigen, müssen Sie wichtige Styles für Spreadsheet und seinen Container in der CSS-Hauptdatei des Projekts angeben:

~~~css title="main.css"
/* Styles für die initiale Seite angeben */
html,
body,
#app { /* stellen Sie sicher, dass Sie den #app-Root-Container verwenden */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für den Spreadsheet-Container angeben */
.widget {
    height: 100%;
}
~~~

#### Daten laden {#loading-data}

Um Daten in Spreadsheet einzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei *data.js* im Verzeichnis *src/* erstellen und einige Daten hinzufügen:

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

Öffnen Sie dann die Datei *App.vue*, importieren Sie die Daten und initialisieren Sie sie mit der internen Methode `data()`. Danach können Sie die Daten als **props** an die neu erstellte `<Spreadsheet/>`-Komponente übergeben:

~~~html {3,7-9,14} title="App.vue"
<script>
import Spreadsheet from "./components/Spreadsheet.vue";
import { getData } from "./data";

export default {
    components: { Spreadsheet },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <Spreadsheet :data="data" />
</template>

~~~

Wechseln Sie zur Datei *Spreadsheet.vue* und wenden Sie die übergebenen **props** mit der Methode [`parse()`](api/spreadsheet_parse_method.md) auf Spreadsheet an:

~~~html {6,10} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    props: ["data"],

    mounted() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
        this.spreadsheet.parse(this.data);
    },

    unmounted() {
        this.spreadsheet.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

Die Spreadsheet-Komponente ist nun einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es Spreadsheet mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen angeben. Besuchen Sie unsere [Spreadsheet-API-Dokumentation](api/overview/properties_overview.md), um die vollständige Liste der verfügbaren Eigenschaften zu sehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in Spreadsheet ausführt, löst das Widget ein Event aus. Sie können diese Events nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Lesen Sie die [vollständige Liste der Events](api/overview/events_overview.md).

Öffnen Sie *Spreadsheet.vue* und vervollständigen Sie die Methode `mounted()`:

~~~html {8-11} title="Spreadsheet.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});

        this.spreadsheet.events.on("afterFocusSet", function(cell){
            console.log("Fokus wurde auf eine Zelle gesetzt");
            console.log(cell);
        });
    }
    //...
}   
</script>

//...
~~~

Danach können Sie die App starten, um Spreadsheet mit Daten auf einer Seite geladen zu sehen.

![DHTMLX Spreadsheet mit Beispieldaten in einer Vue 3-Anwendung initialisiert](/img/integrations/trial_spreadsheet.png)

Jetzt wissen Sie, wie Sie DHTMLX Spreadsheet mit Vue integrieren. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das fertige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).
