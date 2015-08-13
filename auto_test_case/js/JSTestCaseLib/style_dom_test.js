//	function for global use

function setSubDivSizeAndPosition ( elemId ) {
	var div = document.getElementById('' + elemId );
	var subDivs = div.getElementsByTagName('div');
	for (var i = subDivs.length - 1; i >= 0; i--) {
		subDivs[i].style.height = "150px";
		subDivs[i].style.width = "150px";

		subDivs[i].style.cssFloat = "left";
		subDivs[i].style.margin = "8px";
	};
}

function setSubDivSizeAndPosWithPara ( elemId, height, width, margin ) {
	var div = document.getElementById('' + elemId );
	var subDivs = div.getElementsByTagName('div');
	for (var i = subDivs.length - 1; i >= 0; i--) {
		subDivs[i].style.height = height;
		subDivs[i].style.width = width;

		subDivs[i].style.cssFloat = "left";
		subDivs[i].style.margin = margin;
	};
}

function setSubDivBackground ( elemId ) {
	var div = document.getElementById('' + elemId );
	var subDivs = div.getElementsByTagName('div');
	for (var i = subDivs.length - 1; i >= 0; i--) {
		subDivs[i].style.backgroundColor = "yellow";
	};
}


//	function for element testing

function testBorderOfStyle () {
	var bor = document.getElementById('border_style_js');
	var borLeft = document.getElementById('borderLeft_style_js');
	var borRight = document.getElementById('borderRight_style_js');
	var borTop = document.getElementById('borderTop_style_js');
	var borBottom = document.getElementById('borderBottom_style_js');

	bor.style.border = "5px solid black";
	borLeft.style.borderLeft = "5px solid black";
	borRight.style.borderRight = "5px solid black";
	borTop.style.borderTop = "5px solid black";
	borBottom.style.borderBottom = "5px solid black"

	setSubDivSizeAndPosition ( 'border_style_dom_js' );
	setSubDivBackground('border_style_dom_js');
}

function testBorderColorOfStyle () {
	var bor = document.getElementById('borderColor_style_js');
	var borLeft = document.getElementById('borderLeftColor_style_js');
	var borRight = document.getElementById('borderRightColor_style_js');
	var borTop = document.getElementById('borderTopColor_style_js');
	var borBottom = document.getElementById('borderBottomColor_style_js');

	bor.style.border = "5px solid";
	bor.style.borderColor = "red";

	borLeft.style.borderLeft = "5px solid";
	borLeft.style.borderLeftColor = "blue";

	borRight.style.borderRight = "5px solid";
	borRight.style.borderRightColor = "green";

	borTop.style.borderTop = "5px solid";
	borTop.style.borderTopColor = "orange";

	borBottom.style.borderBottom = "5px solid";
	borBottom.style.borderBottomColor = "pink";
	

	setSubDivSizeAndPosition ( 'borderColor_style_dom_js' );
	setSubDivBackground('borderColor_style_dom_js');
}

function testBorderStyleOfStyle () {
	var bor = document.getElementById('borderStyle_style_js');
	var borLeft = document.getElementById('borderLeftStyle_style_js');
	var borRight = document.getElementById('borderRightStyle_style_js');
	var borTop = document.getElementById('borderTopStyle_style_js');
	var borBottom = document.getElementById('borderBottomStyle_style_js');

	bor.style.border = "8px";
	bor.style.borderStyle = "solid";
	bor.style.borderColor = "red";

	borLeft.style.borderLeft = "8px";
	borLeft.style.borderLeftStyle = "dotted";
	borLeft.style.borderLeftColor = "blue";

	borRight.style.borderRight = "8px";
	borRight.style.borderRightStyle = "dashed";
	borRight.style.borderRightColor = "green";

	borTop.style.borderTop = "8px";
	borTop.style.borderTopStyle = "double";
	borTop.style.borderTopColor = "black";

	borBottom.style.borderBottom = "8px";
	borBottom.style.borderBottomStyle = "groove";
	borBottom.style.borderBottomColor = "gray";
	

	setSubDivSizeAndPosition ( 'borderStyle_style_dom_js' );
	setSubDivBackground('borderStyle_style_dom_js');
}

