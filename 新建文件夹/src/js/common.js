$(function () {
    bannerListFn( // 横幅图片左右移
        $(".banner"),
        $(".img-btn-list"),
        $(".left-btn"),
        $(".right-btn"),
        3000,
        true
    );

});

$(document).ready(function(){



$(".side ul li").hover(function(){

$(this).find(".sidebox").stop().animate({"right":"0rem"},200)

},function(){

$(this).find(".sidebox").stop().animate({"right":"-1.3rem"},200)
});



});



//回到顶部

function goTop(){

$('html,body').animate({'scrollTop':0},600);

}