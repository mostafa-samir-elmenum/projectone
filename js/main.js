$(function(){

    /* start typed element */
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });

    $(".first-i").on("click",function(){
      $(".nav-contain").fadeToggle(2000);
    })

    $(".first-a,.sec-i").hover(function(){
      $(".sec-i").css("color","00f"),
      $(".first-a").css("color","00f");
    },
    function()
    {
      $(".sec-i").css("color","fff"),
      $(".first-a").css("color","fff");

    });

    //second lik
    $(".sec-a,.third-i").hover(function(){
      $(".third-i").css("color","00f"),
      $(".sec-a").css("color","00f");
    },
    function()
    {
      $(".third-i").css("color","fff"),
      $(".sec-a").css("color","fff");
    });

    //third lik


    $(".third-a,.forth-i").hover(function(){
      $(".forth-i").css("color","00f"),
      $(".third-a").css("color","00f");
    },
    function()
    {
      $(".forth-i").css("color","fff"),
      $(".third-a").css("color","fff");
    });


    //forth lik


    $(".forth-a,.fith-i").hover(function(){
      $(".fith-i").css("color","00f"),
      $(".forth-a").css("color","00f");
    },
    function()
    {
      $(".fith-i").css("color","fff"),
      $(".forth-a").css("color","fff");
    });
  })
