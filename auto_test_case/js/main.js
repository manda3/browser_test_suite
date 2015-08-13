/*
    for TaiXin TV Cabel Box
*/

if( screen.resizeTo ){
    screen.resizeTo( 1280, 720 );
}

/*
  js for script_html.html
*/
function textShow () {
	var txt = "Greek symbols: α β γ δ ε ζ η θ"
	var show = document.getElementById('showBox2');
	show.innerHTML = "<strong>" + txt + "(copy by fun from outter script tag with charset: ISO-8859-1)</strong>";
}

function showText2 () {
    var txt = document.getElementById('origin3').innerHTML;
    var show = document.getElementById('showBox3');
    show.innerHTML = "<strong>" + txt + "(copy by fun from outter script tag)</strong>";
}

function showText3 () {
    var txt = document.getElementById('origin4').innerHTML;
    var show = document.getElementById('showBox4');
    show.innerHTML = "<strong>" + txt + "(copy by fun from outter script tag)</strong>";
}

function showText4 () {
    var txt = document.getElementById('origin5').innerHTML;
    var show = document.getElementById('showBox5');
    show.innerHTML = "<strong>" + txt + "(copy by fun from outter script tag)</strong>";
}


//  function to get elements by class name
function getElementsByClassName ( startNode, className, tagType ) {
    var classElements = new Array();

    if( startNode == null ){
        startNode = document;
    }

    if( tagType == null ){
        tagType = '*';
    }

    var elements = startNode.getElementsByTagName( '' + tagType );
    var elemLen = elements.length;
    var pattern = new RegExp( "(^|\\s)" + className + "(\\s|$)" );

    for( i=0, j=0; i < elemLen; i++ ){
        if( pattern.test( elements[i].className) ){
            classElements[j] = elements[i];
            j++;
        }
    }

    return classElements;
}


/*
    The following js code is to test the js support for browser
*/

/*
    js for string_js.html
*/

//  output the result to screen
function outputResult ( divName, testObj, result ) {

    var root = document.getElementById( divName.toString() );
    var showDiv1 = root.childNodes[1];
    var showDiv3 = root.childNodes[5];

    showDiv1.innerHTML = "<a href='#' style='color: #585858;'><h4>" + testObj + "</h4></a>";

    if( result == true ){
        root.style.backgroundColor = "#65B749";
        showDiv3.innerHTML = testObj.toString() + " testing OK!";
    }
    else{
        root.style.backgroundColor = "#EA2E3C";
        showDiv3.innerHTML = testObj.toString() + " testing failed!"
    }
}

function outputContent ( resultContent, divName ) {
    var root = document.getElementById( divName.toString() );
    var showDiv = root.childNodes[3];

    showDiv.innerHTML = resultContent;
}

