function testAcceptOfInputFile () {
	var elem = document.getElementById('file1_form1');
	var showBox = document.getElementById('showBox_form1');

	showBox.innerHTML = "The accept file type of form is: " + elem.accept;
	showBox.style.border = "1px solid red";
}

function testAccessKeyOfInput ( id, key ) {
	var elem = document.getElementById(''+ id );
	elem.accessKey = key.toString();
}

function testDisabledOfInputCheckbox ( id ) {
	var elem = document.getElementById('' + id );
	elem.disabled = "disabled";
}

function testFormOfInput ( showBoxId, elemId ) {
	var formid = document.getElementById('' + elemId).form.id;
	var info = "The checkboxes are in the form with id: " + formid;
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testIdOfInput ( showBoxId, formId, elemType ) {
	var form = document.getElementById('' + formId );
	var info = ''
	for (var i = form.childNodes.length - 1; i >= 0; i--) {
		if( form.childNodes[i].type == elemType.toString() ){
			var info =  "The element id is " + form.childNodes[i].id + "<p></p>" + info;
		}
	};
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testNameOfInput ( elemId, elemName ) {
	var elem = document.getElementById('' + elemId );
	elem.name = elemName.toString();
}

function testTabIndexOfInput ( elemId, tabTurn ) {
	var elem = document.getElementById('' + elemId );
	elem.tabIndex = tabTurn;
}

function testTypeOfInput ( showBoxId, elemId ) {
	var elemType = document.getElementById('' + elemId).type;
	var info = "The type of id \"" + elemId + "\" is: " + elemType;
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testValueOfInput ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.value = "./index.html";
}

function testBlurFuncOfInput ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.blur();
}

function testFocusFuncOfInput ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.focus();
}

function testClickFuncOfInput ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.click();
}

function checkInputFile ( elemId ) {
	var showBox = document.getElementById('showBox_form14');
	showBox.innerHTML = "You click the input file button " + elemId;
	showBox.style.border = "1px solid red";
}