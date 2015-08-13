function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testOptionsOfSel () {
	var select = document.getElementById('select1');
	var content = '';

	for (var i = select.options.length - 1; i >= 0; i--) {
		content = select.options[i].text + "; " + content;
	};

	content = "The options of select1 are:  " + content;

	showForElem( 'showbox_select1', content );
}

function testDisabledOfSel () {
	var select = document.getElementById('select2');
	
	select.disabled = "disabled";

	var content = "The select list has been disabled.";

	showForElem( 'showbox_select2', content );
}

function testFormOfSel () {
	var select = document.getElementById('select3');

	var content = "The select is belong to form: " + select.form.id + ".";

	showForElem( 'showbox_select3', content );
}

function testIdOfSel () {
	var select = document.getElementById('select4');

	var content = "The id of select is: " + select.id + ".";

	showForElem( 'showbox_select4', content );
}

function testNameOfSel () {
	var select = document.getElementById('select5');

	var content = "The name of select is: " + select.name + ".";

	showForElem( 'showbox_select5', content );
}

function testLengthOfSel () {
	var select = document.getElementById('select6');

	var content = "The length of select is: " + select.length + ".";

	showForElem( 'showbox_select6', content );
}

function testMultipleOfSel () {
	var select = document.getElementById('select7');

	var content = "The multiple of select is: " + select.multiple + ".(true为允许多选，false为不许多选)";

	showForElem( 'showbox_select7', content );
}

function testSelectedIndexOfSel () {
	var select = document.getElementById('select8');

	var content = "You have select: " + select.options[select.selectedIndex].text + ".";

	showForElem( 'showbox_select8', content );
}

function testSizeOfSel () {
	var select = document.getElementById('select9');

	var content = "The size of select is: " + select.size + ".";

	showForElem( 'showbox_select9', content );
}

function testTabIndexOfSel () {
	var select1 = document.getElementById('ex1_select10');
	var select2 = document.getElementById('ex2_select10');

	select1.tabIndex = "1";
	select2.tabIndex = "2";

	var content = "You have changed the tabIndex of the two selects, use tab key on keyboard to check it out.";

	showForElem( 'showbox_select10', content );
}

function testTypeOfSel () {
	var select = document.getElementById('select11');

	var content = "The type of select is: " + select.type + ".";

	showForElem( 'showbox_select11', content );
}

function testOnchangeOfSel () {
	var select = document.getElementById('select12');

	select.onchange = function () {
		var select = document.getElementById('select12');
		var content = "You have select: " + select.options[select.selectedIndex].text + ".";

		showForElem( 'showbox_select12', content );
	}

	var content = "You have give the selet a function to response to, pick an item in select to check it out.";

	showForElem( 'showbox_select12', content );
}

function testAddFuncOfSel () {
	var select = document.getElementById('select13');

	var newOpt = document.createElement('option');
	newOpt.text = "kyoto";

	select.add( newOpt );

	var content = "You have add 'kyoto' to select list.";

	showForElem( 'showbox_select13', content );
}

function testBlurFuncOfSel () {
	var select = document.getElementById('select14');

	select.onblur = function () {
		showForElem ('showbox_select14','You have blur from select list.');
	}

	select.focus();
	select.blur();

}

function testFocusFuncOfSel () {
	var select = document.getElementById('select15');

	select.onfocus = function () {
		showForElem ('showbox_select15','You have focus on select list.');
	}

	select.focus();
}

function testRemoveFuncOfSel () {
	var select = document.getElementById('select16');

	var content = "You have remove an item: <strong>" + select.options[select.selectedIndex].text +"</strong> from select list.";

	select.remove( select.selectedIndex );

	showForElem( 'showbox_select16', content );
}