$(function () {
  /*navi bar & scroll event*/
  let baseline = -280;
  let pos1 = $("#con1").offset().top + baseline;
  let pos2 = $("#con2").offset().top + baseline;
  let pos3 = $("#con3").offset().top + baseline;
  let pos4 = $("#con4").offset().top + baseline;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    if (scroll >= pos1 && scroll < pos2) {
      $("#nav>li").removeClass("on");
      $("#nav>li").eq(0).addClass("on");
      $("#wrap1>div").removeClass("on");
      $("#wrap1>div").eq(0).addClass("on");
      
    } else if (scroll >= pos2 && scroll < pos3) {
      $("#nav>li").removeClass("on");
      $("#nav>li").eq(1).addClass("on");
      $("#wrap1>div").removeClass("on");
      $("#wrap1>div").eq(1).addClass("on");
      $("header").addClass("on");
      $("header").removeClass("on");
      $(".wrap3").addClass("on");
      $(".wrap3").removeClass("on");
      $("#wrap1").addClass("on");
      $("#wrap1").removeClass("on");
      
      
    } else if (scroll >= pos3 && scroll < pos4) {
      $("#nav>li").removeClass("on");
      $("#nav>li").eq(2).addClass("on");
      $("#wrap1>div").removeClass("on");
      $("#wrap1>div").eq(2).addClass("on");
      $(".text1").addClass("on");
      $(".text1").removeClass("on");
      

    } else {
      $("#nav>li").removeClass("on");
      $("#nav>li").eq(3).addClass("on");
      $("#wrap1>div").removeClass("on");
      $("#wrap1>div").eq(3).addClass("on");
      $("header").addClass("on");
      $("header").removeClass("on");
      $(".wrap3").addClass("on");
      $(".wrap3").removeClass("on");
      $("#wrap1").addClass("on");
      $("#wrap1").removeClass("on");
      $(".text1").addClass("on");
      $(".text1").removeClass("on");
    }
  });

  $("#nav>li").on("click", function () {
    let target = $(this).children("a").attr("href");
    let pos = $(target).offset().top;
    $("html,body").stop().animate({ scrollTop: pos }, 1000);
  });

  /*con1*/

  $(".btn1>li a").on("click",function(){
    let choice = $(this).attr("href");
    $(".con5").stop().fadeOut();
    $(choice).stop().fadeIn();
    $(".con5").removeClass("on");
    $(choice).addClass("on");
    $(".btn1>li a").removeClass("on");
    $(this).addClass("on");
  });




  /*con2*/


  $(".img2>li").on("mouseenter",function(){
    $(this).children("ul").stop().animate({opacity:"1",bottom:"10%"});
  });

  $(".img2>li").on("mouseleave",function(){
    $(this).children("ul").stop().animate({opacity:"0",bottom:"0%"});
  });



  /*con3*/
  let click1 = 0;

  $(".next").on("click", function () {
    $(".slide")
      .stop()
      .animate({ left: "-200%" }, 2000, function () {
        $(".slide li").first().appendTo(".slide");
        $(".slide").css({ left: "-100%" });
        $(".text1").removeClass("on");
        $(".text1").addClass("on");
      });

    if (click1 == 5) {
      $(".test>div").eq(0).removeClass("on");
      $(".test>div").eq(1).removeClass("on");
      $(".test>div").eq(2).removeClass("on");
      $(".test>div").eq(3).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test6").addClass("on");
      $(".test .test6").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      
      click1 = 0;

    } else if (click1 == 4) {
      $(".test>div").eq(0).removeClass("on");
      $(".test>div").eq(1).removeClass("on");
      $(".test>div").eq(2).removeClass("on");
      $(".test>div").eq(5).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test5").addClass("on");
      $(".test .test5").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      
      click1++;

    } else if (click1 == 3) {
      $(".test>div").eq(0).removeClass("on");
      $(".test>div").eq(1).removeClass("on");
      $(".test>div").eq(4).removeClass("on");
      $(".test>div").eq(5).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test4").addClass("on");
      $(".test .test4").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      
      click1++;

    } else if (click1 == 2) {
      $(".test>div").eq(0).removeClass("on");
      $(".test>div").eq(3).removeClass("on");
      $(".test>div").eq(4).removeClass("on");
      $(".test>div").eq(5).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test3").addClass("on");
      $(".test .test3").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      click1++;

    } else if (click1 == 1) {
      $(".test>div").eq(2).removeClass("on");
      $(".test>div").eq(3).removeClass("on");
      $(".test>div").eq(4).removeClass("on");
      $(".test>div").eq(5).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test2").addClass("on");
      $(".test .test2").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      click1++;

    } else {
      $(".test>div").eq(1).removeClass("on");
      $(".test>div").eq(2).removeClass("on");
      $(".test>div").eq(3).removeClass("on");
      $(".test>div").eq(4).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test1").addClass("on");
      $(".test .test1").css({ "z-index": -1 });
      $("header").removeClass("on");
      $("header").addClass("on");
      $(".wrap3").removeClass("on");
      $(".wrap3").addClass("on");
      $("#wrap1").removeClass("on");
      $("#wrap1").addClass("on");
      click1++;
    }

  });
/*
  $(".prev").on("click", function () {
    $(".slide")
      .stop()
      .animate({ left: "0" }, 2000, function () {
        $(".slide li").last().prependTo(".slide");
        $(".slide").css({ left: "-100%" });
      });
      
      if (click1 == 2) {
      $(".test>div").eq(1).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test3").addClass("on");
      $(".test .test3").css({ "z-index": -1 });
      click1--;
    } else if (click1 == 1) {
      $(".test>div").eq(0).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test2").addClass("on");
      $(".test .test2").css({ "z-index": -1 });
      click1--;
    } else {
      $(".test>div").eq(2).removeClass("on");
      $(".test>div").css({ "z-index": -2 });
      $(".test .test1").addClass("on");
      $(".test .test1").css({ "z-index": -1 });
      click1=2;
    }
  });
*/
  
  $(".next").on("mouseenter",function(){
    $(".next").children("span").css({color:"black"});
    $(".next").children("p").css({color:"black"});
    $(".next").css({background:"white"});
  });
  $(".next").on("mouseleave",function(){
    $(".next").children("span").css({color:"white"});
    $(".next").children("p").css({color:"white"});
    $(".next").css({background:"none"});
  });
});
