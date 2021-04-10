import Gallery from "../export/gallery.js";

//CREATE OBJECTS FOR GALLERY CLASS
var  img01 = new Gallery("images/meghani_nusring_home bilaspur_slider01.jpg","");
var  img02 = new Gallery("images/meghani_nusring_home bilaspur_slider02.jpg","");
var  img03 = new Gallery("images/meghani_nusring_home bilaspur_slider03.jpg","");
var  img04 = new Gallery("images/meghani_nusring_home bilaspur_slider04.jpg","");
var  img05 = new Gallery("images/meghani_nusring_home bilaspur_slider05.jpg","");
var  img06 = new Gallery("images/meghani_nusring_home bilaspur_slider06.jpg","");
var  img07 = new Gallery("images/meghani_nusring_home bilaspur_slider07.jpg","");
var  img08 = new Gallery("images/meghani_nusring_home bilaspur_slider08.jpg","");

//CREATE ARREY FOR GALLERY CLASS OBJECTS
var gallery_arr = [img01,img02,img03,img04,img05,img06,img07,img08]

//AACESS GALLERY SECTION FORM GALERY.HTML
document.querySelector('.gallery').innerHTML+=`
    <div class="container">
	     <div class="row">
		 
		  </div>
	</div>
`
;

//CREATE LOOP FOR IMG GALERY
for(var i in gallery_arr){
	document.querySelector('.gallery>.container>.row').innerHTML+=`
	   <div class="col-md-3">
	        <div class="gallery_img wow fadeInUp">
			     <img src="${gallery_arr[i].img}" alt="${gallery_arr[i].alt}" class="img-thumbnail">
				 
			</div>
	   </div>
	`;
}