function testBorderWidthOfStyle () {
	var bor = document.getElementById('borderWidth_style_js');
	var borLeft = document.getElementById('borderLeftWidth_style_js');
	var borRight = document.getElementById('borderRightWidth_style_js');
	var borTop = document.getElementById('borderTopWidth_style_js');
	var borBottom = document.getElementById('borderBottomWidth_style_js');

	bor.style.borderWidth = "5px";
	bor.style.borderStyle = "solid";
	bor.style.borderColor = "red";

	borLeft.style.borderLeftWidth = "10px";
	borLeft.style.borderLeftStyle = "solid";
	borLeft.style.borderLeftColor = "blue";

	borRight.style.borderRightWidth = "15px";
	borRight.style.borderRightStyle = "solid";
	borRight.style.borderRightColor = "green";

	borTop.style.borderTopWidth = "20px";
	borTop.style.borderTopStyle = "solid";
	borTop.style.borderTopColor = "black";

	borBottom.style.borderBottomWidth = "25px";
	borBottom.style.borderBottomStyle = "solid";
	borBottom.style.borderBottomColor = "gray";
	

	setSubDivSizeAndPosition ( 'borderWidth_style_dom_js' );
	setSubDivBackground('borderWidth_style_dom_js');
}

function testMarginOfStyle () {
	var mar = document.getElementById('margin_style_js');
	var marLeft = document.getElementById('marginLeft_style_js');
	var marRight = document.getElementById('marginRight_style_js');
	var marTop = document.getElementById('marginTop_style_js');
	var marBottom = document.getElementById('marginBottom_style_js');
	var startNode = document.getElementById('margin_style_dom_js');
	var outerboxArray = getElementsByClassName( startNode, 'outbox_style_js', 'div' );

	mar.style.margin = "20px";
	marLeft.style.marginLeft = "20px";
	marRight.style.marginRight = "20px";
	marTop.style.marginTop = "20px";
	marBottom.style.marginBottom = "20px";
	mar.style.height = "100px";
	marLeft.style.height = "100px";
	marRight.style.height = "100px";
	marTop.style.height = "100px";
	marBottom.style.height = "100px";
	mar.style.width = "100px";
	marLeft.style.width = "100px";
	marRight.style.width = "100px";
	marTop.style.width = "100px";
	marBottom.style.width = "100px";
	mar.style.backgroundColor = "yellow";
	marLeft.style.backgroundColor = "yellow";
	marRight.style.backgroundColor = "yellow";
	marTop.style.backgroundColor = "yellow";
	marBottom.style.backgroundColor = "yellow";
	mar.style.cssFloat = "left";
	marLeft.style.cssFloat = "left";
	marRight.style.cssFloat = "left";
	marTop.style.cssFloat = "left";
	marBottom.style.cssFloat = "left";

	for (var i = outerboxArray.length - 1; i >= 0; i--) {
		outerboxArray[i].style.height = "200px";
		outerboxArray[i].style.width = "200px";
		outerboxArray[i].style.border = "2px solid red";
		outerboxArray[i].style.cssFloat = "left";
		outerboxArray[i].style.marginLeft = "8px";
	};	
	
}

function testOutlineOfStyle () {
	var outl = document.getElementById('outline_style_js');

	outl.style.outline = "5px solid black";

	setSubDivSizeAndPosition ( 'outline_style_dom_js' );
	setSubDivBackground('outline_style_dom_js');
}

function testOutlineColorOfStyle () {
	var outl = document.getElementById('outlineColor_style_js');
	var outl2 = document.getElementById('outlineColor2_style_js');
	var outl3 = document.getElementById('outlineColor3_style_js');
	
	outl.style.outline = "5px solid";
	outl.style.outlineColor = "red";
	outl2.style.outline = "5px solid";
	outl2.style.outlineColor = "blue";
	outl3.style.outline = "5px solid";
	outl3.style.outlineColor = "green";

	setSubDivSizeAndPosition ( 'outlineColor_style_dom_js' );
	setSubDivBackground('outlineColor_style_dom_js');
}

