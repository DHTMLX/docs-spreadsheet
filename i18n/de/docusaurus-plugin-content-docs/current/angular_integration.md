---
sidebar_label: Integration mit Angular
title: Angular-Integration
description: In der Dokumentation erfahren Sie mehr über die Angular-Integration der DHTMLX JavaScript Spreadsheet-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# Integration mit Angular {#integration-with-angular}

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Angular** vertraut sein, um diese Dokumentation verwenden zu können. Zur Auffrischung Ihres Wissens lesen Sie bitte die [**Angular-Dokumentation**](https://angular.dev/overview).
:::

DHTMLX Spreadsheet ist kompatibel mit **Angular**. Wir haben Code-Beispiele vorbereitet, die zeigen, wie DHTMLX Spreadsheet mit **Angular** verwendet wird. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).

## Ein Projekt erstellen {#creating-a-project}

:::info
Bevor Sie mit der Erstellung eines neuen Projekts beginnen, installieren Sie [**Angular CLI**](https://angular.dev/tools/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie ein neues *my-angular-spreadsheet-app*-Projekt mit Angular CLI. Führen Sie den folgenden Befehl aus:

~~~json
ng new my-angular-spreadsheet-app
~~~

:::note
Wenn Sie dieser Anleitung folgen möchten, deaktivieren Sie beim Erstellen einer neuen Angular-App Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering).
:::

Der obige Befehl installiert alle notwendigen Tools, sodass Sie keine weiteren Befehle ausführen müssen.

### Installation der Abhängigkeiten {#installation-of-dependencies}

Wechseln Sie anschließend in das App-Verzeichnis:

