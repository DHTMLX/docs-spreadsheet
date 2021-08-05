Work with Sheets
=========================

Starting from v4.1, the library allows working with [multiple sheets](api/spreadsheet_multisheets_config.md) in the spreadsheet.

In this article we'll discuss the details on how to implement such operations as adding a new sheet into the spreadsheet, removing the unnecessary sheet, getting all sheets, or getting the currently active sheet via using API methods. Besides, we'll explain how to load multiple sheets into the spreadsheet at once.

{{note To learn how to interact with multiple sheets via the user interface, check our [User Guide](work_with_sheets.md). }}


Loading multiple sheets
------------------------

To load several sheets into the spreadsheet, you should prepare data with the desired number of sheets and their configuration and pass them to the [parse](api/spreadsheet_parse.md) method as a parameter. The data should be an *object* with the following attributes:

- **styles** - (*object*) an object with CSS classes applied to particular cells
- **sheets** - (*array*) an array of sheet objects. Each object has the following properties:
    - **name** - (*string*) the sheet name
    - **id** - (*string*) the sheet id
    - **data** - (*array*) an array with data of the sheet

~~~js
var styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    sheets : [
        // create sheets with custom configurations (names and ids)
        { 
            name: "sheet 1", 
            id: "sheet_1", 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        },
        // create a sheet with the default configuration
        { 
            data: [
                { cell: "a1", value: "Country" },
                { cell: "b1", value: "Product" },
            ]
        } 
    ]
};

spreadsheet.parse(styledData);
~~~

{{editor    https://snippet.dhtmlx.com/6s3ng2hi	Spreadsheet. Multiple Sheets}}

{{note In case the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.}}

Adding a new sheet
---------------------

To add a new sheet into the spreadsheet, use the [addSheet()](api/spreadsheet_addsheet.md) method and pass the name of the new sheet as a parameter:

~~~js
spreadsheet.addSheet("New Sheet");
// -> "u1614669331209"
~~~

The method returns the id of the created sheet.

Removing a sheet
--------------------

You can remove a sheet from the spreadsheet by its id via the [removeSheet()](api/spreadsheet_removesheet.md) method:

~~~js
spreadsheet.removeSheet("u1614669331209");
~~~

Note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.

Getting active sheet
----------------------

It is possible to get the sheet that is currently active by applying the [getActiveSheet()](api/spreadsheet_getactivesheet.md) method:

~~~js
spreadsheet.getActiveSheet();
// ->  {name: "sheet", id: "u1614675531904"}
~~~

The method returns an object with the name and id attributes of the currently active sheet.

Getting sheets
---------------

The [getSheets()](api/spreadsheet_getsheets.md) method allows you to get all sheets of the spreadsheet. The method returns an array with a set of sheet objects:

~~~js
spreadsheet.getSheets();
// ->  [{name: "sheet1", id: "u1614669331194"}, …]
~~~