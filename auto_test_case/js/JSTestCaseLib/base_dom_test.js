function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testHrefOfBase () {
	var base = document.getElementById('base');

	var content = "The href of base is: " + base.href + ".";

	showForElem( 'showbox_base1', content );
}

function testIdOfBase () {
	var base = document.getElementById('base');

	var content = "The id of base is: " + base.id + ".";

	showForElem( 'showbox_base2', content );
}

function testTargetOfBase () {
	var base = document.getElementById('base');

	var content = "The id of base is: " + base.target + ".";

	showForElem( 'showbox_base3', content );
}