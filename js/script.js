"use strict"

//header__Scroll
let lastScrol = 0;
const defaultOffset = 50;
const header = document.querySelector('.header');


const scrollPosition = () => Window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

	if (scrollPosition() > lastScrol && !containHide() && scrollPosition() > defaultOffset) {
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

document.querySelector('.article__send').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.form2').scrollIntoView({ behavior: 'smooth' });
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
	$(".num-1").mask("+99(999)999-99-99", {
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
	});

})



$(document).ready(function () {
	$(".num-2").mask("+99(999)999-99-99", {
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
	});

})




// shipping__slider; **********************************************************
$(document).ready(function () {
	$('.shipping__slider').slick({
		arrows: false,
		centerMode: true,
		speed: 1200,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					centerPadding: '8px',
				}
			},
		]
	});

	$('.team__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1200,

		responsive: [
			{
				breakpoint: 610,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 450,
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
		speed: 1200,
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
		speed: 1200,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '100px',

				}
			},
			{
				breakpoint: 992,
				settings: {
					centerPadding: '10px',
					arrows: false,
				}
			},

		],
	});

	/* 	$('.reviews__items').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			let dots = document.querySelectorAll('.reviews__items .slick-dots li.slick-active');
	
			for (let i = 0; i < dots.length; i++) {
	
				console.log(dots[i]);
	
	
				if (dots[i].previousElementSibling) {
					dots[i].previousElementSibling.classList.add('transform');
				} if (dots[i].previousElementSibling.classList.contains('transform')) {
					setTimeout(time, 1000);
					function time() {
						dots[i].previousElementSibling.classList.remove('transform');
					}
	
				}
	
			}
		}); */

	$('.support__scroll').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});

});


//play animation

$('.videoplay1').on('click', function () {
	$("#video1")[0].src += "?autoplay=1";
	$('.videoplay1').addClass('__play');
});



//анимация на видео
let animation = document.querySelectorAll('.play__container');

if (animation) {
	let playAnimation = document.querySelectorAll('.play__animation');
	let circleAnimation = document.querySelectorAll('.circle__animation');
	let circleAnimation2 = document.querySelectorAll('.circle__animation2');
	let circleAnimation3 = document.querySelectorAll('.circle__animation3');
	let playImg = document.querySelectorAll('.play__img ');
	let playSvg = document.querySelectorAll('.play__svg  ');

	for (let i = 0; i < animation.length; i++) {

		animation[i].addEventListener('mouseenter', function () {

			playAnimation[i].classList.add('__animation');
			circleAnimation[i].classList.add('__circle__animation');
			circleAnimation2[i].classList.add('__circle__animation');
			circleAnimation3[i].classList.add('__circle__animation2');
			playImg[i].classList.add('__playimg');
			playSvg[i].classList.add('__animationsvg');


			playAnimation[i].classList.remove('__exitanimation');
			circleAnimation[i].classList.remove('__exitcircle');
			circleAnimation2[i].classList.remove('__exitcircle');
			circleAnimation3[i].classList.remove('__exitcircle');
			playImg[i].classList.remove('__exitplayimg');
			playSvg[i].classList.remove('__exitanimationsvg');
		})


		animation[i].addEventListener('mouseleave', function () {
			playAnimation[i].classList.remove('__animation');
			playAnimation[i].classList.add('__exitanimation');

			circleAnimation[i].classList.remove('__circle__animation');
			circleAnimation2[i].classList.remove('__circle__animation');
			circleAnimation[i].classList.add('__exitcircle');
			circleAnimation2[i].classList.add('__exitcircle');


			circleAnimation3[i].classList.remove('__circle__animation2');
			circleAnimation3[i].classList.add('__exitcircle');

			playImg[i].classList.remove('__playimg');
			playImg[i].classList.add('__exitplayimg');

			playSvg[i].classList.remove('__animationsvg');
			playSvg[i].classList.add('__exitanimationsvg');

		})
	}
}



//появление блока при отправке формы

let buttonSale = document.querySelector('.sale__button-desctop');


if (buttonSale) {
	let blockSuccessSale = document.querySelector('.success__sale-desctop');
	buttonSale.addEventListener('click', function () {

		blockSuccessSale.classList.add('success__visibility');
		setTimeout(successVisibility, 3000)
		function successVisibility() {
			blockSuccessSale.classList.remove('success__visibility');
		}
	})
}

let buttonSaleMobile = document.querySelector('.sale__button-mobile');


if (buttonSaleMobile) {
	let blockSuccessSale = document.querySelector('.success__sale-mobile');
	buttonSaleMobile.addEventListener('click', function () {

		blockSuccessSale.classList.add('success__visibility');
		setTimeout(successVisibility, 3000)
		function successVisibility() {
			blockSuccessSale.classList.remove('success__visibility');
		}
	})
}


let buttonForms1 = document.querySelector('.buttonform1');


if (buttonForms1) {
	let blockSuccessForms1 = document.querySelector('.success__form1');
	buttonForms1.addEventListener('click', function () {

		blockSuccessForms1.classList.add('success__visibility');
		setTimeout(successVisibility, 3000)
		function successVisibility() {
			blockSuccessForms1.classList.remove('success__visibility');
		}
	})
}

let buttonForms2 = document.querySelector('.buttonform2');


if (buttonForms1) {
	let blockSuccessForms2 = document.querySelector('.success__form2');
	buttonForms2.addEventListener('click', function () {

		blockSuccessForms2.classList.add('success__visibility');
		setTimeout(successVisibility, 3000)
		function successVisibility() {
			blockSuccessForms2.classList.remove('success__visibility');
		}
	})
}

