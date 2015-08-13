function showForNavElem ( boxName, content ) {
	var showBox = document.getElementById( '' + boxName );

	showBox.innerHTML = '' + content;
	showBox.style.border = "1px solid red";
}

function testPluginsOfNav () {
	
	var plugins = navigator.plugins;
	var result = "";

	for (var i = plugins.length - 1; i >= 0; i--) {
		
		result = plugins[i].name + ";  " + result;
	};

	content = "The plugins of navigator is:  " + result + ".";
	showForNavElem( 'showBox_nav1', content );
}

function testAppCodeNameOfNav () {
	var content = "The appCodeName is: " + navigator.appCodeName;

	showForNavElem( 'showBox_nav2', content );
}

function testAppMinorVersionOfNav () {
	var content = "The appMinorVersion is: " + navigator.appMinorVersion;

	showForNavElem( 'showBox_nav3', content );
}

function testAppNameOfNav () {
	var content = "The appName is: " + navigator.appName;

	showForNavElem( 'showBox_nav4', content );
}

function testAppVersionOfNav () {
	var content = "The appVersion is: " + navigator.appVersion;

	showForNavElem( 'showBox_nav5', content );
}

function testBrowserLanguageOfNav () {
	//	navigator.language is ok
	var content = "The browserLanguage is: " + navigator.browserLanguage;

	showForNavElem( 'showBox_nav6', content );
}

function testCookieEnabledOfNav () {
	var content = "The cookieEnabled is: " + navigator.cookieEnabled;

	showForNavElem( 'showBox_nav7', content );
}

function testCpuClassOfNav () {
	var content = "The cpuClass is: " + navigator.cpuClass;

	showForNavElem( 'showBox_nav8', content );
}

function testOnLineOfNav () {
	var content = "The onLine is: " + navigator.onLine;

	showForNavElem( 'showBox_nav9', content );
}

function testPlatformOfNav () {
	var content = "The platform is: " + navigator.platform;

	showForNavElem( 'showBox_nav10', content );
}

function testSystemLanguageOfNav () {
	var content = "The systemLanguage is: " + navigator.systemLanguage;

	showForNavElem( 'showBox_nav11', content );
}

function testUserAgentOfNav () {
	var content = "The userAgent is: " + navigator.userAgent;

	showForNavElem( 'showBox_nav12', content );
}

function testUserLanguageOfNav () {
	var content = "The userLanguage is: " + navigator.userLanguage;

	showForNavElem( 'showBox_nav13', content );
}

function testTaintEnabledFuncOfNav () {
	var content = "Data tainting enabled: " + navigator.taintEnabled();

	showForNavElem( 'showBox_nav14', content );
}

function testJavaEnabledFuncOfNav () {
	var content = "Java Enabled:  " + navigator.javaEnabled();

	showForNavElem( 'showBox_nav15', content );
}