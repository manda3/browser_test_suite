function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAccessKeyOfBtn () {
	var btn = document.getElementById('btn_button1');

	btn.accessKey = "q";
}

function testDisabledOfBtn () {
	var btn = document.getElementById('btn_button2');

	btn.disabled = "disabled";

	showForElem('showbox_button2', 'You have disabled the button' );
}

function testFormOfBtn () {
	var btn = document.getElementById('btn1_button3');

	var content = "The botton is belong to form: " + btn.form.id;

	showForElem('showbox_button3', content );
}

function testIdOfBtn () {
	var btn = document.getElementById('btn_button4');

	var content = "The id of button is: " + btn.id;

	showForElem('showbox_button4', content );
}

function testNameOfBtn () {
	var btn = document.getElementById('btn_button5');

	var content = "The name of button is: " + btn.name;

	showForElem('showbox_button5', content );
}

function testTabIndexOfBtn () {
	var btn1 = document.getElementById('btn1_button6');
	var btn2 = document.getElementById('btn2_button6');

	btn1.tabIndex = "2";
	btn2.tabIndex = "1";

	var content = "You have changed the tab turning of button.";

	showForElem('showbox_button6', content );
}

function testTypeOfBtn () {
	var btn = document.getElementById('btn_button7');

	var content = "The type of the button is: " + btn.type;

	showForElem('showbox_button7', content );
}

function testValueOfBtn () {
	var btn = document.getElementById('btn_button8');

	var content = "The value of the button is: " + btn.value;

	showForElem('showbox_button8', content );
}