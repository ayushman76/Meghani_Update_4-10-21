//IMPORT ABOUT FROM EXPORT JS

import About from "../export/about.js";

//CREATE OBJECTS FOR ABOUT CLASS
var heading = new About("About Us");
var heading01 = new About("Health Care With Dedication And Precision")
var para = new About ("<strong> Dr. Deepak Menghani Is One Of The Leading And Experienced General Surgeon Of Bilaspur.</strong> He Has Vast Experience In The Field Of Surgery Since Last 15 Years. He Has Attended The Various <strong>National  And International Conference</strong> In The Filed Of <strong>Laparoscopic Surgery.</strong> Dr. Menghani Is Also <strong>Specialist Piles &amp; Hernia Surgery In Menghani Nursing Home Has The Latest <strong>Laser For Piles Surgery.</strong> Menghani Nursing Home Is One Of The Oldest Setup Of <strong>Hospital In Bilaspur Chhattisgarh .</strong> </strong>");
var para01 = new About("<strong>Dr. Deepak Menghani</strong> Offers Services Like <strong>Piles, appendix </strong>, <strong> Uterus,</strong> <strong> hernia, </strong> <strong> Gallbladder,</strong> <strong>kidney Stone,</strong> <strong>Ureter Stone,</strong> <strong>Bladder Stone.</strong>");
var button = new About("Get Appointment")

document.querySelector(".about").innerHTML+=`
     <div class="container">
	      <div class="row">
		         <div class="col-md-6">
				      <div class="myAboutContent my_content wow fadeInLeft">
					        <h4>${heading.content}</h4>
							<h5 class="head_tag"><strong>${heading01.content}</strong></h5>
							<p>${para.content}</p>
							<p>${para01.content}</p>
							<a href="contact.html" class="my_btn">${button.content}</a>
					  </div>
				 </div>
				 <div class="col-md-6">
				       <div class="myAboutImage pad-10 wow fadeInRight">
					          <div id="myCarousel" class="carousel slide" data-ride="carousel">
									<!-- Indicators -->
									<ol class="carousel-indicators">
									  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
									  <li data-target="#myCarousel" data-slide-to="1"></li>
									  <li data-target="#myCarousel" data-slide-to="2"></li>
									   <li data-target="#myCarousel" data-slide-to="3"></li>
									  <li data-target="#myCarousel" data-slide-to="4"></li>
									   <li data-target="#myCarousel" data-slide-to="5"></li>
									  <li data-target="#myCarousel" data-slide-to="6"></li>
									   <li data-target="#myCarousel" data-slide-to="1"></li>
									  <li data-target="#myCarousel" data-slide-to="7"></li>
									</ol>

									<!-- Wrapper for slides -->
									<div class="carousel-inner">
									  <div class="item active">
										<img src="images/meghani_nusring_home bilaspur_slider01.jpg" alt="Los Angeles" style="width:100%;">
									  </div>

									  <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider02.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									
									  <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider03.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									   <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider04.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									
									  <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider05.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									   <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider06.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									
									  <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider07.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									  <div class="item">
										<img src="images/meghani_nusring_home bilaspur_slider08.jpg" alt="Los Angeles" style="width:100%;">
									  </div>
									</div>

									<!-- Left and right controls -->
									<a class="left carousel-control" href="#myCarousel" data-slide="prev">
									  <span class="glyphicon glyphicon-chevron-left"></span>
									  <span class="sr-only">Previous</span>
									</a>
									<a class="right carousel-control" href="#myCarousel" data-slide="next">
									  <span class="glyphicon glyphicon-chevron-right"></span>
									  <span class="sr-only">Next</span>
									</a>
							</div>
					   </div>
				 </div>
		  </div>
	 </div>
`;