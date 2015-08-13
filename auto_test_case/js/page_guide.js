var Stack = ( function Stack () {

	var data = [];

	var pushStack = function pushStack ( elem ) {

		data.push( elem );
		
	};

	var popStack = function popStack () {

		if( !isEmpty() ) {

			return data.pop();

		}

		return null;
		
	};

	var isEmpty = function isEmpty () {

		return data.length == 0;
		
	};

	var initialize = function initialize () {

		data = [];
		
	}

	return {

		pushStack : pushStack,

		popStack : popStack,

		isEmpty : isEmpty,

		initialize : initialize

	};
	
}() );

//  page guide object
var PageGuide = (function pageGuide($) {

	//  page guides
	var guides = [];
	var guideAttrs = {};

	//  guide show methods
	var showMethods = ['sequence', 'cocurrent'];

	var showMethod = "cocurrent";

	//  target elements
	var targetElements;
	//  descriptions for targets
	var elemDescriptions;

	//	application related path
	var backgroundImgPath = "auto_test_case/images/page_guide/";

	//	prefix, suffix for guide element id and class name
	var guideSuffix = "-guide";
	var guideNavBtnSuffix = "-nav-btn";

	//  initialize the page guide 
	var initialize = function(targetElems, descriptions, guideShowMethod) {

		//  set show method
		showMethod = guideShowMethod;

		//  set target elements
		targetElements = targetElems;

		//  set target descriptions
		elemDescriptions = descriptions;

		//  get info for initializing
		var targetInfos = [];

		for (var i = 0; i < targetElements.length; i++) {

			var targetElem = targetElements[i];

			targetInfos.push(getElementInfo(
				targetElem, elemDescriptions[targetElem]));

		};

		console.log(targetInfos);

		//  set up page guide elements
		for (var i = 0; i < targetInfos.length; i++) {

			setUpGuide(targetInfos[i]);

		};

		console.log(guides);
		console.log(guideAttrs);

	}

	//  run application
	var run = function() {

		if (showMethod == null) {

			return false;

		}

		if (showMethods.indexOf(showMethod) == -1) {

			return false;

		}

		showGuide(guides);

		return true;

	}

	//  remove page guide
	var remove = function() {

		$('#page-guide').remove();

	}

	//  get element information
	function getElementInfo(element, elemDescription) {

		var elementInfo = {};

		var position = getElementPosition(element);

		elementInfo[element] = {

			'top': position['top'],

			'left': position['left'],

			'guide': elemDescription

		};

		return elementInfo;

	}

	//  return position {'top':top_vale, 'left':left_value} of element
	function getElementPosition(element) {

		var position = $('#' + element).position();

		var positionInfo = {
			'top': position.top,
			'left': position.left
		}

		return positionInfo;

	}

	//  set up the page guide elements
	function setUpGuide(elemInfo) {

		//  guide for element
		var elemGuide = {};
		//  attributes for guide
		var elemGuideAttr = {};

		//  nav button html for guide
		var navButtonHtml = '';

		for (elem in elemInfo) {

			var elemGuideID = elem + guideSuffix;

			if (showMethod == "sequence") {

				navButtonHtml =
					"<button class='nav-btn' id='" +
					elemGuideID + guideNavBtnSuffix + "'>" + "下一个" + "</button>";

			};

			//  set up guide for element
			var guide = $(

				"<div id='" + elemGuideID + "' class='description'></div>"

			).html(

				"<div class='description-container'>" +
				"<div class='comments'>" + elemInfo[elem]['guide'] + "</div>" + navButtonHtml +
				"</div>"

			);

			elemGuide[elem] = guide;

			guides.push(elemGuide);

			//  set up guide attributes
			elemGuideAttr['top'] = elemInfo[elem]['top'];
			elemGuideAttr['left'] = elemInfo[elem]['left'];

			guideAttrs[elemGuideID] = elemGuideAttr;

		}

		return true;

	}

	//  show guide
	function showGuide(guides) {

		var guideContainer = $("#guide-container");

		for (var i = 0; i < guides.length; i++) {

			var guide = guides[i];

			for (key in guide) {

				guideContainer.append(guide[key]);

			}

		};

		//  set up css attributes for element guide
		for (elemGuideID in guideAttrs) {

			// rerange pinning position of guide
			var pinPosition = rerangeGuidePosition(elemGuideID, guideAttrs[elemGuideID]);
			console.log(pinPosition);

			$("#" + elemGuideID).css({

				top: pinPosition['top'],

				left: pinPosition['left']

			});

			//	set the css of guide by position type
			decorateGuide(pinPosition['position_type'], elemGuideID);

		}

		//	process guide show logic by show method
		processGuideShowLogic();

	}

	//	rerange guide position
	function rerangeGuidePosition(guideID, guideAttr) {

		//	element info
		var guideInfo = {};
		var targetInfo = {};
		var canvasInfo = {};

		//	get guide initial position and guide size
		var guideTop = guideAttr['top'];
		var guideLeft = guideAttr['left'];

		var guideHeight = $('#' + guideID).height();
		var guideWidth = $('#' + guideID).width();

		guideInfo[guideID] = {

			'top': guideTop,

			'left': guideLeft,

			'height': guideHeight,

			'width': guideWidth

		};

		//	get targert id from guide, then get target size
		var targetID = guideID.slice(0, guideID.indexOf('-guide'));
		console.log(targetID);
		var targetOfGuide = $('#' + targetID);

		var targetHeight = targetOfGuide.height();
		var targetWidth = targetOfGuide.width();

		targetInfo[targetID] = {

			'height': targetHeight,

			'width': targetWidth

		};

		//	get document body size
		var DOMHeight = $(document).height();
		var DOMWidth = $(document).width();

		canvasInfo['document'] = {

			'height': DOMHeight,

			'width': DOMWidth

		};

		//	decide gudie pin position
		var pinPosition = decidePinPosition(guideID, guideInfo,
			targetID, targetInfo, 'document', canvasInfo);

		//	return pin position
		return pinPosition;

	}

	//	decide guide pin position
	function decidePinPosition(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr) {

		var result = getLeftTopPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr);

		var positionType = 'left_top';

		if (result == false) {

			result = getRightBottomPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr);

			positionType = 'right_bottom';

		}

		if (result == false) {

			result = getRightTopPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr);

			positionType = 'right_top';

		}

		if (result == false) {

			result = getLeftBottomPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr);

			positionType = 'left_bottom';

		}

		result['position_type'] = positionType;

		return result;

	}

	//	get proper pin position
	function getLeftTopPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr) {

		//	check left-top, if result x and y greater than zero, return it
		var targetLeftMargin = parseIntPlus($('#' + targetKey).css('marginLeft'));
		var targetTopMargin = parseIntPlus($('#' + targetKey).css('marginTop'));
		var targetLeftBorder = parseIntPlus($('#' + targetKey).css('borderLeft'));
		var targetTopBorder = parseIntPlus($('#' + targetKey).css('borderTop'));
		var targetLeftPadding = parseIntPlus($('#' + targetKey).css('paddingLeft'));
		var targetTopPadding = parseIntPlus($('#' + targetKey).css('paddingTop'));

		var initialValX = objInfoArr[objKey]['left'] + targetLeftMargin + targetLeftBorder + targetLeftPadding;
		var initialValY = objInfoArr[objKey]['top'] + targetTopMargin + targetTopBorder + targetTopPadding;

		var pinCheckX = initialValX - objInfoArr[objKey]['width'];
		var pinCheckY = initialValY - objInfoArr[objKey]['height'];

		if (pinCheckX > 0 && pinCheckY > 0) {

			var pinLeft = pinCheckX;
			var pinTop = pinCheckY;

			return {
				'left': pinLeft,
				'top': pinTop
			};

		}

		return false;

	}

	function getRightBottomPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr) {

		//	check right-bottom
		var targetRightMargin = parseIntPlus($('#' + targetKey).css('marginRight'));
		var targetBottomMargin = parseIntPlus($('#' + targetKey).css('marginBottom'));
		var targetRightBorder = parseIntPlus($('#' + targetKey).css('borderRight'));
		var targetBottomBorder = parseIntPlus($('#' + targetKey).css('borderBottom'));
		var targetRightPadding = parseIntPlus($('#' + targetKey).css('paddingRight'));
		var targetBottomPadding = parseIntPlus($('#' + targetKey).css('paddingBottom'));

		var initialValX = objInfoArr[objKey]['left'] + targetInfoArr[targetKey]['width'] -
			targetRightMargin - targetRightBorder - targetRightPadding;
		var initialValY = objInfoArr[objKey]['top'] + targetInfoArr[targetKey]['height'] -
			targetBottomMargin - targetBottomBorder - targetBottomPadding;

		var pinCheckX = initialValX + objInfoArr[objKey]['width'];
		var pinCheckY = initialValY + objInfoArr[objKey]['height'];

		if (pinCheckX < canvasInfoArr[canvasKey]['width'] &&
			pinCheckY < canvasInfoArr[canvasKey]['height']) {

			var pinLeft = initialValX;
			var pinTop = initialValY;

			return {
				'left': pinLeft,
				'top': pinTop
			};

		}

		return false;

	}

	function getRightTopPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr) {

		//	check right-top
		var targetRightMargin = parseIntPlus($('#' + targetKey).css('marginRight'));
		var targetTopMargin = parseIntPlus($('#' + targetKey).css('marginTop'));
		var targetRightBorder = parseIntPlus($('#' + targetKey).css('borderRight'));
		var targetTopBorder = parseIntPlus($('#' + targetKey).css('borderTop'));
		var targetRightPadding = parseIntPlus($('#' + targetKey).css('paddingRight'));
		var targetTopPadding = parseIntPlus($('#' + targetKey).css('paddingTop'));

		var initialValX = objInfoArr[objKey]['left'] + targetInfoArr[targetKey]['width'] -
			targetRightMargin - targetRightBorder - targetRightPadding;
		var initialValY = objInfoArr[objKey]['top'] + targetTopMargin + targetTopBorder + targetTopPadding;

		var pinCheckX = initialValX + objInfoArr[objKey]['width'];
		var pinCheckY = initialValY - objInfoArr[objKey]['height'];

		if (pinCheckX < canvasInfoArr[canvasKey]['width'] && pinCheckY > 0) {

			var pinLeft = initialValX;
			var pinTop = pinCheckY;

			return {
				'left': pinLeft,
				'top': pinTop
			};

		}

		return false;

	}

	function getLeftBottomPos(objKey, objInfoArr, targetKey, targetInfoArr, canvasKey, canvasInfoArr) {

		//	check left-bottom
		var targetLeftMargin = parseIntPlus($('#' + targetKey).css('marginLeft'));
		var targetBottomMargin = parseIntPlus($('#' + targetKey).css('marginBottom'));
		var targetLeftBorder = parseIntPlus($('#' + targetKey).css('borderLeft'));
		var targetBottomBorder = parseIntPlus($('#' + targetKey).css('borderBottom'));
		var targetLeftPadding = parseIntPlus($('#' + targetKey).css('paddingLeft'));
		var targetBottomPadding = parseIntPlus($('#' + targetKey).css('paddingBottom'));

		var initialValX = objInfoArr[objKey]['left'] + targetLeftMargin + targetLeftBorder + targetLeftPadding;
		var initialValY = objInfoArr[objKey]['top'] + targetInfoArr[targetKey]['height'] -
			targetBottomMargin - targetBottomBorder - targetBottomPadding;

		var pinCheckX = initialValX - objInfoArr[objKey]['width'];
		var pinCheckY = initialValY + objInfoArr[objKey]['height'];

		if (pinCheckX > 0 && pinCheckY < canvasInfoArr[canvasKey]['height']) {

			var pinLeft = pinCheckX;
			var pinTop = initialValY;

			return {
				'left': pinLeft,
				'top': pinTop
			};

		}

		return false;

	}

	function parseIntPlus(stringConv) {

		if (stringConv == "") {
			return 0;
		};

		var value = parseInt(stringConv);

		return value;

	}

	//	decorate guide according to position type
	function decorateGuide(positionType, guideID) {

		var guideElem = $('#' + guideID);

		//	guide css properties
		var backgroundImg = "";

		if (positionType == 'left_top') {

			backgroundImg = 'comments002.png';

		} else if (positionType == 'right_bottom') {

			backgroundImg = 'comments004.png';

		} else if (positionType == 'right_top') {

			backgroundImg = 'comments001.png';

		} else if (positionType == 'left_bottom') {

			backgroundImg = 'comments003.png'

		}

		//	set up the css for guide
		guideElem.css({

			"background-image": 'url("' + backgroundImgPath + backgroundImg + '")'

		});

	}

	//	process guide show logic
	function processGuideShowLogic() {
		console.log(guides);
		
		var guideElemIDs = [];

		if( showMethod == 'sequence' ) {

			for (var i = 0; i < guides.length; i++) {
			
				for ( guideElem in guides[i] ) {

					var guideElemID = guideElem + guideSuffix;

					guideElemIDs.push( guideElemID );

				}	

			}

			//	link the guides, with jquery each, not javascript loop function!
			$.each( guideElemIDs, function(i, val) {
				 
				if( i != ( guideElemIDs.length -1 ) ) {

					$( '#' + guideElemIDs[i] + guideNavBtnSuffix ).click(function(event) {
					
						$( '#' + guideElemIDs[i] ).css('visibility', 'hidden');

						$( '#' + guideElemIDs[i+1] ).css('visibility', 'visible');

					});

				}
				else {	//	if reach the last element, remove the all page guides

					$( '#' + guideElemIDs[i] + guideNavBtnSuffix ).click(function(event) {
					
						PageGuide.remove();

					});
				}

			});

			//	show the first one, hide the other
			for (var i = guideElemIDs.length - 1; i > 0; i--) {
				
				$( '#' + guideElemIDs[i] ).css('visibility', 'hidden');;

			};

		}
		
		
	}

	return {

		initialize: initialize,

		run: run,

		remove: remove

	};

}(jQuery));

//  name space for running page guide application
;
(function() {

	$(document).ready(function() {

		// target element ids for page guiding
		var targetElemIDs = ['test01', 'test02'];

		var guideDescriptions = {

			'test01' : "这是一个html和css标签",

			'test02' : "这是一个i标签"

		};

		var guideShowMethod = 'sequence';
		//var guideShowMethod = 'cocurrent';

		//  initialize the page guide when DOM is ready
		PageGuide.initialize(targetElemIDs, guideDescriptions, guideShowMethod);

		//  run page guide
		var runningResult = PageGuide.run();
		console.log(runningResult);

		//  binding the remove event for closing button
		$('#close-btn').click(function(event) {
			/* Act on the event */
			//  when click the close button, remove page guide
			PageGuide.remove();

		});

	});

}());