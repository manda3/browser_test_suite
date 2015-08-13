
function testStringObject () {
    testConstructorOfString ();

    testPrototypeOfString ();

    testLengthOfString ();

    testAnchorFuncOfString ();

    testBigFuncOfString();

    testBlinkFuncOfString ();

    testBoldFuncOfString ();

    testCharAtFuncOfString ();

    testCharCodeAtOfString ();

    testConcatFuncOfString ();

    testFixedFuncOfString ();

    testFontcolorFuncOfString ();

    testFontsizeFuncOfString ();

    testFromCharCodeFuncOfString ();

    testIndexOfFuncOfString ();

    testItalicsFuncOfString ();

    testLastIndexOfFuncOfString ();

    testLinkFuncOfString ();

    testLocaleCompareFuncOfString ();

    testMatchFuncOfString ();

    testReplaceFuncOfString ();

    testSearchFuncOfString ();

    testSliceFuncOfString ();

    testSmallFuncOfString ();

    testSplitFuncOfString ();

    testStrikeFuncOfString ();

    testSubFuncOfString ();

    testSubstrFuncOfString ();

    testSubstringFuncOfString ();

    testSupFuncOfString ();

    testToLocaleLowerCaseFuncOfString ();

    testToLocaleUpperCaseFuncOfString ();

    testToLowerCaseFuncOfString ();

    testToUpperCaseFuncOfString ();

    testToSourceFuncOfString ();

    testToStringFuncOfString ();

    testValueOfFuncOfString ();

}

