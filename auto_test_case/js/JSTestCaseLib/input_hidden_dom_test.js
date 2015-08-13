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

function testTypeOfInput ( showBoxId, elemId ) {
	var elemType = document.getElementById('' + elemId).type;
	var info = "The type of id \"" + elemId + "\" is: " + elemType;
	var showBox = document.getElementById('' + showBoxId );
	showBox.innerHTML = info;
	showBox.style.backgroundColor = "pink";
}

function testValueOfInput ( elemId ) {
	var elem = document.getElementById('' + elemId );
	elem.value = "Welcome, welcome";
}