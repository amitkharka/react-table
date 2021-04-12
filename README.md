<h1>Pure CSS Scrollable Table with Fixed Header</h1>
<h2>Using CSS to allow scrolling within a single HTML table</h2>

<div><br></div>

<h2>The Big 4 Version</h2>
<h3>Basic CSS Browser Filtering</h3>

<div id="tableContainer" class="tableContainer">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="scrollTable">
<thead class="fixedHeader">
	<tr>
		<th width="20%">Header 1</th>
		<th width="30%">Header 2</th>
		<th width="50%">Header 3</th>
	</tr>
</thead>
<tbody class="scrollContent">
	<tr>
		<td width="20%">Cell Content 1</td>
		<td width="30%">Cell Content 2</td>
		<td width="48%">Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
	<tr>
		<td>More Cell Content 1</td>
		<td>More Cell Content 2</td>
		<td>More Cell Content 3</td>
	</tr>
	<tr>
		<td>Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1 Even More Cell Content 1</td>
		<td>Even More Cell Cont asdkfh asoid hfoas ghdfoasgdojf gasdkjfgasd jfgaskjdfg kjasdgf kjasd gjkasgdfkj agskjdfgaskdjfgent 2</td>
		<td>Even More Cell Content 3</td>
	</tr>
</tbody>
</table>
</div>

<div><br></div>




<div>
<br><br><br><br><br><br><br><br><br><br><br><br>
put a bunch of breaks to test scrolling within the HTML document itself.
<br><br><br><br><br><br><br><br><br><br><br><br>
put a bunch of breaks to test scrolling within the HTML document itself.
<br><br><br><br><br><br><br><br><br><br><br><br>
put a bunch of breaks to test scrolling within the HTML document itself.
<br><br><br><br><br><br><br><br><br><br><br><br>
done.
</div>






----------------------------------------------



body {
	background: #FFF;
	color: #000;
	font: normal normal 12px Verdana, Geneva, Arial, Helvetica, sans-serif;
	margin: 10px;
	padding: 0
}

table, td, a {
	color: #000;
	font: normal normal 12px Verdana, Geneva, Arial, Helvetica, sans-serif
}

h1 {
	font: normal normal 18px Verdana, Geneva, Arial, Helvetica, sans-serif;
	margin: 0 0 5px 0
}

h2 {
	font: normal normal 16px Verdana, Geneva, Arial, Helvetica, sans-serif;
	margin: 0 0 5px 0
}

h3 {
	font: normal normal 13px Verdana, Geneva, Arial, Helvetica, sans-serif;
	color: #008000;
	margin: 0 0 15px 0
}
/* end basic styling                                 */

/* define height and width of scrollable area. Add 16px to width for scrollbar          */
div.tableContainer {
	clear: both;
	border: 1px solid #963;
	height: 285px;
	overflow: auto;
	width: 900px
}

/* Reset overflow value to hidden for all non-IE browsers. */
html>body div.tableContainer {
	overflow: hidden;
	width: 900px
}

/* define width of table. IE browsers only                 */
div.tableContainer table {
	float: left;
	/* width: 740px */
}

/* define width of table. Add 16px to width for scrollbar.           */
/* All other non-IE browsers.                                        */
html>body div.tableContainer table {
	/* width: 756px */
}

/* set table header to a fixed position. WinIE 6.x only                                       */
/* In WinIE 6.x, any element with a position property set to relative and is a child of       */
/* an element that has an overflow property set, the relative value translates into fixed.    */
/* Ex: parent element DIV with a class of tableContainer has an overflow property set to auto */

thead.fixedHeader tr {
	position: relative;
}

/* set THEAD element to have block level attributes. All other non-IE browsers            */
/* this enables overflow to work on TBODY element. All other non-IE, non-Mozilla browsers */

/* make the TH elements pretty */
thead.fixedHeader th {
	background: #C96;
	border-left: 1px solid #EB8;
	border-right: 1px solid #B74;
	border-top: 1px solid #EB8;
	font-weight: normal;
	padding: 4px 3px;
	text-align: left
}

html>body tbody.scrollContent {
	display: block;
	height: 262px;
	overflow: auto;
	width: 100%
}

html>body thead.fixedHeader {
	display: table;
	overflow: auto;
	width: 100%
}

/* make TD elements pretty. Provide alternating classes for striping the table */
/* http://www.alistapart.com/articles/zebratables/                             */
tbody.scrollContent td, tbody.scrollContent tr.normalRow td {
	background: #FFF;
	border-bottom: none;
	border-left: none;
	border-right: 1px solid #CCC;
	border-top: 1px solid #DDD;
	padding: 2px 3px 3px 4px
}



tbody.scrollContent tr.alternateRow td {
	background: #EEE;
	border-bottom: none;
	border-left: none;
	border-right: 1px solid #CCC;
	border-top: 1px solid #DDD;
	padding: 2px 3px 3px 4px
}
