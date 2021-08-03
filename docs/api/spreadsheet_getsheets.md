getSheets
==============

@short:
	gets all sheets of the spreadsheet
    
			
@returns:
- param     array       an array of sheets objects

@example:
spreadsheet.getSheets();
// ->  [{name: "sheet1", id: "u1614669331194"}, …]


@template: api_method
@descr:
Each sheet object includes the **name** and **id** attributes of the sheet.


@changelog: added in v4.1