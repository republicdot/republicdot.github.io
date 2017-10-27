$(document).ready(function(){
    $(".top_container").addClass("active");
    $(".title_box").addClass("active");
    $(".circle").addClass("active");

})

$(".circle").click(function(){
    var condition = $("body").css("background-color");
    if ( condition == "rgb(255, 255, 255)" ){
        $(this).css({"transform" : "scale(40)"});
        $(".top_container").removeClass("active");
        $(".title_box").removeClass("active");
        $("body").css({
            "color" : "#fff"
        })
        setTimeout(function(){
            $(".circle").css({"transform" : "scale(1)"});
            $("body").css({
                "background-color": "#111"
            });
            $(".circle").css({"background-color" : "#fff"});
            $(".logo").css({"background-image" : "url(./images/logo_w.svg)"});
            $(".title_box .vision").css({"background-image" : "url(./images/vision_w.svg)"});
            $(".title_box .team").css({"background-image" : "url(./images/team_w.svg)"});
            $(".title_box .service").css({"background-image" : "url(./images/service_w.svg)"});
            $(".title_box .history").css({"background-image" : "url(./images/history_w.svg)"});
            $(".title_box .contact").css({"background-image" : "url(./images/contact_w.svg)"});
            $(".top_container .nav li").addClass("white");
            $(".top_container").addClass("active");
            $(".title_box").addClass("active");
            $(".side_nav").css({"background-color": "rgba(0,0,0,0.4)"});
            $(".progress_bar").addClass("white");
        }, 800);
    } else if ( condition == "rgb(17, 17, 17)") {
        $(this).css({"transform" : "scale(40)"});
        $(".top_container").removeClass("active");
        $(".title_box").removeClass("active");
        $("body").css({
            "color" : "#000"
        })
        setTimeout(function(){
            $(".circle").css({"transform" : "scale(1)"});
            $("body").css({
                "background-color": "#fff"
            });
            $(".circle").css({"background-color" : "#000"});
            $(".logo").css({"background-image" : "url(./images/logo.svg)"});
            $(".title_box .vision").css({"background-image" : "url(./images/vision.svg)"});
            $(".title_box .team").css({"background-image" : "url(./images/team.svg)"});
            $(".title_box .service").css({"background-image" : "url(./images/service.svg)"});
            $(".title_box .ir").css({"background-image" : "url(./images/history.svg)"});
            $(".title_box .contact").css({"background-image" : "url(./images/contact.svg)"});
            $(".top_container .nav li").removeClass("white");
            $(".side_nav").css({"background-color": "rgba(255,255,255,0.4)"});
            $(".progress_bar").removeClass("white");
            $(".top_container").addClass("active");
            $(".title_box").addClass("active");
        }, 800);
    }
})

var smoothScroll = function(seq) {
    var offset = $(seq).offset().top - 100;
    $('html, body').animate({scrollTop : offset},800, "swing");
}

$(".btn_vision").click(function(){
    smoothScroll(".vision");
})
$(".btn_team").click(function(){
    smoothScroll(".team");
})
$(".btn_service").click(function(){
    smoothScroll(".service");
})
$(".btn_history").click(function(){
    smoothScroll(".history");
})
$(".btn_contact").click(function(){
    smoothScroll(".contact");
})


$(window).scroll(function(event){
    navToggle();
    progressBar();
    containerActive(".vision", ".vision .wrap");
    containerActive(".team", ".team .wrap" );
    containerActive(".service", ".service .wrap");
    containerActive(".history", ".history .wrap");
    containerActive(".contact", ".contact .wrap");
})

var navToggle = function() {
    if ($(window).scrollTop() > 500) {
        $(".side_nav").addClass("active");
        $(".btn_top").addClass("active");
    } else {
        $(".side_nav").removeClass("active");
        $(".btn_top").removeClass("active");
    }
}

var progressBar = function() {
    var docHeight = $(document).height();
    var innerHeight = window.innerHeight;
    var nowHeight = $(document).scrollTop() + innerHeight;
    var barWidth = nowHeight / docHeight * 100 + "vw"
    $(".progress_bar").css({"width": barWidth});    
}

var containerActive = function(con, wrap) {
    var innerHeight = window.innerHeight / 2;
    var nowHeight = $(document).scrollTop() + innerHeight;
    var containerOffset = $(con).offset().top;
    if (containerOffset < nowHeight) {
        $(wrap).addClass("active");
    } else {
        $(wrap).removeClass("active");
    }
}

$(".btn_top").click(function(){
    $('html, body').animate({scrollTop : 0},800, "swing");
})

$(".btn_contact_link").click(function(){
    copyToClipboard(this);
    $("#msg_copy").addClass("active");
    setTimeout(function(){
        $("#msg_copy").removeClass("active");
    },800)
})

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }