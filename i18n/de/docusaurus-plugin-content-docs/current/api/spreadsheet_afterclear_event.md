---
sidebar_label: afterClear
title: afterClear event
description: Behandeln Sie das Event afterClear, das ausgelöst wird, nachdem DHTMLX Spreadsheet geleert wurde (seit v4.3 veraltet, verwenden Sie stattdessen das Event afterAction).
---

# afterClear

:::caution
The `afterClear` event was deprecated in v4.3. It still works, but you should apply the new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clear") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet-Aktionen](api/overview/actions_overview.md)**. 
:::

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem eine Tabellenkalkulation geleert wurde

### Verwendung {#usage}

~~~jsx
afterClear: () => void;
~~~

### Beispiel {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterClear" event
spreadsheet.events.on("afterClear", function(){
    console.log("A spreadsheet is cleared");
    return false;
});
~~~

**Changelog:** Hinzugefügt in v4.2

**Verwandter Artikel:** [Event-Handling](handling_events.md)
