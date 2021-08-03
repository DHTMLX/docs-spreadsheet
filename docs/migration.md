Migration from 2.1 to 3.0
======================

This article will help you to migrate from the [previous version 2.1](https://docs.dhtmlx.com/spreadsheet__index.html) where dhtmlxSpreadSheet was PHP-based
to the totally renewed version 3.0 in which the component is totally built on JavaScript. Check the list below to explore all the changes.

2.1 -> 3.0
---------

{{note The [API of version 2.1](https://docs.dhtmlx.com/spreadsheet__reference.html) is still available, but it is incompatible with the [API of version 3.0](api/refs/spreadsheet.md).}}

### Changed API

- getStyle -> [spreadsheet.getStyle](api/spreadsheet_getstyle.md) - returns styles applied to a cell(s)	
- getValue -> [spreadsheet.getValue](api/spreadsheet_getvalue.md) - returns an object with the value(s) of a cell(s)
- setStyle -> [spreadsheet.setStyle](api/spreadsheet_setstyle.md) - sets style for a cell or a range of cells 
- setValue -> [spreadsheet.setValue](api/spreadsheet_setvalue.md) - sets value for a cell or a range of cells 
- lock -> [spreadsheet.lock](api/spreadsheet_lock.md) - locks a cell or a range of cells
- unlock -> [spreadsheet.unlock](api/spreadsheet_unlock.md) - unlocks a locked cell or a range of cells


### Removed API

####SpreadSheet class

- getCell 
- getCells 
- isCell 
- setSheetId 


####SpreadSheetCell

<table>
<tr>
	<td>calculate</td>
    <td>getCoords</td>
    <td>setBgColor</td>	
</tr>
<tr>
	<td>exists</td>
    <td>getValidator</td>
    <td>setBold</td>
</tr>
<tr>
	<td>getAlign</td>
    <td>isBold</td>
    <td>setColor</td>   
</tr>
<tr>
	<td>getBgColor</td>
    <td>isIncorrect</td>
    <td>setItalic</td>   
</tr>
<tr>
	<td>getCalculatedValue</td>
    <td>isItalic</td>
    <td>setLocked</td>   
</tr>
<tr>
	<td>getColIndex</td>
    <td>parseStyle</td>
    <td>setValidator</td>    
</tr>
<tr>
	<td>getColName</td>
    <td>serializeStyle</td>   
</tr>
<tr>
	<td>getColor</td>
    <td>setAlign</td>    
</tr>
</table>


