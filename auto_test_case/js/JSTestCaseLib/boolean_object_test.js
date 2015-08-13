function testBooleanObject () {

	testConstructorOfBoolean ();

	testPrototypeOfBoolean ();

	testToSourceFuncOfBoolean ();

	testToStringFuncOfBoolean ();

	testValueOfFuncOfBoolean ();

}

function testConstructorOfBoolean () {
	
    var testObj = "constructor";
    var divName = "constructor_boolean";

    var myFalse = new Boolean( false );

    try{
        var result = myFalse.constructor;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == Boolean ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPrototypeOfBoolean () {
	
    var testObj = "prototype";
    var divName = "prototype_boolean";

    try{
    	Boolean.prototype.showDetail = function() {
    		return this.valueOf();
    	};

    	var obj = Boolean( 'haha' );
        var result = obj.showDetail();
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

function testToSourceFuncOfBoolean () {
	
    var testObj = "toSource function";
    var divName = "toSource_func_boolean";

    var myFalse = new Boolean( false );

    try{
        var result = myFalse.toSource();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "(new Boolean(false))" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToStringFuncOfBoolean () {
	
    var testObj = "toString function";
    var divName = "toString_func_boolean";

    var myFalse = new Boolean( false );

    try{
        var result = myFalse.toString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "false" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testValueOfFuncOfBoolean () {
	
    var testObj = "valueOf function";
    var divName = "valueOf_func_boolean";

    var myFalse = new Boolean( false );

    try{
        var result = myFalse.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == false ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}