function testOutlineStyleOfStyle () {
	var outl = document.getElementById('outlineStyle_style_js');
	var outl2 = document.getElementById('outlineStyle2_style_js');
	var outl3 = document.getElementById('outlineStyle3_style_js');
	
	outl.style.outline = "8px";
	outl.style.outlineStyle = "dotted";
	outl.style.outlineColor = "black";
	outl2.style.outline = "8px";
	outl2.style.outlineStyle = "double";
	outl2.style.outlineColor = "green";
	outl3.style.outline = "8px";
	outl3.style.outlineStyle = "groove";
	outl3.style.outlineColor = "gray";

	setSubDivSizeAndPosition ( 'outlineStyle_style_dom_js' );
	setSubDivBackground('outlineStyle_style_dom_js');
}

function testOutlineWidthOfStyle () {
	var outl = document.getElementById('outlineWidth_style_js');
	var outl2 = document.getElementById('outlineWidth2_style_js');
	var outl3 = document.getElementById('outlineWidth3_style_js');
	
	outl.style.outlineWidth = "4px";
	outl.style.outlineStyle = "dotted";
	outl.style.outlineColor = "black";
	outl2.style.outlineWidth = "7px";
	outl2.style.outlineStyle = "double";
	outl2.style.outlineColor = "green";
	outl3.style.outlineWidth = "10px";
	outl3.style.outlineStyle = "groove";
	outl3.style.outlineColor = "gray";

	setSubDivSizeAndPosition ( 'outlineWidth_style_dom_js' );
	setSubDivBackground('outlineWidth_style_dom_js');
}

function testPaddingOfStyle () {
	var padd = document.getElementById('padding_style_js');
	var paddLeft = document.getElementById('paddingLeft_style_js');
	var paddRight = document.getElementById('paddingRight_style_js');
	var paddTop = document.getElementById('paddingTop_style_js');
	var paddBottom = document.getElementById('paddingBottom_style_js');

	padd.style.padding = "20px";
	paddLeft.style.paddingLeft = "25px";
	paddRight.style.paddingRight = "25px";
	paddTop.style.paddingTop = "25px";
	paddBottom.style.paddingBottom = "25px";

	setSubDivSizeAndPosWithPara ( 'padding_style_dom_js', '200px', '200px', '8px' );
	setSubDivBackground('padding_style_dom_js');
}

function testClearOfStyle () {
	 var pForClear = document.getElementById('p_clear_style_js');
	 var imgForClear = document.getElementById('img_clear_style_js');

	 imgForClear.style.cssFloat = "left";
	 pForClear.style.clear = "left";
}

function testClipOfStyle () {
	var imgForClip = document.getElementById('img_clip_style_js');

	imgForClip.style.position = "absolute";
	imgForClip.style.clip = "rect(0px 100px 200px 0px)";
}

function testContentOfStyle () {
	var showBox = document.getElementById('show_content_style_js');

	showBox.style.content = "http://www.google.com";
}

function testCssFloatOfStyle () {
	 
	 var imgForCssFloat = document.getElementById('img_cssFloat_style_js');

	 imgForCssFloat.style.cssFloat = "left";
	 
}

function testCursorOfStyle () {
	var link = document.getElementById('span_cursor_style_js');

	link.style.cursor = "pointer";
}

function testDirectionOfStyle () {
	var txt = document.getElementById('p_direction_style_js');

	txt.style.direction = "rtl";
	txt.style.border = "1px solid red";
}

function testDisplayOfStyle () {
	var txt = document.getElementById('p_display_style_js');

	txt.style.display = "none";
	txt.style.border = "1px solid red";
}

function testHeightOfStyle () {
	var divOfHeight = document.getElementById('div_height_style_js');

	divOfHeight.style.height = "200px";
	divOfHeight.style.width = "200px";
	divOfHeight.style.backgroundColor = "pink";
}

function testMaxHeightOfStyle () {
	var pOfMaxH = document.getElementById('p_maxHeight_style_js');

	pOfMaxH.style.backgroundColor = "orange";
	pOfMaxH.style.maxHeight = "50px";
}

