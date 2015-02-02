//Pad端显示PC版页面
if(document.body.clientWidth > document.body.clientHeight){
   location.href = getRootPath(document)+"/index.html";
}

var UA = navigator.userAgent.toUpperCase(),
    devicesType = "android";
(UA.indexOf("IPHONE") > -1 || UA.indexOf("IPAD") > -1) && (devicesType = "iPhone");

var data = [{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_1"><div class="content"><img class="bg" src="images/mobile_screen_1.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_2"><div class="content"><img class="bg" src="images/screen_2_bg.png"></div></div>'
},{
    'height' : '100%',
    'width' : '100%',
    'content' : '<div class="screen screen_3"><div class="content"><img class="bg" src="images/screen_3_bg.png"></div></div>'
}];

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
        var screen4Dode = document.querySelector(".screen_4");
        if(num === 3 && screen4Dode && document.body.clientHeight < screen4Dode.clientHeight){
            screen4Dode.style.position = "absolute";
            screen4Dode.style.bottom = "0px";
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



