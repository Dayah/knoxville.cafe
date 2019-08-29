/*
	This js will be used to listen for clicks on the menu buttons
	in the two navs. Will be selected by bigNavMenu and smallNavMenu.
	
	Created by: Michael Wilmouth
*/

//NAV buttons
const desktop = document.querySelector(".bigNavMenu");
const mobile = document.querySelector(".smallNavMenu");

//close button
const menuCloseBtn = document.getElementById("menuClose");

//pop up element
const menuPop = document.getElementById("menuPopUp");

const showMenuPop = function(){
	//establish NAV event listeners
	desktop.addEventListener("click", (function(){
		//check for pop-up-leave
		if(menuPop.classList.contains("pop-up-leave")){
			menuPop.classList.remove("pop-up-leave");
		}
		menuPop.classList.toggle("pop-up-active");
	}));
	mobile.addEventListener("click", (function(){
		//check for pop-up-leave
		if(menuPop.classList.contains("pop-up-leave")){
			menuPop.classList.remove("pop-up-leave");
		}
		menuPop.classList.toggle("pop-up-active");
	}));
	
	//establish close button event listener
	menuCloseBtn.addEventListener("click", (function(){
		if(menuPop.classList.contains("pop-up-active")){
			menuPop.classList.remove("pop-up-active");
		}
		menuPop.classList.toggle("pop-up-leave");
	}));
}
showMenuPop();