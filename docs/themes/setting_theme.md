---
sidebar_label: Setting themes
title: Setting themes
description: You can learn about the setting of themes of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Setting Themes

To set the necessary theme, be it a built-in SpreadSheet theme or a custom one, use one of the ways described below:

### Changing the "data" attribute 

You can choose from the following variants:

- change the **"data"** attribute for the *chosen container*:

~~~html title="index.html"
<!-- component container -->
<div data-dhx-theme="dark" style="height: 100%" id="chart"></div>
~~~

- change the **"data"** attribute for the *root* element:

~~~js title="index.js"
// your code here

document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Applying the "dhx.setTheme()" method

The **dhx.setTheme()** method takes the following parameters:

- `theme: string` - (required) the name of the theme. It can be:
    - the name of the Suite theme: *"light" | "contrast-light" | "dark" | "contrast-dark"*
    - the name of a [custom theme](themes/custom_theme.md)
    - *"light"* - by default
- `container: string | HTMLElement` - (optional) the container to which the theme must be applied. It can be:
    - an HTMLElement
    - a string value with the ID of the container or the ID of a Layout cell
    - *document.documentElement* - by default

Below you'll find the examples of the **dhx.setTheme()** method usage:

~~~js {22,25} title="Example 1"
const layout = new dhx.Layout("layout", {
    type: "space",
    cols: [
        {
            id: "cell-1",
        },
        {
            id: "cell-2",
        },
    ]
});

const spreadsheet_1 = new dhx.Spreadsheet(null, config);
layout.getCell("cell-1").attach(spreadsheet_1);

const spreadsheet_1 = new dhx.Spreadsheet(null, config);
layout.getCell("cell-2").attach(spreadsheet_1);

spreadsheet_1.parse(data);
spreadsheet_2.parse(data);

dhx.setTheme("dark"); // apply the "dark" theme to the default container

// or
dhx.setTheme("dark", "cell-2"); // apply the "dark" theme to the Layout cell with the "cell-2" ID
~~~

~~~html {13} title="Example 2"
<section class="dhx_sample-container">
    <div id="container-1" style="height: 100%; width: 45%; padding: 10px;"></div>
    <div id="container-2" style="height: 100%; width: 45%; padding: 10px;"></div>
</section>

<script>
const spreadsheet_1 = new dhx.Spreadsheet("container-1", config);
const spreadsheet_2 = new dhx.Spreadsheet("container-2", config);

spreadsheet_1.parse(data);
spreadsheet_2.parse(data);

dhx.setTheme("dark", "container-2"); // apply the "dark" theme to the container with the "container-2" ID
</script>
~~~

~~~html {14} title="Example 3"
<section class="dhx_sample-container">
    <div id="container-1" style="height: 100%; width: 45%; padding: 10px;"></div>
    <div id="container-2" style="height: 100%; width: 45%; padding: 10px;"></div>
</section>

<script>
    const spreadsheet_1 = new dhx.Spreadsheet("container-1", config);
    const spreadsheet_2 = new dhx.Spreadsheet("container-2", config);
    
    spreadsheet_1.parse(data);
    spreadsheet_2.parse(data);
    
    const container = document.getElementById("container-2");
    dhx.setTheme("dark", container); //apply the "dark" theme to the container specified via an HTMLElement
</script>
~~~

**Related samples:**

- [Spreadsheet. Light, Dark, Light High Contrast, and Dark High Contrast themes (skins)](https://snippet.dhtmlx.com/t6rspqai)
- [Spreadsheet. Custom themes (skins)](https://snippet.dhtmlx.com/59nt1rcb)
