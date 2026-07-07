---
sidebar_label: Anpassung
title: Anpassung
description: Sie erfahren in der Dokumentation, wie Sie die DHTMLX JavaScript Spreadsheet-Bibliothek anpassen. Durchsuchen Sie Entwicklerleitfaden und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Anpassung {#customization}

Sie können das Aussehen, die Struktur und die Funktionalität der Toolbar, des Menüs und des Kontextmenüs anpassen sowie ein benutzerdefiniertes Nur-Lesen-Verhalten für die Spreadsheet-Komponente definieren.

## Standard- und benutzerdefinierte Icons {#default-and-custom-icons}

DHTMLX Spreadsheet verwendet standardmäßig Icons auf Basis von [Material Design](https://pictogrammers.com/library/mdi/?welcome). Sie können jedoch bei Bedarf auch ein anderes Icon-Font-Paket verwenden. Dazu müssen Sie den gewünschten Icon-Font auf der Seite einbinden und die Icons in jedem beliebigen Bereich der Spreadsheet-Komponente verwenden: in Toolbar-Controls sowie in Menü- und Kontextmenü-Einträgen.

Sie können beispielsweise das [Font Awesome](https://fontawesome.com/) Icon-Paket verwenden, indem Sie den [Link zu dessen CDN](https://docs.fontawesome.com/web/setup/get-started) nach den Quelldateien von DHTMLX Spreadsheet wie folgt einbinden:

~~~html
<script type="text/javascript" src="../../codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="../../codebase/spreadsheet.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Anschließend können Sie den Namen des Icons als Wert der Eigenschaft `icon` im Objekt mit den Control-Parametern für Toolbar, Menü oder Kontextmenü verwenden. Weitere Details entnehmen Sie den folgenden Abschnitten.

## Control-Typen und -Operationen {#controls-types-and-operations}

### Typen {#types}

Sie können die folgenden Control-Typen hinzufügen: `button`, `menuItem`, `separator` und `spacer`.

Das `button`-Objekt hat folgende Eigenschaften:

- `type` - der Typ eines Buttons, setzen Sie diesen auf "button"
- `id` - die ID eines Buttons
- `icon` - der Name eines Icons aus dem verwendeten Icon-Font
- `hotkey` - der Name des Hotkeys für einen Button
- `value` - der Wert eines Buttons
- `tooltip` - der Tooltip eines Buttons
- `twoState` - das Flag, das bestimmt, ob ein Button in zwei Zuständen verwendet werden kann
- `active` - der Zustand eines Buttons: `true` - aktiv, `false` - inaktiv

Das `menuItem`-Objekt hat folgende Eigenschaften:

- `type` - der Typ eines Menüeintrags, setzen Sie diesen auf "menuItem"
- `id` - die ID eines Menüeintrags
- `icon` - der Name eines Icons aus dem verwendeten Icon-Font
- `hotkey` - der Name des Hotkeys für einen Menüeintrag
- `value` - der Wert eines Menüeintrags
- `childs` - ein Array von untergeordneten Controls (beachten Sie, dass alle untergeordneten Elemente den Typ `menuItem` haben müssen)

Die Datensammlungs-API der **Toolbar**, des **Menüs** und des **Kontextmenüs** ermöglicht Ihnen die Verwaltung von Controls: Sie können benutzerdefinierte Controls hinzufügen, nicht benötigte entfernen oder vorhandene aktualisieren - beispielsweise deren Icons ändern.

### Controls hinzufügen {#adding-controls}

Um ein neues Control hinzuzufügen, verwenden Sie die Methode `spreadsheet.{name}.data.add()`. Diese akzeptiert folgende Parameter:

- `config` - (`object`) ein Objekt mit der Control-Konfiguration
- `index` - (`number`) der Index der Position, an der das Control eingefügt werden soll
- `parent` - (`string`) die ID eines übergeordneten Controls (für den Typ `menuItem`)

Für einen Button:

~~~jsx 
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "button", // "menuItem"
    id: "button-id",
    tooltip: "Some tooltip",
    icon: "icon-name"
}, 2);
~~~

Für ein menuItem:

~~~jsx
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "menuitem-id", 
    value: "Some value",
}, -1, "parent-id");
~~~

