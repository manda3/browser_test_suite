function testRegExpObject () {
	
	testIOfRegExp ();

	testGOfRegExp ();

	testMOfRegExp ();

	testGlobalOfRegExp ();

	testIgnoreCaseOfRegExp ();

	testLastIndexOfRegExp ();

	testMultilineOfRegExp ();

	testSourceOfRegExp ();

	testCompileFuncOfRegExp ();

	testExecFuncOfRegExp ();

	testTestFuncOfRegExp ();
}

function testIOfRegExp () {
	
    var testObj = "i";
    var divName = "i_regexp";

    try{
    	var str = "Microsoft Google Amazon";
    	var patt = new RegExp("google", "i");
        var result = str.match( patt );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Google" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGOfRegExp () {
	
    var testObj = "g";
    var divName = "g_regexp";

    try{
    	var str = "Is this all there is?";
    	var patt = new RegExp("is", "g");
        var result = str.match( patt );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "is,is" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMOfRegExp () {
	
    var testObj = "m";
    var divName = "m_regexp";

    try{
    	var str = "\nIs th\nis h\nis?";
    	var patt = new RegExp("^is", "gmi");
        var result = str.match( patt );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Is,is,is" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGlobalOfRegExp () {
	
    var testObj = "global";
    var divName = "global_regexp";

    try{
    	var str = "Is this all there is?";
    	var patt = new RegExp("is", "g");
        var result = patt.global;
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

function testIgnoreCaseOfRegExp () {
	
    var testObj = "ignoreCase";
    var divName = "ignoreCase_regexp";

    try{
    	var str = "Microsoft Google Amazon";
    	var patt = new RegExp("google", "i");
        var result = patt.ignoreCase;
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

function testLastIndexOfRegExp () {
	
    var testObj = "lastIndex";
    var divName = "lastIndex_regexp";

    try{
    	var str = "hi";
    	var patt = new RegExp("(hi)?", "g");
    	patt.exec( str );
        var result = patt.lastIndex;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 2 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMultilineOfRegExp () {
	
    var testObj = "multiline";
    var divName = "multiline_regexp";

    try{
    	var str = "\nIs th\nis h\nis?";
    	var patt = new RegExp("^is", "gmi");
        var result = patt.multiline;
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

function testSourceOfRegExp () {
	
    var testObj = "source";
    var divName = "source_regexp";

    try{
    	var str = "\nIs th\nis h\nis?";
    	var patt = new RegExp("^is", "gmi");
        var result = patt.source;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "^is" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testCompileFuncOfRegExp () {
	
    var testObj = "compile function";
    var divName = "compile_func_regexp";

    try{
    	var str = "AaBbCcDdEeFfGgHhIiJjKkLl";
    	var patt = new RegExp();
    	patt.compile("[a-z]", "g");
        var result = str.match( patt );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "a,b,c,d,e,f,g,h,i,j,k,l" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testExecFuncOfRegExp () {
	
    var testObj = "exec function";
    var divName = "exec_func_regexp";

    try{
    	var str = "AaBbCcDdEeFfGgHhIiJjKkLl";
    	var patt = new RegExp("[a-z]", "g");
    	var tmp = patt.exec( str );
    	var result = "";
    	while( tmp != null ){
    		result = result + tmp;
    		tmp = patt.exec( str );
    	}
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "abcdefghijkl" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testTestFuncOfRegExp () {
	
    var testObj = "test function";
    var divName = "test_func_regexp";

    try{
    	var str = "\nIs th\nis h\nis?";
    	var patt = new RegExp("^is", "gmi");
        var result = patt.test( str );
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