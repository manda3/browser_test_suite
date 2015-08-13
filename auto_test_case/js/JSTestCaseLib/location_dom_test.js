function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testHashOfLoc () {
	var content = "The hash of location is: " + location.hash + ".";

	showForElem( 'showbox_loc1', content );
}

function testHostOfLoc () {
	var content = "The host of location is: " + location.host + ".";

	showForElem( 'showbox_loc2', content );
}

function testHostnameOfLoc () {
	var content = "The hostname of location is: " + location.hostname + ".";

	showForElem( 'showbox_loc3', content );
}

function testHrefOfLoc () {
	var content = "The href of location is: " + location.href + ".";

	showForElem( 'showbox_loc4', content );
}

function testPathnameOfLoc () {
	var content = "The pathname of location is: " + location.pathname + ".";

	showForElem( 'showbox_loc5', content );
}

function testPortOfLoc () {
	var content = "The port of location is: " + location.port + ".(if the port is 80, it will leave just empty.)";

	showForElem( 'showbox_loc6', content );
}

function testProtocolOfLoc () {
	var content = "The protocol of location is: " + location.protocol + ".";

	showForElem( 'showbox_loc7', content );
}

function testSearchOfLoc () {
	var content = "The search of location is: " + location.search + ".";

	showForElem( 'showbox_loc8', content );
}

function testAssignFuncOfLoc () {
	location.assign('../../index.htm');
}

function testReloadFuncOfLoc () {
	location.reload();
}

function testReplaceFuncOfLoc () {
	location.replace('../../index.htm');
}