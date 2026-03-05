$(function () {
  /*============================================
	― ハンバーガーメニュー
  =============================================*/
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
  });

  $(".navi a").click(function () {
    $("hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
  }); 

  /*============================================
	― slick
  =============================================*/
  $("#activity .slider").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 再生間隔(ミリ秒)
    arrows: false, // 前後の矢印
    centerMode: true,
    slidesToShow: 3, // 表示枚数
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
