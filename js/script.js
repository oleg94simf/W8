"use strict"

//header__Scroll
let lastScrol = 0;
const header = document.querySelector('.header');


const scrollPosition = () => Window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

	if (scrollPosition() > lastScrol && !containHide()) {
		header.classList.add('hide');
	}
	else if (scrollPosition() < lastScrol && containHide()) {
		header.classList.remove('hide');
	}

	lastScrol = scrollPosition();
})

//scroll 
document.querySelector('.logo__link ').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector(' .reviews').scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.company__link-sale').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector(' .main__sale ').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.company__link-mobile').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector(' .main__sale ').scrollIntoView({ behavior: 'smooth' });
});


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

//select-custom________________________________________________________________________________________________
let select = function () {
	let selectCity = document.querySelectorAll('.select__city');
	let selectItem = document.querySelectorAll('.select__item');
	let sekectForm = document.querySelectorAll('.select__body');

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



jQuery(function ($) {
	$(document).mouseup(function (e) { // отслеживаем событие клика по веб-документу
		var block = $(".form__select");
		var block2 = $(".select__body"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
		if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
			&& block.has(e.target).length === 0 || e.target) { // проверка условия если клик не по его дочерним элементам

			// если условия выполняются - скрываем наш элемент
			block.removeClass('__is-active');
		}
	});
});



//mask***************************************************

$(document).ready(function () {
	$(".num-1").mask("+38 (099) - 99 - 99 - 999", {
		completed: function () {
			$(".num-1 ").addClass('valid');
			$(".tel-1").addClass('validblock');
		}
	});
	let poreerwe = document.querySelector('.num-1');
	poreerwe.addEventListener('keydown', function (event) {
		if (event.code == 'Backspace' || event.code == 'Escape') {
			$(".num-1").removeClass('valid');
			$(".tel-1").removeClass('validblock');
		}
		console.log(event.code);
	});

})



$(document).ready(function () {
	$(".num-2").mask("+38 (099) - 99 - 99 - 999", {
		completed: function () {
			$(".num-2 ").addClass('valid');
			$(".tel-2").addClass('validblock');
		}
	});
	let poreerwe = document.querySelector('.num-2');
	poreerwe.addEventListener('keydown', function (event) {
		if (event.code == 'Backspace' || event.code == 'Escape') {
			$(".num-2").removeClass('valid');
			$(".tel-2").removeClass('validblock');
		}
		console.log(event.code);
	});

})




// shipping__slider; **********************************************************
$(document).ready(function () {
	$('.shipping__slider').slick({
		arrows: false,
		centerMode: true,
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
					centerMode: true,
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
					centerMode: true,
					centerPadding: '18px',
				}
			}
		]
	});

	$('.reviews__items').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: '200px',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerPadding: '0',
					arrows: false,
				}
			}
		],
	});
});




