
function outputResult ( divId, testObj, result ) {

    var div = document.getElementById( divId.toString() );

    if( result == true ){
        div.style.backgroundColor = "#65B749";
        div.innerHTML = testObj.toString();
    }
    else{
        div.style.backgroundColor = "#EA2E3C";
        div.innerHTML = testObj.toString();
    }
}

function setDivStyle ( divId ) {
	
	var div = document.getElementById( divId.toString() );

	div.style.width = "160px";
	div.style.margin = "5px 5px 0px 0px";
	div.style.cssFloat = "left";
}

function runHtml5Css3Testing () {
	
	var showBox = document.getElementById('show_box');

	for (var feature in Modernizr) {

		var supported = true;
  		
		var newDivNode = document.createElement('div');
		newDivNode.id = feature;
		showBox.appendChild( newDivNode );
		setDivStyle( feature );

		/*
  		Modernizr.on( feature, function ( result ) {

  			if (result) {

    				console.log('The test passed!');

    				var textNode = document.createTextNode( feature + ": passed.");

  			}
  			else {

    				console.log('The test failed!');

    				var textNode = document.createTextNode( feature + ": failed.");

  			}

  			pNode.appendChild( textNode );

  			pNode.appendChild( brNode );

		});
		*/

		if (typeof Modernizr[feature] === "boolean" && Modernizr[feature] == false) {

    			supported = false;
    			
  		}

  		outputResult( feature, feature, supported );

	}

}
