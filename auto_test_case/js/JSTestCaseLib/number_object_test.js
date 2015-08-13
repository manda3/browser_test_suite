function testNumberObject () {

	testConstructorOfNumber ();

	testMAX_VALUEOfNumber ();

	testMIN_VALUEOfNumber ();

	testNaNOfNumber ();

	testNEGATIVE_INFINITYOfNumber ();

	testPOSITIVE_INFINITYOfNumber ();

	testToStringFuncOfNumber ();

	testToLocaleStringFuncOfNumber ();

	testToFixedFuncOfNumber ();

	testToExponentialFuncOfNumber ();

	testToPrecisionFuncOfNumber ();

	testValueOfFuncOfNumber ();
}

function testConstructorOfNumber () {
	
    var testObj = "constructor";
    var divName = "constructor_number";

    try{
    	var num = new Number( 1.414 );
        var result = num.constructor;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == Number ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMAX_VALUEOfNumber () {
	
    var testObj = "MAX_VALUE";
    var divName = "MAX_VALUE_number";

    try{
        var result = Number.MAX_VALUE;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.7976931348623157e+308 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMIN_VALUEOfNumber () {
	
    var testObj = "MIN_VALUE";
    var divName = "MIN_VALUE_number";

    try{
        var result = Number.MIN_VALUE;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 5e-324 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testNaNOfNumber () {
	
    var testObj = "NaN";
    var divName = "NaN_number";

    try{
        var result = Number.NaN;
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

function testNEGATIVE_INFINITYOfNumber () {
	
    var testObj = "NEGATIVE_INFINITY";
    var divName = "NEGATIVE_INFINITY_number";

    try{
        var result = Number.NEGATIVE_INFINITY;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == -Infinity ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPOSITIVE_INFINITYOfNumber () {
	
    var testObj = "POSITIVE_INFINITY";
    var divName = "POSITIVE_INFINITY_number";

    try{
        var result = Number.POSITIVE_INFINITY;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == Infinity ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToStringFuncOfNumber () {
	
    var testObj = "toString function";
    var divName = "toString_func_number";

    try{
    	var num = new Number( 1.414 )
        var result = num.toString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1.414" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToLocaleStringFuncOfNumber () {
	
    var testObj = "toLocaleString function";
    var divName = "toLocaleString_func_number";

    try{
    	var num = new Number( 14444.414 )
        var result = num.toLocaleString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "14444.414" || result == "14,444.414" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToFixedFuncOfNumber () {
	
    var testObj = "toFixed function";
    var divName = "toFixed_func_number";

    try{
    	var num = new Number( 1.414 )
        var result = num.toFixed(1);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.4 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToExponentialFuncOfNumber () {
	
    var testObj = "toExponential function";
    var divName = "toExponential_func_number";

    try{
    	var num = new Number( 5.56789 )
        var result = num.toExponential();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 5.56789e+0 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToPrecisionFuncOfNumber () {
	
    var testObj = "toPrecision function";
    var divName = "toPrecision_func_number";

    try{
    	var num = new Number( 5.56789 )
        var result = num.toPrecision(2);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 5.6 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testValueOfFuncOfNumber () {
	
    var testObj = "valueOf function";
    var divName = "valueOf_func_number";

    try{
    	var num = new Number( 5.56789 )
        var result = num.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 5.56789 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}