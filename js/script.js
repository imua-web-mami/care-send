// case スライダー

document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
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
			breakpoint: 1280,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 3.5,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 1024,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に1.5枚見せる
			}
		},
		{
			breakpoint: 820,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に1.5枚見せる
			}
		},
		{
			breakpoint: 500,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
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