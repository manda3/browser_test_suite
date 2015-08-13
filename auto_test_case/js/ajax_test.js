var xmlhttp;

function loadDoc(url) {
	xmlhttp = null;
	if (window.XMLHttpRequest) { // code for IE7, Firefox, Opera, etc.
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlhttp != null) {
		xmlhttp.onreadystatechange = state_Change;
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	} else {
		alert("Your browser does not support XMLHTTP.");
	}
}



function state_Change() {
	if (xmlhttp.readyState == 4) { // 4 = "loaded"
		if (xmlhttp.status == 200) { // 200 = "OK"
			document.getElementById('A1').innerHTML = xmlhttp.status;
			document.getElementById('A2').innerHTML = xmlhttp.statusText;
			document.getElementById('A3').innerHTML = xmlhttp.responseText;
		} else {
			alert("Problem retrieving XML data:" + xmlhttp.statusText);
		}
	}
}



function loadXMLDoc(dname) {
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET", dname, false);
	xhttp.send("");
	return xhttp.responseXML;
}



function getElements() {
	var x = document.getElementsByTagName("input");
	alert(x.length);
}


function get_firstchild(n) {
	var x = n.firstChild;
	while (x.nodeType != 1) {
		x = x.nextSibling;
	}
	return x;
}



function get_lastchild(n) {
	var x = n.lastChild;
	while (x.nodeType != 1) {
		x = x.previousSibling;
	}
	return x;
}


function get_previoussibling(n) {
	var x = n.previousSibling;
	while (x.nodeType != 1) {
		x = x.previousSibling;
	}
	return x;
}


function get_nextsibling(n) {
	var x = n.nextSibling;
	while (x.nodeType != 1) {
		x = x.nextSibling;
	}
	return x;
}

function msieversion() {

	var ua = window.navigator.userAgent;

	var msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
		return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	else
		return 0;

}

function testSave() {

}

function testLoad() {

}

function testSelectNodes() {

}

function testSelectNodes() {

}

$(document).ready(function() {

	var resultArr = {

		'save' : "",
		'load' : "",
		'selectNodes' : "",
		'selectSingleNode' : ""

	}

	//	test slectNodes
	if (msieversion() != 0) {

		var xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
		xmlDoc.load( "books.xml");
		if( xmlDoc instanceof Object ) {
			resultArr['load'] = 'xml loaded';
		}

		xmlDoc.save( "test.xml" );
		xmlDoc.load( "test.xml");
		if( xmlDoc instanceof Object ) {
			resultArr['save'] = 'xml saved';
		}

		ageElems = xmlDoc.selectNodes("/bookstore/book");
		ageVal = ageElems[0].childNodes[0].nodeValue;
		resultArr['selectNodes'] = ageVal;

		//	test selectSingleNode
		ageElem = xmlDoc.selectSingleNode("/bookstore/book");
		ageVal = ageElem.text;
		resultArr['selectSingleNode'] = ageVal;

	}

	$('#result-save').text( resultArr['save'] );
	$('#result-load').text( resultArr['load'] );
	$('#result-select-nodes').text( resultArr['selectNodes'] );
	$('#result-select-single-node').text( resultArr['selectSingleNode'] );


});