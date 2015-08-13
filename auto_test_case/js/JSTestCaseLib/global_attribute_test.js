function testGlobalAttribute () {

	testInfinityOfGlobalAttr ();

	testJavaOfGlobalAttr ();

	testNaNOfGlobalAttr ();

	testUndefinedOfGlobalAttr ();

	testPackagesOfGlobalAttr ();
}

function testInfinityOfGlobalAttr () {
	
    var testObj = "Infinity";
    var divName = "infinity_global_attribute";

    var x = Infinity;
	var y = -Infinity;
    try{
        var result = x + "<br>" + y;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( x == 1.7976931348623157E+10308 && y == -1.7976931348623157E+10308 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testJavaOfGlobalAttr () {
	
    var testObj = "java";
    var divName = "java_global_attribute";

    try{
        var result = new Packages.java.lang.String("Hello, world");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Hello, world" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testNaNOfGlobalAttr () {
	
    var testObj = "NaN";
    var divName = "NaN_global_attribute";

    try{
    	var notNum = NaN;
        var result = notNum;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( isNaN( result ) ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testUndefinedOfGlobalAttr () {
	
    var testObj = "undefined";
    var divName = "undefined_global_attribute";

    try{
    	var notNum;
        var result = notNum;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( notNum === undefined ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPackagesOfGlobalAttr () {
	
    var testObj = "Packages";
    var divName = "packages_global_attribute";

    try{
        var result = new Packages.java.lang.String("Hello, world");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Hello, world" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}