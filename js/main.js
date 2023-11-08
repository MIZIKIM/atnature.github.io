$(document).ready(function(){

  //헤더 영역 클래스 적용하기
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
  if(scrollTop > 20) {
    $("header").addClass("act")
  }
  else {
    $("header").removeClass("act")
  }
 });

  //슬라이드 만드는 데에 필요한 변수 선언하기
  var 
  menuBanner = $("#menuBanner"),
  container = $(".slideshow"),
  slideGroup = container.find(".slideshow_slides"),
  slides = slideGroup.find("a"),
  slideCount = slides.length,
  // slideCount 는 5이다.
  moveAmt = 100,
  nav = menuBanner.find(".slideshow_nav"),
  indicator = menuBanner.find(".indicator"),
  indicatorHtml = '',
  currentIndex = 0,
  duration = 2000,
  interval = 4000,
  timer;

  //복사본을 생성해보자. 우선 앞에 5개 추가 
  slides.clone().addClass("clone");

  slideGroup.append(slides.clone().addClass("clone"));

  //복사본을 생성해보자. 뒤에 5개 추가 
  slideGroup.prepend(slides.clone().addClass("clone"));

  //슬라이드를 세로로 배열해보자
  
    var newSlides = $(".slideshow_slides a");

    // console.log(newSlides);

    newSlides.each(function(i){
  
      var newTop = i * moveAmt + "%";
      $(this).css({top:newTop});
      
      if (i >= 0 && i <= 4) {
        indicatorHtml += '<a href="">' + i + '</a>';
      }
      // 안에 큰 따옴표를 썼으면 밖에는 작은 따옴표를 써야 한다고 함  
      
    });
    
  indicator.html(indicatorHtml);

  //슬라이드를 처음 봤을 때 오리지널 첫번째 이미지 보이도록 하기 (복사본 이미지 말고)
  function setSlidePos(){
    var slideGroupMoveAmt =  -moveAmt * slideCount + "%";
    slideGroup.css({transform:'translateY('+slideGroupMoveAmt+')'});
  }

  setSlidePos();

//슬라이드 이동 함수 만들기

  function goToSlide(i) {
    currentIndex = i;
    slideGroup.stop().animate({top:moveAmt * -i + "%"},duration,function(){
      if(currentIndex == slideCount || currentIndex == -slideCount) 
      {
        slideGroup.css({top:"0%"});
        currentIndex = 0;
      }
    });
    // console.log(currentIndex,slideCount);
    updateNav();
  };

//슬라이드 이동에 따른 인디케이터 활성화 하기
function updateNav() {
    indicator.find("a").eq(currentIndex%slideCount).addClass("active").siblings().removeClass("active");
  };

//인디케이터를 클릭했을 때 슬라이드 움직이게 하기
indicator.find("a").off("click").on("click",function(e){
  e.preventDefault();
  // a 태그의 고유의 링크 연결 기능 막으려고 하는 것 
  var idx = $(this).index();
  goToSlide(idx%slideCount);
});

//다음 버튼을 눌렀을 때 슬라이드가 다음으로 넘어가게 하기
nav.find(".next").off("click").on("click", function(e){
  e.preventDefault();
  goToSlide(currentIndex%slideCount + 1);
  // 이게 계속 더해지는 것이 문제임
});


//이전 버튼을 눌렀을 때 슬라이드가 이전으로 넘어가게 하기
nav.find(".prev").off("click").on("click", function(e){
  e.preventDefault();
  // stopSlide();
  goToSlide(currentIndex%slideCount - 1);
  // setTimeout(autoSlide,4000);
});


//자동 슬라이드 함수를 만들기

function autoSlide() {
    timer = setInterval(function(){goToSlide(currentIndex%slideCount + 1)},interval);
    updateNav();
  };

autoSlide();

function stopSlide() {
  clearInterval(timer);
};

container.mouseenter(function(){
  stopSlide();
});

container.mouseleave(function(){
  autoSlide();
});


//메인 메뉴에 마우스를 올렸을 때 하위메뉴 나타나도록 하기

$("#menu ul a.mainMenu").on("mouseenter focus", function(){
  $("#menu nav").stop().fadeOut();
  $(this).next().stop().fadeIn();
  $("#menu ul a.mainMenu").removeClass("act");
  $(this).addClass("act");
});

$("#menu nav>ul>li>ul").on("mouseenter focus", function(){
  $("#menu nav>ul>li a.category").removeClass("act");
  $(this).prev().addClass("act");
});

$("#menu nav>ul>li>ul").mouseleave(function(){
  $("#menu nav>ul>li a.category").removeClass("act");
});

$("#menu").mouseleave(function(){
  $("#menu nav").stop().fadeOut();
  $("#menu ul a.mainMenu").removeClass("act");
});

$("#menu nav>ul>li>ul li div a").on("mouseenter focus", function(){
  $("#menu nav>ul>li ul li a.subcategory").removeClass("act");
  $(this).parent().prev().addClass("act")
});

$("#menu nav>ul>li>ul li div a").mouseleave(function(){
  $("#menu nav>ul>li>ul li div a").removeClass("act");
  $("#menu nav>ul>li ul li a.subcategory").removeClass("act");
})

$("#menu nav>ul>li ul li a.subcategory").on("mouseenter focus", function(){
  $(this).addClass("act");
  $("#menu nav>ul>li ul li a.subcategory").removeClass("act");
})

//퀵 배너 작동하기
  
$(window).scroll(function()
    {
    const st =  $(window).scrollTop();
    $("#quick_sns").stop().animate({top: 650 + st},800);
    $("#quick_chat").stop().animate({top: 650 + st},800);
    $("#popup_chat").stop().animate({top: st},800);
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

  $("#menu nav.subMenu a").click(function(){
    alert("죄송합니다. 해당 메뉴는 준비중입니다.")
  })

  $("#menu_brand").click(function(){
    alert("죄송합니다. 해당 메뉴는 준비중입니다.")
  })

  $("#menu_community").click(function(){
    alert("죄송합니다. 해당 메뉴는 준비중입니다.")
  })

  $("#menu_therapy").click(function(){
    alert("죄송합니다. 해당 메뉴는 준비중입니다.")
  })

  $("#scent_marketing").click(function(){
    alert("죄송합니다. 해당 메뉴는 준비중입니다.")
  })

  });  // all-end