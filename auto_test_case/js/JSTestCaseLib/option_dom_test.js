function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testdDefaultSelectedOfOpt () {
	var selNum = document.getElementById('option1').selectedIndex;
	var select = document.getElementById('option1');

	if (select[selNum].defaultSelected) {
		var content = "Yes, default selected item is Nagoya.";
	} 
	else{
		var content = "No, testing failed, the selected item is Nagoya.";
	};

	showForElem( 'showbox_option1', content );
}

function testDisabledOfOpt () {
	var opt1 = document.getElementById('ex1_option2');
	var opt2 = document.getElementById('ex2_option2');

	opt1.disabled = "disabled";
	opt2.disabled = "disabled";

	var content = "You have disabled tokyo and nagoya";

	showForElem( 'showbox_option2', content );
}

function testFormOfOpt () {
	var select = document.getElementById('option3');
	var content = "The options is belong to form: " + select.form.id + ".";

	showForElem( 'showbox_option3', content );
}

function testIdOfOpt () {
	var selNum = document.getElementById('option4').selectedIndex;
	var select = document.getElementById('option4'); 
	var selOpt = select[selNum].id;

	var content = "The seleted option id is " + selOpt + ".";

	showForElem( 'showbox_option4', content );
}

function testIndexOfOpt () {
	var selNum = document.getElementById('option5').selectedIndex;
	var select = document.getElementById('option5'); 
	var selOpt = select[selNum].index;

	var content = "The seleted option index is " + selOpt + ".(index start from 0)";

	showForElem( 'showbox_option5', content );
}

function testSelectedOfOpt () {
	var selNum = document.getElementById('option6').selectedIndex;
	var select = document.getElementById('option6'); 
	
	if (select[selNum].selected) {
		var content = "The seleted option is " + select[selNum].text + ".";
	};
	
	showForElem( 'showbox_option6', content );
}

function testTextOfOpt () {
	var selNum = document.getElementById('option7').selectedIndex;
	var select = document.getElementById('option7'); 
	
	if (select[selNum].selected) {
		var content = "The seleted option is " + select[selNum].text + ".";
	};

	showForElem( 'showbox_option7', content ); 
}

function testValueOfOpt () {
	var selNum = document.getElementById('option8').selectedIndex;
	var select = document.getElementById('option8'); 
	
	if (select[selNum].selected) {
		var content = "The seleted option value is " + select[selNum].value + ".";
	};
	
	showForElem( 'showbox_option8', content ); 
}