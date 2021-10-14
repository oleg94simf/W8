"use strict"

//header__Scroll

/* var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 100 && scrolled > scrollPrev) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
 */






//select-city
let select = function () {
	let selectCity = document.querySelectorAll('.select__city');
	let selectItem = document.querySelectorAll('.select__item');

	selectCity.forEach(item => {
		item.addEventListener('click', selectToggle);
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose);
	});

	function selectToggle() {
		this.parentElement.classList.toggle('__is-active');
	};

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.form__select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('__is-active');

	};


}
select();

//mask***************************************************
$(function ($) {
	$(".number__phone").mask("+38 (099) - 99 - 99 - 999");
});

// valid number********************************************************

let num = Number;

let phone = document.querySelector('.number__phone');


document.querySelector('.button__send').onclick = function (e) {
	e.preventDefault();
	if (!num.test(phone.value)) {
		console.log('no')
	} else {
		console.log('yes');
	}
}