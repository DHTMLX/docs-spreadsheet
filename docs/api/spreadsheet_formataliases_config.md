formatAliases
================

@short: defines the list of number formats  
	
@type: array
@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    formats:[
    	alias: formatAliases | string;
		mask: string;
		name?: string;
		example?: string;
    }
);



@template:	api_config
@descr:
The default number formats are the following:

- *common* ("")
- *currency* ("$#,##0.00")
- *number* ("#,##0.00")
- *percent* (#,##0.00%)


@related:


@todo: move to "formats" page