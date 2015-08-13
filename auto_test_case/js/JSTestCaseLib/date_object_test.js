function testDateObject () {

	testConstructorOfDate ();

	testPrototypeOfDate ();

	testDateFuncOfDate ();

	testGetDateFuncOfDate ();

	testGetDayFuncOfDate ();

	testGetMonthFuncOfDate ();

	testGetFullYearFuncOfDate ();

	testGetYearFuncOfDate ();

	testGetHoursFuncOfDate ();

	testGetMinutesFuncOfDate ();

	testGetSecondsFuncOfDate ();

	testGetMillisecondsFuncOfDate ();

	testGetTimeFuncOfDate ();

	testGetTimezoneOffsetFuncOfDate ();

	testGetUTCDateFuncOfDate ();

	testGetUTCDayFuncOfDate ();

    testGetUTCMonthFuncOfDate ();

    testGetUTCFullYearFuncOfDate ();

    testGetUTCHoursFuncOfDate ();

    testGetUTCMinutesFuncOfDate ();

    testGetUTCSecondsFuncOfDate ();

    testGetUTCMillisecondsFuncOfDate ();

    testParseFuncOfDate ();

    testSetDateFuncOfDate ();

    testSetMonthFuncOfDate ();

    testSetFullYearFuncOfDate ();

    testSetYearFuncOfDate ();

    testSetHoursFuncOfDate ();

    testSetMinutesFuncOfDate ();

    testSetSecondsFuncOfDate ();

    testSetMillisecondsFuncOfDate ();

    testSetTimeFuncOfDate ();

    testSetUTCDateFuncOfDate ();

    testSetUTCMonthFuncOfDate ();

    testSetUTCFullYearFuncOfDate ();

    testSetUTCHoursFuncOfDate ();

    testSetUTCMinutesFuncOfDate ();

    testSetUTCSecondsFuncOfDate ();

    testSetUTCMillisecondsFuncOfDate ();

    testToSourceFuncOfDate ();

    testToStringFuncOfDate ();

    testToTimeStringFuncOfDate ();

    testToDateStringFuncOfDate ();

    testToGMTStringFuncOfDate ();

    testToUTCStringFuncOfDate ();

    testToLocaleStringFuncOfDate ();

    testToLocaleTimeStringFuncOfDate ();

    testToLocaleDateStringFuncOfDate ();

    testUTCFuncOfDate ();

    testValueOfFuncOfDate ();
}

