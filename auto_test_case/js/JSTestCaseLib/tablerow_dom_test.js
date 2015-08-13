function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testCellsOfTableRow () {
	var tableRow = document.getElementById('tableRow1');

	var content = "The number of cells of first row is: " + tableRow.cells.length + ".";

	showForElem( 'showbox_tableRow1', content );
}

function testAlignOfTableRow () {
	var tableRow = document.getElementById('tableRow2');

	tableRow.align = "right";

	var content = "You have align first row to right.";

	showForElem( 'showbox_tableRow2', content );
}

function testIdOfTableRow () {
	var tableRow = document.getElementById('tableRow3');

	var content = "The id of the first row of table is: " + tableRow.id + ".";

	showForElem( 'showbox_tableRow3', content );
}

function testInnerHTMLOfTableRow () {
	var tableRow = document.getElementById('tableRow4');

	var content = "The innerHTML of the first row of table is: " + tableRow.innerHTML + ".";

	showForElem( 'showbox_tableRow4', content );
}

function testRowIndexOfTableRow () {
	var tableRow = document.getElementById('tableRow5');

	var content = "The rowIndex of the first row of table is: " + tableRow.rowIndex + ".";

	showForElem( 'showbox_tableRow5', content );
}

function testSectionRowIndexOfTableRow () {
	var tableRow = document.getElementById('tableRow6');

	var content = "The sectionRowIndex of the second row of table is: " + tableRow.sectionRowIndex + ".";

	showForElem( 'showbox_tableRow6', content );
}

function testVAlignOfTableRow () {
	var tableRow = document.getElementById('tableRow7');

	tableRow.vAlign = "bottom";

	var content = "You have vAlign first row to bottom.";

	showForElem( 'showbox_tableRow7', content );
}

function testDeleteCellFuncOfTableRow () {
	var tableRow = document.getElementById('tableRow8');

	tableRow.deleteCell(0);

	var content = "You have deleted the first cell of first row.";

	showForElem( 'showbox_tableRow8', content );
}

function testInsertCellFuncOfTableRow () {
	var tableRow = document.getElementById('tableRow9');

	tableRow.insertCell(0);

	var content = "You have insert a first cell to first row.";

	showForElem( 'showbox_tableRow9', content );
}