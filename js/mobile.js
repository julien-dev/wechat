var data = [{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_1"><div class="content"><img class="bg" src="images/screen_1.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_2"><div class="content"><img class="bg" src="images/screen_2.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_3"><div class="content"><img class="bg" src="images/screen_3.png"></div></div>'
}];
var jBody = $("body") ;
var curNum = 0 ;
var iSlider = new iSlider({
    dom : document.getElementById('container'),
    data : data,
    type:"dom",
    duration: 2000,
    isVertical: true,
    isLooping: false,
    isDebug: false,
    isAutoplay: false,
    onslidechange:function(num,e){
        curNum = num;
    },
    onslidestart:function(e){
        jBody.removeClass("can-push");
        jBody.addClass("can-not-push");
    },
    onslideend:function(e){
        if(curNum===2){
            jBody.removeClass("can-push");
            jBody.addClass("can-not-push");
        }
        else{
            jBody.removeClass("can-not-push");
            jBody.addClass("can-push");
        }

    }
});

function getRootPath(doc){
    var curWwwPath=doc.location.href;
    var pathName=doc.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    var localhostPath=curWwwPath.substring(0,pos);
    var projectName=pathName.substring(0,pathName.substr(1).lastIndexOf('/')+1);
    return(localhostPath+projectName+"/");
}
$(document).ready(function() {

});





