---
sidebar_label: Integration with React
title: JavaScript Spreadsheet - Integration with React
description: changetext
---

# Integration with React

You can use dhtmlxSpreadSheet in an application created with the [React](https://reactjs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/react-widgets).

{{note Please note that the implementation provided below is not the only way to use dhtmlxSpreadSheet in a React-based application. It gives you initial schema of the integration and implies further extension of the app functionality depending on your goals.}}

## Including source files

To add SpreadSheet package into your React-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

Then include **spreadsheet.js** and **spreadsheet.css** files into a page.

The source files are represented in two versions: the **full** version and the **minified** one. Make sure that you set correct relative paths to these files:

~~~html title="index.html"
// full version
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">

// minified version
<script type="text/javascript" src="codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.min.css">
~~~

## Initialization

There are two possible scenarios of initializing SpreadSheet inside a React application. One consists in isolating SpreadSheet structure and data inside of the React component and another one suggests separating view and data parts with the possibility of interaction between them.

### Scenario 1. Isolating SpreadSheet in a React component

In this variant SpreadSheet configuration and data are held inside of the React component with no bonds with the external part of the application.

#### SpreadSheet initialization

- Create a *SpreadSheet.js* file, then create the *SpreadSheet* class and add a container for SpreadSheet using the **render()** function. Store the reference to the container in the **el** property:

~~~js title="SpreadSheet.js"
class SpreadSheetComponent extends Component {
  render() {
	return (
      <div ref={el => this.el = el} className="widget-box" style={{width:800,height:400}}></div>
    );
  }
}
~~~

- After that use the `new SpreadsheetBase` constructor to initialize SpreadSheet in the container created above: 

~~~js title="SpreadSheet.js"
class SpreadsheetComponent extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      editLine: false
    });
  }
}
~~~

#### Loading data and changing config

- Next you can load data into the SpreadSheet and do some actions, e.g. change style of a cell:

~~~js title="SpreadSheet.js"
class SpreadSheetComponent extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      editLine: false
    });
    this.spreadsheet.parse([
      { cell: "A1", value: 10 },
      { cell: "B1", value: 20 }
    ]);

    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  }
  render() {
    return (
      <div ref={el => this.el = el} className="widget-box" style={{width:800,height:400}}></div>
    );
  }
}
~~~

### Scenario 2. Exposing SpreadSheet data and config

This variant adds flexibility in the control over SpreadSheet data and configuration by allowing access to them from other parts of the application.

#### SpreadSheet initialization

- The first step is the same. Create a file, let it be *SpreadSheet2.js* this time, and add the *SpreadSheet* class and use the `new SpreadSheetBase` constructor to initialize SpreadSheet.

~~~js title="SpreadSheet2.js"
class SpreadSheetComponent extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      // config here
    });
  }
}
~~~

- Define the configuration properties of SpreadSheet in the object passed as a second parameter of the constructor:

~~~js
class SpreadSheetComponent extends Component {
  componentDidMount() {
    this.spreadsheet = new SpreadsheetBase(this.el, {
      menu: this.props.menu,
      editLine: this.props.editLine,
      toolbar: this.props.toolbar,
      rowsCount: this.props.rowsCount,
      colsCount: this.props.colsCount
    });
  }
}
~~~

Thus the **props** configuration option will be applied to the SpreadSheet widget configuration.

- Then create a container for SpreadSheet using the **render()** function:

~~~js title="SpreadSheet2.js"
render() {
	return (
      <div ref={el => this.el = el} className="widget-box" style={{width:800,height:400}}></div>
    );
}
~~~

#### Working with configuration options

Since the properties of SpreadSheet are exposed they are available to work with outside the component. In the example below editing line is disabled in the spreadsheet:

~~~js title="BasicSample.js"
<div className='app-box'>
	<Spreadsheet editLine={false} ></Spreadsheet>
</div>
~~~

#### Working with SpreadSheet API

This variant of using SpreadSheet in a React application allows working with its API moving all calls of methods and event handlers into a separate file.

- Create a *DataSample.js* file and add a link to the spreadsheet:

~~~js title="DataSample.js"
class SpreadsheetComponent extends Component {
  constructor(props) {
    super(props);
    this.spreadsheet = React.createRef();
  }
  render() {
    return (
      <div className='app-box'>
        <Spreadsheet ref={this.spreadsheet}></Spreadsheet>
      </div>
    );
  }
}
~~~

- Define some actions that will be implemented on initialization of the SpreadSheet. For example, attach the *afterValueChange* event that will fire after changing the value of a cell, and add the *setValue()* method
that will set certain values in particular cells:

~~~js title="DataSample.js"
class SpreadsheetComponent extends Component {
  constructor(props) {
    super(props);
    this.spreadsheet = React.createRef();
    this.state = {
      event: ""
    };
  }
  componentDidMount() {
    this.spreadsheet.current.spreadsheet.events.on("afterValueChange", (cell, value) => {
      this.setState({ event: `Value in cell ${cell} changed to ${value}` });
    });
    this.spreadsheet.current.spreadsheet.setValue("A1", 10);
  }
  render() {
    return (
      <div className='app-box'>
        <Spreadsheet ref={this.spreadsheet}></Spreadsheet>
      </div>
    );
  }
}
~~~

- Describe the methods you want to use while working with the spreadsheet:

~~~js title="DataSample.js"
class SpreadsheetComponent extends Component {
  ...
  render() {
    return (
      <div className='app-box'>
        <Spreadsheet ref={this.spreadsheet}></Spreadsheet>        
      </div>
    );
  }
  clearAll = () => {
    this.spreadsheet.current.spreadsheet.parse([]);
    this.setState({ event: "" });
  }
  parseData = () => {
    this.spreadsheet.current.spreadsheet.parse([
      { cell: "A1", value: 1000 },
      { cell: "B1", value: 5300 },
      { cell: "C1", value: 2900 },
    ]);
  }
}
~~~

- Bind related buttons to the SpreadSheet methods by subscribing them to the *onClick* event to make changes in the data:

~~~js title="DataSample.js"
class SpreadsheetComponent extends Component {
  ...
  render() {
    return (
      <div className='app-box'>
        <Spreadsheet ref={this.spreadsheet}></Spreadsheet>
        <button onClick={this.parseData}>Parse data</button>
        <button onClick={this.clearAll}>Clear all</button>
      </div>
    );
  }
  ...
}
~~~