### Controls aktualisieren {#updating-controls}

Sie können das Icon eines Controls und andere Konfigurationsoptionen über die Methode `spreadsheet.{name}.data.update()` ändern. Diese nimmt zwei Parameter entgegen:

- die ID des Controls
- ein Objekt mit der neuen Konfiguration des Controls

~~~jsx
// spreadsheet.menu.data.update / spreadsheet.contextMenu.data.update
spreadsheet.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

### Controls löschen {#deleting-controls}

Um ein Control zu entfernen, verwenden Sie die Methode `spreadsheet.{name}.data.remove()`. Übergeben Sie der Methode die ID des zu entfernenden Controls:

~~~jsx
// spreadsheet.menu.data.remove / spreadsheet.contextMenu.data.remove
spreadsheet.toolbar.data.remove("control-id");
~~~

## Toolbar {#toolbar}

### Standard-Controls {#default-controls}

Die [Standard-Toolbar](/#toolbar) enthält folgende Control-Blöcke:

- den **Rückgängig**-Block
  - den *Rückgängig*-Button (id: "undo")
  - den *Wiederholen*-Button (id: "redo")
- den **Farben**-Block
  - den *Textfarbe*-Button (id: "color")
  - den *Hintergrundfarbe*-Button (id: "background")
- den **Schrift**-Block
  - die *Schriftgröße*-Combobox (id: "font-size")
- den **Dekoration**-Block
  - den *Fett*-Button (id: "font-weight-bold")
  - den *Kursiv*-Button (id: "font-style-italic")
  - den *Unterstrichen*-Button (id: "text-decoration-underline")
  - den *Durchgestrichen*-Button (id: "text-decoration-line-through")
- den **Ausrichten**-Block
  - den **Horizontal ausrichten**-Unterblock
    - den *Links*-Button (id: "halign-left")
    - den *Mitte*-Button (id: "halign-center")
    - den *Rechts*-Button (id: "halign-right")
  - den **Vertikal ausrichten**-Unterblock
    - den *Oben*-Button (id: "valign-top")
    - den *Mitte*-Button (id: "valign-center")
    - den *Unten*-Button (id: "valign-bottom")
  - den **Textumbruch**-Unterblock
    - den *Abschneiden*-Button (id: "multiline-clip")
    - den *Umbrechen*-Button (id: "multiline-wrap")
- den **Zelle**-Block
  - den *Rahmen*-Button (id: "border")
  - den *Verbinden/Trennen*-Button (id: "merge")
- den **Format**-Block
  - das *Format*-menuItem (id: "format")
- den **Aktionen**-Block
  - den *Filter*-Button (id: "filter")
  - den *Link einfügen*-Button (id: "link")

Es ist auch möglich, folgende Blöcke hinzuzufügen:

- den **Sperren**-Block
    - den *Sperren*-Button (id: "lock")
- den **Leeren**-Block
  - das *Gruppe leeren*-menuItem (id: "clear-group")
    - das *Wert leeren*-menuItem (id: "clear-value")
    - das *Stile leeren*-menuItem (id: "clear-styles")
    - das *Alles leeren*-menuItem (id: "clear-all")
- den **Zeilen**-Block
  - den *Zeile hinzufügen*-Button (id: "add-row")
  - den *Zeile entfernen*-Button (id: "remove-row")
  - den *Zeilen einblenden*-Button (id: "unfreeze-rows")
  - den *Bis Zeile [id] fixieren*-Button (id: "freeze-rows")
  - den *Zeile(n) [id] ausblenden*-Button (id: "hide-rows")
- den **Spalten**-Block
  - den *Spalte hinzufügen*-Button (id: "add-col")
  - den *Spalte entfernen*-Button (id: "remove-col")
  - den *Spalten einblenden*-Button (id: "unfreeze-cols")
  - den *Bis Spalte [id] fixieren*-Button (id: "freeze-cols")
  - den *Spalte(n) [id] ausblenden*-Button (id: "hide-cols")
- den **Datei**-Block
  - das *Exportieren*-menuItem (id: "export")
    - das *"Microsoft Excel(.xlsx)"*-menuItem (id: "export-xlsx")
  - das *Importieren*-menuItem (id: "import")
    - das *"Microsoft Excel(.xlsx)"*-menuItem (id: "import-xlsx")
- den **Hilfe**-Block
  - den *Hilfe*-Button (id: "help")

### Controls hinzufügen {#adding-controls-1}

Im folgenden Beispiel wird ein neuer Button zur Toolbar hinzugefügt:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "button",
    icon: "dxi dxi-delete",
    tooltip: "Remove all",
    id: "remove-all"
});
~~~