~~~json
cd my-angular-spreadsheet-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie dazu den [**yarn**](https://yarnpkg.com/)-Paketmanager:

~~~json
yarn
yarn start
~~~

Die App sollte auf localhost laufen (zum Beispiel `http://localhost:3000`).

## Spreadsheet erstellen {#creating-spreadsheet}

Nun müssen Sie den Quellcode von DHTMLX Spreadsheet beziehen. Stoppen Sie zunächst die App und installieren Sie das Spreadsheet-Paket.

### Schritt 1. Paketinstallation {#step-1-package-installation}

Laden Sie das [**Test-Spreadsheet-Paket**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Beachten Sie, dass das Test-Spreadsheet nur 30 Tage lang verfügbar ist.
  
### Schritt 2. Komponente erstellen {#step-2-component-creation}

Nun müssen Sie eine Angular-Komponente erstellen, um Spreadsheet in die Anwendung einzubinden. Erstellen Sie den Ordner *spreadsheet* im Verzeichnis *src/app/*, fügen Sie eine neue Datei hinzu und benennen Sie sie *spreadsheet.component.ts*. Führen Sie anschließend die unten beschriebenen Schritte aus.

#### Quelldateien importieren {#importing-source-files}

Öffnen Sie die Datei und importieren Sie die Spreadsheet-Quelldateien. Beachten Sie Folgendes:

- Wenn Sie die PRO-Version verwenden und das Spreadsheet-Paket aus einem lokalen Ordner installieren, sieht der importierte Pfad folgendermaßen aus:

~~~jsx
import { Spreadsheet } from 'dhx-spreadsheet-package';
~~~

- Wenn Sie die Testversion von Spreadsheet verwenden, geben Sie den folgenden Pfad an:

~~~jsx
import { Spreadsheet } from '@dhx/trial-spreadsheet';
~~~

In diesem Tutorial erfahren Sie, wie Sie die **Testversion** von Spreadsheet konfigurieren.

#### Container festlegen und Spreadsheet initialisieren {#set-the-container-and-initialize-spreadsheet}

Um Spreadsheet auf der Seite anzuzeigen, müssen Sie den Container zum Rendern der Komponente festlegen und Spreadsheet mit dem entsprechenden Konstruktor initialisieren:

~~~jsx {1,8,12-13,18-19} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', // ein Template-Name, der in der Datei "app.component.ts" als <spreadsheet/> verwendet wird
    styleUrls: ['./spreadsheet.component.css'], // eine CSS-Datei einbinden
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    // Container für Spreadsheet initialisieren
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        // die Spreadsheet-Komponente initialisieren
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
    }

    ngOnDestroy() {
        this._spreadsheet.destructor(); // Spreadsheet zerstören
    }
}
~~~

#### Styles hinzufügen {#adding-styles}

Um Spreadsheet korrekt anzuzeigen, müssen Sie die entsprechenden Styles bereitstellen. Erstellen Sie dazu die Datei *spreadsheet.component.css* im Verzeichnis *src/app/spreadsheet/* und legen Sie die wichtigen Styles für Spreadsheet und seinen Container fest:

~~~css title="spreadsheet.component.css"
/* Spreadsheet-Styles importieren */
@import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

/* Styles für die initiale Seite festlegen */
html,
body {
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

Um Daten in Spreadsheet einzufügen, müssen Sie einen Datensatz bereitstellen. Erstellen Sie die Datei *data.ts* im Verzeichnis *src/app/spreadsheet/* und fügen Sie einige Daten hinzu:

~~~jsx title="data.ts"
export function getData(): any {
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

Öffnen Sie dann die Datei *spreadsheet.component.ts*. Importieren Sie die Datei mit Daten und wenden Sie sie mit der Methode [`parse()`](api/spreadsheet_parse_method.md) innerhalb der Methode `ngOnInit()` an, wie unten gezeigt.

~~~jsx {2,18,21} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', 
    styleUrls: ['./spreadsheet.component.css'],
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        const data = getData(); // Dateneigenschaft initialisieren
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
        
        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
~~~

Die Spreadsheet-Komponente ist nun einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es Spreadsheet mit Daten. Sie können auch die notwendigen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [Spreadsheet-API-Dokumentation](api/overview/events_overview.md), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Events verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in Spreadsheet ausführt, löst das Widget ein Event aus. Sie können diese Events verwenden, um die Aktion zu erkennen und den gewünschten Code auszuführen. Lesen Sie die [vollständige Liste der Events](api/overview/events_overview.md).

Öffnen Sie die Datei *spreadsheet.component.ts* und vervollständigen Sie die Methode `ngOnInit()` wie folgt:

~~~jsx {5-8} title="spreadsheet.component.ts"
// ...
ngOnInit() {
    this._spreadsheet = new Spreadsheet(this.spreadsheet_container.nativeElement,{});

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
}

ngOnDestroy() {
    this._spreadsheet.destructor();
}
~~~

### Schritt 3. Spreadsheet zur App hinzufügen {#step-3-adding-spreadsheet-into-the-app}

Um die `SpreadsheetComponent`-Komponente zur App hinzuzufügen, öffnen Sie die Datei *src/app/app.component.ts* und ersetzen Sie den Standardcode durch den folgenden:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<spreadsheet/>` // ein Template, das in der Datei "spreadsheet.component.ts" erstellt wurde 
})
export class AppComponent {
    name = "";
}
~~~

Erstellen Sie dann die Datei *app.module.ts* im Verzeichnis *src/app/* und geben Sie die `SpreadsheetComponent` wie folgt an:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpreadsheetComponent } from "./spreadsheet/spreadsheet.component";

@NgModule({
    declarations: [AppComponent, SpreadsheetComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Im letzten Schritt öffnen Sie die Datei *src/main.ts* und ersetzen Sie den vorhandenen Code durch den folgenden:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Danach können Sie die App starten, um Spreadsheet mit geladenen Daten auf einer Seite zu sehen.

![DHTMLX Spreadsheet mit Beispieldaten in einer Angular-Anwendung initialisiert](/img/integrations/trial_spreadsheet.png)

Jetzt wissen Sie, wie Sie DHTMLX Spreadsheet mit Angular integrieren. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das fertige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).