function testConstructorOfString () {

    var testObj = "constructor";
    var divName = "constructor_string";

    var str = "Say goodbye to the world, China.";
    var x = new String(str);

    try{
        var result = x.constructor;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( x.constructor == String ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }

}

function testPrototypeOfString () {

    var testObj = "prototype";
    var divName = "prototype_string";

    try{
        String.prototype.addInformation = function( str ) {
            this.information = str;
        };

        var str = "Say goodbye to the world, China.";
        var obj = new String();
        obj.addInformation( str );

        var result = obj.information;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( obj.information == null ){
        outputResult( divName, testObj, false );
    }
    else{
        outputResult( divName, testObj, true );
    }

}

function testLengthOfString () {

    var testObj = "length";
    var divName = "length_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var len = str.length;

        var result = len;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    if( len == 32 ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testAnchorFuncOfString () {
    
    var testObj = "anchor function";
    var divName = "anchor_func_string";

    var str = new String( "click me" );

    try{
        var result = str.anchor("extra");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('anchor_func_string');
    var aTag = root.getElementsByTagName("a")[0];
    var attr = aTag.getAttribute("name");

    if( attr == "extra"){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testBigFuncOfString () {

    var testObj = "big function";
    var divName = "big_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.big();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('big_func_string');
    var tagObj = root.getElementsByTagName("big")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }

}

function testBlinkFuncOfString () {

    var testObj = "blink function";
    var divName = "blink_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.blink();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('blink_func_string');
    var tagObj = root.getElementsByTagName("blink")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testBoldFuncOfString () {
    var testObj = "bold function";
    var divName = "bold_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.bold();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('bold_func_string');
    var tagObj = root.getElementsByTagName("b")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testCharAtFuncOfString () {
    var testObj = "charAt function";
    var divName = "charAt_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var ch = str.charAt( 8 );
        var result = ch;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('charAt_func_string');
    var tagObj = root.getElementsByTagName("b")[0];
    
    if( ch == 'b' ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testCharCodeAtOfString () {
    var testObj = "charCodeAt function";
    var divName = "charCodeAt_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var charAscii = str.charCodeAt( 8 );
        var result = charAscii;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('charCodeAt_func_string');
    var tagObj = root.getElementsByTagName("b")[0];
    
    if( charAscii == 98 ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testConcatFuncOfString () {
    var testObj = "concat function";
    var divName = "concat_func_string";

    var str = "Say goodbye to the world, China."
    var str1 = new String( "Say goodbye to the world," );
    var str2 = new String( " China." );

    try{
        var result = str1.concat( str2 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    
    if( str == result ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testFixedFuncOfString () {
    var testObj = "fixed function";
    var divName = "fixed_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.fixed();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('fixed_func_string');
    var tagObj = root.getElementsByTagName("tt")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testFontcolorFuncOfString () {

    var testObj = "fontcolor function";
    var divName = "fontcolor_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.fontcolor("blue");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('fontcolor_func_string');
    var tagObj = root.getElementsByTagName("font")[0];
    var attr = tagObj.getAttribute("color");

    if( attr == "blue"){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testFontsizeFuncOfString () {

    var testObj = "fontsize function";
    var divName = "fontsize_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.fontsize( 4 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('fontsize_func_string');
    var tagObj = root.getElementsByTagName("font")[0];
    var attr = tagObj.getAttribute("size");

    if( attr == "4" ){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }
}

function testFromCharCodeFuncOfString () {

    var testObj = "fromCharCode function";
    var divName = "fromCharCode_func_string";

    try{
        var ch = String.fromCharCode( 65 );
        var result = ch;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    
    if( ch == 'A' ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testIndexOfFuncOfString () {
    var testObj = "indexOf function";
    var divName = "indexOf_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var pos = str.indexOf( "world" );
        var result = pos;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( pos == 19 ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testItalicsFuncOfString () {
    var testObj = "italics function";
    var divName = "italics_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.italics();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('italics_func_string');
    var tagObj = root.getElementsByTagName("i")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testLastIndexOfFuncOfString () {
    var testObj = "lastIndexOf function";
    var divName = "lastIndexOf_func_string";

    var str = new String( "Hello planet earth, you are a great planet." );

    try{
        var pos = str.lastIndexOf( "planet");
        var result = pos;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( pos == 36 ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testLinkFuncOfString () {
    
    var testObj = "link function";
    var divName = "link_func_string";

    var str = new String( "Google in English" );

    try{
        var result = str.link("http://www.google.com");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('link_func_string');
    var tagObj = root.getElementsByTagName("a")[0];
    var attr = tagObj.getAttribute("href");

    if( attr == "http://www.google.com"){
        outputResult( divName, testObj, true );
    }
    else{
        outputResult( divName, testObj, false );
    }

}

function testLocaleCompareFuncOfString () {
    var testObj = "localeCompare function";
    var divName = "localeCompare_func_string";

    var str1 = new String( "USA" );
    var str2 = new String( "China" );

    try{
        var result = str1.localeCompare( str2 );
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

function testMatchFuncOfString () {
    var testObj = "match function";
    var divName = "match_func_string";

    var str = new String( "The rain in SPAIN stays mainly in the plain." );

    try{
        var result = str.match( /ain/g );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "ain,ain,ain" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testReplaceFuncOfString () {
    var testObj = "replace function";
    var divName = "replace_func_string";

    var str = new String( "Visit Microsoft!" );

    try{
        var result = str.replace( "Microsoft", "Google" );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "Visit Google!" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testSearchFuncOfString () {
    var testObj = "search function";
    var divName = "search_func_string";

    var str = new String( "Visit Microsoft!" );

    try{
        var pos = str.search( "Microsoft" );
        var result = pos;
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == 6 ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testSliceFuncOfString () {
    var testObj = "slice function";
    var divName = "slice_func_string";

    var str = new String( "Visit Microsoft!" );

    try{
        var result = str.slice( 6, 15 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "Microsoft" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testSmallFuncOfString () {

    var testObj = "small function";
    var divName = "small_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.small();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('small_func_string');
    var tagObj = root.getElementsByTagName("small")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testSplitFuncOfString () {

    var testObj = "split function";
    var divName = "split_func_string";

    var str = new String( "How are you doing today?" );

    try{
        var result = str.split(" ");
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "How,are,you,doing,today?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testStrikeFuncOfString () {
    
    var testObj = "strike function";
    var divName = "strike_func_string";

    var str = new String( "Say goodbye to the world, China." );

    try{
        var result = str.strike();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('strike_func_string');
    var tagObj = root.getElementsByTagName("strike")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testSubFuncOfString () {

    var testObj = "sub function";
    var divName = "sub_func_string";

    var str = new String( "Say goodbye to the world, China." );
    var mark = new String( "yes, sir.");

    try{    
        var result = str + mark.sub();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('sub_func_string');
    var tagObj = root.getElementsByTagName("sub")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testSubstrFuncOfString () {
    
    var testObj = "substr function";
    var divName = "substr_func_string";

    var str = new String( "How are you doing today?" );

    try{
        var result = str.substr( 4, 3 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "are" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    }
}

function testSubstringFuncOfString () {
   
    var testObj = "substring function";
    var divName = "substring_func_string";

    var str = new String( "How are you doing today?" );

    try{
        var result = str.substring( 4, 7 );
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "are" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testSupFuncOfString () {
    
    var testObj = "sup function";
    var divName = "sup_func_string";

    var str = new String( "Say goodbye to the world, China." );
    var mark = new String( "yes, sir.");

    try{
        var result = str + mark.sup();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );

    var root = document.getElementById('sup_func_string');
    var tagObj = root.getElementsByTagName("sup")[0];
    
    if( tagObj == null ){
        outputResult( divName, testObj, false );
    }
    else{
       outputResult( divName, testObj, true ); 
    }
}

function testToLocaleLowerCaseFuncOfString () {
    
    var testObj = "toLocaleLowerCase function";
    var divName = "toLocaleLowerCase_func_string";

    var str = new String( "HOW ARE YOU DOING TODAY?" );

    try{
        var result = str.toLocaleLowerCase();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "how are you doing today?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testToLocaleUpperCaseFuncOfString () {
    
    var testObj = "toLocaleUpperCase function";
    var divName = "toLocaleUpperCase_func_string";

    var str = new String( "how are you doing today?" );

    try{
        var result = str.toLocaleUpperCase();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "HOW ARE YOU DOING TODAY?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testToLowerCaseFuncOfString () {
     
    var testObj = "toLowerCase function";
    var divName = "toLowerCase_func_string";

    var str = new String( "HOW ARE YOU DOING TODAY?" );

    try{
        var result = str.toLowerCase();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "how are you doing today?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testToUpperCaseFuncOfString () {
    
    var testObj = "toUpperCase function";
    var divName = "toUpperCase_func_string";

    var str = new String( "how are you doing today?" );

    try{
        var result = str.toUpperCase();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "HOW ARE YOU DOING TODAY?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testToStringFuncOfString () {
    
    var testObj = "toString function";
    var divName = "toString_func_string";

    var numb = "1234";

    try{
        var result = numb.toString();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "1234" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testValueOfFuncOfString () {
     
    var testObj = "valueOf function";
    var divName = "valueOf_func_string";

    var str = new String( "How are you doing today?" );

    try{
        var result = str.valueOf();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }
    outputContent( result, divName );
    
    if( result == "How are you doing today?" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}

function testToSourceFuncOfString () {
    
    var testObj = "toSource function";
    var divName = "toSource_func_string";

    var str = new String("Google");

    try{
        var result = str.toSource();
    }
    catch( e ){
        var result = "Your browser does not support it!";
    }

    outputContent( result, divName );
    
    if( result == "(new String(\"Google\"))" ){
        outputResult( divName, testObj, true );
    }
    else{
       outputResult( divName, testObj, false ); 
    } 
}