function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testLengthOfHist () {
	var content = "The Length of history is: " +  window.history.length + ".";

	showForElem( 'showbox_hist1', content );
}

function testBackFuncOfHist () {
	window.history.back();
}

function testForwardFuncOfHist () {
	window.history.go(-1);
	window.history.forward();
}

function testGoFuncOfHist () {
	window.history.go(-2);
}