function testMaxWidthOfStyle () {
	var pOfMaxW = document.getElementById('p_maxWidth_style_js');

	pOfMaxW.style.backgroundColor = "orange";
	pOfMaxW.style.maxWidth = "100px"; 
}

function testMinHeightOfStyle () {
	var pOfMinH = document.getElementById('p_minHeight_style_js');

	pOfMinH.style.backgroundColor = "orange";
	pOfMinH.style.minHeight = "100px";
}

function testMinWidthOfStyle () {
	var pOfMinW = document.getElementById('p_minWidth_style_js');

	pOfMinW.style.backgroundColor = "orange";
	pOfMinW.style.minWidth = "150px";
}

function testOverflowOfStyle () {
	var divScol = document.getElementById('scroll_overflow_style_js');
	var divHidd = document.getElementById('hidden_overflow_style_js');

	divScol.style.width = "100px";
	divScol.style.height = "100px";
	divScol.style.backgroundColor = "blue";
	divScol.style.overflow = "scroll";
	divHidd.style.width = "100px";
	divHidd.style.height = "100px";
	divHidd.style.backgroundColor = "green";
	divHidd.style.overflow = "hidden";
}

function testVerticalAlignOfStyle () {
	var tdOfVerti = document.getElementById('td_verti_style_js');

	tdOfVerti.style.verticalAlign = "bottom";
}

function testVisibilityOfStyle () {
	var divOfVisi = document.getElementById('div_visibility_style_js');
	var pOfVisi = document.getElementById('p_visibility_style_js');

	divOfVisi.style.width = "400px";
	divOfVisi.style.height = "200px";
	divOfVisi.style.backgroundColor = "orange";
	pOfVisi.style.width = "300px";
	pOfVisi.style.height = "100px";
	pOfVisi.style.backgroundColor = "yellow";
	pOfVisi.style.visibility = "hidden";
}

function testWidthOfStyle () {
	var divOfWidth = document.getElementById('div_width_style_js');

	divOfWidth.style.height = "200px";
	divOfWidth.style.width = "200px";
	divOfWidth.style.backgroundColor = "pink";
}

function testListStyleOfStyle () {
	var list1 = document.getElementById('one_listStyle_style_js');
	var list2 = document.getElementById('two_listStyle_style_js');

	list1.style.listStyle = "decimal inside";
	list1.style.cssFloat = "left";
	list2.style.listStyle = "circle outside";
	list2.style.cssFloat = "left";
}

function testListStyleImageOfStyle () {
	var list1 = document.getElementById('one_listStyleImage_style_js');
	var list2 = document.getElementById('two_listStyleImage_style_js');

	
	list1.style.listStyle = "inside";
	list1.style.listStyleImage = "url('../images/star.gif')";
	list1.style.cssFloat = "left";
	list1.style.width = "150px";
	
	list2.style.listStyle = "outside";
	list2.style.listStyleImage = "url('../images/star.gif')";
	list2.style.cssFloat = "left";
	list2.style.width = "150px";
}

function testListStylePositionOfStyle () {
	var list1 = document.getElementById('one_listStylePosition_style_js');
	var list2 = document.getElementById('two_listStylePosition_style_js');

	list1.style.listStyle = "decimal";
	list1.style.listStylePosition = "inside";
	list1.style.cssFloat = "left";
	list2.style.listStyle = "circle"
	list2.style.listStylePosition = "outside";
	list2.style.cssFloat = "left";
}

function testListStyleTypeOfStyle () {
	var list1 = document.getElementById('one_listStyleType_style_js');
	var list2 = document.getElementById('two_listStyleType_style_js');

	list1.style.listStyleType = "decimal";
	list1.style.listStylePosition = "inside";
	list1.style.cssFloat = "left";
	list2.style.listStyleType = "circle";
	list2.style.listStylePosition = "outside";
	list2.style.cssFloat = "left";
}

