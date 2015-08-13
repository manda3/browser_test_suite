function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testCellsOfTable () {
	var table = document.getElementById('table1');

	var content = "The second cell of first row is: " + table.rows[0].cells[1].innerHTML + ".";

	showForElem( 'showbox_table1', content );
}

function testRowsOfTable () {
	var table = document.getElementById('table2');

	var content = "The number of elements of first row is: " + table.rows[0].cells.length + ".";

	showForElem( 'showbox_table2', content );
}

function testBorderOfTable () {
	var table = document.getElementById('table3');

	table.border = "33";

	var content = "You have change the border of table.";

	showForElem( 'showbox_table3', content );
}

function testCaptionOfTable () {
	var table = document.getElementById('table4');
 	
 	table.caption.innerHTML = "The caption you add";

 	var content = "You have add a caption to table";

 	showForElem( 'showbox_table4', content );
}

function testCellPaddingOfTable () {
	var table = document.getElementById('table5');

	table.cellPadding = "33";

	var content = "You have change the cell padding of table.";

	showForElem( 'showbox_table5', content );
}

function testCellSpacingOfTable () {
	var table = document.getElementById('table6');

	table.style.borderCollapse = "separate";
	table.style.borderSpacing = "10px 10px";

	var content = "You have change the cell space of table.";

	showForElem( 'showbox_table6', content );
}

function testFrameOfTable () {
	var table = document.getElementById('table7');

	table.frame = "vsides";

	var content = "You have change the frame of table.";

	showForElem( 'showbox_table7', content );
}

function testIdOfTable () {
	var table = document.getElementById('table8');

	var content = "The id of table is: " + table.id + ".";

	showForElem( 'showbox_table8', content );
}

function testRulesOfTable () {
	var table = document.getElementById('table9');
	
	table.rules = "cols";

	var content = "You have change the rules of table.";

	showForElem( 'showbox_table9', content );
}

function testSummaryOfTable () {
	var table = document.getElementById('table10');

	var content = "The summary of table is: " + table.summary + ".";

	showForElem( 'showbox_table10', content );
}

function testTFootOfTable () {
	var table = document.getElementById('table11');

	table.tFoot.style.backgroundColor = "yellow";

	var content = "You have mark tFoot with color";

	showForElem( 'showbox_table11', content );
}

function testTHeadOfTable () {
	var table = document.getElementById('table12');

	table.tHead.style.backgroundColor = "yellow";

	var content = "You have mark tHead with color";

	showForElem( 'showbox_table12', content );
}

function testWidthOfTable () {
	var table = document.getElementById('table13');

	table.width = "100%";

	var content = "You have changed the width of table";

	showForElem( 'showbox_table13', content );
}

function testCreateCaptionFuncOfTable () {
	 var table = document.getElementById('table14');

	 var caption = table.createCaption();
	 caption.innerHTML = "This is caption you create";
}

function testCreateTFootFuncOfTable () {
	 var table = document.getElementById('table15');

	 var caption = table.createTFoot();
	 caption.innerHTML = "<tr><td>cell 5</td><td>cell 6</td></tr>";
}

function testCreateTHeadFuncOfTable () {
	 var table = document.getElementById('table16');

	 var caption = table.createTHead();
	 caption.innerHTML = "<tr><td>cell 5</td><td>cell 6</td></tr>";
}

function testDeleteCaptionFuncOfTable () {
	 var table = document.getElementById('table17');

	 table.deleteCaption();
	 
}

function testDeleteRowFuncOfTable () {
	 var table = document.getElementById('table18');

	 table.deleteRow(0);
	 
}

function testDeleteTFootFuncOfTable () {
	 var table = document.getElementById('table19');

	 table.deleteTFoot();
	 
}

function testDeleteTHeadFuncOfTable () {
	 var table = document.getElementById('table20');

	 table.deleteTHead();
	 
}

function testInsertRowFuncOfTable () {
	var table = document.getElementById('table21');

	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "cell 5";
	cell2.innerHTML = "cell 6";
}