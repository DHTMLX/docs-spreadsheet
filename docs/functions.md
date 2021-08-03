Work with Functions
==================

Starting from v4.0, the package of dhtmlxSpreadSheet includes a set of predefined formulas that can be used for different types of calculations of strings and numbers. The formulas are compatible with Excel and Google Sheets.

{{sample 01_init/06_formulas.html}}

Functions
------------

Here's a list of all the available functions with detailed descriptions.

### Math functions

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>ABS</b></td>
			<td>Returns the absolute value of a number. The absolute value of a number is always positive.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>AVERAGE</b></td>
			<td>Calculates the average (arithmetic mean) of a group of numbers. <br>The function ignores logical values, empty cells and cells that contain text. <br>However, cells with the value zero are included.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>COUNT</b></td>
			<td>Counts the number of cells that contain numbers, and counts numbers within the list of arguments.<br> Empty cells, logical values, text, or error values in the array or reference are not counted.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>COUNTA</b></td>
			<td>Counts the number of cells that contain numbers, text, logical values, error values, and empty text (""); cells with zero values are excluded. <br>The function does not count empty cells.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>COUNTBLANK</b></td>
			<td>Returns the number of empty cells from a specified range. <br>Cells with zero values are not counted.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>EVEN</b></td>
			<td>Returns a number rounded up to the nearest even integer.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>INT</b></td>
			<td>Returns a number rounded down to the nearest integer.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>MAX</b></td>
			<td>Returns the largest value in a set of values. <br>The function ignores empty cells, the logical values TRUE and FALSE, and text values. If the arguments contain no numbers, MAX returns 0 (zero).</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>MIN</b></td>
			<td>Returns the smallest number in a set of values. <br>Empty cells, logical values, or text in the array or reference are ignored. If the arguments contain no numbers, MIN returns 0 (zero).</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>ODD</b></td>
			<td>Returns a number rounded up to the nearest odd integer.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>PI</b></td>
			<td>Returns the number 3.14159265358979 (the mathematical constant pi, accurate to 15 digits).</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>POWER</b></td>
			<td>Returns the result of a number raised to a given power. <br>Works with real numbers.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>PRODUCT</b></td>
			<td>Multiplies all the numbers given as arguments and returns the product.<br>
Only numbers in the array or reference are multiplied. Empty cells, logical values, and text in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>QUOTIENT</b></td>
			<td>Returns the result of integer division without the remainder. <br>Works with real numbers.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>RAND</b></td>
			<td>Returns a random number that is greater than or equal to 0 and less than 1. <br>Returns a new random number each time your spreadsheet recalculates. </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>ROUND</b></td>
			<td>Returns a number rounded to a specified number of digits.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>ROUNDDOWN</b></td>
			<td>Returns a number rounded down to a specified number of digits.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>ROUNDUP</b></td>
			<td>Returns a number rounded up to a specified number of digits.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>SQRT</b></td>
			<td>Returns a positive square root of a number.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>STDEVP</b></td>
			<td>Calculates standard deviation based on the entire population of numbers. <br>The standard deviation is a measure of how widely values are dispersed from the average value (the mean).<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>SUM</b></td>
			<td>Returns the sum of supplied values. <br>Empty cells, logical values like TRUE, or text are ignored.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>SUMPRODUCT</b></td>
			<td>Multiplies range of cells or arrays and returns the sum of products. <br>For valid products only numbers are multiplied. <br>Empty cells, logical values, and text are ignored. <br>Treats array entries that are not numeric as if they were zeros.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>SUMSQ</b></td>
			<td>Returns the sum of the squares of the arguments. <br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>TRUNC</b></td>
			<td>Truncates a number to an integer by removing the fractional part of the number.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>VARP</b></td>
			<td>Returns the variance of a population based on an entire population of numbers.<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
    </tbody>
</table>
<br>


### String functions

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>CONCATENATE(A1,"",B2:C3)</b></td>
			<td>Joins two or more text strings into one string.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>LEFT(text, count)</b></td>
			<td>Returns the first character or characters in a text string,<br> based on the number of characters you specify.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>LEN(text)</b></td>
			<td>Returns the length of the specified string.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>LOWER(text)</b></td>
			<td>Converts all letters in the specified string to lowercase.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>MID(text, start, count)</b></td>
			<td>Returns a specific number of characters from a text string,<br> starting at the position you specify, based on the number <br>of characters you specify.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>PROPER(text)</b></td>
			<td>Sets the first character in each word to uppercase <br>and converts all other characters to lowercase.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>RIGHT(text, count)</b></td>
			<td>Returns the last character or characters (rightmost) in a text string, <br>based on the number of characters you specify.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>TRIM(text)</b></td>
			<td>Removes all spaces from text except for single spaces between words.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>UPPER(text)</b></td>
			<td>Converts text to uppercase.</td>
		</tr>
    </tbody>
</table>
<br>

Getting cell formula
---------------------------

Starting with v4.1, you can get the formula applied to a cell via the [getFormula()](api/spreadsheet_getformula.md) method. The method takes the id of the cell as a parameter:

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~

