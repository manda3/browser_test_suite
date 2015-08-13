//	for onabort_event_dom_js.html

function testAbortOfEventObj () {
	var showBox = document.getElementById("showBox" );
    showBox.innerHTML = 'Error: Loding of the image was aborted.';

}

//	for onblur_event_dom_js.html

function testOnblurOfEventObj () {
	var elem = document.getElementById('fname');
	elem.value = elem.value.toUpperCase();
}

//	for onchange_event_dom_js.html

function testOnchangeOfEventObj () {
	var x = document.getElementById( "fname" );
    x.value = x.value.toUpperCase();

}

//	for onclick_event_dom_js.html

function testOnclickOfEventObj () {
	var x = document.getElementById( "fname" );
    x.value = x.value.toUpperCase();

}

//	for ondbclick_event_dom_js.html

function testOndbclickOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "oh, you hit me!";
}

//	for onerror_event_dom_js.html

function testOnerrorOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "Error! Failed to load the image.";
}

//	for onfocus_event_dom_js.html

function testOnfocusOfEventObj (x) {
	x.style.background = "yellow";
}

//	for onkeydown_event_dom_js.html

function testOnkeydownOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "你正在输入。。。。";
}

//	for onkeypress_event_dom_js.html

function testOnkeypressOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "你正在输入。。。。";
}

//	for onkeyup_event_dom_js.html

function testOnkeyupOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "你正在输入。。。。";
}

//	for onload_event_dom_js.html

function testOnloadOfEventObj () {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "这些文字是onload添加的";
}

//	for onmousedown_event_dom_js.html

function testOnmousedownOfEventObj () {
	var box = document.getElementById("showBox");
    box.innerHTML = "don`t touch me!";
    box.style.border = "1px solid red";
}

//	for onmousemove_event_dom_js.html

function testOnmousemoveOfEventObj ( turn, obj ) {
	if ( turn == 0 ) {
		obj.src = "../../images/sky.jpg";
	} 
	else if( turn == 1 ){
		obj.src = "../../images/Aurora.jpg";
	}
}

//	for onmouseout_event_dom_js.html

function testOnmouseoutOfEventObj ( turn, obj ) {
	if ( turn == 0 ) {
		obj.src = "../../images/sky.jpg";
	} 
	else if( turn == 1 ){
		obj.src = "../../images/Aurora.jpg";
	}
}

//	for onmouseover_event_dom_js.html

function testOnmouseoverOfEventObj ( turn, obj ) {
	if ( turn == 0 ) {
		obj.src = "../../images/sky.jpg";
	} 
	else if( turn == 1 ){
		obj.src = "../../images/Aurora.jpg";
	}
}

//	for onmouseup_event_dom_js.html

function testOnmouseupOfEventObj () {
	var box = document.getElementById("showBox");
    box.innerHTML = "don`t touch me!";
    box.style.border = "1px solid red";
}

//	for onreset_event_dom_js.html

function testOnresetOfEventObj () {
	document.getElementById('showBox').innerHTML= '已经复位';
}

//	for onresize_event_dom_js.html

function testOnresizeOfEventObj () {
	var obj = document.getElementById('obj');
	obj.innerHTML = "<p>width: " + window.outerWidth + " px.</p><p>height: " + window.outerHeight + " px.</p>";
	obj.style.backgroundColor = "orange";
}

//	for onselect_event_dom_js.html

function testOnselectOfEventObj () {
	var box = document.getElementById("showBox" );
    box.innerHTML = "words are selected.";
    box.style.border = "1px solid red";
}

//	for onsubmit_event_dom_js.html

function testOnsubmitOfEventObj () {
	var text = document.forms["frm1"]["fname"].value;

    alert( text + "，你到底在搞什么飞机！！" );
}

//	for onunload_event_dom_js.html

function testOnunloadOfEventObj () {
	alert("Thank you for visiting this page!");
}

//	for bubbles_event_dom_js.html

function testBubblesOfEventObj ( event ) {
	var elem = document.getElementById('showBox');
	if ( event.bubbles ) {
		elem.innerHTML = "This is a bubbling event.";
	} else{
		elem.innerHTML = "This is not a bubbling event.";
	};
}

//	for cancelable_event_dom_js.html

function writeInfo (message) {
    var info = document.getElementById("info");
    info.innerHTML += message + "<br />";
    infor.scrollTop = info.scrollHeight;
}

