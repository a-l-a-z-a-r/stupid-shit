var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "galia.jpg";
images[1] = "gasti.jpg";
images[2] = "hila.jpg";
images[3] = "natalie.jpg";
images[4] = "natusha.jpg";
images[5] = "nati.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}



// Run function when page loads
window.onload=changeImg;