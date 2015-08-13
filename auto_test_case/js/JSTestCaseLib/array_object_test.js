function testArrayObject () {

	testConstructorOfArray ();

	testLengthOfArray ();

	testPrototypeOfArray ();

	testConcatFuncOfArray ();

	testJoinFuncOfArray ();

	testPopFuncOfArray ();

	testPushFuncOfArray ();

	testReverseFuncOfArray ();

	testShiftFuncOfArray ();

	testSliceFuncOfArray ();

	testSortFuncOfArray ();

	testSpliceFuncOfArray ();

	testToSourceFuncOfArray ();

	testToStringFuncOfArray ();

	testUnshiftFuncOfArray ();

	testToLocaleStringFuncOfArray ();

	testValueOfFuncOfArray ();
}

function testConstructorOfArray () {
	
    var testObj = "constructor";
    var divName = "constructor_array";

    var x = new Array( 1, 2, 3, 4 );

    try{
        var result = x.constructor;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( x.constructor == Array ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testLengthOfArray () {
	
    var testObj = "length";
    var divName = "length_array";

    var x = new Array( 1, 2, 3, 4 );

    try{
        var result = x.length;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 4 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPrototypeOfArray () {
	
    var testObj = "prototype";
    var divName = "prototype_array";

    var x = new Array( 1, 2, 3, 4 );

    try{
        Array.prototype.returnArrayLength = function() {
        	return this.length;
        };

        var result = x.returnArrayLength();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 4 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testConcatFuncOfArray () {
	
    var testObj = "concat function";
    var divName = "concat_func_array";

    var x = new Array( 1, 2, 3, 4 );
    var y = new Array( 5, 6, 7, 8 );
    var z = new Array( 9, 10 );

    try{
        var result = x.concat( y, z );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1,2,3,4,5,6,7,8,9,10" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testJoinFuncOfArray () {
	
    var testObj = "join function";
    var divName = "join_func_array";

    var x = new Array( 1, 2, 3, 4 );

    try{
        var result = x.join( "+" );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1+2+3+4" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPopFuncOfArray () {

	var testObj = "pop function";
    var divName = "pop_func_array";

    var x = new Array( "America", "Japan", "China" );

    try{
    	x.pop();
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "America,Japan" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testPushFuncOfArray () {

	var testObj = "push function";
    var divName = "push_func_array";

    var x = new Array( "America", "Japan" );

    try{
    	x.push( "China" );
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "America,Japan,China" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testReverseFuncOfArray () {

	var testObj = "reverse function";
    var divName = "reverse_func_array";

    var x = new Array( "America", "Japan" );

    try{
    	x.reverse();
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Japan,America" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testShiftFuncOfArray () {

	var testObj = "shift function";
    var divName = "shift_func_array";

    var x = new Array( "America", "Japan", "China" );

    try{
    	x.shift();
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "Japan,China" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSliceFuncOfArray () {

	var testObj = "slice function";
    var divName = "slice_func_array";

    var x = new Array( "America", "Japan", "China" );

    try{
        var result = x.slice( 0, 2 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "America,Japan" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSortFuncOfArray () {

	var testObj = "sort function";
    var divName = "sort_func_array";

    var x = new Array( "America", "Japan", "English" );

    try{
        var result = x.sort();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "America,English,Japan" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSortFuncOfArray () {

	var testObj = "sort function";
    var divName = "sort_func_array";

    var x = new Array( "America", "Japan", "English" );

    try{
        var result = x.sort();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "America,English,Japan" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSpliceFuncOfArray () {

	var testObj = "splice function";
    var divName = "splice_func_array";

    var x = new Array( "angel", "clown", "mandarin", "surgeon" );

    try{
    	x.splice( 3, 1 );
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "angel,clown,mandarin" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToSourceFuncOfArray () {

	var testObj = "toSource function";
    var divName = "toSource_func_array";

    var x = new Array( "angel", "clown" );

    try{
        var result = x.toSource();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "[\"angel\", \"clown\"]" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToStringFuncOfArray () {

	var testObj = "toString function";
    var divName = "toString_func_array";

    var x = new Array( "angel", "clown" );

    try{
        var result = x.toString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "angel,clown" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testUnshiftFuncOfArray () {

	var testObj = "unshift function";
    var divName = "unshift_func_array";

    var x = new Array( "angel", "clown" );

    try{
    	x.unshift( "kali", "bingo" );
        var result = x;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "kali,bingo,angel,clown" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToLocaleStringFuncOfArray () {

	var testObj = "toLocaleString function";
    var divName = "toLocaleString_func_array";

    var num = 1444;
    var x = new Array( num, "clown" );

    try{
        var result = x.toLocaleString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1444,clown" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testValueOfFuncOfArray () {

	var testObj = "valueOf function";
    var divName = "valueOf_func_array";

    var x = new Array( "angel", "clown" );

    try{
        var result = x.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "angel,clown" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}