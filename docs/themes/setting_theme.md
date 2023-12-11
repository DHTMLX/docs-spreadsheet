---
sidebar_label: Setting themes
title: Setting Themes
description: You can learn how to set a theme in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Setting themes

To set the necessary theme, be it a built-in Spreadsheet theme or a custom one, use one of the ways described below:

### Changing the "data" attribute 

You can choose from the following variants:

- change the **"data-dhx-theme"** attribute for the *chosen container*:

~~~html title="index.html"
<!-- component container -->
<div data-dhx-theme="dark" style="height: 100%" id="chart"></div>
~~~

- change the **"data-dhx-theme"** attribute for the *root* element:

~~~js title="index.js"
// your code here

document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### Applying the "dhx.setTheme()" method

The **dhx.setTheme()** method takes the following parameters:

- `theme: string` - (required) the name of the theme. It can be:
    - the name of the Spreadsheet theme: *"light" | "contrast-light" | "dark" | "contrast-dark"*
    - the name of a [custom theme](themes/custom_theme.md)
    - *"light"* - by default
- `container: string | HTMLElement` - (optional) the container to which the theme must be applied. It can be:
    - an HTMLElement
    - a string value with the ID of the container or the ID of a Layout cell
    - *document.documentElement* - by default

Below you'll find the examples of the **dhx.setTheme()** method usage:

~~~html title="Example 1"
<div id="container"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");

    dhx.setTheme("dark", "container"); // apply the "dark" theme to the container with the "container" ID
    //or
    dhx.setTheme("dark"); // apply the "dark" theme to the body 
</script>
~~~

~~~html title="Example 2"
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");
    
    const container = document.getElementById("container-1");
    dhx.setTheme("dark", container); //apply the "dark" theme to the container specified via an HTMLElement
</script>
~~~

**Related samples:**

- [Spreadsheet. Light, Dark, Light High Contrast, and Dark High Contrast themes (skins)](https://snippet.dhtmlx.com/t6rspqai?tag=spreadsheet)
- [Spreadsheet. Custom themes (skins)](https://snippet.dhtmlx.com/59nt1rcb?tag=spreadsheet)
