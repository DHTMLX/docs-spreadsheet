Customization
==================

You can customize the appearance, structure and functionality of toolbar, menu and context menu and define custom read-only behavior for SpreadSheet.

Default and custom icons
----------

dhtmlxSpreadSheet uses the [Material Design](https://materialdesignicons.com/)-based icons by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on 
a page and apply icons in any possible part of the spreadsheet: in Toolbar controls, Menu and Context menu items.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of dhtmlxSpreadSheet as follows:

~~~html
<script type="text/javascript" src="../../codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="../../codebase/spreadsheet.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Then you can use the name of the icon as the value of the **icon** property in the object with the control parameters for toolbar, menu or context menu. See details below.

Controls types and operations
-------------------------

###Types

There are the following types of controls you can add: *button*, *menuItem*, *separator* and *spacer*.

The **button** object has the following properties:

- **type** - the type of a button, set it to "button"
- **id** - the id of a button
- **icon** - the name of an icon from the used icon font
- **hotkey** - the name of the hot key for a button
- **value** - the value of a button
- **tooltip** - the tooltip of a button
- **twoState** -  the flag that defines whether a button can be used in two states
- **active** - the state of a button: *true* - active, *false* - inactive

The **menuItem** object	has the properties below:

- **type** - the type of a menu item, set it to "menuItem"
- **id** - the id of a menu item
- **icon** - the name of an icon from the used icon font
- **hotkey** - the name of the hot key for a menu item
- **value** - the value of a menu item
- **childs** - an array of children controls (note that all the children should have the type **menuItem**)

The data collection API of the **toolbar**, **menu** and **context menu** allows you to manipulate the controls, namely to add custom controls, remove the controls you don't need, or update the controls,
e.g. change their icons.

###Adding controls

To add a new control, apply the **spreadsheet.{name}.data.add()** method. It takes the parameters below:

- **config** - (*object*) an object with the control config
- **index** - (*number*) the index of the position to place the control into
- **parent** - (*string*) the id of a parent control (for the *menuItem* type)

For a button:

~~~js
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
	type: "button", // "menuItem"
    id: "button-id",
    tooltip: "Some tooltip",
    icon: "icon-name"
}, 2);
~~~

For a menuItem:

~~~js
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "menuitem-id", 
    value: "Some value",
}, -1, "parent-id");
~~~

###Updating controls

You can change the icon of the control and its other config options via the **spreadsheet.{name}.data.update()** method. It takes two parameters:

- the id of the control
- an object with new configuration of the control

~~~js
// spreadsheet.menu.data.update / spreadsheet.contextMenu.data.update
spreadsheet.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

###Deleting controls

To remove a control, make use of the **spreadsheet.{name}.data.remove()** method. Pass the id of the control that should be removed to the method:

~~~js
// spreadsheet.menu.data.remove / spreadsheet.contextMenu.data.remove
spreadsheet.toolbar.data.remove("control-id");
~~~

Toolbar 
---------

###Default controls

