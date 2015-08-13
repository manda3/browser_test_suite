function testMathObject () {
	
	testEOfMath ();

    testLN2OfMath ();

    testLN10OfMath ();

    testLOG2EOfMath ();

    testLOG10EOfMath ();

    testPIOfMath ();

    testSQRT1_2OfMath ();

    testSQRT2OfMath ();

    testAbsFuncOfMath ();

    testAcosFuncOfMath ();

    testAsinFuncOfMath ();

    testAtanFuncOfMath ();

    testAtan2FuncOfMath ();

    testCeilFuncOfMath ();

    testCosFuncOfMath ();

    testExpFuncOfMath ();

    testFloorFuncOfMath ();

    testLogFuncOfMath ();

    testMaxFuncOfMath ();

    testMinFuncOfMath ();

    testPowFuncOfMath ();

    testRandomFuncOfMath();

    testRoundFuncOfMath ();

    testSinFuncOfMath ();

    testSqrtFuncOfMath ();

    testTanFuncOfMath ();

    testToSourceFuncOfMath ();

    testValueOfFuncOfMath ();
}

function testEOfMath () {
	
    var testObj = "E";
    var divName = "E_math";

    try{
        var result = Math.E;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 2.718281828459045 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLN2OfMath () {
    
    var testObj = "LN2";
    var divName = "LN2_math";

    try{
        var result = Math.LN2;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.6931471805599453 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLN10OfMath () {
    
    var testObj = "LN10";
    var divName = "LN10_math";

    try{
        var result = Math.LN10;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 2.302585092994046 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLOG2EOfMath () {
    
    var testObj = "LOG2E";
    var divName = "LOG2E_math";

    try{
        var result = Math.LOG2E;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.4426950408889634 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLOG10EOfMath () {
    
    var testObj = "LOG10E";
    var divName = "LOG10E_math";

    try{
        var result = Math.LOG10E;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.4342944819032518 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPIOfMath () {
    
    var testObj = "PI";
    var divName = "PI_math";

    try{
        var result = Math.PI;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 3.141592653589793 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSQRT1_2OfMath () {
    
    var testObj = "SQRT1_2";
    var divName = "SQRT1_2_math";

    try{
        var result = Math.SQRT1_2;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.7071067811865476 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSQRT2OfMath () {
    
    var testObj = "SQRT2";
    var divName = "SQRT2_math";

    try{
        var result = Math.SQRT2;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.4142135623730951 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAbsFuncOfMath () {
    
    var testObj = "abs function";
    var divName = "abs_func_math";

    try{
        var result = Math.abs(-7.25);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 7.25 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAcosFuncOfMath () {
    
    var testObj = "acos function";
    var divName = "acos_func_math";

    try{
        var result = Math.acos(0.5);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.0471975511965979 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAsinFuncOfMath () {
    
    var testObj = "asin function";
    var divName = "asin_func_math";

    try{
        var result = Math.asin(0.5);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.5235987755982989 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAtanFuncOfMath () {
    
    var testObj = "atan function";
    var divName = "atan_func_math";

    try{
        var result = Math.atan(2);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.1071487177940904 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAtan2FuncOfMath () {
    
    var testObj = "atan2 function";
    var divName = "atan2_func_math";

    try{
        var result = Math.atan2(8,4);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1.1071487177940904 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testCeilFuncOfMath () {
    
    var testObj = "ceil function";
    var divName = "ceil_func_math";

    try{
        var result = Math.ceil(1.4);
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

function testCosFuncOfMath () {
    
    var testObj = "cos function";
    var divName = "cos_func_math";

    try{
        var result = Math.cos(3);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == -0.9899924966004454 || result == -0.9899924966004446 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testExpFuncOfMath () {
    
    var testObj = "exp function";
    var divName = "exp_func_math";

    try{
        var result = Math.exp(1);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 2.718281828459045 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testFloorFuncOfMath () {
    
    var testObj = "floor function";
    var divName = "floor_func_math";

    try{
        var result = Math.floor(1.6);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLogFuncOfMath () {
    
    var testObj = "log function";
    var divName = "log_func_math";

    try{
        var result = Math.log(2);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.6931471805599453 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMaxFuncOfMath () {
    
    var testObj = "max function";
    var divName = "max_func_math";

    try{
        var result = Math.max(5,10);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 10 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testMinFuncOfMath () {
    
    var testObj = "min function";
    var divName = "min_func_math";

    try{
        var result = Math.min(5,10);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 5 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPowFuncOfMath () {
    
    var testObj = "pow function";
    var divName = "pow_func_math";

    try{
        var result = Math.pow(4,3);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 64 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testRandomFuncOfMath () {
    
    var testObj = "random function";
    var divName = "random_func_math";

    try{
        var result = Math.random();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result >= 0 && result < 1 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}


function testRoundFuncOfMath () {
    
    var testObj = "round function";
    var divName = "round_func_math";

    try{
        var result = Math.round(2.5);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 3 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSinFuncOfMath () {
    
    var testObj = "sin function";
    var divName = "sin_func_math";

    try{
        var result = Math.sin(3);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 0.1411200080598672 || result == 0.141120008059867 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSqrtFuncOfMath () {
    
    var testObj = "sqrt function";
    var divName = "sqrt_func_math";

    try{
        var result = Math.sqrt(9);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 3 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testTanFuncOfMath () {
    
    var testObj = "tan function";
    var divName = "tan_func_math";

    try{
        var result = Math.tan(90);
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == -1.995200412208242 || result == -1.9952004122082416 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToSourceFuncOfMath () {
    
    var testObj = "toSource function";
    var divName = "toSource_func_math";

    try{
        var obj = Math.sqrt(9);
        var result = obj.toSource();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "(new Number(3))" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testValueOfFuncOfMath () {
    
    var testObj = "valueOf function";
    var divName = "valueOf_func_math";

    try{
        var obj = Math.sqrt(9);
        var result = obj.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 3 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}