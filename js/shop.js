$(document).ready(function(){

   $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      
    if(scrollTop > 20) {
      $("header").addClass("act")
    }
    else {
      $("header").removeClass("act")
    }
   });

   //상단 메뉴 구현하기 (메인 화면과 다르게 배치)

   $("#mainMenu a").mouseenter(function(){
	  let menuIndex = $(this).index();
	  $("#sub>li").eq(menuIndex).fadeIn().siblings().hide();
   })
   
   $("#sub>li").mouseleave(function(){
      $("#sub>li").stop().fadeOut();
      $(".subMenu>ul>li a.category").removeClass("act");
      $(".subMenu>ul>li ul a.subcategory").removeClass("act");
   })

   $(".subMenu>ul>li ul").on("mouseenter focus", function(){
      $(".subMenu>ul>li a.category").removeClass("act");
      $(this).prev().addClass("act");
   })

   $(".subMenu>ul>li ul div a").on("mouseenter focus", function(){
      $(".subMenu>ul>li ul a.subcategory").removeClass("act");
      $(this).parent().prev().addClass("act");
   })

   
   //
   $("#choice button").click(function(){
      let choiceButton = $(this).index();
      console.log(choiceButton);
      $("#choice button").removeClass("active");
      $(this).addClass("active");
      $("#description p").eq(choiceButton).show().siblings().hide();
      $("section.list").eq(choiceButton).show().siblings().hide();
      $("#description").show();
      $("#subChoice").show();
      $("section li").show();
      $("#subChoice div").eq(choiceButton).show().siblings().hide();
   });

   $("#subChoice button").click(function(){
      let y = $(this).attr("class");
      console.log(y);
      $("#subChoice button").removeClass("active");
      $(this).addClass("active");
      $("section li").show();

      if(y === "organic") {
         $("#Single li").not("#Single li.organic").hide();
      }

      if(y === "absolute") {
         $("#Single li").not("#Single li.absolute").hide();
      }

      if(y === "natural") {
         $("#Single li").not("#Single li.natural").hide();
      }

      if(y === "carrier") {
         $("#Single li").not("#Single li.carrier").hide();
      }
      
      if(y === "perfume") {
         $("#Blend li").not("#Blend li.perfume").hide();
      }

      if(y === "blis") {
         $("#Blend li").not("#Blend li.blis").hide();
      }

      if(y === "sleep") {
         $("#Blend li").not("#Blend li.sleep").hide();
      }

      if(y === "help") {
         $("#Blend li").not("#Blend li.help").hide();
      }

      if(y === "air") {
         $("#Blend li").not("#Blend li.air").hide();
      }

      if(y === "our") {
         $("#Blend li").not("#Blend li.our").hide();
      }

      if(y === "organicCarrier") {
         $("#Carrier li").not("#Carrier li.organicCarrier").hide();
      }

      if(y === "naturalCarrier") {
         $("#Carrier li").not("#Carrier li.naturalCarrier").hide();
      }

   });
   
//퀵 배너 작동하기
   
   $(window).scroll(function()
   {
   const st =  $(window).scrollTop();
   $("#quick_sns").stop().animate({top: 550 + st},800);
   $("#quick_chat").stop().animate({top: 550 + st},800);
   // $("#popup_chat").stop().animate({top: st},800);
   }
   );

   $("#quick_chat").click(function(){
   if($(this).find("img").attr("alt") == "챗으로 문의하기") {
   $(this).find("img").attr("src","./images/icons/chat_Close.png");
   $(this).find("img").attr("alt", "챗으로 문의하기 창 닫기");
   $("#popup_chat").stop().show();
   }
   else {
   $("#popup_chat").stop().hide();
   $("#quick_chat").find("img").attr("alt", "챗으로 문의하기");
   $(this).find("img").attr("src","./images/icons/chat.png");
   }
   });


//alert (준비중입니다.)

  $("#info li a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })

 $("#eventList a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })
 
 $("#siteMap a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })

 $("#companyInfo a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })

 $("#notice a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })

 $("nav.subMenu a").click(function(){
   alert("죄송합니다. 해당 메뉴는 준비중입니다.")
 })







}) 
//모두