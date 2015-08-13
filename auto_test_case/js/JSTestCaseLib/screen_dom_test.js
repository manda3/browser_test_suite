function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAvailHeightOfScreen () {
	var content = "The availHeight of the screen is:  " + screen.availHeight + ". ";

	showForElem( 'showBox_screen1', content );
}

function testAvailWidthOfScreen () {
	var content = "The availWidth of the screen is:  " + screen.availWidth + ". ";

	showForElem( 'showBox_screen2', content );
}

function testBufferDepthOfScreen () {

	var content = "The bufferDepth of the screen is:  " + screen.bufferDepth + ". ";

	showForElem( 'showBox_screen3', content );
}

function testColorDepthOfScreen () {

	var content = "The colorDepth of the screen is:  " + screen.colorDepth + ". ";

	showForElem( 'showBox_screen4', content );
}

function testDeviceXDPIOfScreen () {
	
	var content = "The deviceXDPI of the screen is:  " + screen.deviceXDPI + ". ";

	showForElem( 'showBox_screen5', content );
}

function testDeviceYDPIOfScreen () {
	
	var content = "The deviceYDPI of the screen is:  " + screen.deviceYDPI + ". ";

	showForElem( 'showBox_screen6', content );
}

function testFontSmoothingEnabledOfScreen () {
	
	var content = "The fontSmoothingEnabled of the screen is:  " + screen.fontSmoothingEnabled + ". ";

	showForElem( 'showBox_screen7', content );
}

function testHeightOfScreen () {
	
	var content = "The height of the screen is:  " + screen.height + ". ";

	showForElem( 'showBox_screen8', content );
}

function testLogicalXDPIOfScreen () {
	
	var content = "The logicalXDPI of the screen is:  " + screen.logicalXDPI + ". ";

	showForElem( 'showBox_screen9', content );
}

function testLogicalYDPIOfScreen () {
	
	var content = "The logicalYDPI of the screen is:  " + screen.logicalYDPI + ". ";

	showForElem( 'showBox_screen10', content );
}

function testPixelDepthOfScreen () {
	
	var content = "The pixelDepth of the screen is:  " + screen.pixelDepth + ". ";

	showForElem( 'showBox_screen11', content );
}

function initForUI () {
	setInterval( animateForUI, 80 );
}

function animateForUI () {
	var showbox = document.getElementById('showBox_screen12');

	var leftPos = parseInt( showbox.style.left );
	leftPos += 10;
	if( leftPos > 600 ){
		leftPos = 0;
	}

	showbox.style.left = leftPos + "px";
}

function modifyUpdateIntervalForUI ( selectTag ) {
	screen.updateInterval = selectTag.value;
}

function testUpdateIntervalOfScreen () {
	var showbox = document.getElementById('showBox_screen12');
	showbox.style.position = "absolute";
	showbox.style.left = "0px";
	showbox.style.top = "240px";
	showbox.style.backgroundColor = "orange";
	initForUI();
}

function testWidthOfScreen () {
	
	var content = "The width of the screen is:  " + screen.width + ". ";

	showForElem( 'showBox_screen13', content );
}

function testResizeToFuncOfScreen () {
	if( screen.resizeTo ){
		screen.resizeTo( 720, 576 );
	}
}

function restoreScreen () {
	if( screen.resizeTo ){
		screen.resizeTo( 1280, 720 );
	}
}