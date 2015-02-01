$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        sectionsColor: ['rgb(0,204,203)', 'rgb(111,197,230)', 'rgb(255,204,0)'],
        slidesNavigation: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
    // 图片加载成功后 居中
    $("img").each(function(index,node){
        node.onload = function(e){
            e= e || window.event;
            $(e.target || e.srcElement).css({
                "margin-left": - $(node).width()/2 + "px"
            })
        }
    })

//设置图片剧中  无法通过css设置的原因是  css设置了position为absolute bottom为0
    function resizeSlideBg (){
        $("img").each(function(index,node){
             if(document.body.clientHeight < 350){
                $(node).css({
                    "height":"320px",
                    "width":"auto"
                })
            }else if(document.body.clientHeight < 700){
                $(node).css({
                    "height":"640px",
                    "width":"auto"
                })
            }
             else if(document.body.clientHeight < 1300){
                 $(node).css({
                     "height":"1280px",
                     "width":"auto"
                 })
             }else{
                $(node).css({
                    "height":"100%",
                    "width":"auto"
                })
            }

            $(node).css({
                "margin-left": - $(node).width()/2 + "px"
            })
        })
    }
    resizeSlideBg()
    document.body.onresize = resizeSlideBg;
});
