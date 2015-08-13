function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testElementsOfForm () {
	var form = document.getElementById('form1');
	var content = 'The elements` names are: ';

	for (var i = form.elements.length - 1; i >= 0; i--) {
		content = content + form.elements[i].value + ";  ";
	};

	showForElem( 'showbox_form1', content );
}

function testAcceptCharsetOfForm () {
	var form = document.getElementById('form2');
	var content = 'The accept-charset of form is: ' + form.acceptCharset + ".";

	showForElem( 'showbox_form2', content );
}

function testActionOfForm () {
	var form = document.getElementById('form3');
	var content = 'The action of form is: ' + form.action + ".";

	showForElem( 'showbox_form3', content );
}

function testEnctypeOfForm () {
	var form = document.getElementById('form4');
	var content = 'The enctype of form is: ' + form.enctype + ".";

	showForElem( 'showbox_form4', content );
}

function testIdOfForm () {
	var form = document.getElementById('form5');
	var content = 'The id of form is: ' + form.id + ".";

	showForElem( 'showbox_form5', content );
}

function testLengthOfForm () {
	var form = document.getElementById('form6');
	var content = 'The length of form is: ' + form.length + ".";

	showForElem( 'showbox_form6', content );
}

function testMethodOfForm () {
	var form = document.getElementById('form7');
	var content = 'The method of form is: ' + form.method + ".";

	showForElem( 'showbox_form7', content );
}

function testNameOfForm () {
	var form = document.getElementById('form8');
	var content = 'The name of form is: ' + form.name + ".";

	showForElem( 'showbox_form8', content );
}

function testTargetOfForm () {
	var form = document.getElementById('form9');
	var content = 'The target of form is: ' + form.target + ".";

	showForElem( 'showbox_form9', content );
}

function testResetFuncOfForm () {
	var form = document.getElementById('form10');
	
	form.reset();
}

function testSubmitFuncOfForm () {
	var form = document.getElementById('form11');
	
	form.submit();
}

function testOnresetFuncOfForm () {
	var form = document.getElementById('form12');
	
	form.onreset = "alert('you have submit the form')";
	form.reset();
}

function testOnsubmitFuncOfForm () {
	var form = document.getElementById('form13');
	
	form.onsubmit = "alert('you have submit the form')";
	form.submit();
}