The [default toolbar](overview.md#toolbar) contains the following blocks of controls:

- the **Undo** block
	- the *Undo* button (id:"undo")
    - the *Redo* button (id:"redo")
- the **Colors** block
	- the *Text color* button (id:"color") 
    - the *Background color* button (id:"background")
- the **Decoration** block 
	- the *Bold* button (id:"font-weight-bold")
    - the *Italic* button (id:"font-style-italic")
    - the *Underline* button (id:"text-decoration-underline")
- the **Align** block
	- the *Align left* button (id: "align-left")
    - the *Align center* button (id: "align-center")
    - the *Align right* button (id: "align-right")
- the **Number format** block
	- the *Number format* menuItem (id:"format")
- the **Help** block
	- the *Help* button (id:"help")
    
It is also possible to add the blocks enumerated below:

- the **Lock** block
	- the *Lock* button (id:"lock")
- the **Clear** block 
	- the *Clear group* menuItem (id:"clear-group")
    	- the *Clear value* menuItem (id:"clear-value")
        - the *Clear styles* menuItem (id:"clear-styles") 
        - the *Clear all* menuItem (id:"clear-all")
- the **Rows** block
	- the *Add row* button (id:"add-row")
    - the *Remove row* button (id:"remove-row")
- the **Columns** block
	- the *Add column* button (id:"add-col")
    - the *Remove column* button (id:"remove-col")	 
- the **File** block 
	- the *Export* menuItem (id:"export")
    	- the *"Microsoft Excel(.xlsx)"* menuItem (id:"export-xlsx")
    - the *Import* menuItem (id:"import")
    	- the *"Microsoft Excel(.xlsx)"* menuItem (id:"import-xlsx")
    
                
    
###Adding controls

In the example below a new button is added into the toolbar:

~~~js
spreadsheet.toolbar.data.add({
	type: "button",
	icon: "mdi mdi-delete",
	tooltip: "Remove all",
	id: "remove-all"
});
~~~

{{sample 04_customization/01_toolbar_buttons.html}}
```
![Custom Toolbar Button](custom_toolbar_button.png)
```

In the example below a new menuItem option is added into the "clear-group" control:

~~~js
spreadsheet.toolbar.data.add({
	type: "menuItem",
	id: "clear-value2", 
    value: "Clear value2"
}, -1, "clear-group");
~~~

There is a simplified notation for adding a menuItem, in case the exact position of the new item is not required:

~~~js
spreadsheet.toolbar.data.add({
	type: "menuItem",
	id: "clear-value2", 
    value: "Clear value2", 
    parent: "clear-group"   
});
~~~

###Updating controls


In the example below the default icons of the toolbar Undo/Redo buttons are changed to Font Awesome ones:

~~~js
spreadsheet.toolbar.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.toolbar.data.update("redo", { icon: "fa fa-redo" });
~~~
```
![Custom Toolbar Icons](custom_toolbar_icons.png)
```
{{sample 04_customization/04_toolbar_icons.html}}

###Deleting controls

In the example below the Undo button is removed from the toolbar:

~~~js
spreadsheet.toolbar.data.remove("undo");
~~~

Menu
-------------

###Default controls

The [default menu](overview.md#menu) has the following structure:

- the **File** menuItem (id:"edit")
	- the *Export* menuItem (id:"download")
    	- the *"Microsoft Excel(.xlsx)"* menuItem (id:"export-xlsx")
    - the *Import* menuItem (id:"import")
    	- the *"Microsoft Excel(.xlsx)"* menuItem (id:"import-xlsx")
- the **Edit** menuItem (id:"edit")
	- the *Undo* menuItem (id:"undo")
    - the *Redo* menuItem (id:"redo")
	- the separator
    - the *Lock* menuItem (id:"lock")
	- the separator
	- the *Clear* menuItem (id:"clear")
    	- the *Clear value* menuItem (id:"clear-value")
    	- the *Clear styles* menuItem (id:"clear-styles") 
    	- the *Clear all* menuItem (id:"clear-all")    
- the **Insert** menuItem (id:"insert")
	- the *Columns* menuItem (id:"columns")
		- the *Add column* menuItem (id:"add-col")
    	- the *Remove column* menuItem (id:"remove-col")
    - the *Rows* menuItem (id:"rows")
    	- the *Add rows* menuItem (id:"add-row")
    	- the *Remove rows* menuItem (id:"remove-row")
- the **Format** menuItem (id:"configuration")
	- the *Bold* menuItem (id:"font-weight-bold")
    - the *Italic* menuItem (id:"font-style-italic")
    - the *Underline* menuItem (id:"text-decoration-underline")
	- the *Align* menuItem (id:"align")
		- the *Align left* menuItem (id:"align-left")
    	- the *Align center* menuItem (id:"align-center")
    	- the *Align right* menuItem (id:"align-right")
    - the *Number format* menuItem (id:"format")
- the **Help** menuItem (id:"help")

###Adding controls

In the example below a new menuItem is added into the menu:
 
~~~js
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

```
![Custom Menu Item](custom_menuitem.png)
```
{{sample 04_customization/02_menu.html}}

###Updating controls

In the example below the default icons of the Undo/Redo menuItems are changed to Font Awesome ones:

~~~js
spreadsheet.menu.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.menu.data.update("redo", { icon: "fa fa-redo" });
~~~
```
![Custom Menu Icons](custom_menu_icons.png)
```

###Deleting controls

In the example below the Undo menuItem is removed from the menu:

~~~js
spreadsheet.menu.data.remove("undo");
~~~

Context menu
---------------

###Default controls

The [default context menu](overview.md#context) has the following structure:

- the **Lock** menuItem (id:"lock")
- the **Clear** menuItem (id:"clear")
    - the *Clear value* menuItem (id:"clear-value")
    - the *Clear styles* menuItem (id:"clear-styles") 
    - the *Clear all* menuItem (id:"clear-all")    
- the **Columns** menuItem (id:"columns")
	- the *Add column* menuItem (id:"add-col")
    - the *Remove column* menuItem (id:"remove-col")
- the **Rows** menuItem (id:"rows")
    - the *Add rows* menuItem (id:"add-row")
    - the *Remove rows* menuItem (id:"remove-row")

###Adding controls

In the example below a new menuItem is added into the context menu:

~~~js
spreadsheet.contextMenu.data.add({
	icon: "mdi mdi-eyedropper-variant",
	value: "Paint format",
	id: "paint-format"
});
~~~
```
![Custom Context Menu Item](custom_context_menuitem.png)
```
{{sample 04_customization/03_context_menu.html}}

###Updating controls

In the example below the default icons of the Lock menuItem is changed to the Font Awesome one:

~~~js
spreadsheet.contextMenu.data.update("lock", { icon: "fa fa-key" });
~~~
```
![Custom Context Menu Icon](custom_context_icon.png)
```

###Deleting controls

In the example below the Undo menuItem is removed from the context menu:

~~~js
spreadsheet.contextMenu.data.remove("undo");
~~~

Custom read-only mode
--------------

Besides applying the [read-only mode](configuration.md#readonlymode) to the whole SpreadSheet, you can block certain operations via the events the name of which starts with **before**, e.g.:


- api/spreadsheet_beforeeditstart_event.md
- api/spreadsheet_beforestylechange_event.md
- api/spreadsheet_beforevaluechange_event.md

~~~js
var spreadsheet = new dhx.Spreadsheet("cont");

spreadsheet.events.on("beforeEditStart", function(){
	return false;
});

spreadsheet.events.on("beforeValueChange", function(){
	return false;
});

spreadsheet.events.on("beforeStyleChange", function(){
	return false;
});

spreadsheet.parse(data);
~~~


{{sample 04_customization/05_custom_readonly.html}}

@todo: update images