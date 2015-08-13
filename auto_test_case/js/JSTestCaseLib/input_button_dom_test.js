function showInfo ( elemId, info ) {
	var elem = document.getElementById('' + elemId );
	elem.style.border = "1px solid red";
	elem.innerHTML = info;
}

//	for input_button_input_dom_js.html

function testAccessKeyOfInputButton () {
	var btn = document.getElementById('form1_btn');
	btn.accessKey = "q";
}

function shwoInfoForBtn1 () {
	var info = "<p></p>You have just click the 点击提交 button";
	showInfo( 'showBox1', info );
}

function testAltOfInputButton () {
	var btn = document.getElementById('form2_btn');
	btn.alt = "submit button";
}

function testDisabledOfInputButton () {
	var btn = document.getElementById('form3_btn');
	btn.disabled = "disabled";
}

function testFormOfInputButton () {
	var info = "结果(应该是form4):    " + document.getElementById('form4_btn').form.id;
	showInfo( 'showBox2', info );
}

function testIdOfInputButton () {
	var idOfBtn = document.getElementById('form5_btn').id;
	var info = "The id of the input button is:  " + idOfBtn;
	showInfo( 'showBox3', info );
}

function testNameOfInputButton () {
	var btn = document.getElementById('form6_btn');
	btn.name = "btn";
}

function testTabIndexOfInputButton () {
	document.getElementById('form7_btn1').tabIndex = "3";
	document.getElementById('form7_btn2').tabIndex = "2";
	document.getElementById('form7_btn3').tabIndex = "1";
}

function testTypeOfInputButton () {
	var typeOfBtn = document.getElementById('form8_btn').type;
	var info = "The type of the input button is: " + typeOfBtn;
	showInfo( 'showBox4', info );
}

function testValueOfInputButton () {
	var valueOfBtn = document.getElementById('form9_btn').value;
	var info = "The value of the input button is: " + valueOfBtn;
	showInfo( 'showBox5', info );
}

function testBlurFuncOfInputButton ( id ) {
	var btn = document.getElementById(''+ id);
	btn.blur();
}

function testFocusFuncOfInputButton ( id ) {
	var btn = document.getElementById(''+ id);
	btn.focus();
}

function testClickFuncOfInputButton (id) {
	var btn = document.getElementById(''+ id);
	btn.click();
}