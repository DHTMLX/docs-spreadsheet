---
sidebar_label: DHTMLX MCP-Server
title: DHTMLX Spreadsheet MCP-Server für Formeln und Formatierung
description: Die aktuelle DHTMLX Spreadsheet-Dokumentation erreicht KI-Assistenten über den MCP-Server – von Formeln über Zellformatierung bis hin zu Datenladen und Blattverwaltung.
---

# DHTMLX Spreadsheet MCP-Server: Formeln, Formatierung und Blatt-APIs {#dhtmlx-spreadsheet-mcp-server-formulas-formatting-and-sheet-apis}

[DHTMLX Spreadsheet](/)-Anwendungen hängen davon ab, dass [Formeln](/functions/), [Zellformatierung](/data_formatting/), [Datenladen](/loading_data/) und [Blattverwaltung](/working_with_sheets/) exakt stimmen. Nichts davon lässt sich aus antrainiertem Wissen abrufen: Es erfordert die aktuelle Formelsyntax, die API-Methoden, die Spreadsheet heute bereitstellt, und Konfigurationsoptionen, die sich seitdem nicht geändert haben.

Der DHTMLX MCP-Server löst dieses Problem, indem er dem Assistenten überall dort, wo er arbeitet, direkten Zugriff auf die aktuelle Spreadsheet-Referenz gibt. Richten Sie ihn auf [Zahlenformate](/number_formatting/), die [Sheet Manager API](/api/overview/sheetmanager_overview/) oder das [Datenladen](/loading_data/) aus, und er prüft die aktuelle Dokumentation, bevor er auch nur eine einzige Codezeile generiert.

### MCP-Endpunkt {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX Spreadsheet. Derselbe Endpunkt und dieselben Konfigurationsanweisungen funktionieren unabhängig davon, mit welcher DHTMLX-Komponente Sie arbeiten.
:::

## MCP-Server-Abdeckung für Spreadsheet {#mcp-server-coverage-for-spreadsheet}

Jede Seite der DHTMLX Spreadsheet-Dokumentation ist über den MCP-Server durchsuchbar. Typische Anwendungsfälle:

- Nachschlagen der aktuellen API für Spreadsheet-[Methoden](/api/overview/methods_overview/), [Events](/api/overview/events_overview/) und [Eigenschaften](/api/overview/properties_overview/), einschließlich Signaturen und Rückgabetypen.
- Generieren von sofort lauffähigem Spreadsheet-Code zur [Initialisierung](/initialization/) und [Konfiguration](/configuration/) anhand einer Beschreibung Ihrer Anforderungen.
- Erkunden von [Zahlenformaten](/number_formatting/) (allgemein, Zahl, Prozent, Währung, Datum, Uhrzeit und weitere) und Verstehen, wie sich benutzerdefinierte Formatmasken definieren lassen.
- Arbeiten mit [Formeln und Funktionen](/functions/): Finden unterstützter Funktionen, Verstehen der Formelsyntax und Nutzen der Berechnungs-API.
- Konfigurieren von [Spalten und Zeilen](/work_with_rows_cols/), einschließlich Festlegen von Breiten, Ausblenden und Fixieren.
- Anwenden von Zell- und Bereichs-[Formatierung](/data_formatting/) sowie Stilen, einschließlich Textfarbe, Ausrichtung, Rahmen und Hintergrundfarben.
- Behandeln von [Spreadsheet-Events](/handling_events/), um auf Wertänderungen, Zellauswahl, Editor-Aktionen und Interaktionen auf Blattebene zu reagieren.
- Erkunden der [Unterstützung mehrerer Blätter](/working_with_sheets/), des [Datenladens und -exports](/loading_data/) (JSON und Excel) sowie der Integration mit Frameworks wie [React](/react/), [Vue](/vuejs_integration/), [Angular](/angular_integration/) und [Svelte](/svelte_integration/).

## Wie der Assistent den MCP-Server abfragt {#how-the-assistant-queries-the-mcp-server}

Jede Anfrage an den DHTMLX MCP-Server durchläuft eine Retrieval-Augmented-Generation-Pipeline (RAG), die auf dem Model Context Protocol (MCP) basiert. Je nachdem, was gefragt wird, übergibt der Server sie an einen von zwei Workflows: *Search*, der passende Referenzseiten liefert, auf denen der Assistent aufbauen kann, oder *Inference*, der diese Seiten liest und selbst antwortet. Davor klärt der Assistent, welcher Teil der Anfrage einen Dokumentations-Lookup benötigt, und erledigt den Rest selbst.

