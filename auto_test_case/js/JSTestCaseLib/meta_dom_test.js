function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testContentOfMeta () {
	var meta = document.getElementsByTagName('meta')[0];
	var content = "The content of the meta is: " + meta.content + ".";

	showForElem( 'showbox_meta1', content );
}

function testHttpEquivOfMeta () {
	var meta = document.getElementsByTagName('meta')[0];
	var content = "The httpEquiv of the meta is: " + meta.httpEquiv + ".";

	showForElem( 'showbox_meta2', content );
}

function testNameOfMeta () {
	var meta = document.getElementsByTagName('meta')[1];
	var content = "The name of the meta is: " + meta.name + ".";

	showForElem( 'showbox_meta3', content );
}

function testSchemeOfMeta () {
	var meta = document.getElementsByTagName('meta')[1];
	var content = "The scheme of the meta is: " + meta.scheme + ".";

	showForElem( 'showbox_meta4', content );
}