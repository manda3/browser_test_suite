//	for frames_window_dom_js.html

function testFramesOfWindowObj () {
	for (var i = 0; i < frames.length; i++) {
		frames[i].location = "../../images/sky.jpg";
	};
}

//	for closed_window_dom_js.html

function closeMyWindow () {
	myWindow.close();
}

function openMyWindow ( url, win_nm ) {
	myWindow = window.open( url, win_nm, "width=400,height=300");
}

function showWindowStatus () {
	if (!myWindow){
  		document.getElementById("statusBox").innerHTML="'myWindow' has never been opened!";
  	}
  	else{
  		if (myWindow.closed){ 
    		document.getElementById("statusBox").innerHTML="'myWindow' has been closed!";
    	}
  		else{
    		document.getElementById("statusBox").innerHTML="'myWindow' has not been closed!";
    	}
  	}
}

//  for defaultStatus_window_dom_js.html

function testDefaultStatusOfWindowObj () {
  window.defaultStatus = "Hello world!!";
}

// for document_window_dom_js.html

function testDocumentOfWindowObj () {
  var elem = window.document.getElementById('showBox');
  elem.innerHTML = "Welcome, welcome.";
  elem.style.backgroundColor = "red";
}

//  for history_window_dom_js.html

function testHistoryOfWindowObj () {
  window.history.back();
}

//  for length_window_dom_js.html

function testLengthOfWindowObj () {
  var num = window.length;
  var elem = document.getElementById('showBox');

  elem.innerHTML = "Number of iframes in current window: " + num + ".";
  elem.style.border = "1px solid red";
}

//  for location_window_dom_js.html

function testLocationOfWindowObj () {
  var elem = document.getElementById('showBox');

  elem.innerHTML = "path name: " + window.location.pathname + ".<br></br>host name: " + window.location.hostname + ".";
  elem.style.border = "1px solid red";
}

//  for name_window_dom_js.html

function testNameOfWindowObj () {
  var elem1 = document.getElementById('showBox1');
  var elem2 = document.getElementById('showBox2');

  elem1.innerHTML = "window name(origin): " + window.name;
  elem1.style.border = "1px solid red";
  
  window.name = "欢迎测试";
  elem2.innerHTML = "window name(changed): " + window.name;
  elem2.style.border = "1px solid green";

}

//  for navigator_window_dom_js.html

function testNavigatorOfWindowObj () {
  var elem = document.getElementById('showBox');

  elem.innerHTML = "user agent: " + window.navigator.userAgent;
  elem.style.border = "1px solid red";
}

//  for opener_window_dom_js.html

function testOpenerOfWindowObj () {
  var myWindow = window.open("./temply_use_html/for_opener_window_js.html");
  
  var elem = myWindow.opener.document.getElementById('showBox');
  elem.innerHTML = "This is the source window!";
}

//  for parent_window_dom_js.html

function testParentOfWindowObj () {
  window.open("./temply_use_html/for_parent_window_js.html","","height=200,width=200");
  
  var elem = document.getElementById('showBox');
  elem.innerHTML = window.parent.location;
  
}

//  screen_window_dom_js.html

function testScreenOfWindowObj () {
  var elem = document.getElementById('showBox');
  elem.innerHTML = "screen width: " + window.screen.width + "<br></br>screen height: " + window.screen.height;
  elem.style.border = "1px solid red";
}

//  for self_window_dom_js.html 

function testSelfOfWindowObj () {
  var elem = document.getElementById('showBox');
  if( window.top != window.self ){
    elem.innerHTML = "This window is not the topmost window!";
  }
  else{
    elem.innerHTML = "This window is the topmost window";
  }
  
  elem.style.border = "1px solid red";
}

//  for status_window_dom_js.html

function testStatusOfWindowObj () {
  var elem1 = document.getElementById('showBox1');
  var elem2 = document.getElementById('showBox2');

  elem1.innerHTML = "Origin status: " + window.status + "<br></br>";
  window.status = "Welcome, welcome."
  elem2.innerHTML = "Modified status: " + window.status;
}

//  for top_window_dom_js.html

function testTopOfWinodwObj () {
  var elem = document.getElementById('showBox');

  if( window.top != window.self ){
    elem.innerHTML = "This window is not the topmost window!";
  }
  else{
    elem.innerHTML = "This window is the topmost window";
  }
  
  elem.style.border = "1px solid red";
}

//  for window_window_dom_js.html

function testWindowOfWindowObj () {
  var elem = document.getElementById('showBox');
  if( window.top == window.window ){
    elem.innerHTML = "This window is the topmost window!";
  }
  else{
    elem.innerHTML = "This window is not the topmost window";
  }
  
  elem.style.border = "1px solid red";
}

