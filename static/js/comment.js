//手机端按钮
$(function(){
    var forEach=function(t,o,r){
        if("[object Object]"===Object.prototype.toString.call(t))
            for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
                else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)
    };
    var phoneBtns = document.querySelectorAll(".phone-btn");
    if (phoneBtns.length > 0) {
        forEach(phoneBtns, function(phonebtn) {
            phonebtn.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    $('.phone-btn').click(function () {
        $('.nav-pc .menu').slideToggle();
    });
    $('.menu > li i').click(function () {
        if($(this).hasClass("rotate")) {
            $(this).removeClass("rotate").addClass("active");
        }
            else{
                $(this).removeClass("active").addClass("rotate");
            }
        $(this).next(".sub-menu").slideToggle();
        $(this).parent().siblings(".sub-menu").css("display","none");
    });
    //手机端导航条结束
    //固定导航条开始
      var headTop = function(option) {
        var options = {};
        options.showHeight = option.showHeight;
        $(window).scroll(function() {
            var scrolltop = $(this).scrollTop();
            if(scrolltop >= options.showHeight) {
                $("header").addClass('hdTop');
            } else {
                $("header").removeClass('hdTop');
            }
        });

    };
    headTop({
        showHeight: $(".banner").height() //设置滚动高度时显示
    });
});
