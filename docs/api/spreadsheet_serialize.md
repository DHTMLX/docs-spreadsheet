serialize
=============

@short:
	serializes data of spreadsheet into a JSON object

@params:

@returns:
- data		object		a serialized JSON object with cells data and styles

@example:
var data = spreadsheet.serialize();

@template:	api_method
@descr:
Serialized data presents an object with data and styles. 

- the **data** array includes objects with cells ids and values
- the **styles** object contains the applied CSS classes 

~~~js
{
	"data": [
    	{ "cell": "a1", "value": 1203 },
		{ "cell": "b1", "value": 3020 },
		{ "cell": "c2", "value": 1020 },
		{ "cell": "d2", "value": 234 }
    ],
	"styles": {
		"someclass": {
			"background": "#F2F2F2",
			"color": "#F57C00"
		}		
	}
}
~~~

@related:
loading_data.md#savingandrestoringstate

@relatedapi:
api/spreadsheet_parse.md
