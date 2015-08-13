function testGlobalFunction () {

	testDecodeURIFuncOfGlobalFunc ();

	testDecodeURIComponentFuncOfGlobalFunc ();

	testEncodeURIFuncOfGlobalFunc ();

	testEncodeURIComponentFuncOfGlobalFunc ();

	testEscapeFuncOfGlobalFunc ();

	testEvalFuncOfGlobalFunc ();

	testGetClassFuncOfGlobalFunc ();

	testIsFiniteFuncOfGlobalFunc ();

	testIsNaNFuncOfGlobalFunc ();

	testNumberFuncOfGlobalFunc ();

	testParseFloatFuncOfGlobalFunc ();

	testParseIntFuncOfGlobalFunc ();

	testStringFuncOfGlobalFunc ();

	testUnescapeFuncOfGlobalFunc ();
}

function testDecodeURIFuncOfGlobalFunc () {
	
    var testObj = "decodeURI function";
    var divName = "decodeURI_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEncode = encodeURI( url );
        var result = decodeURI( uriEncode );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my test.asp?name=st�le&car=saab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testDecodeURIComponentFuncOfGlobalFunc () {
	
    var testObj = "decodeURICompo\nnent function";
    var divName = "decodeURIComponent_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEncode = encodeURIComponent( url );
        var result = decodeURIComponent( uriEncode );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my test.asp?name=st�le&car=saab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testEncodeURIFuncOfGlobalFunc () {
	
    var testObj = "encodeURI function";
    var divName = "encodeURI_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEncode = encodeURI( url );
        var result = uriEncode;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my%20test.asp?name=st%EF%BF%BDle&car=saab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testEncodeURIComponentFuncOfGlobalFunc () {
	
    var testObj = "encodeURICompo\nnent function";
    var divName = "encodeURIComponent_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEncode = encodeURIComponent( url );
        var result = uriEncode;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my%20test.asp%3Fname%3Dst%EF%BF%BDle%26car%3Dsaab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testEscapeFuncOfGlobalFunc () {
	
    var testObj = "escape function";
    var divName = "escape_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEscape = escape( url );
        var result = uriEscape;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my%20test.asp%3Fname%3Dst%uFFFDle%26car%3Dsaab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testEvalFuncOfGlobalFunc () {
	
    var testObj = "eval function";
    var divName = "eval_func_global_func";

    var x = 10;
    var y = 20;

    try{
        var result = eval("x*y-y");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 180 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetClassFuncOfGlobalFunc () {
	
    var testObj = "getClass function";
    var divName = "getClass_func_global_func";

    try{
    	var obj = new Packages.java.lang.String("Hello, world");
        var result = getClass( obj );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result.toString() == "java.lang.String" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testIsFiniteFuncOfGlobalFunc () {
	
    var testObj = "isFinite function";
    var divName = "isFinite_func_global_func";

    var x = 10;
    var y = -Infinity;

    try{
        var result = isFinite( x ) + "  " + isFinite( y );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "true  false" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testIsNaNFuncOfGlobalFunc () {
	
    var testObj = "isNaN function";
    var divName = "isNaN_func_global_func";

    var x = NaN;

    try{
        var result = isNaN( x );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == true ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testNumberFuncOfGlobalFunc () {
	
    var testObj = "Number function";
    var divName = "Number_func_global_func";

    var obj = new String("887");

    try{
        var result = Number(obj);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 887 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testParseFloatFuncOfGlobalFunc () {
	
    var testObj = "parseFloat function";
    var divName = "parseFloat_func_global_func";

    try{
        var result = parseFloat( "1.414" );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.414 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testParseIntFuncOfGlobalFunc () {
	
    var testObj = "parseInt function";
    var divName = "parseInt_func_global_func";

    try{
        var result = parseInt( "37.44" );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 37 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testStringFuncOfGlobalFunc () {
	
    var testObj = "String function";
    var divName = "String_func_global_func";

    try{
        var result = String( 37.44 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result === "37.44" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testUnescapeFuncOfGlobalFunc () {
	
    var testObj = "unescape function";
    var divName = "unescape_func_global_func";

    var url = "my test.asp?name=st�le&car=saab";

    try{
    	var uriEscape = escape( url );
        var result = unescape( uriEscape );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "my test.asp?name=st�le&car=saab" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}