function testConstructorOfDate () {
	

    var testObj = "constructor";
    var divName = "constructor_date";

    var year = 2014;
    var month = 1;
    var day = 1;
    var x = new Date( year, month-1, day );

    try{
        var result = x.constructor;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( x.constructor == Date ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }

}

function testPrototypeOfDate () {
	
    var testObj = "prototype";
    var divName = "prototype_date";

    try{
        Date.prototype.returnDateObj = function() {
            return [this.getFullYear(), this.getMonth()+1];
        };

        var year = 2014;
        var month = 1;
        var day = 1;
        var obj = new Date( year, month-1, day );
        var result = obj.returnDateObj();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "2014,1" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testDateFuncOfDate () {
	
    var testObj = "Date function";
    var divName = "Date_func_date";

    var year = 2014;
    var month = 1;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = [date.getFullYear(), date.getMonth()+1];
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2014,1" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetDateFuncOfDate () {
	
    var testObj = "getDate function";
    var divName = "getDate_func_date";

    var year = 2014;
    var month = 1;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getDate();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetDayFuncOfDate () {
	
    var testObj = "getDay function";
    var divName = "getDay_func_date";

    var year = 2014;
    var month = 2;
    var day = 14;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getDay();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "5" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetMonthFuncOfDate () {
	
    var testObj = "getMonth function";
    var divName = "getMonth_func_date";

    var year = 2014;
    var month = 2;
    var day = 14;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getMonth()+1;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetFullYearFuncOfDate () {
	var testObj = "getFullYear function";
    var divName = "getFullYear_func_date";

    var year = 2014;
    var month = 12;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2014" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetYearFuncOfDate () {
	var testObj = "getYear function";
    var divName = "getYear_func_date";

    var year = 2014;
    var month = 12;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "114" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetHoursFuncOfDate () {
	var testObj = "getHours function";
    var divName = "getHours_func_date";

    var year = 2014;
    var month = 12;
    var day = 1;
    var hour = 11;

    try{
        var date = new Date( year, month-1, day, hour );

        var result = date.getHours();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "11" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetMinutesFuncOfDate () {
	var testObj = "getMinutes function";
    var divName = "getMinutes_func_date";

    var year = 2014;
    var month = 12;
    var day = 1;
    var hour = 12;
    var minute = 45;

    try{
        var date = new Date( year, month-1, day, hour, minute );

        var result = date.getMinutes();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "45" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetSecondsFuncOfDate () {
	var testObj = "getSeconds function";
    var divName = "getSeconds_func_date";

    var year = 2016;
    var month = 11;
    var day = 9;
    var hour = 12;
    var minute = 48;
    var second = 59;

    try{
        var date = new Date( year, month-1, day, hour, minute, second );

        var result = date.getSeconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "59" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetMillisecondsFuncOfDate () {
	var testObj = "getMilliseconds function";
    var divName = "getMilliseconds_func_date";

    var year = 2016;
    var month = 11;
    var day = 9;
    var hour = 12;
    var minute = 48;
    var second = 59;
    var millisecond = 998;

    try{
        var date = new Date( year, month-1, day, hour, minute, second, millisecond );

        var result = date.getMilliseconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "998" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetTimeFuncOfDate () {
	var testObj = "getTime function";
    var divName = "getTime_func_date";

    var year = 1987;
    var month = 11;
    var day = 9;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getTime();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "563385600000" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetTimezoneOffsetFuncOfDate () {
	var testObj = "getTimezoneOffset function";
    var divName = "getTimezoneOffset_func_date";

    var year = 2014;
    var month = 2;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = date.getTimezoneOffset();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "-480" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCDateFuncOfDate () {
	var testObj = "getUTCDate function";
    var divName = "getUTCDate_func_date";

    try{
        var date = new Date();

        var result = date.getUTCDate();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result >= 1 && result <= 31 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCDayFuncOfDate () {
	var testObj = "getUTCDay function";
    var divName = "getUTCDay_func_date";

    try{
        var date = new Date();

        var result = date.getUTCDay();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result >= 0 && result <= 6 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCMonthFuncOfDate () {
    var testObj = "getUTCMonth function";
    var divName = "getUTCMonth_func_date";

    try{
        var date = new Date();

        var result = date.getUTCMonth();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result >= 0 && result <= 11 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCFullYearFuncOfDate () {
    var testObj = "getUTCFullYear function";
    var divName = "getUTCFullYear_func_date";

    try{
        var date = new Date();

        var result = date.getUTCFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCHoursFuncOfDate () {
    var testObj = "getUTCHours function";
    var divName = "getUTCHours_func_date";

    try{
        var date = new Date();

        var result = date.getUTCHours();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result <= 23 && result >= 0 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCMinutesFuncOfDate () {
    var testObj = "getUTCMinutes function";
    var divName = "getUTCMinutes_func_date";

    try{
        var date = new Date();

        var result = date.getUTCMinutes();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result <= 59 && result >= 0 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCSecondsFuncOfDate () {
    var testObj = "getUTCSeconds function";
    var divName = "getUTCSeconds_func_date";

    try{
        var date = new Date();

        var result = date.getUTCSeconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result <= 59 && result >= 0 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testGetUTCMillisecondsFuncOfDate () {
    var testObj = "getUTCMilliseconds function";
    var divName = "getUTCMilliseconds_func_date";

    try{
        var date = new Date();

        var result = date.getUTCMilliseconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null && result <= 999 && result >= 0 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testParseFuncOfDate () {
    var testObj = "parse function";
    var divName = "parse_func_date";

    var year = 2014;
    var month = 1;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = Date.parse( date );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetDateFuncOfDate () {
    var testObj = "setDate function";
    var divName = "setDate_func_date";

    try{
        var date = new Date();

        date.setDate( 15 );

        var result = date.getDate();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "15" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetMonthFuncOfDate () {
    var testObj = "setMonth function";
    var divName = "setMonth_func_date";

    try{
        var date = new Date();

        date.setMonth( 1 );

        var result = date.getMonth()+1;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetFullYearFuncOfDate () {
    var testObj = "setFullYear function";
    var divName = "setFullYear_func_date";

    try{
        var date = new Date();

        date.setFullYear( 2020 );

        var result = date.getFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2020" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetFullYearFuncOfDate () {
    var testObj = "setFullYear function";
    var divName = "setFullYear_func_date";

    try{
        var date = new Date();

        date.setFullYear( 2020 );

        var result = date.getFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2020" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetYearFuncOfDate () {
    var testObj = "setYear function";
    var divName = "setYear_func_date";

    try{
        var date = new Date();

        date.setYear( 2020 );

        var result = date.getFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2020" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetHoursFuncOfDate () {
    var testObj = "setHours function";
    var divName = "setHours_func_date";

    try{
        var date = new Date();

        date.setHours( 15 );

        var result = date.getHours();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "15" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetMinutesFuncOfDate () {
    var testObj = "setMinutes function";
    var divName = "setMinutes_func_date";

    try{
        var date = new Date();

        date.setMinutes( 44 );

        var result = date.getMinutes();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "44" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetSecondsFuncOfDate () {
    var testObj = "setSeconds function";
    var divName = "setSeconds_func_date";

    try{
        var date = new Date();

        date.setSeconds( 44 );

        var result = date.getSeconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "44" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetMillisecondsFuncOfDate () {
    var testObj = "setMilliseconds function";
    var divName = "setMilliseconds_func_date";

    try{
        var date = new Date();

        date.setMilliseconds( 144 );

        var result = date.getMilliseconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "144" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetTimeFuncOfDate () {
    var testObj = "setTime function";
    var divName = "setTime_func_date";

    try{
        var date = new Date();

        date.setTime( 563385600000 );

        var result = [date.getFullYear(),date.getMonth()+1,date.getDate()];
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "1987,11,9" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCDateFuncOfDate () {
    var testObj = "setUTCDate function";
    var divName = "setUTCDate_func_date";

    try{
        var date = new Date();

        date.setUTCDate( 14 );

        var result = date.getUTCDate();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "14" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCMonthFuncOfDate () {
    var testObj = "setUTCMonth function";
    var divName = "setUTCMonth_func_date";

    try{
        var date = new Date();

        date.setUTCMonth( 1 );

        var result = date.getUTCMonth()+1;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCFullYearFuncOfDate () {
    var testObj = "setUTCFullYear function";
    var divName = "setUTCFullYear_func_date";

    try{
        var date = new Date();

        date.setUTCFullYear( 2020 );

        var result = date.getUTCFullYear();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "2020" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCHoursFuncOfDate () {
    var testObj = "setUTCHours function";
    var divName = "setUTCHours_func_date";

    try{
        var date = new Date();

        date.setUTCHours( 15 );

        var result = date.getUTCHours();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "15" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCMinutesFuncOfDate () {
    var testObj = "setUTCMinutes function";
    var divName = "setUTCMinutes_func_date";

    try{
        var date = new Date();

        date.setUTCMinutes( 44 );

        var result = date.getUTCMinutes();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "44" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCSecondsFuncOfDate () {
    var testObj = "setUTCSeconds function";
    var divName = "setUTCSeconds_func_date";

    try{
        var date = new Date();

        date.setUTCSeconds( 44 );

        var result = date.getUTCSeconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "44" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testSetUTCMillisecondsFuncOfDate () {
    var testObj = "setUTCMilliseconds function";
    var divName = "setUTCMilliseconds_func_date";

    try{
        var date = new Date();

        date.setUTCMilliseconds( 447 );

        var result = date.getUTCMilliseconds();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "447" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToSourceFuncOfDate () {
    var testObj = "toSource function";
    var divName = "toSource_func_date";

    var year = 2014;
    var month = 1;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );

        var result = date.toSource();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == "(new Date(1388505600000))" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToStringFuncOfDate () {
    var testObj = "toString function";
    var divName = "toString_func_date";

    try{
        var date = new Date();

        var result = date.toString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToTimeStringFuncOfDate () {
    var testObj = "toTimeString function";
    var divName = "toTimeString_func_date";

    try{
        var date = new Date();

        var result = date.toTimeString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToDateStringFuncOfDate () {
    var testObj = "toDateString function";
    var divName = "toDateString_func_date";

    try{
        var date = new Date();

        var result = date.toDateString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToGMTStringFuncOfDate () {
    var testObj = "toGMTString function";
    var divName = "toGMTString_func_date";

    try{
        var date = new Date();

        var result = date.toGMTString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToUTCStringFuncOfDate () {
    var testObj = "toUTCString function";
    var divName = "toUTCString_func_date";

    try{
        var date = new Date();

        var result = date.toUTCString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToLocaleStringFuncOfDate () {
    var testObj = "toLocaleString function";
    var divName = "toLocaleString_func_date";

    try{
        var date = new Date();

        var result = date.toLocaleString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToLocaleTimeStringFuncOfDate () {
    var testObj = "toLocaleTimeString function";
    var divName = "toLocaleTimeString_func_date";

    try{
        var date = new Date();

        var result = date.toLocaleTimeString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testToLocaleDateStringFuncOfDate () {
    var testObj = "toLocaleDateString function";
    var divName = "toLocaleDateString_func_date";

    try{
        var date = new Date();

        var result = date.toLocaleDateString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result != null ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testUTCFuncOfDate () {
    var testObj = "UTC function";
    var divName = "UTC_func_date";

    try{
        var result = Date.UTC( 2014, 10, 10 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1415577600000 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testValueOfFuncOfDate () {
    var testObj = "valueOf function";
    var divName = "valueOf_func_date";

    var year = 2020;
    var month = 1;
    var day = 1;

    try{
        var date = new Date( year, month-1, day );
        var result = date.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( result == 1577808000000 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}