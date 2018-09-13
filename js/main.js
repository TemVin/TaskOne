					//для инициализации wow.js//
(function(){
	'use strict';
	new WOW().init();
}());				

					//мобильное меню//
const mobMenuBtn = document.querySelector('.mob-menu-btn');
const menuItem = document.querySelectorAll('#mobMenuItem');
const mobCloseBtn = document.querySelector('.main-nav__close');

function mobMenuToggle(evt) {
	mobMenuBtn.classList.toggle('opened');
	menuItem.forEach(function(element, index) {
		if (element.style.display == '') {
			element.style.display = 'flex';
			setTimeout( () => {
				element.classList.toggle('opened');
			}, 100);
		}
		else {
			element.classList.toggle('opened');
			setTimeout( () => {
				element.style.display = '';
			}, 200);
		}
	});
}

mobMenuBtn.addEventListener('click', mobMenuToggle);
mobCloseBtn.addEventListener('click', mobMenuToggle);


/*Убирается меню в мобильной версии при скролинге вниз и появляется при скролинге вверх. Не совсем верно работает*/
/*$(document).ready(function() {
	
	var mobMenu = $(".main-nav");
	var scrollPrev = 0
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < mobMenu.height() + mobMenu.offset().bottom ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = mobMenu.offset().bottom; // Фиксируем текущую позицию меню
						mobMenu.css({
							"top": topPosition + "px"
						});
						firstScrollDown = true;
					}
					mobMenu.css({
						"position": "absolute"
					});
				// Если меню НЕ видно
				} else {
					mobMenu.css({
						"position": "fixed",
						"top": "-" + mobMenu.height() + "px"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > mobMenu.offset().bottom ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = mobMenu.offset().bottom; // Фиксируем текущую позицию меню
						mobMenu.css({
							"bottom": topPosition + "px"
						});
						firstScrollUp = true;
					}
					mobMenu.css({
						"position": "absolute"
					});
				} else {
					mobMenu.removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			
});*/