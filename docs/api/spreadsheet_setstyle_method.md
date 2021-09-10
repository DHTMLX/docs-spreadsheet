---
sidebar_label: setStyle()
title: JavaScript Spreadsheet - setStyle Method
description: changetext
---

# setStyle()

@short: sets style to a cell(s)

@signature:

@params:
- `cells: string` - the id of a cell or a range of cells
- `style: object,array` - styles that should be applied to cells

@example:
// setting style for one cell
spreadsheet.setStyle("A1",{background:"red", border:"solid 1px yellow"});
// setting the same style for a range of cells
spreadsheet.setStyle("A1:D1",{color:"blue"});
// setting the same style for different cells
spreadsheet.setStyle("B6,A1:D1",{color:"blue"});
// setting styles from an array for cells in a range alternately
spreadsheet.setStyle("A1:D1",[{color:"blue"},{color:"red"}]);

@descr:

1\. The method allows setting the same style for the specified cells. In case you want to apply different cells to spreadsheet cells, you'd better use the api/spreadsheet_parse_method.md method.

{{sample 01_init/02_styled_data.html}}

2\. Starting with v4.1, the reference to a cell or range of cells can be specified in the following format:

~~~js
spreadsheet.setStyle("sheet1!A2", {background:"red", border:"solid 1px yellow"}); 
~~~

where *sheet1* is the name of the tab.

In case the name of the tab isn't specified, the method will apply the style to the cell(s) of the active tab.

@relatedapi:
api/spreadsheet_getstyle_method.md
api/spreadsheet_parse_method.md