![DHTMLX Spreadsheet toolbar with a custom Remove all button added through customization](/img/custom_toolbar_button.png)

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierter Toolbar-Button](https://snippet.dhtmlx.com/qopk6lta)

Im folgenden Beispiel wird eine neue menuItem-Option zum Control "clear-group" hinzugefügt:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2"
}, -1, "clear-group");
~~~

Es gibt eine vereinfachte Schreibweise zum Hinzufügen eines menuItems, wenn die genaue Position des neuen Eintrags nicht relevant ist:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2", 
    parent: "clear-group"   
});
~~~

### Controls aktualisieren {#updating-controls-1}

Im folgenden Beispiel werden die Standard-Icons der Toolbar-Buttons "Rückgängig"/"Wiederholen" durch Font-Awesome-Icons ersetzt:

~~~jsx
spreadsheet.toolbar.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.toolbar.data.update("redo", { icon: "fa fa-redo" });
~~~

![DHTMLX Spreadsheet toolbar with custom Undo and Redo icons from Font Awesome](/img/custom_toolbar_icons.png)

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierte Toolbar-Icons](https://snippet.dhtmlx.com/mvnx43o0)

### Controls löschen {#deleting-controls-1}

Im folgenden Beispiel wird der "Rückgängig"-Button aus der Toolbar entfernt:

~~~jsx
spreadsheet.toolbar.data.remove("undo");
~~~

### Benutzerdefinierte Schriftgröße {#custom-font-size}

Sie können die Liste der verfügbaren Schriftgrößen im **Schrift**-Toolbar-Block neu definieren, indem Sie die vorhandenen Einträge aus der `"font-size"`-Combobox entfernen und eigene hinzufügen:

~~~jsx
const FONT_SIZES = [8, 10, 12, 14, 16, 20];

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // Konfigurationsoptionen
});

spreadsheet.toolbar.data.removeAll("font-size");
spreadsheet.toolbar.data.add(
    FONT_SIZES.map(size => ({ value: size, id: `font-size-${size}` })),
    -1,
    "font-size"
);

spreadsheet.parse(dataset);
~~~

