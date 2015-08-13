function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testColsOfTextarea () {
	var textarea = document.getElementById('textarea1');

	textarea.cols = "80";

	var content = "You have change the cols of textarea";

	showForElem( 'showbox_textarea1', content );
}

function testDefaultValueOfTextarea () {
	var textarea = document.getElementById('textarea2');

	textarea.defaultValue = "new default value.";

	var content = "You have change the default value of textarea";

	showForElem( 'showbox_textarea2', content );
}

function testDisabledOfTextarea () {
	var textarea = document.getElementById('textarea3');

	textarea.disabled = "disabled";

	var content = "You have disabled textarea";

	showForElem( 'showbox_textarea3', content );
}

function testFormOfTextarea () {
	var textarea = document.getElementById('textarea4');

	var content = "The textarea is belong to form: " + textarea.form.id + ".";

	showForElem( 'showbox_textarea4', content );
}


function testIdOfTextarea () {
	var textarea = document.getElementById('textarea5');

	var content = "The id of the textarea is: " + textarea.id + ".";

	showForElem( 'showbox_textarea5', content );
}

function testNameOfTextarea () {
	var textarea = document.getElementById('textarea6');

	var content = "The name of the textarea is: " + textarea.name + ".";

	showForElem( 'showbox_textarea6', content );
}

function testReadOnlyOfTextarea () {
	var textarea = document.getElementById('textarea7');

	textarea.readOnly = "true";

	var content = "You have set the textarea to readOnly.";

	showForElem( 'showbox_textarea7', content );
}

function testRowsOfTextarea () {
	var textarea = document.getElementById('textarea8');

	textarea.rows = "8";

	var content = "You have change the rows of textarea.";

	showForElem( 'showbox_textarea8', content );
}

function testTabIndexOfTextarea () {
	var textarea1 = document.getElementById('ex1_textarea9');
	var textarea2 = document.getElementById('ex2_textarea9');

	textarea1.tabIndex = "2";
	textarea2.tabIndex = "1";

	var content = "You have change the tabIndex of textarea.";

	showForElem( 'showbox_textarea9', content );
}

function testTypeOfTextarea () {
	var textarea = document.getElementById('textarea10');

	var content = "The type of the textarea is: " + textarea.type + ".";

	showForElem( 'showbox_textarea10', content );
}

function testValueOfTextarea () {
	var textarea = document.getElementById('textarea11');

	var content = "The value of the textarea is: " + textarea.value + ".";

	showForElem( 'showbox_textarea11', content );
}

function testOnchangeOfTextarea () {
	var textarea1 = document.getElementById('textarea12');

	textarea1.onchange = function () {

		var content = "You have change the conent of textarea.";

		showForElem( 'showbox_textarea12', content );
	};

	//var content = "You have set an onchange function to textarea, change the content of textarea to see the result.";

	//showForElem( 'showbox_textarea12', content );
}

function testBlurFuncOfTextarea () {
	var textarea = document.getElementById('textarea13');

	textarea.onblur = function () {
		
		var content = "You have blur from the  textarea.";

		showForElem( 'showbox_textarea13', content );
	}

	textarea.focus();
	textarea.blur();
}

function testFocusFuncOfTextarea () {
	var textarea = document.getElementById('textarea14');

	textarea.onfocus = function () {
		
		var content = "You have focus on the  textarea.";

		showForElem( 'showbox_textarea14', content );
	}

	textarea.focus();
}

function testSelectFuncOfTextarea () {
	var textarea = document.getElementById('textarea15');

	textarea.select();

	var content = "You have select the content of textarea.";

	showForElem( 'showbox_textarea15', content );
}