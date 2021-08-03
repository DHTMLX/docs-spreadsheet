fire
========

@short: triggers an inner event
	
@params:
- name		string		the event's name, case-insensitive
- params	array		an array of the event-related data

@returns:
- result	boolean     <i>false</i>, if some of the event handlers return <i>false</i>. Otherwise, <i>true</i>

@example:
spreadsheet.events.on("CustomEvent", function(param1, param2){
 	return true;
});

var res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);


@template:	api_method
@relatedapi:
	api/events/detach.md
	api/events/on.md
@descr:
Normally, events are called automatically and you don't need to use this method.

@related:
handling_events.md