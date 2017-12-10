/**
 * Created by 123 on 2017/8/21.
 */
$(function () {
    $(".body").on("touchmove",function(){
        var pp = $(window).scrollTop();
        console.log(pp)
        if(pp > 50){
            $(".sousuo").css({"background":"rgba(255,0,0,0.15)"})
        }else if(pp < 100){
            $(".sousuo").css({"background":"rgba(255,0,0,0)"})
        }
        if(pp > 100){
            $(".sousuo").css({"background":"rgba(255,0,0,0.3)"})
        }else if(pp < 150){
            $(".sousuo").css({"background":"rgba(255,0,0,0.15)"})
        }
        if(pp > 150){
            $(".sousuo").css({"background":"rgba(255,0,0,0.45)"})
        }else if(pp < 200){
            $(".sousuo").css({"background":"rgba(255,0,0,0.3)"})
        }
        if(pp > 200){
            $(".sousuo").css({"background":"rgba(255,0,0,0.6)"})
        }else if(pp < 250){
            $(".sousuo").css({"background":"rgba(255,0,0,0.45)"})
        }

        if(pp > 1200){
            $(".foot li").eq(0).find("img").hide()
            $(".foot li").eq(0).find("img").eq(1).show()
        }else if(pp < 1200){
            $(".foot li").eq(0).find("img").hide()
            $(".foot li").eq(0).find("img").eq(0).show()
        }
    })
    $(".foot li").eq(0).click(function(){
        var pp = $(window).scrollTop();
        if(pp > 1200){
            $("html,body").animate({"scrollTop":"0"})
            $(".foot li").eq(0).find("img").hide()
            $(".foot li").eq(0).find("img").eq(0).show()
        }else if(pp < 1200){
            $("html,body").animate({"scrollTop":"2090"})
            $(".foot li").eq(0).find("img").hide()
            $(".foot li").eq(0).find("img").eq(1).show()
        }
    })

//顶部轮播
    var mySwiper = new Swiper ('.swiper-container', {
        //竖直轮播
        //direction: 'vertical',
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })

//竖直小轮播
    var mySwiper = new Swiper ('.kuaibao-container', {
        //竖直轮播
        direction: 'vertical',
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
    })

//小轮播
    var swiper = new Swiper('.miaosha-container', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });

//页内轮播
    var mySwiper = new Swiper ('#yenei-container1', {
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })
    var mySwiper = new Swiper ('#yenei-container2', {
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })
    var mySwiper = new Swiper ('#yenei-container3', {
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })


//ajax导入
    var star = 0;
    var num = 4;
    var b = 1;
    function get_data(star,num){
        $.get('listData.json',function(data){
            var cc = eval(data);
            var arr = cc["list"];
            var l = arr.length;
            if((star+num) >= l){
                num = l - star;
                b = 0;
            }
            for(var i = star;i<(star+num);i++){
                var oli =  $("<li><img src='"+arr[i].coverImg+"'>" +
                    "<p class='p1'>"+arr[i].title+"</p>" +
                    "<p class='p2'>"+arr[i].creatByFullName+"</p>"+
                    "<div class='tuijian_bottom'>"+
                    "<span class='s1'>"+arr[i].describe+"</span>"+
                    "<span class='s2'>"+arr[i].like+"</span>"+
                    "</div>"+
                    "</li>");
                $(oli).appendTo($("#aj"))
            }
        })
        return star+num;
    }
    star = get_data(star,num);
    $(".jiazai").click(function(){
        if(b == 0){
            $(".jiazai").html("加载完毕")
        }else{
            star = get_data(star,num);
        }
    })
})