**Verwandtes Beispiel:** [Spreadsheet. Benutzerdefinierte Schriftgröße festlegen](https://snippet.dhtmlx.com/tffbf11g)

## Menü {#menu}

### Standard-Controls {#default-controls-1}

Das [Standard-Menü](/#menu) hat folgende Struktur:

- das **Datei**-menuItem (id: "edit")
  - das *Importieren als...*-menuItem (id: "import")
    - das *"Microsoft Excel(.xlsx)"*-menuItem (id: "import-xlsx")
  - das *Herunterladen als...*-menuItem (id: "download")
    - das *"Microsoft Excel(.xlsx)"*-menuItem (id: "export-xlsx")
- das **Bearbeiten**-menuItem (id: "edit")
  - das *Rückgängig*-menuItem (id: "undo")
  - das *Wiederholen*-menuItem (id: "redo")
  - der Trenner
  - das *Fixieren*-menuItem (id: "freeze")
    - das *Spalten einblenden*-menuItem (id: "unfreeze-cols")
    - das *Bis Spalte [id] fixieren*-menuItem (id: "freeze-cols")
    - der Trenner (id: "freeze-sep")
    - das *Zeilen einblenden*-menuItem (id: "unfreeze-rows")
    - das *Bis Zeile [id] fixieren*-menuItem (id: "freeze-rows")
  - das *Sperren*-menuItem (id: "lock")
  - der Trenner
  - das *Leeren*-menuItem (id: "clear")
    - das *Wert leeren*-menuItem (id: "clear-value")
    - das *Stile leeren*-menuItem (id: "clear-styles")
    - das *Alles leeren*-menuItem (id: "clear-all")
- das **Einfügen**-menuItem (id: "insert")
  - das *Spalten*-menuItem (id: "columns")
    - das *Spalte hinzufügen*-menuItem (id: "add-col")
    - das *Spalte entfernen*-menuItem (id: "remove-col")
  - das *Zeilen*-menuItem (id: "rows")
    - das *Zeile hinzufügen*-menuItem (id: "add-row")
    - das *Zeile entfernen*-menuItem (id: "remove-row")
  - das *Link einfügen*-menuItem (id: "link")
- das **Format**-menuItem (id: "configuration")
  - das *Fett*-menuItem (id: "font-weight-bold")
  - das *Kursiv*-menuItem (id: "font-style-italic")
  - das *Unterstrichen*-menuItem (id: "text-decoration-underline")
  - das *Durchgestrichen*-menuItem (id: "text-decoration-line-through")
  - der Trenner
  - das *Horizontal ausrichten*-menuItem (id: "halign")
    - das *Links*-menuItem (id: "halign-left")
    - das *Mitte*-menuItem (id: "halign-center")
    - das *Rechts*-menuItem (id: "halign-right")
  - das *Vertikal ausrichten*-menuItem (id: "valign")
    - das *Oben*-menuItem (id: "valign-top")
    - das *Mitte*-menuItem (id: "valign-center")
    - das *Unten*-menuItem (id: "valign-bottom")
  - das *Textumbruch*-menuItem (id: "multiline")
    - das *Abschneiden*-menuItem (id: "multiline-clip")
    - das *Umbrechen*-menuItem (id: "multiline-wrap")
  - das *Format*-menuItem (id: "format")
  - das *Verbinden/Trennen*-menuItem (id: "merge")
- das **Daten**-menuItem (id: "data")
  - das *Datenvalidierung*-menuItem (id: "validation")
  - das *Suchen*-menuItem (id: "search")
  - das *Filter*-menuItem (id: "filter")
  - das *Sortieren*-menuItem (id: "sort")
    - das *A bis Z sortieren*-menuItem (id: "asc-sort")
    - das *Z bis A sortieren*-menuItem (id: "desc-sort")
- das **Hilfe**-menuItem (id: "help")

### Controls hinzufügen {#adding-controls-2}

Im folgenden Beispiel wird ein neues menuItem zum Menü hinzugefügt:

~~~jsx
spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    childs: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});
~~~

![DHTMLX Spreadsheet menu with a custom Validate option for checking numbers](/img/custom_menuitem.png)