function testCancelableOfEventObj (event, eventName) {
    if( 'cancelable' in event ){
      if ( event.cancelable ){
        event.preventDefault();
        writeInfo( "the " + eventName + " event is canceled" );
      }
      else{
        writeInfo( "the " + eventName + " event is not canceled" );
      }
    }
    else{
      event.returnValue = false;
      writeInfo( "the " + eventName + " event is probably canceled" );
    }
}

//	for currentTarget_event_dom_js.html

function testCurrentTarget ( event ) {
	if (event.currentTarget) {
        var target = event.target ? event.target : event.srcElement;

        if ( target == event.currentTarget ) {
            alert ("You have clicked on the orange field.");
        }
        else{
            alert ("You have clicked on the button.");
        }
    }
    else {
        alert ("Your browser does not support the currentTarget property!");
    }
}

//	for eventPhase_event_dom_js.html
/*
function init () {
  var elem = document.getElementById('content_eventPhase_js');
  if( elem.addEventListener ){
    elem.addEventListener( 'click', onCapturedClick, true );
  }
}
*/

function onCapturedClick (event) {
  testEventPhaseOfEventObj( event, "div.content" );
}

function testEventPhaseOfEventObj (event, tagName) {
  if( 'eventPhase' in event ){
    switch( event.eventPhase ){
      case Event.CAPTURING_PHASE:
        alert("The event flow is in the capturing phase.(" + tagName + ")" );
        break;
      case Event.AT_TARGET:
        alert( "The event flow is in the target phase.(" + tagName + ")" );
        break;
      case Event.BUBBLING_PHASE:
        alert( "The event flow is in the bubbling phase.(" + tagName + ")" );
        break;
    }
  }
  else{
    alert( "Your browser does not support this example." );
  }
}

//	for target_event_dom_js.html

function testTargetOfEventObj ( event ) {
	var elem = document.getElementById('showBox');
	elem.innerHTML = event.target;
}

//	for timeStamp_event_dom_js.html

function testTimeStampOfEventObj ( event ) {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "The timestamp of this click event: " + event.timeStamp;
}

//	for type_event_dom_js.html

function testTypeOfEventObj ( event ) {
	var elem = document.getElementById('showBox');
	elem.innerHTML = "The type of this event: " + event.type;
}

//	for initEvent_func_event_dom_js.html

function testInitEventFuncOfEventObj () {
    var fruits = document.getElementById("fruits");
    if( fruits.selectedIndex == 0 ){
        fruits.selectedIndex = 1;
    }
    else{
        fruits.selectedIndex = 0;
    }

    if( document.createEvent ){
        var changeEvent = document.createEvent( "Event" );
        changeEvent.initEvent( "change", true, false );
        fruits.dispatchEvent( changeEvent );
    }
    else{
        showBox.innerHTML = "Your browser does not support the createEvent method!";
    }
}

function onChange () {
	if( Math.random() > 0.5 ){
		showBox.style.backgroundColor = "orange";
	}
	else{
		showBox.style.backgroundColor = "yellow";
	}
	
    showBox.innerHTML = "The selected fruit is changed!";
}

//	for preventDefault_func_event_dom_js.html

function writeInfo (message) {
    var info = document.getElementById("info");
    info.innerHTML += message + "<br />";
    info.scrollTop = info.scrollHeight;
}

function testPreventDefaultFuncOfEventObj (event, eventName) {
    if( 'cancelable' in event ){
      if ( event.cancelable ){
        event.preventDefault();
        writeInfo( "the " + eventName + " event is canceled" );
      }
      else{
        writeInfo( "the " + eventName + " event is not canceled" );
      }
    }
    else{
      event.returnValue = false;
      writeInfo( "the " + eventName + " event is probably canceled" );
    }
}

//	for stopPropagation_func_event_dom_js.html

function testStopPropagationFuncOfEventObj ( event, eventName, elementName, stopPropagate ) {
    writeInfo( "The " + elementName + " element got an " + eventName + " event." );
    if( stopPropagate ){
      if( 'bubbles' in event ){
        if( event.bubbles ){
          event.stopPropagation();
          writeInfo( "The propagation of the " + eventName + " event is stopped." );
        }
        else{
          writeInfo( "The " + eventName + " event cannot propagation up the DOM hierarchy." );
        }
      }
      else{
        event.cancelBubble = true;
        writeInfo( "The propagation of the " + eventName + " event is stopped." );
      }
    }    
}

function writeInfo (message) {
    var info = document.getElementById("info");
    info.innerHTML += message + "<br />";
    info.scrollTop = info.scrollHeight;
}