Nehmen Sie als Beispiel den Prompt *„Wie richte ich DHTMLX Spreadsheet so ein, dass es Live-Aktienkurse aus dem Marktdaten-Feed meines Unternehmens abruft und als Währung formatiert?“*:

1. Der Teil, der Dokumentation erfordert: wie sich eine Währungs-Formatmaske auf einen Zellbereich anwenden lässt.
2. Der Server findet die passende Dokumentation zur Zahlenformatierung.
3. Da die Anfrage generierten Code erfordert, übernimmt *Search* die Bearbeitung (eine engere Sachfrage würde stattdessen an *Inference* gehen).
4. *Search* ruft die passenden Seiten aus einem Vektorindex der aktuellen Spreadsheet-Dokumentation ab.
5. Diese Seiten werden dem Assistenten als Kontext zurückgegeben.
6. Der Assistent wendet die Formatmaske anhand dieses Kontexts an und schreibt anschließend die Logik zum Abrufen der Marktdaten aus eigenem Wissen, statt bei der Spreadsheet-API zu raten.

Das Ergebnis: Die Codegenerierung für Spreadsheet bleibt an der aktuellen Formel- und Formatierungs-API verankert.

## MCP-Server in Ihr KI-Tool einbinden {#wiring-the-mcp-server-into-your-ai-tool}

Die Registrierung des MCP-Servers ist ein einmaliger Schritt pro Tool und erfolgt je nach Tool entweder über einen CLI-Befehl oder einen JSON-Konfigurationsausschnitt. So oder so richten Sie Ihr Tool auf diese URL aus:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Danach kann jedes in diesem Tool geöffnete Spreadsheet-Projekt auf die aktuelle Dokumentation zugreifen.

Für gängige Tools folgen unten jeweils eigene Einrichtungsschritte.

### Claude Code {#claude-code}

