function showForElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testAlignOfImg () {
	var img = document.getElementById('img_img1');

	img.align = "right";
}

function testAltOfImg () {
	var img = document.getElementById('img_img2');

	var content = "The alt of image is: " + img.alt + ".";

	showForElem( 'showbox_img2', content );
}

function testBorderOfImg () {
	var img = document.getElementById('img_img3');

	img.border = "13";
}

function testCompleteOfImg () {
	var img = document.getElementById('img_img4');

	var content = "The complete of image is: " + img.complete + ".";

	showForElem( 'showbox_img4', content );
}

function testHeightOfImg () {
	var img = document.getElementById('img_img5');

	var content = "The height of image is: " + img.height + ".";

	showForElem( 'showbox_img5', content );
}

function testHspaceOfImg () {
	var img = document.getElementById('img_img6');

	img.hspace = "33";
}

function testIdOfImg () {
	var img = document.getElementById('img_img7');

	var content = "The id of image is: " + img.id + ".";

	showForElem( 'showbox_img7', content );
}

function testIsMapOfImg () {
	var img = document.getElementById('img_img8');

	var content = "The isMap of image is: " + img.isMap + ".";

	showForElem( 'showbox_img8', content );
}

function testLongDescOfImg () {
	var img = document.getElementById('img_img9');

	var content = "The longDesc of image is: " + img.longDesc + ".";

	showForElem( 'showbox_img9', content );
}

function testLowsrcOfImg () {
	var img = document.getElementById('img_img10');

	var content = "The lowsrc of image is: " + img.lowsrc + ".";

	showForElem( 'showbox_img10', content );
}

function testNameOfImg () {
	var img = document.getElementById('img_img11');

	var content = "The name of image is: " + img.name + ".";

	showForElem( 'showbox_img11', content );
}

function testSrcOfImg () {
	var img = document.getElementById('img_img12');

	var content = "The src of image is: " + img.src + ".";

	showForElem( 'showbox_img12', content );
}

function testUseMapOfImg () {
	var img = document.getElementById('img_img13');

	var content = "The useMap of image is: " + img.useMap + ".";

	showForElem( 'showbox_img13', content );
}

function testVspaceOfImg () {
	var img = document.getElementById('img_img14');

	img.vspace = "33";
}

function testWidthOfImg () {
	var img = document.getElementById('img_img15');

	var content = "The width of image is: " + img.width + ".";

	showForElem( 'showbox_img15', content );
}

function testOnabortFuncOfImg () {
	var img = document.getElementById('img_img16');

	img.onabort = function(){alert('you have abort the image.');};
}

function testOnerrorFuncOfImg () {
	var img = document.getElementById('img_img17');
	var content = "meets an error when loading a image.";

	img.onerror = function(){
		showForElem( 'showbox_img17', content);
	};
}

function testOnloadrOfImg () {
	var img = document.getElementById('img_img18');
	var content = 'on loading the image.';

	img.onload = function(){
		showForElem( 'showbox_img18', content);
	};
}