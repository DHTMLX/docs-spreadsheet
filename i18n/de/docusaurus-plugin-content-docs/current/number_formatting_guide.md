---
sidebar_label: Zahlenformatierung
title: Leitfaden zur Zahlenformatierung
description: Sie können den Benutzerhandbuch zur Zahlenformatierung in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek nachlesen. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Zahlenformatierung {#number-formatting}

## Unterstützte Zahlenformate {#supported-number-formats}

Sie können mehrere Zahlenformate auf Zellwerte anwenden:

<table>
    <tbody>
        <tr>
            <td><b>Common</b></td>
            <td>Zahlen werden so angezeigt, wie sie sind, ohne angewandte Formatierung</td>
        </tr>
        <tr>
            <td><b>Number</b></td>
            <td>Zahlen werden mit Zehnern, Hunderten und Tausendern angezeigt, die durch festgelegte Trennzeichen getrennt sind</td>
        </tr>
        <tr>
            <td><b>Currency</b></td>
            <td>Zahlen werden mit dem Währungszeichen ($) angezeigt</td>
        </tr>
        <tr>
            <td><b>Percent</b></td>
            <td>Zahlen werden mit dem Prozentzeichen (%) angezeigt</td>
        </tr>
        <tr>
            <td><b>Date</b></td>
            <td>Zahlen werden als Datumsangaben im angegebenen Format angezeigt</td>
        </tr>
        <tr>
            <td><b>Time</b></td>
            <td>Zahlen werden als Uhrzeiten im 12- oder 24-Stunden-Format angezeigt</td>
        </tr>
        <tr>
            <td><b>Text</b></td>
            <td>Zahlen werden als Text und genau so angezeigt, wie Sie sie eingeben</td>
        </tr>
        <tr>
            <td><b>Scientific</b></td>
            <td>Zahlen werden in Exponentialschreibweise angezeigt (zum Beispiel <b>1.50E+03</b> für 1500.31); nützlich für sehr große oder sehr kleine Zahlen</td>
        </tr>
    </tbody>
</table>

## Format festlegen {#how-to-set-format}

Führen Sie die folgenden Schritte aus, um ein bestimmtes Zahlenformat auf Spreadsheet-Daten über die Symbolleiste anzuwenden:

- Wählen Sie eine Zelle oder mehrere Zellen aus, die Sie formatieren möchten.
- Klicken Sie auf die Schaltfläche **Zahlenformat**:

![DHTMLX Spreadsheet toolbar with the Number format button for applying numeric formatting](/img/number_format_button.png)

- Wählen Sie das gewünschte Format aus den vorgeschlagenen Optionen aus:

![DHTMLX Spreadsheet Number format dropdown with Common, Number, Currency, Percent, Date, Time, and Text options](/img/number_format_options.png)
