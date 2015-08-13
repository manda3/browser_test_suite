function testAccessKeyOfInput ( id, key ) {
	var elem = document.getElementById(''+ id );
	elem.accessKey = key.toString();
}

function testAltOfInput ( elemId, value ) {
	var elem = document.getElementById('' + elemId );
	elem.alt = value.toString();
}

function testDisabledOfInput ( id ) {
	var elem = document.getElementById('' + id );
	elem.disabled = "disabled";
}

function testFormOfInputSubmit ( showBoxId, elemId ) {
	var formid = document.getElementById('' + elemId).form.id;
	var info = "The checkboxes are in the form with id: " + formid;
	var showBox = document.getElementById('' + showBoxId );

	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testIdOfInputSubmit ( showBoxId, formId, elemType ) {
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

function showElemName ( elemId, showBoxId ) {
	var elem = document.getElementById('' + elemId );
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = "The name of the element is: " + elem.name;
	showBox.style.backgroundColor = "pink";
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

function testValueOfInputBtn ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.value = "submit";
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