function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testCharsetOfLink () {
	var link = document.getElementById('main_css');
	var content = "The charset of link is: " + link.charset + ".";

	showForElem( 'showbox_link1', content );
}

function testDisabledOfLink () {
	var link = document.getElementById('main_css');
	var content = "The disabled of link is: " + link.disabled + ".";

	showForElem( 'showbox_link2', content );
}

function testHrefOfLink () {
	var link = document.getElementById('main_css');
	var content = "The href of link is: " + link.href + ".";

	showForElem( 'showbox_link3', content );
}

function testHreflangOfLink () {
	var link = document.getElementById('main_css');
	var content = "The hreflang of link is: " + link.hreflang + ".";

	showForElem( 'showbox_link4', content );
}

function testIdOfLink () {
	var link = document.getElementById('main_css');
	var content = "The id of link is: " + link.id + ".";

	showForElem( 'showbox_link5', content );
}

function testMediaOfLink () {
	var link = document.getElementById('main_css');
	var content = "The media of link is: " + link.media + ".";

	showForElem( 'showbox_link6', content );
}

function testNameOfLink () {
	var link = document.getElementById('main_css');
	var content = "The name of link is: " + link.name + ".";

	showForElem( 'showbox_link7', content );
}

function testNameOfLink () {
	var link = document.getElementById('main_css');
	var content = "The name of link is: " + link.name + ".";

	showForElem( 'showbox_link7', content );
}

function testRelOfLink () {
	var link = document.getElementById('main_css');
	var content = "The rel of link is: " + link.rel + ".";

	showForElem( 'showbox_link8', content );
}

function testRevOfLink () {
	var link = document.getElementById('main_css');
	var content = "The rev of link is: " + link.rev + ".";

	showForElem( 'showbox_link9', content );
}

function testTypeOfLink () {
	var link = document.getElementById('main_css');
	var content = "The type of link is: " + link.type + ".";

	showForElem( 'showbox_link10', content );
}