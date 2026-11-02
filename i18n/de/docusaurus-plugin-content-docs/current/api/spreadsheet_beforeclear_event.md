---
sidebar_label: beforeClear
title: beforeClear event
description: Verhindern Sie das Leeren von DHTMLX Spreadsheet mit dem veralteten Event beforeClear oder mit dem Event beforeAction und der Aktion clear, die es ersetzen.
---

# beforeClear

:::caution
The `beforeClear` event was deprecated in v4.3. It still works, but you should apply the new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet-Aktionen](api/overview/actions_overview.md)**. 
:::

### Beschreibung {#description}

@short: Wird ausgelöst, bevor eine Tabellenkalkulation geleert wird

### Verwendung {#usage}

~~~jsx
beforeClear: () => void | boolean;
~~~

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Leeren einer Tabellenkalkulation zu verhindern; andernfalls `true`.

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeClear" event
spreadsheet.events.on("beforeClear", function(){
    console.log("A spreadsheet will be cleared");
    return false;
});
~~~

**Changelog:** Hinzugefügt in v4.2

**Verwandter Artikel:** [Event-Handling](handling_events.md)
