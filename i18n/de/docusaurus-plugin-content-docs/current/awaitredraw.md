---
sidebar_label: AwaitRedraw-Helfer
title: AwaitRedraw-Helfer
description: Sie können den AwaitRedraw-Helfer in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# AwaitRedraw-Helfer {#awaitredraw-helper}

Einige API-Methoden von DHTMLX Spreadsheet wirken sich erst nach dem Rendern der Komponente auf der Seite aus. In manchen Fällen kann dies einen Moment dauern, sodass Sie warten müssen, bis der Browser das Rendering abgeschlossen hat, bevor Sie den nächsten Code-Abschnitt ausführen.

Für solche Fälle können Sie den `dhx.awaitRedraw`-Helfer verwenden. Er verfolgt den Rendering-Zyklus und führt Ihren Code aus, sobald Spreadsheet sein Rendering abgeschlossen hat.

~~~js
dhx.awaitRedraw().then(() => {
    // Ihr Code hier
});
~~~

Verwenden Sie zum Beispiel `awaitRedraw` innerhalb von `afterDataLoaded`, um sicherzustellen, dass der Zellwert verfügbar ist, bevor Sie ihn auslesen:

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~
