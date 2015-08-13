function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAlignOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm1');
	var ifm2 = document.getElementById('ex2_ifm1');

	ifm1.align = "right";
	ifm2.align = "left";
}

function testContentDocumentOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm2');
	var ifm2 = document.getElementById('ex2_ifm2');

	ifm1.contentDocument.body.style.backgroundColor = "red";
	ifm2.contentDocument.body.style.backgroundColor = "green";
}

function testFrameBorderOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm3');
	var ifm2 = document.getElementById('ex2_ifm3');

	ifm1.frameBorder = "1";
	ifm2.frameBorder = "0";
}

function testHeightOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm4');
	var ifm2 = document.getElementById('ex2_ifm4');

	ifm1.height = "300px";
	ifm2.height = "200px";
}

function testIdOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm5');
	var ifm2 = document.getElementById('ex2_ifm5');

	var content = "The ids of iframes are: " + ifm1.id + " and " + ifm2.id + ".";

	showForElem( 'showbox_ifm5', content );
}

function testLongDescOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm6');
	var ifm2 = document.getElementById('ex2_ifm6');

	var content = "The longDesc of iframes are: " + ifm1.longDesc + " and " + ifm2.longDesc + ".";

	showForElem( 'showbox_ifm6', content );
}

function testMarginHeightOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm7');
	var ifm2 = document.getElementById('ex2_ifm7');

	ifm1.marginHeight = "50";
	ifm2.marginHeight = "100";
}

function testMarginWidthOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm8');
	var ifm2 = document.getElementById('ex2_ifm8');

	ifm1.marginWidth = "50";
	ifm2.marginWidth = "100";
}

function testScrollingOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm9');
	var ifm2 = document.getElementById('ex2_ifm9');

	ifm1.scrolling = "no";
	ifm2.scrolling = "no";
}

function testNameOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm10');
	var ifm2 = document.getElementById('ex2_ifm10');

	var content = "The names of iframes are: " + ifm1.name + " and " + ifm2.name + ".";

	showForElem( 'showbox_ifm10', content );
}

function testSrcOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm11');
	var ifm2 = document.getElementById('ex2_ifm11');

	ifm1.src = "./iframe_dom_js/iframe_test1_js.html";
	ifm2.src = "./iframe_dom_js/iframe_test1_js.html";
}

function testWidthOfIfm () {
	var ifm1 = document.getElementById('ex1_ifm12');
	var ifm2 = document.getElementById('ex2_ifm12');

	ifm1.width = "350px";
	ifm2.width = "350px";
}