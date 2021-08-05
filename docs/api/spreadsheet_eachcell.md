eachCell
==============

@short:
	iterates cells in the spreadsheet
    
@params:
- callback		function	a callback function				
- range			string		a range of cells to iterate 

@example:
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

function checkValue(check) {
	spreadsheet.eachCell(function (cell, value) {
		if (!check(value)) {
			spreadsheet.setStyle(cell, { background: "#e57373" });
		} else {
			spreadsheet.setStyle(cell, { background: "" });
		}
	}, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
	switch (id) {
		case "isNumber":
			checkValue(function (value) { return !isNaN(value) });
			break;
		case "isEven":
			checkValue(function (value) { return value % 2 === 0 });
			break;
	}
});


@template: api_method
@descr:
 

@relatedsample:
04_customization/02_menu.html

@related:
customization.md#menu