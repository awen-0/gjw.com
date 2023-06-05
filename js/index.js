 window.onload = function(){
    $(".head_right_you").click(function(){
        alert("暂时不支持中英切换");
    });
    $(".nav_qh").click(function(){
        alert("暂时不支持中英切换");
    });

    $(".works dd a").click(function(){
        alert("作者暂时没有更新更多");
    });


    $(".qq").click(function(){
        alert("QQ：3285317587"); 
     });
     $(".wx").click(function(){
         alert("微信：gjw13327236936"); 
      });
      $(".hm").click(function(){
         alert("电话：13327236936"); 
      });

    $(document).ready(function(){
        $(this).addClass("current").siblings().removeClass("current");
        index=$(this).index();
        $(".img li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(3000);
    });
     /*设置每一秒钟自动轮播：
     1.获取当前位置序号：自加操作；当超过图片最大序号时序号设置为0
     2.设置下侧顺序按钮及轮播图显示
     */
    var time=setInterval(move,3000);
    function move() {
        index++;
        if (index==3){
            index=0
        }
        $(".num li").eq(index).addClass("current").siblings().removeClass("current");
        $(".img li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(3000);
    };


    $(".xian1").click(function() {
        var top = $(".banner").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    })

    $(".xian2").click(function() {
        var top = $(".skill").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    } )

    $(".xian3").click(function() {
        var top = $(".works").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    } )

    $(".xian4").click(function() {
        var top = $(".about").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    } )

    $(".xian5").click(function() {
        var top = $(".bottom").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    } )

    $(".fh").click(function() {
        var top = $(".banner").offset();
        // console.log(top.top);
        var scr = $("body,html").scrollTop();
        // console.log(scr);
        // 获取高度 以700毫秒秒的速度实现效果
        $("body,html").animate({
            scrollTop: top.top
        }, "slow")
    } )


    window.onscroll = function() {
        var top = document.documentElement.scrollTop;
        console.log(top);
        var banner = $(".banner").offset().top;
        var skill = $(".skill").offset().top;
        var works = $(".works").offset().top;
        var about = $(".about").offset().top;
        var bottom = $(".bottom").offset().top;
    
    
        if (top >= skill) {
            $("#nav ul .xian1 .xian").css({
                width:"0%",
            })
            $("#nav ul .xian2 .xian").css({
                width:"100%",
            })
           
        }else{
            $("#nav ul .xian2 .xian").css({
                width:"0%",
            })
            $("#nav ul .xian1 .xian").css({
                width:"100%",
            })
        }
    
        if (top >= works) {
            $("#nav ul .xian2 .xian").css({
                width:"0%",
            })
            $("#nav ul .xian3 .xian").css({
                width:"100%",
            })
        }else{
            // $(".nav1 ul .xian2 .xian").css({
            //     width:"60%",
            // })
            $("#nav ul .xian3 .xian").css({
                width:"0%",
            })
        }
        if (top >= about) {
            $("#nav ul .xian3 .xian").css({
                width:"0%",
            })
            $("#nav ul .xian4 .xian").css({
                width:"100%",
            })
        }else{
            // $(".nav1 ul .xian3 .xian").css({
            //     width:"60%",
            // })
            $("#nav ul .xian4 .xian").css({
                width:"0%",
            })
        } 
        if (top >= bottom) {
            $("#nav ul .xian4 .xian").css({
                width:"0%",
            })
            $("#nav ul .xian5 .xian").css({
                width:"100%",
            })
        }else{
            // $(".nav1 ul .xian3 .xian").css({
            //     width:"60%",
            // })
            $("#nav ul .xian5 .xian").css({
                width:"0%",
            })
        }




        // 返回顶部
        var a=true; 
        if (top >= 3700) {
            $(".fh").css({
                right:"1%",
            })
            a=false;
        }else{
            $(".fh").css({
                right:"-10%",
            })
            a=true;
        }
    


        // if (top>=700) {
        //     $(".skill_jl_1:eq(0)").css({
        //         top:"0",
        //         opacity:"1",
        //     })
        // }
        // if (top>=700) {
        //     $(".skill_jl_1:eq(1)").css({
        //         top:"0",
        //         opacity:"1",
        //     })
        // }
        // if (top>=700) {
        //     $(".skill_jl_1:eq(2)").css({
        //         top:"0",
        //         opacity:"1",
        //     })
        // }
        // if (top>=700) {
        //     $(".skill_jl_1:eq(3)").css({
        //         top:"0",
        //         opacity:"1",
        //     })
        // }

}
}