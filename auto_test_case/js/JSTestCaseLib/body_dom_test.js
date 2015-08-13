function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testClassNameOfBody () {
	var content = "The class name of body is: " + document.body.className + ".";

	showForElem( 'showbox_body1', content );
}

function testDirOfBody () {
	var content = "The dir of body is: " + document.body.dir + ".";

	showForElem( 'showbox_body2', content );
}

function testIdOfBody () {
	var content = "The id of body is: " + document.body.id + ".";

	showForElem( 'showbox_body3', content );
}

function testLangOfBody () {
	var content = "The lang of body is: " + document.body.lang + ".";

	showForElem( 'showbox_body4', content );
}

function testTitleOfBody () {
	var content = "The title of body is: " + document.body.title + ".";

	showForElem( 'showbox_body5', content );
}