function testBottomOfStyle () {
	var img1 = document.getElementById('star1_bottom_style_js');
	var img2 = document.getElementById('star2_bottom_style_js');

	img1.style.position = "relative";
	img1.style.bottom = "-200px";
	img2.style.position = "relative";
	img2.style.bottom = "-150px";
}

function testLeftOfStyle () {
	var img1 = document.getElementById('star1_left_style_js');
	var img2 = document.getElementById('star2_left_style_js');

	img1.style.position = "relative";
	img1.style.left = "100px";
	img2.style.position = "relative";
	img2.style.left = "150px";
}

function testPositionOfStyle () {
	var header = document.getElementById('h2_position_style_js');

	header.style.position = "absolute";
	header.style.left = "100px";
	header.style.top = "150px";
}

function testRightOfStyle () {
	var img1 = document.getElementById('star1_right_style_js');
	var img2 = document.getElementById('star2_right_style_js');

	img1.style.position = "absolute";
	img1.style.right = "100px";
	img2.style.position = "absolute";
	img2.style.right = "200px";
}

function testTopOfStyle () {
	var img1 = document.getElementById('star1_top_style_js');
	var img2 = document.getElementById('star2_top_style_js');

	img1.style.position = "relative";
	img1.style.top = "200px";
	img2.style.position = "relative";
	img2.style.top = "250px";
}

function testZIndexOfStyle () {
	var img = document.getElementById('img_zIndex_style_js');

	img.style.position = "absolute";
	img.style.zIndex = -1;
}

function testBorderCollapseOfStyle () {
	var table = document.getElementById('table_borderCollapse_style_js');
	var tds = document.getElementsByTagName('td');
	var ths = document.getElementsByTagName('th');

	for (var i = tds.length - 1; i >= 0; i--) {
		tds[i].style.border = "1px solid black";
	};

	for (var i = ths.length - 1; i >= 0; i--) {
		ths[i].style.border = "1px solid black";
	};
	
	table.style.border = "1px solid black";
	table.style.borderCollapse = "separate";
	table.style.borderSpacing = "10px 50px";
}

function testBorderSpacingOfStyle () {
	var table = document.getElementById('table_borderSpacing_style_js');
	var tds = document.getElementsByTagName('td');
	var ths = document.getElementsByTagName('th');

	for (var i = tds.length - 1; i >= 0; i--) {
		tds[i].style.border = "1px solid black";
	};

	for (var i = ths.length - 1; i >= 0; i--) {
		ths[i].style.border = "1px solid black";
	};
	
	table.style.border = "1px solid black";
	table.style.borderCollapse = "separate";
	table.style.borderSpacing = "10px 50px";
}

function testEmptyCellsOfStyle () {
	var table = document.getElementById('table_emptyCells_style_js');
	var tds = document.getElementsByTagName('td');
	var ths = document.getElementsByTagName('th');

	for (var i = tds.length - 1; i >= 0; i--) {
		tds[i].style.border = "1px solid black";
	};

	for (var i = ths.length - 1; i >= 0; i--) {
		ths[i].style.border = "1px solid black";
	};
	
	table.style.border = "1px solid black";
	table.style.borderCollapse = "separate";
	table.style.borderSpacing = "10px 10px";
	table.style.emptyCells = "hide";
}

function testTableLayoutOfStyle () {
	var tables = document.getElementsByTagName('table');
	var ex1Tab = document.getElementById('ex1_tableLayout_style_js');
	var ex2Tab = document.getElementById('ex2_tableLayout_style_js');

	for (var i = tables.length - 1; i >= 0; i--) {
		tables[i].style.border = "1px solid black";
		tables[i].style.width = "100%";
	};

	ex2Tab.style.tableLayout = "fixed";
	ex1Tab.style.tableLayout = "auto";
}

function testColorOfStyle () {
	var txt = document.getElementById('p2_color_style_js');

	txt.style.color = "red";
}

function testFontOfStyle () {
	var txt1 = document.getElementById('p1_font_style_js');
	var txt2 = document.getElementById('p2_font_style_js');

	txt1.style.font = "15px arial,sans-serif";
	txt2.style.font = "italic bold 12px/30px Georgia,serif";
}

