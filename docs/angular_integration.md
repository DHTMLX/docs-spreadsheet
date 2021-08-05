Integration with Angular
========================

You can use dhtmlxSpreadSheet in an application created with the [Angular](https://vuejs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/angular-widgets).

{{note Please note that the implementation provided below is not the only way to use dhtmlxSpreadSheet in a Angular-based application. It gives you initial schema of the integration and implies further 
extension of the app functionality depending on your goals.}}

Including source files
-----------------

To add SpreadSheet package into your Angular-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

Then include **spreadsheet.js** and **spreadsheet.css** files into a page. 

The source files are represented in two versions: the **full** version and the **minified** one. Make sure that you set correct relative paths to these files:

{{snippet	index.html}}
~~~html
// full version
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">

// minified version
<script type="text/javascript" src="codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.min.css">
~~~

Initialization
-----------------

There are two possible scenarios of initializing SpreadSheet inside an Angular application. One consists in isolating SpreadSheet structure and data inside of the Angular component and another one suggests 
separating view and data parts with the possibility of interaction between them.

###Scenario 1. Isolating SpreadSheet in an Angular component

In this variant SpreadSheet configuration and data are held inside of the Angular component with no bonds with the external part of the application. 

####SpreadSheet initialization

- Create a *SpreadSheet.ts* file, where you will define a Component. Each component must have a template assigned, for SpreadSheet it will be a plain DIV tag with a named reference.

{{snippet SpreadSheet.ts}}
~~~js
@Component({
 	template: `<div #widget class='widget-box-wide'></div>`
})
~~~

- Use the `new Spreadsheet` constructor to initialize SpreadSheet inside of the container that you've set above: 

{{snippet SpreadSheet.ts}}
~~~js
export class SpreadSheetComponent implements OnInit, OnDestroy {
  	@ViewChild('widget') container: ElementRef;
  	spreadsheet: Spreadsheet;

  	ngOnInit() {
    	this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      		editLine: false
    	});
    }   
}
~~~

####Loading data and changing config

- Next you can load data into the SpreadSheet and do some actions, e.g. change style of a cell:

{{snippet SpreadSheet.ts}}
~~~js
export class SpreadSheetComponent implements OnInit, OnDestroy {
	@ViewChild('widget') container: ElementRef;
  	spreadsheet: Spreadsheet;

  	ngOnInit() {
    	this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      		editLine: false
    	});
    	this.spreadsheet.parse([
      		{ cell: "A1", value: 10 },
      		{ cell: "B1", value: 20 }
    	]);
    	this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  	}
}
~~~


###Scenario 2. Exposing SpreadSheet data and config 

This variant adds flexibility in the control over SpreadSheet data and configuration by allowing access to them from other parts of the application.

####SpreadSheet  initialization

- The first step is the same. Create a file, let it be *SpreadSheet2.ts* this time, and add a container for the SpreadSheet:

{{snippet SpreadSheet2.ts}}
~~~js
@Component({
 	template: `<div #widget class='widget-box'></div>`
})
~~~

- Then initialize SpreadSheet with the `new SpreadSheet` constructor and define the configuration properties of SpreadSheet in the object passed as a second parameter of the constructor:

{{snippet SpreadSheet2.ts}}
~~~js
export class SpreadSheetComponent implements OnInit, OnDestroy {
  	@ViewChild('widget') container: ElementRef;
  	spreadsheet: Spreadsheet;

  	ngOnInit() {
      	this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      		toolbar: this.toolbar,
      		menu: this.menu,
      		editLine: this.editLine,
      		rowsCount: this.rowsCount,
      		colsCount: this.colsCount,
    	});
    }   
}
~~~

####Working with configuration options

- Set the list of used SpreadSheet configuration properties and their types before the initialization function:

{{snippet SpreadSheet2.ts}}
~~~js
export class SpreadsheetComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  spreadsheet: Spreadsheet;

  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;


  ngOnInit() {
    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
    });
  }
}
~~~

The properties of SpreadSheet are exposed and available to work with outside the component. In the example below the "grid" mode of rendering a list of files is enabled:

{{snippet BasicSample.ts}}
~~~js
@Component({
	template: `
    <div class='app-box'>
	  app-spreadsheet [editLine]='false' class='wide-size'></app-spreadsheet>
    </div>`
}}
~~~

####Working with SpreadSheet API

This variant of using SpreadSheet in a Angular application allows working with its API moving all calls of methods and event handlers into a separate file. 

- Create a *DataSample.vue* file and add a link to the spreadsheet: 

{{snippet DataSample.ts}}
~~~js
@Component({
  template: `
<div class='app-box'>
  <app-spreadsheet #spreadsheet class='wide-size'></app-spreadsheet>
</div>`
})
~~~

- Define some actions that will be implemented on initialization of the SpreadSheet. For example, attach the *afterValueChange* event that will fire after changing the value of a cell, and add the *setValue()* method
that will set certain values in particular cells:

{{snippet DataSample.ts}}
~~~js
export class SpreadsheetComponent implements AfterViewInit {
  event: string;
  @ViewChild('spreadsheet') spreadsheet;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngAfterViewInit() {
    this.spreadsheet.spreadsheet.events.on("afterValueChange", (cell, value) => {
      this.event = `Value in cell ${cell} changed to ${value}`;
      this.cd.detectChanges();
    });
    this.spreadsheet.spreadsheet.setValue("A1", 10);
  }
}
~~~

- Describe the methods you want to use while working with the spreadsheet: 

{{snippet DataSample.ts}}
~~~js
export class SpreadsheetComponent implements AfterViewInit {
  event: string;
  @ViewChild('spreadsheet') spreadsheet;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngAfterViewInit() {
    this.spreadsheet.spreadsheet.events.on("afterValueChange", (cell, value) => {
      this.event = `Value in cell ${cell} changed to ${value}`;
      this.cd.detectChanges();
    });
    this.spreadsheet.spreadsheet.setValue("A1", 10);
  }
  clearAll() {
    this.spreadsheet.spreadsheet.parse([]);
    this.event = "";
  }
  parseData() {
    this.spreadsheet.spreadsheet.parse([
      { cell: "A1", value: 1000 },
      { cell: "B1", value: 5300 },
      { cell: "C1", value: 2900 },
    ]);
  }
}
~~~

- Bind related buttons to the SpreadSheet methods by subscribing them to the *click* event to make changes in the data:

{{snippet DataSample.ts}}
~~~js
<input type="button" (click)="parseData()" value="Parse data">
<input type="button" (click)="clearAll()" value="Clear all">
~~~