:::info
Claude Code dokumentiert jede MCP-Verbindungsoption in der [offiziellen Dokumentation](https://code.claude.com/docs/en/mcp).
:::

Um den Server über die Befehlszeile zu registrieren, führen Sie Folgendes aus:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Für die manuelle Einrichtung fügen Sie die folgende Konfiguration zu Ihrer `.mcp.json` hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info
Cursor dokumentiert die MCP-Einrichtung vollständig in der [offiziellen Dokumentation](https://cursor.com/en-US/docs/mcp).
:::

So fügen Sie den Server hinzu:

1. Öffnen Sie die Einstellungen (`Cmd+Shift+J` unter Mac, `Ctrl+Shift+J` unter Windows/Linux)
2. Gehen Sie zu **Tools & MCP**
3. Klicken Sie auf **Add Custom MCP**
4. Fügen Sie die folgende Konfiguration ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Alles zur MCP-Server-Integration in Antigravity finden Sie in der [offiziellen Dokumentation](https://antigravity.google/docs/mcp).
:::

Das sind die Schritte, um den DHTMLX MCP-Server mit Google Antigravity zu verbinden:

1. Öffnen Sie die Command Palette
2. Geben Sie „mcp add“ ein
3. Wählen Sie „HTTP“
4. Geben Sie die folgenden Werte an:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Wenn Sie von Gemini CLI zu Antigravity CLI migrieren, lesen Sie den [zugehörigen Leitfaden](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes).
:::

Um den DHTMLX MCP-Server mit Antigravity CLI zu verbinden, erstellen Sie `mcp_config.json` an einem dieser Orte:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Fügen Sie die folgende Konfiguration hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Führen Sie anschließend `agy` im Terminal aus.

### ChatGPT {#chatgpt}

:::info
Die vollständige Einrichtung des MCP-Connectors in ChatGPT finden Sie in der [offiziellen Dokumentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Schritte zur Konfiguration des Connectors:

1. Gehen Sie zu **Settings** → **Apps & Connectors**
2. Klicken Sie auf **Advanced settings**
3. Aktivieren Sie **Developer mode**
4. Kehren Sie zu **Apps & Connectors** zurück und klicken Sie auf „Create“
5. Geben Sie die Connector-Details ein:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Klicken Sie auf **Create**

Nachdem Sie den Connector erstellt haben, ruft ChatGPT während Unterhaltungen Dokumentation vom MCP-Server ab.

:::info
Für intensive Coding-Workflows sind andere MCP-fähige Tools möglicherweise besser geeignet.
:::

### Andere Tools {#other-tools}

Suchen Sie in den Einstellungen jedes anderen KI-Coding-Tools nach „Model Context Protocol“ oder „Context Sources“ und fügen Sie dort `https://docs.dhtmlx.com/mcp` als benutzerdefinierte Quelle hinzu.

## Hinweise zum Datenschutz {#data-privacy-notes}

Der MCP-Server läuft als gehosteter Dienst. Er läuft nicht lokal, liest keine Dateien aus Ihrer Umgebung und speichert keine persönlichen Nutzerdaten.

Anfragen können zu Debugging- und Serviceverbesserungszwecken protokolliert werden.

Organisationen, die strengere Datenschutzkontrollen benötigen, können eine kommerzielle Deployment-Option mit deaktivierter Anfrageprotokollierung anfragen. Für Anfragen wenden Sie sich an `info@dhtmlx.com`.

## Beispiel-Prompts für den Aufbau von Spreadsheets {#sample-prompts-for-building-spreadsheets}

Je präziser das Ziel in Ihrem Prompt formuliert ist, desto genauer kann der Assistent den passenden Teil der Spreadsheet-API ansteuern. Die folgenden Prompts sind nach Aufgabenkategorie gruppiert und lassen sich direkt kopieren und an Ihre Daten anpassen.

**Daten laden und exportieren**

~~~
Ich möchte Daten aus einer JSON-Datei in DHTMLX Spreadsheet laden. Wie mache ich das?
~~~
~~~
Wie exportiere ich ein DHTMLX Spreadsheet in eine Excel-Datei? Welche Methode muss ich aufrufen?
~~~
~~~
Was ist der Unterschied zwischen den Methoden load() und parse() von DHTMLX Spreadsheet für JSON-Daten?
~~~

**Arbeiten mit Zellen und Bereichen**

~~~
Wie füge ich Zellen in DHTMLX Spreadsheet eine Datenvalidierung mit Dropdown-Liste hinzu? Nutze die Docs.
~~~
~~~
Wie verwende ich setStyle(), um Hintergrundfarbe und Textformatierung auf einen Zellbereich in DHTMLX Spreadsheet anzuwenden?
~~~
~~~
Wie verbinde ich Zellen und lege die Ausrichtung in einem bestimmten Bereich in DHTMLX Spreadsheet fest?
~~~

**Formeln und Datenvalidierung**

~~~
Welche Formelfunktionen stehen in DHTMLX Spreadsheet zur Verfügung, und wie verwende ich benutzerdefinierte Formeln?
~~~
~~~
Wie lege ich für eine Spalte in DHTMLX Spreadsheet einen Dropdown-Listen-Zelltyp fest?
~~~

**Spalten, Zeilen und Blätter**

~~~
Wie fixiere ich bestimmte Zeilen und Spalten in DHTMLX Spreadsheet?
~~~
~~~
Wie füge ich in DHTMLX Spreadsheet programmatisch Blätter hinzu und wechsle zwischen ihnen?
~~~
~~~
Wie behandle ich das afterEditEnd-Event und rufe den aktualisierten Zellwert ab?
~~~

## Tipps für Prompts bei der Arbeit mit Spreadsheet {#prompting-tips-for-spreadsheet-work}

- **Benennen Sie das Zielobjekt.** Unterscheiden Sie zwischen der Spreadsheet-Instanz, einem bestimmten Blatt, einer Zelle und einem Bereich. Zum Beispiel: „für die Spreadsheet-Instanz“ vs. „für einen bestimmten Zellbereich“ vs. „auf Blatt 2“. Ein enger gefasstes Ziel hilft dem Server, die richtigen Referenzseiten abzurufen.
- **Geben Sie den Zelltyp oder das Datenformat an.** Prompts wie „ein Datumsformat“ oder „ein Zahlenformat mit zwei Nachkommastellen“ liefern präzisere Dokumentation als eine allgemeine „Zelle“. Nennen Sie den Typ, wann immer Sie Spalten konfigurieren oder Formate anwenden.
- **Fügen Sie „Use the docs“** zu Ihrem Prompt hinzu. Diese Formulierung signalisiert dem Assistenten, dass er einen MCP-Lookup auslösen soll, statt allein aus antrainiertem Wissen zu antworten. Das ist besonders nützlich bei der Arbeit mit Formeln oder Validierung, wo antrainiertes Wissen am ehesten veraltet ist.
- **Machen Sie genaue Angaben zum Umfang der Operation.** Spreadsheet-Operationen können sich auf eine einzelne Zelle, einen Bereich, eine ganze Spalte oder Zeile oder ein gesamtes Blatt beziehen. Geben Sie den Umfang explizit an (zum Beispiel „für die gesamte Spalte B“ oder „über alle Blätter hinweg“), damit der Assistent die richtige Methodenüberladung oder den richtigen API-Pfad auswählt.