function testFontFamilyOfStyle () {
	var txt1 = document.getElementById('p1_fontFamily_style_js');
	var txt2 = document.getElementById('p2_fontFamily_style_js');

	txt1.style.fontFamily = "'Times New Roman', Times, serif";
	txt2.style.fontFamily = "Arial, Helvetica, sans-serif";
}

function testFontSizeOfStyle () {
	var txt1 = document.getElementById('h1_fontSize_style_js');
	var txt2 = document.getElementById('p_fontSize_style_js');

	txt1.style.fontSize = "400%";
	txt2.style.fontSize = "200%";
}

function testFontStyleOfStyle () {
	var txt1 = document.getElementById('ex2_fontStyle_style_js');
	var txt2 = document.getElementById('ex3_fontStyle_style_js');

	txt1.style.fontStyle = "italic";
	txt2.style.fontStyle = "oblique";
}

function testFontVariantOfStyle () {
	var txt1 = document.getElementById('ex1_fontVariant_style_js');
	var txt2 = document.getElementById('ex2_fontVariant_style_js');

	txt1.style.fontVariant = "normal";
	txt2.style.fontVariant = "small-caps";
}

function testFontWeightOfStyle () {
	var txt1 = document.getElementById('ex2_fontWeight_style_js');
	var txt2 = document.getElementById('ex3_fontWeight_style_js');

	txt1.style.fontWeight = "lighter";
	txt2.style.fontWeight = "bold";
}

function testLetterSpacingOfStyle () {
	var txt1 = document.getElementById('ex1_letterSpacing_style_js');
	var txt2 = document.getElementById('ex2_letterSpacing_style_js');

	txt1.style.letterSpacing = "2px";
	txt2.style.letterSpacing = "-3px";
}

function testLineHeightOfStyle () {
	var txt1 = document.getElementById('ex2_lineHeight_style_js');
	var txt2 = document.getElementById('ex3_lineHeight_style_js');

	txt1.style.lineHeight = "70%";
	txt2.style.lineHeight = "200%";
}

function testQuotesOfStyle () {
	var quo1 = document.getElementById('q1_quotes_style_js');
	var quo2 = document.getElementById('q2_quotes_style_js');

	quo1.style.quotes = " '«' '»' '‹' '›' ";
	quo2.style.quotes = " '«' '»' '‹' '›' ";
}

function testTextAlignOfStyle () {
	var head1 = document.getElementById('ex1_textAlign_style_js');
	var head2 = document.getElementById('ex2_textAlign_style_js');
	var head3 = document.getElementById('ex3_textAlign_style_js');

	head1.style.textAlign = "center";
	head2.style.textAlign = "left";
	head3.style.textAlign = "right";
}

function testTextDecoratioin () {
	var head1 = document.getElementById('ex1_textDecoration_style_js');
	var head2 = document.getElementById('ex2_textDecoration_style_js');
	var head3 = document.getElementById('ex3_textDecoration_style_js');

	head1.style.textDecoration = "overline";
	head2.style.textDecoration = "line-through";
	head3.style.textDecoration = "underline";
}

function testTextIndentOfStyle () {
	var p = document.getElementById('p_textIndent_style_js');

	p.style.textIndent = "50px";
}

function testTextShadowOfStyle () {
	var head = document.getElementById('h_textShadow_style_js');

	head.style.textShadow = "2px 2px #FF0000";
}

function testTextTransformOfStyle () {
	var p1 = document.getElementById('uppercase_textTransform_style_js');
	var p2 = document.getElementById('lowercase_textTransform_style_js');
	var p3 = document.getElementById('capitalize_textTransform_style_js');

	p1.style.textTransform = "uppercase";
	p2.style.textTransform = "lowercase";
	p3.style.textTransform = "capitalize";
}

function testWhiteSpaceOfStyle () {
	var p = document.getElementById('p_whiteSpace_style_js');

	p.style.whiteSpace = "nowrap";
}

function testWordSpacingOfStyle () {
	var p = document.getElementById('p_wordSpacing_style_dom_js');

	p.style.wordSpacing = "30px";
}