**Verwandtes Beispiel**: [Spreadsheet. Menü-Daten](https://snippet.dhtmlx.com/2mlv2qaz)

### Controls aktualisieren {#updating-controls-2}

Im folgenden Beispiel werden die Standard-Icons der menuItems "Rückgängig"/"Wiederholen" durch Font-Awesome-Icons ersetzt:

~~~jsx
spreadsheet.menu.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.menu.data.update("redo", { icon: "fa fa-redo" });
~~~

![DHTMLX Spreadsheet menu with custom Undo and Redo icons from Font Awesome](/img/custom_menu_icons.png)

### Controls löschen {#deleting-controls-2}

Im folgenden Beispiel wird das menuItem "Rückgängig" aus dem Menü entfernt:

~~~jsx
spreadsheet.menu.data.remove("undo");
~~~

## Kontextmenü {#context-menu}

### Standard-Controls {#default-controls-2}

Das [Standard-Kontextmenü](/#context-menu) hat folgende Struktur:

- das **Sperren**-menuItem (id: "lock")
- das **Leeren**-menuItem (id: "clear")
  - das *Wert leeren*-menuItem (id: "clear-value")
  - das *Stile leeren*-menuItem (id: "clear-styles")
  - das *Alles leeren*-menuItem (id: "clear-all")
- das **Spalten**-menuItem (id: "columns")
  - das *Spalte hinzufügen*-menuItem (id: "add-col")
  - das *Spalte entfernen*-menuItem (id: "remove-col")
  - das *An Daten anpassen*-menuItem (id: "fit-col")
  - der Trenner
  - das *Spalten einblenden*-menuItem (id: "unfreeze-cols")
  - das *Bis Spalte [id] fixieren*-menuItem (id: "freeze-cols")
  - das *Spalten anzeigen*-menuItem (id: "show-cols")
  - das *Spalte(n) [id] ausblenden*-menuItem (id: "hide-cols")
- das **Zeilen**-menuItem (id: "rows")
  - das *Zeile hinzufügen*-menuItem (id: "add-row")
  - das *Zeile entfernen*-menuItem (id: "remove-row")
  - der Trenner
  - das *Zeilen einblenden*-menuItem (id: "unfreeze-rows")
  - das *Bis Zeile [id] fixieren*-menuItem (id: "freeze-rows")
  - das *Zeilen anzeigen*-menuItem (id: "show-rows")
  - das *Zeile(n) [id] ausblenden*-menuItem (id: "hide-rows")
- das **Sortieren**-menuItem (id: "sort")
  - das *A bis Z sortieren*-menuItem (id: "asc-sort")
  - das *Z bis A sortieren*-menuItem (id: "desc-sort")
- das **Link einfügen**-menuItem (id: "link")

### Controls hinzufügen {#adding-controls-3}

Im folgenden Beispiel wird ein neues menuItem zum Kontextmenü hinzugefügt:

~~~jsx
spreadsheet.contextMenu.data.add({
    icon: "mdi mdi-eyedropper-variant",
    value: "Paint format",
    id: "paint-format"
});
~~~

![DHTMLX Spreadsheet context menu with a custom Paint format option](/img/custom_context_menuitem.png)

**Verwandtes Beispiel**: [Spreadsheet. Kontextmenü](https://snippet.dhtmlx.com/atl9gd4h)

### Controls aktualisieren {#updating-controls-3}

Im folgenden Beispiel wird das Standard-Icon des menuItems "Sperren" durch ein Font-Awesome-Icon ersetzt:

~~~jsx
spreadsheet.contextMenu.data.update("lock", { icon: "fa fa-key" });
~~~

![DHTMLX Spreadsheet context menu with a custom Lock icon from Font Awesome](/img/custom_context_icon.png)

### Controls löschen {#deleting-controls-3}

Im folgenden Beispiel wird das menuItem "Sperren" aus dem Kontextmenü entfernt:

~~~jsx
spreadsheet.contextMenu.data.remove("lock");
~~~

## Benutzerdefinierter Nur-Lesen-Modus {#custom-read-only-mode}

Neben der Anwendung des [Nur-Lesen-Modus](configuration.md#read-only-mode) auf die gesamte Spreadsheet-Komponente können Sie bestimmte Operationen mithilfe von Events blockieren, deren Namen mit `before` beginnen, zum Beispiel:

- [](api/spreadsheet_beforeeditstart_event.md)
- [](api/spreadsheet_beforeaction_event.md)

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

spreadsheet.events.on("beforeEditStart", function(){
    return false;
});

spreadsheet.events.on("beforeAction", function(actionName){
    if (actionName === "setCellValue" || actionName === "setCellStyle") {
        return false;
    }
});

spreadsheet.parse(data);
~~~

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierter Nur-Lesen-Modus](https://snippet.dhtmlx.com/8xcursbe)
