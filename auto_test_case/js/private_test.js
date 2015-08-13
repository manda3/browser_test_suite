function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testIdOfPrivate () {
	var av = document.getElementById('movieWnd');

	var content  = "The id of av object is: " + av.id + ".";

	showForElem( 'showbox_id', content );
}

function testServiceIDOfPrivate () {
	var av = document.getElementById('movieWnd');

	var content  = "The serviceid of av object is: " + av.serviceid + ".";

	showForElem( 'showbox_serviceID', content );
}

function testGetVolumeOfPrivate () {
	var currentVolume = movieWnd.getVolume();
	var content = "The current volume is: " + currentVolume + ".";

	showForElem( 'showbox_getVolume', content );
}

function testSetVolumeOfPrivate () {
	var currentVolume = movieWnd.getVolume();
	currentVolume = currentVolume + 400;
    movieWnd.setVolume(currentVolume);

    var content = "The current volume is: " + currentVolume + ".";

	showForElem( 'showbox_setVolume', content );
}

function testSystemNetworkMacAddressOfPrivate () {
	var myCardId = getNumber();

	var content = "The card id is: " + myCardId + ".";

	showForElem( 'showbox_SystemNetworkMacAddress', content );
}

function getNumber () {

    var cardno = guangxi.System.network.macAddress;
    
    return cardno;

}


function testGetStbNumOfPrivate () {
	var myCardId = guangxi.getStbNum();

	var content = "The card id is: " + myCardId + ".";

	showForElem( 'showbox_getStbNum', content );
}

function testGetGlobalVarFuncOfPrivate () {
	iPanel.setGlobalVar("GuangBo", 5);

	var content = "The global var of GuangBo is(5):  " + iPanel.getGlobalVar("GuangBo") + ".";

	showForElem( 'showbox_getGlobalVar', content );
}

function testSetGlobalVarFuncOfPrivate () {
	iPanel.setGlobalVar("GuangBo", 6);

	var content = "The global var of GuangBo is:  " + iPanel.getGlobalVar("GuangBo") + ".";

	showForElem( 'showbox_setGlobalVar', content );
}
