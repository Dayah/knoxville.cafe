/*
	This script will establish event listeners for the nav system.
		-listen for burger click to pop up fade in
		-listen for close button click for pop up fade out 
		-make the nav bar bigger when scrolling past the header
		
	Created by: Michael Wilmouth
*/

//select DOM Element Buttons
const burgerBtn = document.getElementById("burgerButton");
const closeBtn = document.getElementById("closeButton");

//the element that is to be popped up 
const navFullScreen = document.getElementById("navPopUp");

//trigger nav fade animations
const navFade = function(){
	burgerBtn.addEventListener("click", function(){
		//check for pop-up-leave
		if(navFullScreen.classList.contains("pop-up-leave")){
			navFullScreen.classList.remove("pop-up-leave");
		}
		navFullScreen.classList.toggle("pop-up-active");
	});
	closeBtn.addEventListener("click", function(){
		navFullScreen.classList.remove("pop-up-active");
		
		//toggle fade out 
		navFullScreen.classList.toggle("pop-up-leave");
	});
}
//increase nav height after scrolling past the header
const navGrow = function(){
	var navElement = document.getElementById("navSelector");
	
	if(window.pageYOffset >= 100){
		navElement.classList.remove("nav-scroll-shrink");
		navElement.classList.add("nav-scroll-grow");
	}
	if(window.pageYOffset < 100){
		navElement.classList.remove("nav-scroll-grow");
		navElement.classList.add("nav-scroll-shrink");
	}
}
navFade();