function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testContentDocumentOfFrame () {
	var frm1 = document.getElementById('frm1').contentDocument.body;
	var frm2 = document.getElementById('frm2').contentDocument.body;
	var frm3 = document.getElementById('frm3').contentDocument.body;

	frm1.style.frameBorder = "10";
	frm2.style.frameBorder = "10";
	frm3.style.frameBorder = "10";
}