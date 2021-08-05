getFormat
================

@short: returns the number format applied to the value of a cell

@params:
- cell		string		the id of a cell


@returns:
- format		string		the format applied to the value of a cell

@example:
var format = spreadsheet.getFormat("A1"); 
// ->"currency"


@template: api_method
@descr:
Starting with v4.1, the reference to a cell can be specified in the following format:

~~~js
var cellFormat = spreadsheet.getFormat("sheet1!A2"); //-> "number"
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will return the format applied to the value of a cell from the tab that is currently active.

@relatedapi:
api/spreadsheet_setformat.md
api/spreadsheet_formats_config.md
api/spreadsheet_beforeformatchange_event.md
api/spreadsheet_afterformatchange_event.md

@related:
number_formatting.md

@relatedsample:
01_init/01_basic.html
