How to Install dhtmlxSpreadSheet
====================

To install SpreadSheet package into your project you need to download the component package and include source files on a page by setting paths to them.  

The source files are represented in two versions: the **full** version and the **minified** one.


Download the package
---------------

###GPL version

[Download the package of dhtmlxSpreadSheet GPL version](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml). 


###PRO version

If you have the Commercial or Enterprise license, you need to go to the [Client Area](https://dhtmlx.com/clients/) and download the PRO package from there.

Independent of the version, unpack the downloaded package into a folder of your project. 
Then include **spreadsheet.js** and **spreadsheet.css** files into a page. Make sure that you set correct relative paths to these files:

~~~html
// full version
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">

// minified version
<script type="text/javascript" src="codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.min.css">
~~~


@todo:
restore info about installing component via npm when it will be available:<br>
- for the PRO version execute the line below:<br>

~~~bash<br>
npm install @dhx/spreadsheet-pro<br>
~~~
