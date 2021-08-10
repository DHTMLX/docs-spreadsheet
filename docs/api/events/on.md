on
==========

@short:attaches a handler to an inner event of SpreadSheet
	

@params: 
- name			string			the event's name, case-insensitive
- handler		function		the handler function 
* context		any				the value will be accessible as "this" inside of the event handler

@example: 
spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});


@template:	api_method
@relatedapi:
	api/eventsbus_detach_method.md
	api/eventsbus_fire_method.md
@relatedsample:
05_events/01_events.html
	
@related:
handling_events.md
    
@descr:
[See the list of SpreadSheet events](api/refs/spreadsheet_events.md).

You can attach several handlers to the same event and all of them will be executed.
If some of handlers return *false*, the related operations will be blocked.
Event handlers are processed in the same order that they are attached.