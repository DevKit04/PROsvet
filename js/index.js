let sideMenu = document.querySelector('.sideMenu');

let sideMenuBtn = document.querySelector('.sideMenuBtn');

let closeMenu = document.querySelector('.closeMenu');


sideMenuBtn.onclick = function(){

	sideMenu.classList.toggle('menuOpen');

}

closeMenu.onclick = function(){

	sideMenu.classList.remove('menuOpen');

}