function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAllOfDoc () {
	
	var content = "Names of tags in this document: ";

	for (var i = document.all.length - 1; i >= 0; i--) {
		content = content + document.all[i].tagName + "     ";
	};

	showForElem( 'showbox_doc1', content );
}

function testAnchorsOfDoc () {
	
	var content = "Length of anchors in this document: " + document.anchors.length;

	showForElem( 'showbox_doc2', content );
}

function testAppletsOfDoc () {
	
	var content = "Length of applets in this document: " + document.applets.length;

	showForElem( 'showbox_doc3', content );
}

function testFormsOfDoc () {
	
	for (var i = document.forms.length - 1; i >= 0; i--) {
		document.forms[i].childNodes[1].style.backgroundColor = "yellow";
	};

}

function testImagesOfDoc () {

	for (var i = document.images.length - 1; i >= 0; i--) {
		document.images[i].style.height= "300px";
	};

}

function testLinksOfDoc () {
	
	var content = "Length of links in this document: " + document.links.length;

	showForElem( 'showbox_doc6', content );
}

function testBodyOfDoc () {
	var content = "Number of childnodes of body: " + document.body.childNodes.length;

	showForElem( 'showbox_doc7', content );
}

function testCookieOfDoc () {
	document.cookie = "username=fengzhiming";
	var content = "Cookies associated with this document: " + document.cookie;

	showForElem( 'showbox_doc8', content );
}

function testDomainOfDoc () {
	var content = "Domain associated with this document: " + document.domain;

	showForElem( 'showbox_doc9', content );
}

function testLastModifiedOfDoc () {
	var content = "The lastModified of this document: " + document.lastModified;

	showForElem( 'showbox_doc10', content );
}

function testReferrerOfDoc () {
	var content = "The referrer of this document: " + document.referrer;

	showForElem( 'showbox_doc11', content );
}

function testTitleOfDoc () {
	var content = "The title of this document: " + document.title;

	showForElem( 'showbox_doc12', content );
}

function testURLOfDoc () {
	var content = "The URL of this document: " + document.URL;

	showForElem( 'showbox_doc13', content );
}

function testGetElementByIdOfDoc () {
	var div = document.getElementById('showbox_doc15');

	div.style.width = "400px";
	div.style.height = "200px";
	div.style.backgroundColor = "red";
}

function testGetElementsByNameOfDoc () {
	var content = "The number of radio in this document is: " + document.getElementsByName('company').length;

	showForElem( 'showbox_doc16', content );
}

function testGetElementsByTagNameOfDoc () {
	var ifm = document.getElementsByTagName('iframe')[0];

	ifm.style.width = "50%";
	ifm.style.height = "250px";
}

function testWriteFuncOfDoc () {
	var content = "<html><head></head><body><a href='./document_dom_js.html'>click to go back</a></body></html>";

	document.write( content );

}

function testWritelnFuncOfDoc () {
	var content = "<html><head></head><body><a href='./document_dom_js.html'>click to go back</a></body></html>";

	document.writeln( content );
	
}