function testAccessKeyOfInput ( id, key ) {
	var elem = document.getElementById(''+ id );
	elem.accessKey = key.toString();
}

function testAltOfInput ( elemId, value ) {
	var elem = document.getElementById('' + elemId );
	elem.alt = value.toString();
}

function testCheckedOfInput ( id ) {
	var elem = document.getElementById('' + id );
	elem.checked = true;
}

function testDefaultCheckedOfInput ( id ) {
	var elem = document.getElementById('' + id );
	elem.defaultChecked = true;
}

function testDisabledOfInput ( id ) {
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
	var info = '';
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
	var info = "The type of id \"" + elemId + "\" : is: " + elemType;
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testValueOfInputRadio ( elemId, value ) {
	var elem = document.getElementById('' + elemId );
	elem.value = value;
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