//  for screenLeft_window_dom_js.html

function testScreenLeftOfWindowObj () {
  var elem = document.getElementById('showBox');

  elem.innerHTML = "screenLeft: " + window.screenLeft + "<br>screenTop: " + window.screenTop;
}

//  for screenTop_window_dom_js.html

function testScreenTopOfWindowObj () {
  var elem = document.getElementById('showBox');

  elem.innerHTML = "screenLeft: " + window.screenLeft + "<br>screenTop: " + window.screenTop;

}


//  for screenX_window_dom_js.html

function testScreenXOfWindowObj () {
  var elem = document.getElementById('showBox');

  elem.innerHTML = "screenX: " + window.screenX + "<br>screenY: " + window.screenY;
 
}

//  for screenY_window_dom_js.html

function testScreenYOfWindowObj () {
  
  var elem = document.getElementById('showBox');

  elem.innerHTML = "screenX: " + window.screenX + "<br>screenY: " + window.screenY;
 
}

//  for alert_func_window_dom_js.html

function testAlertFuncOfWindowObj () {
  window.alert("Hello World");
}

//  for blur_func_window_dom_js.html

function testBlurFuncOfWindowObj () {
  var myWindow = window.open("./temply_use_html/for_blur_func_window_js.html","","width=200,height=200");
  myWindow.blur();
}

//  for clearInterval_func_window_dom_js.html

function testClearIntervalOfWindowObj () {
  window.clearInterval( myInterval );
}

function myTimer () {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var elem = document.getElementById('showBox');
  elem.innerHTML = t;
}

//  for clearTimeout_func_window_dom_js.html

function testClearTimeoutFuncOfWindowObj () {
  window.clearTimeout( myTime );
}

//  for close_func_window_dom_js.html

function testCloseFuncOfWindowObj () {
  myWindow.close();
}

//  for confirm_func_window_dom_js.html

function testConfirmFuncOfWindowObj () {
  window.confirm("Hello World.");
}

//  for createPopup_func_window_dom_js.html

function testCreatePopupFuncOfWindowObj () {
  var p = window.createPopup();
  var pbody = p.document.body;
  pbody.style.backgroundColor = "lime";
  pbody.style.border = "solid black 1px";
  pbody.innerHTML = "This is a pop-up! Click outside the pop-up to close";
  p.show( 150, 150, 200, 50, document.body );
}

//  for focus_func_window_dom_js.html

function testFocusFuncOfWindowObj () {
  myWindow = window.open("./temply_use_html/for_focus_func_window_js.html","_blank", "height=200,width=200");
  myWindow.focus();
}

//  for moveBy_func_window_dom_js.html

function testMoveByFuncOfWindowObj () {
  myWindow.moveBy(250,250);
  myWindow.focus();
}

//  for moveTo_func_window_dom_js.html

function testMoveToFuncOfWindowObj () {
  myWindow.moveTo(250,250);
  myWindow.focus();
}

//  for open_func_window_dom_js.html

function testOpenFuncOfWindowObj () {
  myWindow = window.open("./temply_use_html/for_open_func_window_js.html","_blank","height=200,width=200")
}

//  for prompt_func_window_dom_js.html

function testPromptFuncOfWindowObj () {
  var x;
  var person = window.prompt( "请输入你的名字","Some People" );
  if( person != null ){
    x = "Hello " + person + "! How are you today?";
    document.getElementById('showBox').innerHTML = x;
  }
}

//  for resizeBy_func_window_dom_js.html

function testResizeByFuncOfWindowObj () {
  myWindow.resizeBy( 200, 200 );
  myWindow.focus();
}

//  for resizeTo_func_window_dom_js.html

function testResizeToFuncOfWindowObj () {
  myWindow.resizeTo( 400, 400 );
  myWindow.focus();
}

//  for scrollBy_func_window_dom_js.html

function testScrollByFuncOfWindowObj ( status ) {
  if (status == 0) {
    window.scrollBy(0, 1800 );
  } 
  else if ( status == 1 ){
    window.scrollBy( 0, -1800 );
  }
}

//  for scrollTo_fun_window_dom_js.html

function testScrollToFuncOfWindowObj ( status ) {
  if (status == 0) {
    window.scrollTo(0, 1500 );
  } 
  else if ( status == 1 ){
    window.scrollTo( 0, -1500 );
  }
}

//  for setInterval_func_window_dom_js.html

function testSetIntervalFuncOfWindowObj () {
  var myInterval = setInterval( function(){myTimer()}, 1000 );
}

//  for setTimeout_func_window_dom_js.html

function testSetTimeoutFuncOfWindowObj () {
  var myTime = setTimeout( function(){myTimer()}, 8000 );
}