function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAbbrOfTableCell () {
	var tableCell = document.getElementById('tableCell1');

	var content = "The abbr of cell1 is: " + tableCell.abbr + ".";

	showForElem( 'showbox_tableCell1', content );
}

function testAlignOfTableCell () {
	var tableCell = document.getElementById('tableCell2');

	tableCell.align = "right";

	var content = "You have align the content of cell";

	showForElem( 'showbox_tableCell2', content );
}

function testAxisOfTableCell () {
	var tableCell = document.getElementById('tableCell3');

	var content = "The axis of cell1 is: " + tableCell.axis + ".";

	showForElem( 'showbox_tableCell3', content );
}

function testCellIndexOfTableCell () {
	var tableCell = document.getElementById('tableCell4');

	var content = "The cellIndex of cell1 is: " + tableCell.cellIndex + ".";

	showForElem( 'showbox_tableCell4', content );
}

function testColSpanOfTableCell () {
	var tableCell = document.getElementById('tableCell5');

	tableCell.colSpan = "2";

	var content = "You have change the colSpan of cell1";

	showForElem( 'showbox_tableCell5', content );
}

function testIdOfTableCell () {
	var tableCell = document.getElementById('tableCell6');

	var content = "The id of cell1 is: " + tableCell.id + ".";

	showForElem( 'showbox_tableCell6', content );
}

function testInnerHTMLOfTableCell () {
	var tableCell = document.getElementById('tableCell7');

	var content = "The innerHTML of cell1 is: " + tableCell.innerHTML + ".";

	showForElem( 'showbox_tableCell7', content );
}

function testRowSpanOfTableCell () {
	var tableCell = document.getElementById('tableCell8');

	tableCell.rowSpan = "2";

	var content = "You have change the rowSpan of cell1";

	showForElem( 'showbox_tableCell8', content );
}

function testVAlignOfTableCell () {
	var tableCell = document.getElementById('tableCell9');

	tableCell.vAlign = "bottom";

	var content = "You have align the content of cell";

	showForElem( 'showbox_tableCell9', content );
}

function testWidthOfTableCell () {
	var tableCell = document.getElementById('tableCell10');

	tableCell.width = "70%";

	var content = "You have change the width of cell1";

	showForElem( 'showbox_tableCell10', content );
}