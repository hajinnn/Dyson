$(document).ready(function(){


  //AOS
  AOS.init();

  // 햄버거버튼 클릭
  $('header .hamberger').click(function(){
    $('header .hamberger span').toggleClass('active');
    
    $('.hbg-box').toggleClass('active');
    
    
});
  
// $('.hbg-box li').mouseenter(function(){
//   $(this).children('.hbg-box .sub-menu').stop().slideDown();
//   $('.hbg-box li .top-menu svg').addClass('active');

// });
// $('.hbg-box li').mouseleave(function(){
//   $(this).children('.hbg-box .sub-menu').stop().slideUp();
//   $('.hbg-box li .top-menu svg').removeClass('active');

// });




// 클릭했을때의 기능은 남겨두고 마우스가 오버되면 메뉴가 자동으로 펼쳐지게
// $(".menu-top >a").click(function(){
//   var submenu = $(this).next(".menu-top ul");

// if( submenu.is(":visible") ){submenu.slideUp();
// }
// else{submenu.slideDown();
// }
// }).mouseover(function(){
//   $(this).next(".menu-top ul").stop().slideDown();
// });

// $(".menu-top:eq(1)>a").click();








// 햄버거박스 메뉴 슬라이드 부분

// $(".menu-top >a").click(function(){
//   var submenu = $(this).next(".menu-top ul");
// if( submenu.is(":visible") ){
//   submenu.slideUp();
  
// }
// else{
//   submenu.slideDown();
// }
  
// });


// $('.hbg-box li').click(function(){
//   $(this).children('.hbg-box .sub-menu').stop().slideDown();

// });
// $('.hbg-box li').mouseleave(function(){
//   $(this).children('.hbg-box .sub-menu').stop().slideUp();

// });


// $('.hbg-box li .top-menu').click(function(){
//   $(this).children('.hbg-box li .top-menu svg').addClass('active');

// });
// $('.hbg-box li .top-menu').mouseleave(function(){
//   $(this).children('.hbg-box .sub-menu').stop().slideUp();
//   $(this).children('.hbg-box li .top-menu svg').removeClass('active');

// });



// $('.hbg-box li > a').click(function(){
//   $(this).addClass('active');
//   $(this).siblings().removeClass('active');
  

// });
// $(".hbg-box li").click(function(){
//   var submenu = $('.hbg-box li .top-menu svg');
// if( submenu.is(":visible") ){
//   submenu.slideUp();
//   $('.hbg-box li .top-menu svg').removeClass('active');
// }
// else{
//   submenu.slideDown();
//   $('.hbg-box li .top-menu svg').addClass('active');
// }
  
// });


// (pc방 기민)
// $('.top-menu').click(function(){
  
//   $(this).children('.hbg-box li .top-menu svg').addClass('active');
//   $('.menu-top .sub-menu').stop().slideUp();
//   $(this).siblings().slideDown();
  
// });

$('.hbg-box .menu-top').click(function(){

  $(this).siblings().find('.top-menu svg').removeClass('active');
  $(this).siblings().children('.sub-menu').slideUp();
  $(this).find('.top-menu svg').toggleClass('active');
  $(this).children('.sub-menu').slideToggle();

  // if($(this).find('.top-menu svg').hasClass('active')) {

  //   $(this).find('.top-menu svg').removeClass('active');

  // } else {

      

  // }

});

// $('.hbg-box li .top-menu').click(function(){


//   $(this).siblings('.sub-menu').stop().slideUp();




// });



// $('.top-menu').click(function(){

//   $(this).children('.hbg-box li .top-menu svg').toggleClass('active');

//   if($(this).hasClass("active") === false) {

//     $(this).children('.hbg-box li .top-menu svg').addClass('active');
//     $(this).siblings().slideToggle();
    
//   } else {
  
//     $(this).children('.hbg-box li .top-menu svg').removeClass('active');
//     $(this).siblings().slideToggle();

//   }
  
// });







  var swiper = new Swiper(".mySwiper1", {
      effect: "fade",
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
   });


    //sec-3 swiper
    var swiper = new Swiper(".mySwiper2", {
      direction:"vertical",
      slidePerView:'auto',
      spaceBetween: 0,
      slidePerGroup: 1,
      speed:1000,
      loop:true,
      autoplay: {
          delay:1000,
          disableOnInteraction: false,
      }
      // pagination: {
      //   el: ".swiper-pagination",
      // },
    });

    //sec-4 swiper
    var swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      spaceBetween: 100,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        
        375: {
          slidesPerView: 1,  //브라우저가 375보다 클 때
          // spaceBetween: 20,
          slidesPerGroup: 1,
        },
        760: {
          slidesPerView: 2,  //브라우저가 760보다 클 때
          spaceBetween: 0,
          slidesPerGroup: 2,
        },
        960: {
          slidesPerView: 3,  //브라우저가 960보다 클 때
          spaceBetween: 0,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,  //브라우저가 1200보다 클 때
          spaceBetween: 0,
          slidesPerGroup: 4,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
    });

  

   


   // 헤더 스크롤 이벤트
   $(window).scroll(function(){
    const sct = $(window).scrollTop();
    if(sct >= 200){
        $('header').addClass('active');
        
    }else{
        $('header').removeClass('active');
        
    }
});


   $('.slide-view .btn-right').click(function(){
      $('.slide-view .slide-wrap').animate({
          // 애니메이트는 트렌지션 안걸어도 자연스럽게 넘어감
        left: -362
      },function(){
          $('.slide-view .slide-wrap').css({
              left: 0
          }).find('.img-box').first().appendTo('.slide-view .slide-wrap');
          // find 를 사용하는 이유는 하위요소의 이미지를 찾는것
          
      });
  });

  $('.header-wrap .header-txt li').mouseenter(function(){
    const tab = $(this).attr('data-alt');
    $('.sub-menu-box .sub-menu').removeClass('active');
    $(`#${tab}`).addClass('active');

    // 서브메뉴박스 보이게 처리
    $('.sub-menu-box').addClass('active');

    // 로고메뉴 li 들 마우스 엔터&리브 색상 변경
    $('.header-txt li a').mouseenter(function(){
        $(this).addClass('active');
    });
    $('.header-txt li a').mouseleave(function(){
        $(this).removeClass('active');
    });
    
});

// 마우스 벗어났을 때 서브메뉴박스 안보이게 처리
$('.sub-menu-box').mouseleave(function(){
  $(this).removeClass('active');

  
});

  //상단이동버튼
  const btn = $('.top-btn');
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btn.fadeIn();
    }else{
        btn.fadeOut();
    }
  });

  btn.on('click',function(e){
    // $('.top-btn').click(function()); 이랑 위에랑 똑같음 다르게 작성해본것
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },300);
  });


  $('.sec-6 .sec-6-wrap .box a .box-item').mouseenter(function(){
    $(this).addClass('active');
  });

  $('.sec-6 .sec-6-wrap .box a .box-item').mouseleave(function(){
    $(this).removeClass('active');
  });







});


