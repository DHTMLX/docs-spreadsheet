dhtmlxSpreadSheet Overview
============================

dhtmlxSpreadSheet is a client-side JavaScript component that allows editing and formatting data in spreadsheets online. It includes a configurable toolbar, handy menu and context menu, and adjustable grid,
supports hot keys navigation, loads data both from external and local sources, provides the ability to localize interface into the desired language.

{{note There is a [User Guide](user_guide.md) provided to make work with SpreadSheet easy for your end users.}}

SpreadSheet Structure
----------

###Toolbar {#toolbar}

The **Toolbar** section is rather flexible. It contains 6 default blocks of controls: "undo", "colors", "decoration", "align", "format", "help". You can [change the toolbar structure](configuration.md#toolbar) 
and add more blocks, or change the order of the blocks.
```
![SpreadSheet Toolbar](overview_toolbar.png)
```
It is also possible to [customize the toolbar](customization.md#toolbar) by adding your own controls and updating the controls' configuration.  

###Editing line {#editline}

The **editing line** can be used for two purposes:

- to edit the content of the selected cell
- to control changes made in the currently edited cell
```
![SpreadSheet Editing Line](overview_editline.png)
```
You can switch the editing line off, if necessary via the corresponding [configuration option](configuration.md#editingbar).


###Grid {#grid}

**Grid** represents a table with columns defined by letters and rows defined by numbers. Thus, a cell of the grid is defined by the column's letter and the row's number, e.g. B2.
```
![SpreadSheet Grid](spreadsheet_init.png)
```
###Context menu {#context}

The **Context menu** section includes 4 items **Lock**, **Clear**, **Columns** and **Rows** with sub-items. 
```
![SpreadSheet Context Menu](overview_contextmenu.png)
```
The [structure of Context menu is customizable](customization.md#contextmenu) as well. You can add custom controls, update the controls' configuration and remove unnecessary controls.


###Menu {#menu}

The **Menu** section contains several blocks that combine most frequently used options from the Toolbar and Context Menu to provide quick and handy access to them.

By default the **Menu** section is hidden, but you can switch it on via the related [configuration option](configuration.md#menu).
```
![SpreadSheet Menu](overview_menu.png)
```
You can [modify the structure of the menu](customization.md#menu) by using custom controls, updating the controls' configuration and removing unnecessary controls.


What's Next
-----------

Now you can get down to using dhtmlxSpreadSheet in your application. Follow the directions of the how_to_start.md tutorial for guidance.

To dive deeper into the specificity of dhtmlxSpreadSheet, go into more profound manuals:

- api/refs/spreadsheet.md
- guides.md


@todo: update images

@index:
how_to_start.md