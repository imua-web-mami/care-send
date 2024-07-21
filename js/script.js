// case スライダー

document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerGroup: 2, // 2枚ずつ動かす
		slidesPerView: 2, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  	spaceBetween: 0, // スライド間の余白（px）
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
			// when window width is >=  ~ px
			820: {
				slidesPerView: 2,
				spaceBetween: 0
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
});

// headerハンバーガーメニュー

$(".header__menu-item").click(function () {
	$(this).toggleClass('active');
	$(".g-nav").toggleClass('panelactive');
});

$(".g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".header__menu-item").removeClass('active');//ボタンの activeクラスを除去し
	$(".g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// form 全て入力したら送信ボタンを機能させる

document.addEventListener("DOMContentLoaded", function() {
  const mainForm = document.getElementById("main-form");
  const mainButton = document.getElementById("main-submit-btn");
  const footerForm = document.getElementById("footer-form");
  const footerButton = document.getElementById("footer-submit-btn");

  mainForm.addEventListener("input", function() {
    update(mainForm, mainButton);
  });

  footerForm.addEventListener("input", function() {
    update(footerForm, footerButton);
  });

  function update(form, button) {
    const isRequired = form.checkValidity();
    if (isRequired) {
      button.style.opacity = 1;
      button.style.cursor = "pointer";
    } else {
      button.style.opacity = 0.5;
      button.style.cursor = "not-allowed";
    }
  }
});

// form お問い合わせ完了メッセージ

$(document).ready(function () {

	$('#main-form').submit(function (event) {
		var formData = $('#main-form').serialize();
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYorC3RDkaA8MvN2NlFHsr61QV9H9o_mvPMlz1EsIN_9G_Aw/formResponse",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$("#main-end-message").slideDown();
					$("#main-submit-btn").fadeOut();
					//window.location.href = "thanks.html";
				},
				200: function () {
					$("#main-false-message").slideDown();
				}
			}
		});
		event.preventDefault();
	});

	$('#footer-form').submit(function (event) {
		var formData = $('#footer-form').serialize();
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYorC3RDkaA8MvN2NlFHsr61QV9H9o_mvPMlz1EsIN_9G_Aw/formResponse",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$("#footer-end-message").slideDown();
					$("#footer-submit-btn").fadeOut();
					//window.location.href = "thanks.html";
				},
				200: function () {
					$("#footer-false-message").slideDown();
				}
			}
		});
		event.preventDefault();
	});
});

// achievements スライダー

$('.slider').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4.9,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
			breakpoint: 1340,//モニターの横幅が~px以下の見せ方
			settings: {
				slidesToShow: 3.5,//スライドを画面に~枚見せる
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 2.5,
			}
		},
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 1.8,
			}
		},
		{
			breakpoint: 490,
			settings: {
				slidesToShow: 1.1,
			}
		}
	]
});

// faq アコーディオン
$('.title').on('click', function () {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる

	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得

	if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	} else {//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function (index, element) {	//openクラスを取得
		var Title = $(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box = $(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});



// fadeUpアニメーション

function slideAnime() {
	$('.fadeIn').each(function () { //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// スムーススクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});