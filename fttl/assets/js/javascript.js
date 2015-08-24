/* ########################################
				POPUP INFO BOXES
#########################################*/
//get overlay divs and fill them with infos on click

var staff = '<img src="assets/images/olgaandbruce.jpg"><br><h2>WE MAKE YOU FLY!!!</h2><p>Operating out of Queenstown and Wanaka, FTTL offer tourists 	a range of scenic flights in both fixed wing and helicopters, as well as high adventure in a stunt plane, or the most peaceful flight experience possible in a glider high above the mountains. They specialize in one-off charters and delivery and pickup for trampers, also providing a provisioning service for fresh supplies during long excursions.</p><div id="close" onclick="closediv()">CLOSE</div>';

var	fixedWing = '<img src="assets/images/fixed_wing.jpg"><br><h2>FIXED WING</h2><p>Operating out of Queenstown and Wanaka, FTTL offer tourists 	a range of scenic flights in both fixed wing and helicopters, as well as high adventure in a stunt plane, or the most peaceful flight experience possible in a glider high above the mountains. They specialize in one-off charters and delivery and pickup for trampers, also providing a provisioning service for fresh supplies during long excursions.</p><div id="close"><a href="index.html">CLOSE WINDOW</a></div>';
	
var	helicopter = '<br><img src="assets/images/helicopter.jpg"><br><h2>HELICOPTER</h2><p>Operating out of Queenstown and Wanaka, FTTL offer tourists a range of scenic flights in both fixed wing and helicopters, as well as high adventure in a stunt plane, or the most peaceful flight experience possible in a glider high above the mountains. They specialize in one-off charters and delivery and pickup for trampers, also providing a provisioning service for fresh supplies during long excursions.</p><div id="close"><a href="index.html">CLOSE WINDOW</a></div>'

var	amphibian = '<br><img src="assets/images/amphibian.jpg"><br><h2>AMPHIBIAN AIRCRAFT</h2><p>Operating out of Queenstown and Wanaka, FTTL offer tourists a range of scenic flights in both fixed wing and helicopters, as well as high adventure in a stunt plane, or the most peaceful flight experience possible in a glider high above the mountains. They specialize in one-off charters and delivery and pickup for trampers, also providing a provisioning service for fresh supplies during long excursions.</p><div id="close"><a href="index.html">CLOSE WINDOW</a></div>'

var	glider = '<br><img src="assets/images/glider.jpg"><br><h2>GLIDER</h2><p>Operating out of Queenstown and Wanaka, FTTL offer tourists a range of scenic flights in both fixed wing and helicopters, as well as high adventure in a stunt plane, or the most peaceful flight experience possible in a glider high above the mountains. They specialize in one-off charters and delivery and pickup for trampers, also providing a provisioning service for fresh supplies during long excursions.</p><div id="close"><a href="index.html">CLOSE WINDOW</a></div>'

document.getElementById('button1').addEventListener("click", function(){ 
	makePopup(staff);
});

document.getElementById('button2').addEventListener("click", function(){ 
	makePopup(fixedWing);
});

document.getElementById('button3').addEventListener("click", function(){ 
	makePopup(helicopter);
});

document.getElementById('button4').addEventListener("click", function(){ 
	makePopup(amphibian);
});

document.getElementById('button5').addEventListener("click", function(){ 
	makePopup(glider);
});

/*
makePopup
requires variable name of the content of each popup
*/
function makePopup(detail){
	document.getElementById('overlay').style.display = "block";
	document.getElementById('content').style.display = "block";
	document.getElementById('content').innerHTML = detail;
}
/* ########################################
				IMAGE GALLERY
#########################################*/

var img = [
	"assets/gallery/150/pic1.jpg",
	"assets/gallery/150/pic2.jpg",
	"assets/gallery/150/pic3.jpg",
	"assets/gallery/150/pic4.jpg",
	"assets/gallery/150/pic5.jpg",
	"assets/gallery/150/pic6.jpg",
	"assets/gallery/150/pic1.jpg",
	"assets/gallery/150/pic2.jpg",
	"assets/gallery/150/pic3.jpg",
	"assets/gallery/150/pic4.jpg",
	"assets/gallery/150/pic5.jpg",
	"assets/gallery/150/pic6.jpg",
	];

//fatch the gallery strip

var strip = document.getElementById('bottom_strip');

//load the images into strip on page load

function dispImg(){
	number_of_imgs = 1699/170;
	for(var i=0;i<=number_of_imgs;i++){
		strip.innerHTML += '<img src="'+img[i]+'" onclick="return show(this.id);"/ id="'+i+'">' };
};

// make the images large into popup box

function show(i){
	document.getElementById('overlay').style.display = "block";
	imgsbox = document.getElementById('content');
	imgsbox.style.display = "block";
	imgsbox.innerHTML = '<img src="'+img[i].replace("150", "400")+'"/>';
  imgsbox.innerHTML +='<div id="close" onclick="closediv()">CLOSE</div>';
};

//close the large image popup box and return to the thumbs gallery

// document.getElementById('close').addEventListener("click", function(){
//   document.getElementById('gallerywrapper').scrollIntoView(true);
// 	document.getElementById('overlay').style.display = "none";
// 	document.getElementById('content').style.display = "none";
// });

function closediv(){
  document.getElementById('gallerywrapper').scrollIntoView(true);
  document.getElementById('overlay').style.display = "none";
  document.getElementById('content').style.display = "none";
};







