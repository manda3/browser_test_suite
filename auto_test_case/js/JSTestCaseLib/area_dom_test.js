function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAccessKeyOfArea () {
	var area1 = document.getElementById('ex1_area1');
	var area2 = document.getElementById('ex2_area1');

	area1.accessKey = "q";
	area2.accessKey = "w";
}

function testAltOfArea () {
	var area1 = document.getElementById('ex1_area2');
	var area2 = document.getElementById('ex2_area2');
	var content = "The alt of areas  are: " + area1.alt + " and " + area2.alt + ".";

	showForElem( 'showbox_area2', content );
}

function testCoordsOfArea () {
	var area1 = document.getElementById('ex1_area3');
	var area2 = document.getElementById('ex2_area3');
	var content = "The coords of areas  are: " + area1.coords + " and " + area2.coords + ".";

	showForElem( 'showbox_area3', content );
}

function testHashOfArea () {
	var area1 = document.getElementById('ex1_area4');
	var area2 = document.getElementById('ex2_area4');
	var content = "The hash of areas  are: " + area1.hash + " and " + area2.hash + ".";

	showForElem( 'showbox_area4', content );
}

function testHostOfArea () {
	var area1 = document.getElementById('ex1_area5');
	var area2 = document.getElementById('ex2_area5');
	var content = "The host of areas  are: " + area1.host + " and " + area2.host + ".";

	showForElem( 'showbox_area5', content );
}

function testHrefOfArea () {
	var area1 = document.getElementById('ex1_area6');
	var area2 = document.getElementById('ex2_area6');
	var content = "The href of areas  are: " + area1.href + " and " + area2.href + ".";

	showForElem( 'showbox_area6', content );
}

function testIdOfArea () {
	var area1 = document.getElementById('ex1_area7');
	var area2 = document.getElementById('ex2_area7');
	var content = "The id of areas  are: " + area1.id + " and " + area2.id + ".";

	showForElem( 'showbox_area7', content );
}

function testNoHrefOfArea () {
	var area1 = document.getElementById('ex1_area8');
	var area2 = document.getElementById('ex2_area8');
	var content = "The noHref of areas  are: " + area1.noHref + " and " + area2.noHref + ".";

	showForElem( 'showbox_area8', content );
}

function testPathnameOfArea () {
	var area1 = document.getElementById('ex1_area9');
	var area2 = document.getElementById('ex2_area9');
	var content = "The pathname of areas  are: " + area1.pathname + " and " + area2.pathname + ".";

	showForElem( 'showbox_area9', content );
}

function testProtocolOfArea () {
	var area1 = document.getElementById('ex1_area10');
	var area2 = document.getElementById('ex2_area10');
	var content = "The protocol of areas  are: " + area1.protocol + " and " + area2.protocol + ".";

	showForElem( 'showbox_area10', content );
}

function testSearchOfArea () {
	var area1 = document.getElementById('ex1_area11');
	var area2 = document.getElementById('ex2_area11');
	var content = "The search of areas  are: " + area1.search + " and " + area2.search + ".";

	showForElem( 'showbox_area11', content );
}

function testShapeOfArea () {
	var area1 = document.getElementById('ex1_area12');
	var area2 = document.getElementById('ex2_area12');
	var content = "The shape of areas  are: " + area1.shape + " and " + area2.shape + ".";

	showForElem( 'showbox_area12', content );
}

function testTabIndexOfArea () {
	var area1 = document.getElementById('ex1_area13');
	var area2 = document.getElementById('ex2_area13');

	area1.tabIndex = "2";
	area2.tabIndex = "1";
}

function testTargetOfArea () {
	var area1 = document.getElementById('ex1_area14');
	var area2 = document.getElementById('ex2_area14');

	area1.target = "_blank";
	area2.target = "_blank";
}