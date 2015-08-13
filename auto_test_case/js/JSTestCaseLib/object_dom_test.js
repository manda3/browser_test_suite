function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAlignOfObj () {
	var obj = document.getElementById('obj1');

	obj.align = "right";
}

function testBorderOfObj () {
	var obj = document.getElementById('obj3');

	obj.border = "10";
}

function testFormOfObj () {
	var obj = document.getElementById('obj6');

	var content = "The object is belong to form: " + obj.form.id + ".";

	showForElem( 'showbox_object6', content );
}

function testHeightOfObj () {
	var obj = document.getElementById('obj7');

	var content = "The height of object is: " + obj.height + ".";

	showForElem( 'showbox_object7', content );
}

function testHspaceOfObj () {
	var obj = document.getElementById('obj8');

	obj.hspace = "33";
}

function testNameOfObj () {
	var obj = document.getElementById('obj9');

	var content = "The name of object is: " + obj.name + ".";

	showForElem( 'showbox_object9', content );
}

function testTypeOfObj () {
	var obj = document.getElementById('obj11');

	var content = "The type of object is: " + obj.type + ".";

	showForElem( 'showbox_object11', content );
}

function testVspaceOfObj () {
	var obj = document.getElementById('obj12');

	obj.vspace = "33";
}

function testWidthOfObj () {
	var obj = document.getElementById('obj13');

	var content = "The width of object is: " + obj.width + ".";

	showForElem( 'showbox_object13', content );
}