function testBackgroundOfStyle () {
	var div = document.getElementById('div_background_style_js');

	div.style.background = "red";
	div.style.height = "100px";
	div.style.width = "200px";
}

function testBackgroundColorOfStyle () {
	var div = document.getElementById('div_backgroundColor_style_js');

	div.style.height = "400px";
	div.style.width = "600px";
	div.style.backgroundColor = "blue";
}

function testBackgourndImageOfStyle () {
	var div = document.getElementById('div_backgroundImage_style_js');

	div.style.height = "400px";
	div.style.width = "600px";
	div.style.backgroundImage = "url(../images/Aurora.jpg)";
}

function testBackgourndAttachmentOfStyle () {
	var div = document.getElementById('div_backgroundAttachment_style_js');

	div.style.height = "400px";
	div.style.width = "600px";
	div.style.backgroundImage = "url(../images/Aurora.jpg)";
	div.style.backgroundAttachment = "fixed";
}

function formatDivForBR ( obj, url, val ) {
	obj.style.backgroundImage = "url(" + url + ")";
	obj.style.backgroundRepeat = val;
	obj.style.height = "60px";
}

function testBackgroundRepeatOfStyle () {
	var div1 = document.getElementById('no-repeat_backgroundRepeat_style_js');
	var div2 = document.getElementById('repeat_backgroundRepeat_style_js');
	var div3 = document.getElementById('repeat-x_backgroundRepeat_style_js');
	var div4 = document.getElementById('repeat-y_backgroundRepeat_style_js');

	formatDivForBR( div1, '../images/star.gif', 'no-repeat' );
	formatDivForBR( div2, '../images/star.gif', 'repeat');
	formatDivForBR( div3, '../images/star.gif', 'repeat-x');
	formatDivForBR( div4, '../images/star.gif', 'repeat-y');
}

function formatDivForPO ( obj, url, val ) {
	obj.style.backgroundImage = "url(" + url + ")";
	obj.style.height = "60px";
	obj.style.width = "220px";
	obj.style.backgroundColor = "#FFFFCC";
	obj.style.backgroundRepeat = "no-repeat";
	obj.style.backgroundPosition = val;
}

function testBackgroundPositionOfStyle () {
	var div1 = document.getElementById('center_backgroundPosition_style_js');
	var div2 = document.getElementById('bottom_backgroundPosition_style_js');
	var div3 = document.getElementById('top_backgroundPosition_style_js');
	var div4 = document.getElementById('left_backgroundPosition_style_js');
	var div5 = document.getElementById('right_backgroundPosition_style_js');
	var div6 = document.getElementById('percentage_backgroundPosition_style_js');

	formatDivForPO( div1, '../images/star.gif', 'center' );
	formatDivForPO( div2, '../images/star.gif', 'bottom');
	formatDivForPO( div3, '../images/star.gif', 'top');
	formatDivForPO( div4, '../images/star.gif', 'left');
	formatDivForPO( div5, '../images/star.gif', 'right');
	formatDivForPO( div6, '../images/star.gif', '25% 75%');
}

function formatDivForPOXY ( obj, url, val ) {
	obj.style.backgroundImage = "url(" + url + ")";
	obj.style.height = "60px";
	obj.style.width = "220px";
	obj.style.backgroundColor = "#FFFFCC";
	obj.style.backgroundRepeat = "no-repeat";
	obj.style.backgroundPosition = val;
}

function testBackgroundPositionXOfStyle () {
	var div1 = document.getElementById('ex1_backgroundPositionX_style_js');
	var div2 = document.getElementById('ex2_backgroundPositionX_style_js');

	formatDivForPOXY(div1, '../images/star.gif', 'center');
	formatDivForPOXY(div2, '../images/star.gif', 'right');
}

function testBackgroundPositionYOfStyle () {
	var div1 = document.getElementById('ex1_backgroundPositionY_style_js');
	var div2 = document.getElementById('ex2_backgroundPositionY_style_js');

	formatDivForPOXY(div1, '../images/star.gif', 'center');
	formatDivForPOXY(div2, '../images/star.gif', 'bottom');
}