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


//header-menu
const mobileIcon = document.querySelector('.menu__icon');
const mobilefon = document.querySelector('.header-mobile-fon');
const mobileMenuFalse = document.querySelector('#user-false');
const mobileMenuTrue = document.querySelector('#user-true');


//header-menuFalse
if (mobileMenuFalse) {
	mobileIcon.addEventListener('click', function () {
		mobilefon.classList.add('__active__menu');
		document.body.classList.add('__lock');
		mobileMenuFalse.classList.add('__active__menu');
	})

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $("#user-false"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				mobileMenuFalse.classList.remove('__active__menu');
				mobilefon.classList.remove('__active__menu');
				document.body.classList.remove('__lock');
				// скрываем его
			}
		});
	});
}

//header-menuTrue
/* if (mobileMenuTrue) {
	mobileIcon.addEventListener('click', function () {
		mobilefon.classList.add('__active__menu');
		document.body.classList.add('__lock');
		mobileMenuTrue.classList.add('__active__menu');
	})

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $("#user-true"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				mobileMenuTrue.classList.remove('__active__menu');
				mobilefon.classList.remove('__active__menu');
				document.body.classList.remove('__lock');
				// скрываем его
			}
		});
	});
} */

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


// shipping__slider **********************************************************
$(document).ready(function () {
	$('.shipping__slider').slick({
		arrows: false,
	});
	$('.team__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 800,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]

	});

	$('.footer__sliders').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.reviews__items').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			}
		],
	});
});